"use client";

/*
  Team Builder — Haikyuu!!
  ---------------------------------------------------------
  Key points:
  - CW rotation: players + roles rotate together. Libero does NOT rotate.
  - Court spacing: tiny horizontal gap and larger vertical gap, plus a width-limited wrapper so columns stay really close.
  - Details panel: EXACT same size as cards (never overflows); opens ONLY if slot has a player.
  - Bonds:
      * Read from player.bonds (your JSON: { to?, participants?, name?, effect? }).
      * Active bonds chips show only when there is at least one on court.
      * "Recommended by bond" block appears above Candidates for ANY role.
      * On-court players in any active bond display a "Bond" badge.
  - Backgrounds: player cards use their own image; court uses the remote image URL you provided.
*/

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Role, Player } from "@/types";
import {
  useTeamStore,
  type SlotKey,
  type OnCourt,
  ROTATION_RING,
} from "@/stores/teamStore";
import { players } from "@/data/players";

/* =========================
   Background image for the COURT (your link)
   ========================= */
const COURT_BG_URL =
  "https://imgs.search.brave.com/i3dCNAbpIYF2iwCG4oxv8Rk767Lj9sam1d702JspqW4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbTEu/YW1pbm9hcHBzLmNv/bS82NTM4L2VjNWIx/MjI0OThkMmI4ZThj/NTU1ZWYwOTJmNTRk/Njg0MGViOGM3MjZf/aHEuanBn";

/* =========================
   Base role per slot (pre-rotation)
   Layout (2x4 grid):
   Row 1:  E | 1 | 6 | 5
   Row 2:  L | 2 | 3 | 4
   CW ring used by the store: ["1","6","5","4","3","2"]
   ========================= */
const BASE_ROLE_BY_SLOT: Record<OnCourt, Role | "Any"> = {
  "1": "S",
  "6": "MB",
  "5": "WS",
  "4": "OP",
  "3": "MB",
  "2": "WS",
  L: "LI",
};

// Return CURRENT role at "slot" after N CW rotations
function roleForSlotNow(slot: OnCourt, rotation: number): Role | "Any" {
  if (slot === "L") return "LI"; // Libero always fixed
  const idx = ROTATION_RING.indexOf(slot);
  const rolesRing = ROTATION_RING.map((s) => BASE_ROLE_BY_SLOT[s]);
  const role =
    rolesRing[(idx - rotation + ROTATION_RING.length) % ROTATION_RING.length];
  return role as Role | "Any";
}

/* =========================
   Court grid base cells (2x4)
   ========================= */
type Cell = { row: 1 | 2; col: 1 | 2 | 3 | 4 };
const BASE_POS: Record<"1" | "6" | "5" | "L" | "2" | "3" | "4", Cell> = {
  "1": { row: 1, col: 2 },
  "6": { row: 1, col: 3 },
  "5": { row: 1, col: 4 },
  L: { row: 2, col: 1 },
  "2": { row: 2, col: 2 },
  "3": { row: 2, col: 3 },
  "4": { row: 2, col: 4 },
};

// Chains for the slide-left effect when showing details
const TOP_CHAIN: OnCourt[] = ["1", "6", "5"];
const BOT_CHAIN: OnCourt[] = ["L", "2", "3", "4"];

/* =========================
   Bonds mapping helpers
   Your JSON shape per bond item:
     { to?: string, participants?: string[], name?: string, effect?: string }
   We normalize it to an internal shape:
     { with: string, name: string, effect?: string }
   ========================= */
type Bond = { with: string; name: string; effect?: string };
type BondHQ = {
  to?: string;
  participants?: string[];
  name?: string;
  effect?: string;
};

// Fallback (only if a player has no bonds in JSON)
const LINKS_FALLBACK: Record<string, Bond[]> = {
  "atsumu-miya-ur": [
    { with: "osamu-miya-ur", name: "Miya Twins", effect: "+Chemistry S↔OP" },
  ],
  "osamu-miya-ur": [
    { with: "atsumu-miya-ur", name: "Miya Twins", effect: "+Chemistry S↔OP" },
  ],
};

// Normalize player's bonds from your JSON into {with,name,effect}
function bondsOf(p?: Player): Bond[] {
  if (!p) return [];
  const raw = (p as any).bonds as BondHQ[] | undefined;
  if (!raw || raw.length === 0) return LINKS_FALLBACK[p.id] ?? [];
  const out: Bond[] = [];
  for (const b of raw) {
    // Prefer "to", else infer from "participants" (pick the other id)
    let withId = b?.to;
    if (
      !withId &&
      Array.isArray(b?.participants) &&
      b!.participants!.length > 0
    ) {
      withId = b!.participants!.find((id) => id !== p.id);
    }
    if (!withId) continue; // skip malformed entries
    out.push({ with: withId, name: b?.name ?? "Bond", effect: b?.effect });
  }
  return out;
}

/* =========================
   Small utils
   ========================= */
const initials = (name: string) =>
  !name || name.includes("empty")
    ? "—"
    : name
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((s) => s[0]?.toUpperCase())
        .join("");

function normalizeBgUrl(raw?: string): string | null {
  if (!raw) return null;
  let u = raw.trim().replace(/^\/public/, ""); // allow "/public/..." paths
  if (!/^https?:\/\//i.test(u) && !u.startsWith("/")) u = "/" + u; // ensure absolute local path
  return u.split(" ").join("%20"); // basic space escaping
}
function buildBgImageFrom(player?: Player): string {
  const u = normalizeBgUrl(player?.image);
  return u
    ? `url("${u}")`
    : "linear-gradient(180deg, rgba(0,0,0,0.06), rgba(0,0,0,0.12))";
}
const playerById = (id?: string) => players.find((p) => p.id === id);

/* =========================
   Shared card size (Details uses the same)
   ========================= */
const CARD_W = "clamp(56px, 14.5vw, 96px)";
const CARD_H = "clamp(84px, 23vw, 144px)";

/* =========================
   Player Card (background-based)
   ========================= */
function PlayerCard({
  name,
  roleText,
  active,
  onSelect,
  onClear,
  player,
  showBondBadge = false,
}: {
  name: string;
  roleText: string;
  active: boolean;
  onSelect: () => void;
  onClear?: () => void;
  player?: Player;
  showBondBadge?: boolean;
}) {
  const bgImage = buildBgImageFrom(player);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onSelect();
      }}
      className={[
        "relative rounded-2xl border shadow-sm backdrop-blur transition",
        active ? "ring-2 ring-black bg-white/80" : "bg-white/70",
        "flex flex-col justify-end overflow-hidden hover:bg-white/60",
      ].join(" ")}
      style={{
        width: CARD_W,
        height: CARD_H,
        backgroundImage: bgImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Bond badge (top-left) if this player participates in an active bond */}
      {showBondBadge && (
        <div className="absolute left-1 top-1 z-20 rounded-full border bg-emerald-600 text-white text-[10px] px-1.5 py-0.5 shadow">
          Bond
        </div>
      )}

      {/* Readability overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent pointer-events-none" />

      {/* Labels */}
      <div className="relative z-10 p-1.5 text-white">
        <div className="text-[10px] md:text-[11px] uppercase tracking-wide opacity-90">
          {roleText}
        </div>
        <div className="text-[11px] md:text-sm font-semibold leading-tight line-clamp-2">
          {name}
        </div>
      </div>

      {/* Remove (separate control) */}
      {onClear && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClear();
          }}
          className="absolute bottom-1 right-1 z-20 rounded-md border bg-white/90 text-[10px] md:text-xs px-1.5 py-0.5 hover:bg-white"
          title="Remove"
        >
          Remove
        </button>
      )}
    </div>
  );
}

/* =========================
   Details panel (EXACT same size as card; never overflows)
   ========================= */
function DetailsPanel({
  slot,
  player,
  linkLines,
}: {
  slot: OnCourt;
  player?: Player;
  linkLines: { text: string; onCourt: boolean; effect?: string }[];
}) {
  const label = (
    {
      "1": "Pos 1",
      "2": "Pos 2",
      "3": "Pos 3",
      "4": "Pos 4",
      "5": "Pos 5",
      "6": "Pos 6",
      L: "Libero",
    } as const
  )[slot];

  return (
    <div
      className="flex h-full w-full flex-col rounded-2xl bg-gradient-to-br from-amber-50 to-white border border-amber-200 ring-1 ring-amber-300/30 shadow-lg"
      style={{ width: CARD_W, height: CARD_H }}
    >
      <div className="flex-1 overflow-y-auto overscroll-contain p-2.5 md:p-3 space-y-2">
        {/* Header */}
        <div>
          <div className="text-[10px] md:text-xs uppercase tracking-wide text-amber-700">
            {label} · Details
          </div>
          <div className="text-sm md:text-base font-semibold leading-tight">
            {player?.name ?? "— empty —"}
          </div>
        </div>

        {/* Body */}
        {player ? (
          <>
            <ul className="text-[11px] md:text-xs text-amber-800/90 space-y-1.5">
              <li>
                <span className="font-medium">Team:</span> {player.team ?? "—"}
              </li>
              <li>
                <span className="font-medium">Roles:</span>{" "}
                {player.roles?.join(", ") ?? "—"}
              </li>
            </ul>

            {/* Bonds */}
            {linkLines.length > 0 && (
              <div className="mt-1">
                <div className="text-[10px] font-semibold text-amber-700 mb-1">
                  Bonds
                </div>
                <ul className="text-[11px] md:text-xs text-amber-800/90 space-y-1">
                  {linkLines.map((l, i) => (
                    <li key={i}>
                      {l.text}
                      {l.onCourt && (
                        <span className="ml-1 text-emerald-700">
                          · on court
                        </span>
                      )}
                      {l.effect && (
                        <div className="text-[10px] text-emerald-700/90">
                          ↳ {l.effect}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        ) : (
          <p className="text-[11px] md:text-xs text-amber-800/80">
            Assign a player to see details.
          </p>
        )}
      </div>

      <div className="px-2.5 md:px-3 py-1.5 text-[10px] text-amber-700/70 border-t bg-amber-50/60 rounded-b-2xl">
        Tap outside to close.
      </div>
    </div>
  );
}

/* =========================
   Page
   ========================= */
export default function Page() {
  const {
    selected,
    selectSlot,
    assignments,
    clearSlot,
    assignSelected,
    reset,
    isAssigned,
    rotate,
    rotation,
  } = useTeamStore();

  // Which on-court slot is showing details
  const [viewing, setViewing] = useState<OnCourt | null>(null);
  // Search query for candidates + sidebar
  const [q, setQ] = useState("");

  // Court background (remote image you provided)
  const bgStyle: React.CSSProperties = {
    backgroundImage: `url("${COURT_BG_URL}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    /* optional: add a subtle white veil to increase readability
       filter: "brightness(0.97)" */
  };

  // Width limiter so columns are really close horizontally
  const gridMaxWidthClass =
    "max-w-[300px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[460px] xl:max-w-[500px]";

  // Tall court area so nothing escapes
  const COURT_HEIGHT = 460; // px

  // Positions + details cell (for the slide-left reveal)
  const { pos, detailCell } = useMemo(() => {
    const pos: Record<keyof typeof BASE_POS, Cell> = { ...BASE_POS };
    let detail: Cell | undefined;

    if (viewing) {
      // Top row slide-left
      const topIdx = TOP_CHAIN.indexOf(viewing);
      if (topIdx >= 0) {
        for (let i = topIdx; i >= 1; i--) {
          const cur = TOP_CHAIN[i] as keyof typeof BASE_POS;
          const prev = TOP_CHAIN[i - 1] as keyof typeof BASE_POS;
          pos[cur] = BASE_POS[prev];
        }
        pos["1"] = { row: 1, col: 1 };
        detail = BASE_POS[viewing];
      }
      // Bottom row slide-left
      const botIdx = BOT_CHAIN.indexOf(viewing);
      if (botIdx >= 0) {
        for (let i = botIdx; i >= 1; i--) {
          const cur = BOT_CHAIN[i] as keyof typeof BASE_POS;
          const prev = BOT_CHAIN[i - 1] as keyof typeof BASE_POS;
          pos[cur] = BASE_POS[prev];
        }
        pos["L"] = { row: 1, col: 1 };
        detail = BASE_POS[viewing];
      }
    }
    return { pos, detailCell: detail };
  }, [viewing]);

  // On-court ids + quick map (id -> slot)
  const onCourtIds = useMemo(
    () =>
      (["1", "6", "5", "L", "2", "3", "4"] as const)
        .map((k) => assignments[k])
        .filter(Boolean) as string[],
    [assignments]
  );
  const onCourtMap = useMemo(() => {
    const m: Record<string, OnCourt> = {} as any;
    (["1", "6", "5", "L", "2", "3", "4"] as const).forEach((slot) => {
      const id = assignments[slot];
      if (id) m[id] = slot as OnCourt;
    });
    return m;
  }, [assignments]);

  // Helpers
  const getPlayer = (slot: SlotKey): Player | undefined => {
    const id = assignments[slot];
    return id ? playerById(id) : undefined;
  };
  const roleTextFor = (slot: OnCourt): string => {
    if (slot === "L") return "Libero";
    const role = roleForSlotNow(slot, rotation);
    const posText = (
      {
        "1": "Pos 1",
        "2": "Pos 2",
        "3": "Pos 3",
        "4": "Pos 4",
        "5": "Pos 5",
        "6": "Pos 6",
      } as const
    )[slot];
    return `${posText} (${role})`;
  };

  /* ===== Candidates for the selected slot (by CURRENT role) ===== */
  const candidates = useMemo(() => {
    if (!selected) return [];
    if (["B1", "B2", "B3", "B4", "B5", "B6"].includes(selected)) return [];
    const roleNow = roleForSlotNow(selected as OnCourt, rotation);
    const ql = q.trim().toLowerCase();
    const base =
      roleNow === "Any"
        ? players
        : players.filter((p) => p.roles.includes(roleNow as Role));
    return base
      .filter((p) => !isAssigned(p.id) || assignments[selected] === p.id)
      .filter((p) => (ql ? p.name.toLowerCase().includes(ql) : true));
  }, [selected, q, assignments, isAssigned, rotation]);

  /* ===== Recommended-by-bond FIRST (any role) ===== */
  const { linkRecommended, otherCandidates } = useMemo(() => {
    if (!selected)
      return {
        linkRecommended: [] as Player[],
        otherCandidates: [] as Player[],
      };
    const rec: Player[] = [];
    const recSet = new Set<string>();
    for (const p of candidates) {
      const bonds = bondsOf(p);
      const hit = bonds.some((b) => onCourtIds.includes(b.with));
      if (hit) {
        rec.push(p);
        recSet.add(p.id);
      }
    }
    const rest = candidates.filter((p) => !recSet.has(p.id));
    return { linkRecommended: rec, otherCandidates: rest };
  }, [selected, candidates, onCourtIds]);

  /* ===== Active bonds (pairs currently on court) ===== */
  const activeBonds = useMemo(() => {
    const out: {
      key: string;
      name: string;
      a: Player;
      b: Player;
      effect?: string;
    }[] = [];
    const seen = new Set<string>();
    onCourtIds.forEach((idA) => {
      const pA = playerById(idA);
      if (!pA) return;
      for (const b of bondsOf(pA)) {
        if (onCourtIds.includes(b.with)) {
          const pB = playerById(b.with);
          if (!pB) continue;
          const key = [pA.id, pB.id].sort().join("|") + "|" + b.name;
          if (seen.has(key)) continue;
          seen.add(key);
          out.push({ key, name: b.name, a: pA, b: pB, effect: b.effect });
        }
      }
    });
    return out;
  }, [onCourtIds]);

  // Lines for the Details panel (for the slot being viewed)
  const linkLinesForViewing = useMemo(() => {
    if (!viewing) return [];
    const p = getPlayer(viewing);
    const bonds = bondsOf(p);
    return bonds.map((b) => {
      const mate = playerById(b.with);
      const mateSlot = mate ? onCourtMap[mate.id] : undefined;
      const posLabel = mateSlot
        ? (
            {
              "1": "Pos 1",
              "2": "Pos 2",
              "3": "Pos 3",
              "4": "Pos 4",
              "5": "Pos 5",
              "6": "Pos 6",
              L: "Libero",
            } as const
          )[mateSlot]
        : undefined;
      const text = `${b.name} · with ${mate?.name ?? b.with}${
        posLabel ? ` (${posLabel})` : ""
      }`;
      const onCourt = !!mateSlot;
      return { text, onCourt, effect: b.effect };
    });
  }, [viewing, onCourtMap, assignments]);

  // Cards that should show the "Bond" badge
  const bondBadgeIds = useMemo(() => {
    const s = new Set<string>();
    activeBonds.forEach(({ a, b }) => {
      s.add(a.id);
      s.add(b.id);
    });
    return s;
  }, [activeBonds]);

  // Sidebar list "All players"
  const allPlayersFiltered = useMemo(() => {
    const ql = q.trim().toLowerCase();
    return ql
      ? players.filter((p) => p.name.toLowerCase().includes(ql))
      : players;
  }, [q]);

  // Allow details only when slot has a player
  const canOpenDetails = (slot: OnCourt) => !!getPlayer(slot);

  return (
    <main className="mx-auto max-w-7xl p-3 sm:p-4 md:p-6">
      {/* ===== HEADER ===== */}
      <header className="sticky top-0 z-50 mb-3 sm:mb-4 flex flex-wrap items-center gap-2 justify-between bg-white/85 backdrop-blur px-2 py-2 rounded-xl border">
        <div>
          <h1 className="text-base sm:text-lg md:text-2xl font-semibold">
            Team Builder — Haikyuu!!
          </h1>
        </div>
        <div className="flex gap-2">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search player…"
            className="w-28 sm:w-40 md:w-64 rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
          />
          <button
            onClick={rotate}
            className="rounded-xl border px-3 py-2 text-sm hover:bg-gray-50"
            title="Rotate (CW) without Libero"
          >
            Rotate
          </button>
          <button
            onClick={() => {
              setViewing(null);
              reset();
            }}
            className="rounded-xl border px-3 py-2 text-sm hover:bg-gray-50"
            title="Reset team"
          >
            Reset
          </button>
        </div>
      </header>

      {/* ===== COURT + BENCH ===== */}
      <div className="grid gap-2 md:gap-2.5 md:grid-cols-[1fr_256px]">
        {/* ===== COURT ===== */}
        <section className="rounded-2xl border overflow-hidden">
          {/* Court background box */}
          <div
            className="relative"
            style={{ ...bgStyle, height: COURT_HEIGHT }}
          >
            {/* Centered wrapper that limits width (tight columns) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className={[
                  "grid grid-rows-2 grid-cols-4 place-items-center",
                  // tight horizontal / larger vertical gaps
                  "gap-x-0.5 sm:gap-x-1 md:gap-x-1",
                  "gap-y-3 sm:gap-y-4 md:gap-y-5",
                  // small padding
                  "p-1 sm:p-1.5 md:p-2",
                  // width limiter
                  "w-full",
                  gridMaxWidthClass,
                  "mx-auto",
                  // position context for badges/details cell
                  "relative",
                ].join(" ")}
                onClick={(e) => {
                  if (e.currentTarget === e.target) setViewing(null);
                }}
              >
                {/* "Serve" badge over Pos 1 */}
                <div
                  className="pointer-events-none self-start justify-self-center -mt-0.5"
                  style={{ gridRow: 1, gridColumn: 2 }}
                >
                  <span className="rounded-full border bg-white/90 text-[10px] px-1.5 py-0.5 shadow-sm">
                    Serve
                  </span>
                </div>

                {/* On-court cards */}
                {(["1", "6", "5", "L", "2", "3", "4"] as OnCourt[]).map((k) => {
                  const cell = pos[k as keyof typeof pos];
                  const active = selected === k;
                  const p = getPlayer(k);
                  const canOpen = !!p;
                  const name = p?.name ?? "— empty —";
                  const roleText = roleTextFor(k);
                  const showBondBadge = p ? bondBadgeIds.has(p.id) : false;

                  return (
                    <motion.div
                      key={k}
                      layout
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 40,
                      }}
                      style={{ gridRow: cell.row, gridColumn: cell.col }}
                      className="relative"
                    >
                      {/* Details toggle (disabled if empty) */}
                      <button
                        type="button"
                        aria-label="Open details"
                        title={
                          canOpen ? "Open details" : "Assign a player first"
                        }
                        disabled={!canOpen}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (!canOpen) return;
                          setViewing((v) => (v === k ? null : k));
                        }}
                        className={[
                          "absolute right-1 top-1 z-20 rounded-full border px-1.5 py-0.5 text-[10px]",
                          canOpen
                            ? "bg-white/90 hover:bg-white"
                            : "bg-white/60 opacity-50 cursor-not-allowed",
                        ].join(" ")}
                      >
                        🔍
                      </button>

                      {/* Player card */}
                      <PlayerCard
                        name={name}
                        roleText={roleText}
                        active={!!active}
                        player={p}
                        showBondBadge={showBondBadge}
                        onSelect={() => selectSlot(k)}
                        onClear={
                          assignments[k]
                            ? () => {
                                if (viewing === k) setViewing(null);
                                clearSlot(k);
                              }
                            : undefined
                        }
                      />
                    </motion.div>
                  );
                })}

                {/* Details panel (EXACT same size as a card; never overflows) */}
                <AnimatePresence>
                  {viewing && detailCell && getPlayer(viewing) && (
                    <motion.div
                      key="details"
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 40,
                      }}
                      className="overflow-hidden z-30"
                      style={{
                        width: CARD_W,
                        height: CARD_H,
                        gridRow: detailCell.row,
                        gridColumn: detailCell.col,
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <DetailsPanel
                        slot={viewing}
                        player={getPlayer(viewing)}
                        linkLines={linkLinesForViewing}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* ===== ACTIVE BONDS (only if any) ===== */}
          {activeBonds.length > 0 && (
            <div className="border-t p-3 md:p-4">
              <h3 className="text-sm font-semibold mb-1.5">Active bonds</h3>
              <ul className="flex flex-wrap gap-1.5">
                {activeBonds.map((b) => (
                  <li
                    key={b.key}
                    className="text-[11px] rounded-full border px-2 py-1 bg-emerald-50/70 border-emerald-200"
                    title={b.effect ? `Effect: ${b.effect}` : undefined}
                  >
                    <span className="font-medium">{b.name}</span> — {b.a.name} +{" "}
                    {b.b.name}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* ===== MOBILE BENCH (chips B1..B6) ===== */}
          <MobileBench
            selected={selected}
            onSelect={selectSlot}
            assignments={assignments}
          />

          {/* ===== CANDIDATES (+ recommended by bond) ===== */}
          <div className="border-t p-3 md:p-4">
            {!selected ||
            (["B1", "B2", "B3", "B4", "B5", "B6"] as SlotKey[]).includes(
              selected
            ) ? (
              <p className="text-sm text-gray-500">
                Select a court slot to see candidates.
              </p>
            ) : players.length === 0 ? (
              <p className="text-sm text-gray-500">No results.</p>
            ) : (
              <div className="space-y-3">
                {linkRecommended.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold mb-1.5">
                      Recommended by bond
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1.5">
                      {linkRecommended.map((p) => {
                        const bonds = bondsOf(p);
                        const hit = bonds.find((b) =>
                          onCourtIds.includes(b.with)
                        );
                        const mate = playerById(hit?.with);
                        return (
                          <li
                            key={p.id}
                            className="flex items-center justify-between gap-2 rounded-xl border p-2 bg-emerald-50/50"
                          >
                            <div className="min-w-0 flex items-center gap-2">
                              <MiniAvatar player={p} />
                              <div className="min-w-0">
                                <div className="truncate text-sm font-medium">
                                  {p.name}
                                </div>
                                <div className="text-[11px] text-emerald-700 truncate">
                                  {hit?.name ?? "Bond"} · with{" "}
                                  {mate?.name ?? hit?.with}
                                  {hit?.effect && (
                                    <span className="ml-1 opacity-90">
                                      ({hit.effect})
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                            <button
                              onClick={() => assignSelected(p.id)}
                              className="shrink-0 rounded-lg border px-2 py-1 text-xs hover:bg-white"
                            >
                              Assign
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}

                <div>
                  <h4 className="text-sm font-semibold mb-1.5">
                    {linkRecommended.length > 0
                      ? "Other candidates"
                      : "Candidates"}
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1.5">
                    {otherCandidates.map((p) => (
                      <li
                        key={p.id}
                        className="flex items-center justify-between gap-2 rounded-xl border p-2"
                      >
                        <div className="min-w-0 flex items-center gap-2">
                          <MiniAvatar player={p} />
                          <div>
                            <div className="truncate text-sm font-medium">
                              {p.name}
                            </div>
                            <div className="text-xs text-gray-500 truncate">
                              {p.team ? `${p.team} · ` : ""}
                              {p.roles.join(", ")}
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => assignSelected(p.id)}
                          className="shrink-0 rounded-lg border px-2 py-1 text-xs hover:bg-gray-50"
                        >
                          Assign
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ===== DESKTOP BENCH ===== */}
        <aside className="hidden md:flex flex-col gap-2 rounded-2xl border p-3 md:sticky md:top-20 h-fit max-h-[70vh]">
          <div>
            <h3 className="mb-2 text-sm font-semibold">Bench (6)</h3>
            <ul className="grid gap-1.5">
              {(["B1", "B2", "B3", "B4", "B5", "B6"] as const).map((k) => {
                const active = selected === k;
                const p = getPlayer(k);
                const text = p?.name ?? "— empty —";
                return (
                  <li key={k} className="flex items-center gap-2">
                    <button
                      onClick={() => selectSlot(k)}
                      className={[
                        "grid place-items-center w-10 h-10 rounded-full border text-xs hover:bg-gray-50 overflow-hidden",
                        active ? "ring-2 ring-black" : "",
                      ].join(" ")}
                      title={text}
                    >
                      <MiniAvatar player={p} round />
                    </button>
                    <div className="min-w-0">
                      <div className="truncate text-sm">{text}</div>
                      <div className="text-[10px] text-gray-500">{k}</div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <hr className="my-2" />

          <div className="flex-1 min-h-0">
            <h3 className="mb-2 text-sm font-semibold">All players</h3>
            <div className="overflow-y-auto pr-1 max-h-[52vh]">
              <ul className="grid gap-1.5">
                {allPlayersFiltered.map((p) => {
                  const alreadyHere = selected
                    ? assignments[selected] === p.id
                    : false;
                  const disabled = !selected || alreadyHere;
                  return (
                    <li
                      key={p.id}
                      className="flex items-center justify-between gap-2 rounded-xl border p-2"
                    >
                      <div className="min-w-0 flex items-center gap-2">
                        <MiniAvatar player={p} />
                        <div className="min-w-0">
                          <div className="truncate text-sm font-medium">
                            {p.name}
                          </div>
                          <div className="text-[11px] text-gray-500 truncate">
                            {p.team ? `${p.team} · ` : ""}
                            {p.roles.join(", ")}
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => assignSelected(p.id)}
                        disabled={disabled}
                        className={[
                          "shrink-0 rounded-lg border px-2 py-1 text-xs",
                          disabled
                            ? "opacity-50 cursor-not-allowed bg-white"
                            : "hover:bg-gray-50",
                        ].join(" ")}
                        title={
                          !selected
                            ? "Select a slot first"
                            : alreadyHere
                            ? "Already assigned to this slot"
                            : "Assign to selected slot"
                        }
                      >
                        Assign
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
            <p className="mt-2 text-[10px] text-gray-500">
              Select a court or bench slot, then click{" "}
              <span className="font-medium">Assign</span>.
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}

/* =========================
   Small avatar components
   ========================= */
function MiniAvatar({
  player,
  round = false,
}: {
  player?: Player;
  round?: boolean;
}) {
  const bg = buildBgImageFrom(player);
  if (!player?.image) {
    return (
      <div
        className={[
          "bg-gray-100 border text-[10px] grid place-items-center",
          round ? "rounded-full" : "rounded-md",
          "w-8 h-8",
        ].join(" ")}
      >
        {player?.name ? initials(player.name) : "—"}
      </div>
    );
  }
  return (
    <div
      className={[
        "border",
        round ? "rounded-full" : "rounded-md",
        "w-8 h-8",
      ].join(" ")}
      style={{
        backgroundImage: bg,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      title={player?.name}
    />
  );
}

/* =========================
   Mobile bench (chips B1..B6)
   ========================= */
function MobileBench({
  assignments,
  selected,
  onSelect,
}: {
  assignments: Record<string, string | undefined>;
  selected: SlotKey | null;
  onSelect: (k: SlotKey) => void;
}) {
  return (
    <div className="md:hidden border-t p-3">
      <h3 className="mb-2 text-sm font-semibold">Bench</h3>
      <div className="flex gap-2 overflow-x-auto pb-1">
        {(["B1", "B2", "B3", "B4", "B5", "B6"] as const).map((k) => {
          const active = selected === k;
          const id = assignments[k];
          const p = id ? players.find((x) => x.id === id) : undefined;
          return (
            <button
              key={k}
              onClick={() => onSelect(k)}
              className={[
                "grid place-items-center w-12 h-12 shrink-0 rounded-full border text-xs overflow-hidden",
                "hover:bg-gray-50",
                active ? "ring-2 ring-black" : "",
              ].join(" ")}
              title={k}
            >
              <MobileBenchAvatar player={p} fallbackText={k} />
            </button>
          );
        })}
      </div>
    </div>
  );
}
function MobileBenchAvatar({
  player,
  fallbackText,
}: {
  player?: Player;
  fallbackText: string;
}) {
  const bg = buildBgImageFrom(player);
  if (!player?.image)
    return (
      <span className="text-[10px]">
        {player?.name ? initials(player.name) : fallbackText}
      </span>
    );
  return (
    <div
      className="w-8 h-8 rounded-full border"
      style={{
        backgroundImage: bg,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      title={player?.name}
    />
  );
}
