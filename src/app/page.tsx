// src/app/page.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { Slot, SlotKey, Role, Player, Bond, Skill } from "../types";
import { players } from "../data/players";
import {
  useTeamStore,
  type AnySlotKey,
  type BenchKey,
} from "../stores/teamStore";

/* --------- layout titulares: 2 filas + LI lateral (row-span-2) ---------- */
const SLOTS: Slot[] = [
  { key: "S", label: "S", role: "S" },
  { key: "MB1", label: "MB", role: "MB" },
  { key: "WS1", label: "WS", role: "WS" },
  { key: "WS2", label: "WS", role: "WS" },
  { key: "MB2", label: "MB", role: "MB" },
  { key: "OP", label: "OP", role: "OP" },
  { key: "LI", label: "LI", role: "LI" },
];

const POSITIONS: Role[] = ["S", "MB", "WS", "OP", "LI"];
const SKILL_TYPES = [
  "Power Attack",
  "Serve",
  "Block",
  "Quick attack",
  "Receive",
  "Setter",
] as const;

const BENCH_KEYS: BenchKey[] = ["B1", "B2", "B3", "B4", "B5", "B6"];

// Fondo por escuela cuando hay bono activo (para la sección de Bonos)
const TEAM_BG: Record<string, string> = {
  AobaJohsai: "/teams/aoba-johsai.webp",
  Date: "/teams/date.webp",
  Fukurodani: "/teams/fukurodani.webp",
  Inarizaki: "/teams/inarizaki.jpg",
  Karasuno: "/teams/karasuno.jpeg",
  Nekoma: "/teams/nekoma.webp",
  Shiratorizawa: "/teams/shiratorizawa.webp",
};

// util para escoger un team “dominante” (el de mayor count)
function pickDominantTeam(
  t: Array<{ team: string; count: number }>
): string | null {
  if (!t.length) return null;
  return t.slice().sort((a, b) => b.count - a.count)[0].team;
}

function gridClassForSlot(k: SlotKey): string {
  switch (k) {
    case "S":
      return "row-start-1 col-start-1";
    case "MB1":
      return "row-start-1 col-start-2";
    case "WS1":
      return "row-start-1 col-start-3";
    case "WS2":
      return "row-start-2 col-start-1";
    case "MB2":
      return "row-start-2 col-start-2";
    case "OP":
      return "row-start-2 col-start-3";
    case "LI":
      return "row-start-1 col-start-4 row-span-2 self-center";
    default:
      return "";
  }
}

const getPlayerById = (id: string) => players.find((p) => p.id === id) ?? null;
const isBenchKey = (k: AnySlotKey | null): k is BenchKey =>
  !!k && (BENCH_KEYS as string[]).includes(k);

/* --------- media query hook ---------- */
function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const m = window.matchMedia(query);
    const onChange = () => setMatches(m.matches);
    onChange();
    m.addEventListener?.("change", onChange);
    return () => m.removeEventListener?.("change", onChange);
  }, [query]);
  return matches;
}

export default function Page() {
  const isLarge = useMediaQuery("(min-width: 1280px)"); // xl
  const [mobilePanel, setMobilePanel] = useState<"none" | "details" | "bonds">(
    "none"
  );
  const [desktopPanel, setDesktopPanel] = useState<"details" | "bonds">(
    "details"
  );

  // Filtros de “Explorar jugadores”
  const [filterSchool, setFilterSchool] = useState<string>("all");
  const [filterPosition, setFilterPosition] = useState<string>("all");
  const [filterType, setFilterType] = useState<string>("all");

  const {
    selectedSlot,
    selectSlot,
    assignments,
    clearSlot,
    assignToSelected,
    reset,
    isAssigned,
    detailsPlayerId,
    setDetailsPlayer,
  } = useTeamStore();

  /** --- ROTACIÓN (perímetro 3x2 horario; LI no rota) --- */
  const [ring, setRing] = useState<SlotKey[]>([
    "S",
    "MB1",
    "WS1",
    "OP",
    "MB2",
    "WS2",
  ]);
  const rotateOnce = () => setRing((r) => [r[5], r[0], r[1], r[2], r[3], r[4]]);

  const gridCells: Array<{ posKey: SlotKey; ringIndex: number }> = [
    { posKey: "S", ringIndex: 0 },
    { posKey: "MB1", ringIndex: 1 },
    { posKey: "WS1", ringIndex: 2 },
    { posKey: "OP", ringIndex: 3 },
    { posKey: "MB2", ringIndex: 4 },
    { posKey: "WS2", ringIndex: 5 },
  ];

  const selectedMeta = useMemo(
    () =>
      selectedSlot && !isBenchKey(selectedSlot)
        ? SLOTS.find((s) => s.key === selectedSlot) ?? null
        : null,
    [selectedSlot]
  );

  // IDs asignados (titulares + banca)
  const assignedIds = useMemo(
    () => new Set(Object.values(assignments).filter(Boolean) as string[]),
    [assignments]
  );

  const onCourtNames = useMemo(() => {
    const names = new Set<string>();
    Object.values(assignments).forEach((pid) => {
      const p = pid ? getPlayerById(pid) : null;
      if (p) names.add(p.name);
    });
    return names;
  }, [assignments]);

  const assignedPlayer = (k: AnySlotKey): Player | null => {
    const id = assignments[k];
    return id ? getPlayerById(id) : null;
  };

  /** ---------- lógica candidatos para ASIGNAR (según slot) ---------- */
  const baseCandidates = useMemo(() => {
    if (!selectedSlot) return [] as Player[];
    const base =
      isBenchKey(selectedSlot) || !selectedMeta
        ? players.slice()
        : players.filter((p) => p.roles.includes(selectedMeta.role as Role));
    const currentId = assignments[selectedSlot];
    const currentName = currentId ? getPlayerById(currentId)?.name : null;

    // Misma regla de “disponibles” de siempre: no repetir nombre en cancha/banca,
    // salvo el que ya está en el slot.
    return base.filter((p) => {
      if (p.name === currentName) return true;
      return !onCourtNames.has(p.name);
    });
  }, [selectedSlot, selectedMeta, assignments, onCourtNames]);

  // ¿Este jugador tiene algún vínculo con alguien del equipo/banca?
  const hasBondWithAssigned = (p: Player) =>
    p.bonds?.some((b) => {
      const participants = b.participants?.length
        ? b.participants
        : b.to
        ? [b.to]
        : [];
      return participants.some((id) => assignedIds.has(id));
    });

  const recommendedForSlot = useMemo(() => {
    if (!selectedSlot) return [] as Player[];
    return baseCandidates.filter(hasBondWithAssigned);
  }, [baseCandidates, selectedSlot, assignments]);

  const nonRecommendedForSlot = useMemo(() => {
    if (!selectedSlot) return [] as Player[];
    const recIds = new Set(recommendedForSlot.map((p) => p.id));
    return baseCandidates.filter((p) => !recIds.has(p.id));
  }, [baseCandidates, recommendedForSlot]);

  /** ---------- jugador “details” ---------- */
  const detailsPlayer = detailsPlayerId ? getPlayerById(detailsPlayerId) : null;

  const isBondActive = (b: Bond) => {
    const participants = b.participants?.length
      ? b.participants
      : b.to
      ? [b.to]
      : [];
    if (!participants || participants.length === 0) return false;
    return participants.every((id) => assignedIds.has(id));
  };

  /* ------ long-press / right click remove ------ */
  const longPressRefs = useRef<Record<AnySlotKey, any>>(
    {} as Record<AnySlotKey, any>
  );
  const startLongPress = (slot: AnySlotKey) => {
    clearTimeout(longPressRefs.current[slot]);
    longPressRefs.current[slot] = setTimeout(() => {
      clearSlot(slot);
    }, 600);
  };
  const cancelLongPress = (slot: AnySlotKey) =>
    clearTimeout(longPressRefs.current[slot]);

  /* ------ sincronizar jugador del panel (corrige bug tras Reset) ------ */
  useEffect(() => {
    if (!selectedSlot) {
      setDetailsPlayer(null);
      return;
    }
    const p = assignedPlayer(selectedSlot);
    setDetailsPlayer(p ? p.id : null);
  }, [isLarge, selectedSlot, assignments, setDetailsPlayer]);

  /** ---- Medidas fijas ---- */
  const SLOT_W = 110;
  const NAME_H = 12;
  const TEAM_H = 16;
  const GAP = 20;

  /** --- Quitar selección al hacer click fuera --- */
  const handleBackgroundClick = (e: React.MouseEvent) => {
    const el = e.target as HTMLElement;
    if (el.closest('[data-interactive="true"]')) return;
    (selectSlot as unknown as (k: AnySlotKey | null) => void)(null);
  };

  /** -------- “Explorar jugadores” (todos + filtros) -------- */
  const allSchools = useMemo(
    () => Array.from(new Set(players.map((p) => p.team))).sort(),
    []
  );

  const filteredAllPlayers = useMemo(() => {
    return players.filter((p) => {
      const passSchool = filterSchool === "all" || p.team === filterSchool;
      const passPos =
        filterPosition === "all" || p.roles.includes(filterPosition as Role);
      const passType =
        filterType === "all" || p.skills.some((s) => s.name === filterType);
      return passSchool && passPos && passType;
    });
  }, [filterSchool, filterPosition, filterType]);

  // Card click en “Explorar”: solo inspeccionar (no asigna)
  const inspectPlayer = (p: Player) => {
    setDetailsPlayer(p.id);
    if (!isLarge) {
      try {
        window?.scrollTo({ top: 0, behavior: "smooth" });
      } catch {}
    }
  };

  const dragSrc = useRef<AnySlotKey | null>(null);
  const DND_MIME = "application/x-slot";

  const handleDragStart = (slot: AnySlotKey) => (e: React.DragEvent) => {
    dragSrc.current = slot;
    // set ambos por compatibilidad (Safari/Firefox/Chromium)
    e.dataTransfer.setData(DND_MIME, String(slot));
    e.dataTransfer.setData("text/plain", String(slot));
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault(); // sin esto no hay drop
    e.dataTransfer.dropEffect = "move";
  };

  const readDragSource = (e: React.DragEvent): AnySlotKey | null => {
    return (
      (e.dataTransfer.getData(DND_MIME) as AnySlotKey) ||
      (e.dataTransfer.getData("text/plain") as AnySlotKey) ||
      dragSrc.current ||
      null
    );
  };

  const { swapSlots } = useTeamStore();

  const handleDrop = (dst: AnySlotKey) => (e: React.DragEvent) => {
    e.preventDefault();
    const src = readDragSource(e);
    if (!src || src === dst) return;

    const srcP = assignedPlayer(src);
    const dstP = assignedPlayer(dst);

    const dstRole = roleForSlot(dst);
    const srcRole = roleForSlot(src);

    // ¿Puede el jugador src ir al slot dst?
    const srcFitsDst = !dstRole || (srcP && srcP.roles.includes(dstRole));
    // ¿Puede el jugador dst (si existe) ir al slot src? (para swap)
    const dstFitsSrc = !srcRole || !dstP || dstP.roles.includes(srcRole);

    if (srcFitsDst && dstFitsSrc) {
      swapSlots(src, dst);
    } else {
      // opcional: feedback visual/sonoro
      // e.g. shake el destino o un toast "Posición no compatible"
    }
    dragSrc.current = null;
  };

  const [hoverRoles, setHoverRoles] = useState<Set<Role> | null>(null);
  const [eligibleRoles, setEligibleRoles] = useState<Set<Role> | null>(null);

  const beginRoleHighlight = (roles: Role[] | Set<Role>) =>
    setEligibleRoles(new Set(roles));

  const endRoleHighlight = () => setEligibleRoles(null);

  const eligibleClass = (role: Role) =>
    eligibleRoles?.has(role) ? "ring-4 ring-sky-400" : "";

  const STARTER_KEYS: SlotKey[] = ["S", "MB1", "WS1", "OP", "MB2", "WS2", "LI"];

  const onCourtIds = useMemo(() => {
    // toma solo los ids de los slots titulares
    return new Set(
      STARTER_KEYS.map((k) => assignments[k]).filter(Boolean) as string[]
    );
  }, [assignments]);

  /** --- Bonos de equipo y vínculos activos --- */
  const onCourtPlayers = useMemo(
    () =>
      Array.from(onCourtIds)
        .map((id) => getPlayerById(id))
        .filter(Boolean) as Player[],
    [onCourtIds]
  );

  const teamBonuses = useMemo(() => {
    const counts = new Map<string, number>();
    onCourtPlayers.forEach((p) =>
      counts.set(p.team, (counts.get(p.team) || 0) + 1)
    );
    return Array.from(counts.entries())
      .filter(([, c]) => c >= 3) // regla real: 4 titulares
      .map(([team, count]) => ({ team, count }));
  }, [onCourtPlayers]);

  const activeBondNames = useMemo(() => {
    const set = new Set<string>();
    onCourtPlayers.forEach((p) =>
      p.bonds.forEach((b) => {
        if (isBondActive(b)) set.add(b.name);
      })
    );
    return Array.from(set);
  }, [onCourtPlayers, assignments]);

  // Team dominante y su fondo (si existe) para la sección Bonos
  const dominantTeam = useMemo(
    () => pickDominantTeam(teamBonuses),
    [teamBonuses]
  );

  const dominantBg = dominantTeam ? TEAM_BG[dominantTeam] : null;

  return (
    <main
      className="mx-auto max-w-7xl p-4 md:p-6"
      onClick={handleBackgroundClick}
    >
      {/* Header */}
      <header className="mb-4 grid grid-cols-[1fr_auto] items-center gap-2">
        <h1 className="text-xl font-semibold min-w-0">
          Haikyu!! Fly High - Team Builder
        </h1>

        <div
          className="flex items-center gap-2 justify-self-end shrink-0"
          data-interactive="true"
        >
          <div className="flex gap-2 xl:hidden">
            <button
              onClick={() =>
                setMobilePanel(mobilePanel === "details" ? "none" : "details")
              }
              className={`rounded-md border px-2 py-1 text-xs ${
                mobilePanel === "details"
                  ? "bg-gray-900 text-white"
                  : "hover:bg-gray-300"
              }`}
            >
              Details
            </button>
            <button
              onClick={() =>
                setMobilePanel(mobilePanel === "bonds" ? "none" : "bonds")
              }
              className={`rounded-md border px-2 py-1 text-xs ${
                mobilePanel === "bonds"
                  ? "bg-gray-900 text-white"
                  : "hover:bg-gray-300"
              }`}
            >
              Bonds
            </button>
          </div>
          <button
            onClick={reset}
            className="rounded-xl border px-4 py-2 text-sm hover:bg-gray-50"
            title="Reset Team"
          >
            Reset
          </button>
        </div>
      </header>

      {/* RESUMEN (siempre visible en <xl) */}
      {(teamBonuses.length > 0 || activeBondNames.length > 0) && (
        <section className="xl:hidden relative w-full rounded-2xl border p-3 mb-4 overflow-hidden">
          {dominantBg && (
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: `url(${dominantBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "saturate(0.8)",
                opacity: 0.2,
              }}
            />
          )}

          <div className="relative">
            <h4 className="text-sm font-semibold mb-2">Active Bonds</h4>

            {dominantTeam ? (
              <div className="mb-2">
                <span className="text-xs rounded-full border bg-gray-100 px-2 py-0.5">
                  Active School Bond:{" "}
                  <span className="font-medium">{dominantTeam}</span>
                </span>
              </div>
            ) : (
              teamBonuses.length > 0 && (
                <div className="mb-2 flex flex-wrap gap-2">
                  {teamBonuses.map((t) => (
                    <span
                      key={t.team}
                      className="text-xs rounded-full border px-2 py-0.5"
                      title={`${t.count} players from ${t.team}`}
                    >
                      {t.team} · {t.count} players
                    </span>
                  ))}
                </div>
              )
            )}

            {activeBondNames.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {activeBondNames.map((n) => (
                  <span
                    key={n}
                    className="text-xs rounded-full bg-gray-100 px-2 py-0.5"
                  >
                    {n}
                  </span>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Panel móvil/mediano (Details/Bonds) */}
      {mobilePanel !== "none" && detailsPlayer && (
        <section
          className="xl:hidden w-full rounded-2xl border p-3 mb-4"
          data-interactive="true"
        >
          {mobilePanel === "details" ? (
            <DetailsPanelOnlySkills player={detailsPlayer} />
          ) : (
            <BondsPanel
              player={detailsPlayer}
              isActiveFn={isBondActive}
              thumbSizePx={60}
            />
          )}
        </section>
      )}

      {/* Layout principal */}
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_420px] gap-8">
        {/* IZQUIERDA */}
        <div className="space-y-4 min-w-0">
          {/* Alineación + Banca */}
          <section className="w-full flex justify-center">
            <div className="inline-flex items-start gap-4 max-w-full">
              {/* Titulares + LI JUNTOS (grid 4 cols) */}
              <div
                className="grid grid-rows-2 grid-cols-4"
                style={{
                  gridTemplateColumns: `repeat(4, ${SLOT_W}px)`,
                  columnGap: `${GAP}px`,
                  rowGap: `16px`,
                }}
              >
                {gridCells.map(({ posKey, ringIndex }) => {
                  const occupant = ring[ringIndex] as AnySlotKey;
                  const p = assignedPlayer(occupant);
                  const isActive = selectedSlot === occupant;
                  const meta = SLOTS.find((s) => s.key === occupant)!;

                  return (
                    <div
                      key={posKey}
                      className={gridClassForSlot(posKey)}
                      style={{ width: SLOT_W }}
                    >
                      {/* Nombre */}
                      <div
                        className="flex items-end justify-center"
                        style={{ height: NAME_H }}
                      >
                        <div
                          className={`text-[12px] font-medium truncate whitespace-nowrap ${
                            p ? "opacity-100" : "opacity-0"
                          }`}
                          title={p ? `${p.shortName} — ${meta.label}` : ""}
                          style={{ maxWidth: SLOT_W }}
                        >
                          {p ? `${p.shortName} — ${meta.label}` : "placeholder"}
                        </div>
                      </div>

                      {/* Carta */}
                      <div
                        data-interactive="true"
                        className={[
                          "relative rounded-md border bg-gray-200 transition",
                          "p-0",
                          "aspect-[19/26]",
                          isActive
                            ? "ring-2 ring-black shadow"
                            : "hover:bg-gray-50",
                          eligibleClass(meta.role),
                        ].join(" ")}
                        style={{ width: SLOT_W }}
                        onClick={(e) => {
                          e.stopPropagation();
                          selectSlot(occupant);
                        }}
                        onContextMenu={(e) => {
                          e.preventDefault();
                          if (p) clearSlot(occupant);
                        }}
                        onTouchStart={() => startLongPress(occupant)}
                        onTouchEnd={() => cancelLongPress(occupant)}
                        onTouchCancel={() => cancelLongPress(occupant)}
                        draggable={!!p}
                        onDragStart={handleDragStart(occupant)}
                        onDragOver={handleDragOver}
                        onDrop={handleDrop(occupant)}
                      >
                        {p ? (
                          <img
                            src={p.image}
                            alt={p.name}
                            className="h-full w-full rounded-lg object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <div className="grid place-items-center h-full w-full rounded-lg border border-dashed text-gray-400">
                            <span className="text-sm font-semibold">
                              {meta.label}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Escuela */}
                      <div
                        className="mt-0 flex items-center justify-center"
                        style={{ height: TEAM_H }}
                      >
                        <div
                          className={`text-center text-[10px] text-gray-500 truncate whitespace-nowrap ${
                            p ? "opacity-100" : "opacity-0"
                          }`}
                          title={p ? p.team : ""}
                          style={{ maxWidth: SLOT_W }}
                        >
                          {p ? p.team : "placeholder"}
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* LI dentro de la grid (col 4, row-span-2) */}
                <div
                  className={gridClassForSlot("LI")}
                  style={{ width: SLOT_W }}
                >
                  {(() => {
                    const occupant: AnySlotKey = "LI";
                    const p = assignedPlayer(occupant);
                    const isActive = selectedSlot === occupant;
                    const meta = SLOTS.find((s) => s.key === occupant)!;

                    return (
                      <>
                        <div
                          className="flex items-end justify-center"
                          style={{ height: NAME_H }}
                        >
                          <div
                            className={`text-[12px] font-medium truncate whitespace-nowrap ${
                              p ? "opacity-100" : "opacity-0"
                            }`}
                            title={p ? `${p.shortName} — ${meta.label}` : ""}
                            style={{ maxWidth: SLOT_W }}
                          >
                            {p
                              ? `${p.shortName} — ${meta.label}`
                              : "placeholder"}
                          </div>
                        </div>

                        <div
                          data-interactive="true"
                          className={[
                            "relative rounded-md border bg-gray-200 transition",
                            "p-0",
                            "aspect-[19/26]",
                            isActive
                              ? "ring-2 ring-black shadow"
                              : "hover:bg-gray-50",
                            eligibleClass(meta.role),
                          ].join(" ")}
                          style={{ width: SLOT_W }}
                          onClick={(e) => {
                            e.stopPropagation();
                            selectSlot(occupant);
                          }}
                          onContextMenu={(e) => {
                            e.preventDefault();
                            if (p) clearSlot(occupant);
                          }}
                          onTouchStart={() => startLongPress(occupant)}
                          onTouchEnd={() => cancelLongPress(occupant)}
                          onTouchCancel={() => cancelLongPress(occupant)}
                        >
                          {p ? (
                            <img
                              src={p.image}
                              alt={p.name}
                              className="h-full w-full rounded-lg object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="grid place-items-center h-full w-full rounded-lg border border-dashed text-gray-400">
                              <span className="text-sm font-semibold">
                                {meta.label}
                              </span>
                            </div>
                          )}
                        </div>

                        <div
                          className="mt-0 flex items-center justify-center"
                          style={{ height: TEAM_H }}
                        >
                          <div
                            className={`text-center text-[10px] text-gray-500 truncate whitespace-nowrap ${
                              p ? "opacity-100" : "opacity-0"
                            }`}
                            title={p ? p.team : ""}
                            style={{ maxWidth: SLOT_W }}
                          >
                            {p ? p.team : "placeholder"}
                          </div>
                        </div>

                        <div className="mt-1 flex justify-center">
                          <button
                            data-interactive="true"
                            onClick={(e) => {
                              e.stopPropagation();
                              rotateOnce();
                            }}
                            className="text-xs rounded-full border px-2 py-1 hover:bg-gray-50"
                            title="Rotate team"
                          >
                            ↻ Rotate
                          </button>
                        </div>
                      </>
                    );
                  })()}
                </div>
              </div>

              {/* Banca a la derecha */}
              <div
                className="grid grid-cols-1 lg:grid-cols-2 gap-3 shrink-0 justify-items-center"
                style={{ columnGap: 14, rowGap: 12, marginTop: `12px` }}
                data-interactive="true"
              >
                {BENCH_KEYS.map((bk) => {
                  const p = assignedPlayer(bk);
                  const isActive = selectedSlot === bk;
                  return (
                    <button
                      key={bk}
                      className={[
                        "relative rounded-full border bg-white overflow-hidden",
                        "h-12 w-12 lg:h-20 lg:w-18",
                        "flex items-center justify-center",
                        isActive
                          ? "ring-2 ring-black shadow"
                          : "hover:bg-gray-200",
                        //eligibleClass(meta.role),
                      ].join(" ")}
                      title={p ? `${p.name} · ${p.team}` : "Bench"}
                      onClick={(e) => {
                        e.stopPropagation();
                        selectSlot(bk);
                      }}
                      onContextMenu={(e) => {
                        e.preventDefault();
                        if (p) clearSlot(bk);
                      }}
                      onTouchStart={() => startLongPress(bk)}
                      onTouchEnd={() => cancelLongPress(bk)}
                      onTouchCancel={() => cancelLongPress(bk)}
                      draggable={!!p}
                      onDragStart={handleDragStart(bk)}
                      onDragOver={handleDragOver}
                      onDrop={handleDrop(bk)}
                    >
                      {p ? (
                        <img
                          src={p.image}
                          alt={p.name}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <span className="text-gray-400 text-sm">+</span>
                      )}
                    </button>
                  );
                })}
                <div className="col-span-1 lg:col-span-2 text-center text-[12px] text-gray-500 mt-1">
                  Bench
                </div>
              </div>
            </div>
          </section>

          {/* -------- Opciones para el slot (asignación) -------- */}
          <section className="rounded-2xl border p-3">
            {!selectedSlot ? (
              <p className="text-sm text-gray-500">
                Select a slot to see avaiblable options.
              </p>
            ) : baseCandidates.length === 0 ? (
              <p className="text-sm text-gray-500">No players found.</p>
            ) : (
              <>
                {/* Recomendados */}
                {recommendedForSlot.length > 0 && (
                  <>
                    <div className="text-xs font-semibold mb-2">
                      Recommended
                    </div>
                    <PlayersRow
                      players={recommendedForSlot}
                      onClickCard={(p) => {
                        assignToSelected(p.id);
                        setDetailsPlayer(p.id);
                        if (!isLarge) setMobilePanel("details");
                        endRoleHighlight();
                      }}
                      onBeginHighlight={beginRoleHighlight}
                      onEndHighlight={endRoleHighlight}
                      badge="★"
                    />
                    <hr className="my-3" />
                  </>
                )}

                {/* Resto */}
                <div className="text-xs font-semibold mb-2">
                  {selectedMeta?.label
                    ? `Available for ${selectedMeta.label}`
                    : "Todos"}
                </div>
                <PlayersRow
                  players={nonRecommendedForSlot}
                  onClickCard={(p) => {
                    assignToSelected(p.id);
                    setDetailsPlayer(p.id);
                    if (!isLarge) setMobilePanel("details");
                    endRoleHighlight();
                  }}
                  onBeginHighlight={beginRoleHighlight}
                  onEndHighlight={endRoleHighlight}
                />
              </>
            )}
          </section>

          {/* -------- Explorar jugadores (todos + filtros) -------- */}
          <section className="rounded-2xl border p-3">
            <div
              className="flex flex-wrap items-center gap-2 mb-3"
              data-interactive="true"
            >
              <FilterSelect
                label="School"
                value={filterSchool}
                onChange={setFilterSchool}
                options={[
                  { value: "all", label: "All" },
                  ...allSchools.map((t) => ({ value: t, label: t })),
                ]}
              />
              <FilterSelect
                label="Position"
                value={filterPosition}
                onChange={setFilterPosition}
                options={[
                  { value: "all", label: "All" },
                  ...POSITIONS.map((r) => ({ value: r, label: r })),
                ]}
              />
              <FilterSelect
                label="Type"
                value={filterType}
                onChange={setFilterType}
                options={[
                  { value: "all", label: "All" },
                  ...SKILL_TYPES.map((t) => ({ value: t, label: t })),
                ]}
              />
              {(filterSchool !== "all" ||
                filterPosition !== "all" ||
                filterType !== "all") && (
                <button
                  onClick={() => {
                    setFilterSchool("all");
                    setFilterPosition("all");
                    setFilterType("all");
                  }}
                  className="ml-auto rounded-md border px-2 py-1 text-xs hover:bg-gray-50"
                >
                  Clear
                </button>
              )}
            </div>

            {filteredAllPlayers.length === 0 ? (
              <p className="text-sm text-gray-500">No players found.</p>
            ) : (
              <PlayersGrid
                players={filteredAllPlayers}
                onClickCard={(p) => {
                  inspectPlayer(p);
                  endRoleHighlight();
                }}
                onBeginHighlight={beginRoleHighlight}
                onEndHighlight={endRoleHighlight}
              />
            )}
          </section>
        </div>

        {/* Panel Derecho Detalles (desktop ≥ xl) */}
        <aside
          className="hidden xl:block rounded-2xl border p-4 h-fit sticky top-4 min-w-0"
          data-interactive="true"
        >
          {(teamBonuses.length > 0 || activeBondNames.length > 0) && (
            <section className="mb-4 relative overflow-hidden rounded-xl">
              {dominantBg && (
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage: `url(${dominantBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.2,
                  }}
                />
              )}

              <div className="relative">
                <h4 className="text-sm font-semibold mb-1 ml-2 mt-1">
                  Active Bonds
                </h4>

                {dominantTeam ? (
                  <div className="mb-2 ml-3">
                    <span className="text-xs rounded-full bg-white px-2 py-0.5">
                      Active Bond School:{" "}
                      <span className="font-medium">{dominantTeam}</span>
                    </span>
                  </div>
                ) : (
                  teamBonuses.length > 0 && (
                    <div className="mb-2 flex flex-wrap gap-2">
                      {teamBonuses.map((t) => (
                        <span
                          key={t.team}
                          className="text-xs rounded-full border px-2 py-0.5"
                          title={`${t.count} players from ${t.team}`}
                        >
                          {t.team} · {t.count} players
                        </span>
                      ))}
                    </div>
                  )
                )}

                {activeBondNames.length > 0 && (
                  <div className="ml-3 space-y-2">
                    {activeBondNames.map((n) => (
                      <span
                        key={n}
                        className="table text-xs rounded-full bg-white px-2 py-0.5"
                      >
                        {n}
                      </span>
                    ))}
                  </div>
                )}

                <hr className="mt-3" />
              </div>
            </section>
          )}

          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold flex items-center gap-2">
              <span>Player</span>
              {detailsPlayer && (
                <span className="text-sm font-normal text-gray-600">
                  — {detailsPlayer.shortName}{" "}
                  <span className="text-gray-400">·</span> {detailsPlayer.team}
                </span>
              )}
            </h3>
            <div className="flex gap-1">
              <button
                onClick={() => setDesktopPanel("details")}
                className={`rounded-md border px-2 py-1 text-xs ${
                  desktopPanel === "details"
                    ? "bg-gray-900 text-white"
                    : "hover:bg-gray-50"
                }`}
              >
                Details
              </button>
              <button
                onClick={() => setDesktopPanel("bonds")}
                className={`rounded-md border px-2 py-1 text-xs ${
                  desktopPanel === "bonds"
                    ? "bg-gray-900 text-white"
                    : "hover:bg-gray-50"
                }`}
              >
                Bonds
              </button>
            </div>
          </div>

          {!detailsPlayer ? (
            <p className="mt-2 text-sm text-gray-500">Select a player.</p>
          ) : desktopPanel === "details" ? (
            <div className="mt-3">
              <div className="mt-1">
                <DetailsPanelOnlySkills player={detailsPlayer} />
              </div>
            </div>
          ) : (
            <div className="mt-3">
              <div className="mt-4">
                <BondsPanel
                  player={detailsPlayer}
                  isActiveFn={isBondActive}
                  thumbSizePx={60}
                />
              </div>
            </div>
          )}
        </aside>
      </div>
    </main>
  );
}

/* ====================== Subcomponentes ====================== */

function DetailsPanelOnlySkills({ player }: { player: Player }) {
  return (
    <section>
      <div className="text-sm font-semibold">Skills</div>
      <ul className="mt-2 space-y-3">
        {player.skills.map((s, idx) => (
          <li key={`${s.name}-${idx}`} className="rounded-lg border p-2">
            <SkillLevels skill={s} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function BondsPanel({
  player,
  isActiveFn,
  thumbSizePx = 60,
}: {
  player: Player;
  isActiveFn: (b: Bond) => boolean;
  thumbSizePx?: number;
}) {
  return (
    <section>
      <div className="text-sm font-semibold">Bonds</div>
      <ul className="mt-2 space-y-2">
        {player.bonds.length === 0 && (
          <li className="text-xs text-gray-500">No bonds available.</li>
        )}
        {player.bonds.map((b, i) => {
          const participants = b.participants?.length
            ? b.participants
            : b.to
            ? [b.to]
            : [];
          if (!participants || participants.length === 0) return null;
          const active = isActiveFn(b);

          const partPlayers = participants
            .map((id) => getPlayerById(id))
            .filter(Boolean) as Player[];

          return (
            <li
              key={`${player.id}-${b.name}-${i}`}
              className={`rounded-lg border p-2 ${
                active ? "bg-green-50 border-green-300" : ""
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="text-sm">
                  {b.name}{" "}
                  <span
                    className={`ml-2 rounded px-2 py-0.5 text-[11px] ${
                      active
                        ? "bg-green-600 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {active ? "Activo" : "Inactivo"}
                  </span>
                </div>
                <div className="flex -space-x-1">
                  {partPlayers.map((pp) => (
                    <img
                      key={pp.id}
                      src={pp.image}
                      alt={pp.name}
                      style={{
                        height: 50,
                        width: 50,
                        objectFit: "cover",
                        objectPosition: "top",
                      }}
                      className="rounded-sm border object-cover"
                      title={pp.name}
                      loading="lazy"
                    />
                  ))}
                </div>
              </div>
              {b.effect && (
                <div className="text-xs text-gray-600 mt-2">{b.effect}</div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function SkillLevels({ skill }: { skill: Skill }) {
  const available = (
    Object.entries(skill.levels) as [string, string | undefined][]
  )
    .filter(([, v]) => !!v)
    .map(([lvl]) => Number(lvl) as 1 | 2 | 3 | 4 | 5);

  const [lvl, setLvl] = useState<number>(available[0] ?? 1);
  const text = skill.levels[String(lvl) as "1" | "2" | "3" | "4" | "5"] ?? "";

  return (
    <div>
      <div className="flex items-center justify-between gap-2">
        <div className="text-sm font-medium">{skill.name}</div>
        <div className="flex gap-1">
          {available.map((n) => (
            <button
              key={n}
              onClick={() => setLvl(n)}
              className={[
                "rounded-md border px-2 py-0.5 text-[11px]",
                lvl === n ? "bg-gray-900 text-white" : "hover:bg-gray-50",
              ].join(" ")}
              title={`Nivel ${n}`}
            >
              {n}
            </button>
          ))}
        </div>
      </div>
      {text && <div className="mt-2 text-xs text-gray-600">{text}</div>}
    </div>
  );
}

/* ---------- UI helpers para listas de jugadores ---------- */

function PlayersRow({
  players,
  onClickCard,
  badge,
  onBeginHighlight,
  onEndHighlight,
}: {
  players: Player[];
  onClickCard: (p: Player) => void;
  badge?: string;
  onBeginHighlight?: (roles: Role[] | Set<Role>) => void;
  onEndHighlight?: () => void;
}) {
  return (
    <ul className="mt-1 flex gap-2 overflow-x-auto pb-1">
      {players.map((p) => (
        <li key={p.id} className="shrink-0 w-[92px]">
          <PlayerCard
            p={p}
            onClick={() => onClickCard(p)}
            badge={badge}
            onBeginHighlight={onBeginHighlight}
            onEndHighlight={onEndHighlight}
          />
        </li>
      ))}
    </ul>
  );
}

function PlayersGrid({
  players,
  onClickCard,
  onBeginHighlight,
  onEndHighlight,
}: {
  players: Player[];
  onClickCard: (p: Player) => void;
  onBeginHighlight?: (roles: Role[] | Set<Role>) => void;
  onEndHighlight?: () => void;
}) {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-9 gap-0">
      {players.map((p) => (
        <PlayerCard
          key={p.id}
          p={p}
          onClick={() => onClickCard(p)}
          onBeginHighlight={onBeginHighlight}
          onEndHighlight={onEndHighlight}
        />
      ))}
    </div>
  );
}

function PlayerCard({
  p,
  onClick,
  badge,
  onBeginHighlight,
  onEndHighlight,
}: {
  p: Player;
  onClick: () => void;
  badge?: string;
  onBeginHighlight?: (roles: Role[] | Set<Role>) => void;
  onEndHighlight?: () => void;
}) {
  return (
    <button
      data-interactive="true"
      draggable // permite drag para mostrar elegibles
      onDragStart={() => onBeginHighlight?.(p.roles)}
      onDragEnd={() => onEndHighlight?.()}
      // fallback táctil/ratón por si el navegador no dispara drag:
      onMouseDown={() => onBeginHighlight?.(p.roles)}
      onMouseUp={() => onEndHighlight?.()}
      onMouseLeave={() => onEndHighlight?.()}
      onTouchStart={() => onBeginHighlight?.(p.roles)}
      onTouchEnd={() => onEndHighlight?.()}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
        onEndHighlight?.();
      }}
      className="group relative block rounded-lg border hover:border-black overflow-hidden w-20"
      title={`${p.name} · ${p.team}`}
    >
      {badge && (
        <span className="absolute left-1 top-1 z-10 rounded bg-black/80 text-white text-[10px] px-1">
          {badge === "★" ? "Recommended" : badge}
        </span>
      )}
      <img
        src={p.image}
        alt={p.name}
        className="h-[106px] w-[92px] object-cover"
        loading="lazy"
      />
      <div className="truncate px-1 py-1 text-[10px] text-gray-700 group-hover:text-black">
        {p.shortName}
      </div>
    </button>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: Array<{ value: string; label: string }>;
}) {
  return (
    <label className="text-xs flex items-center gap-1">
      <span className="text-gray-600">{label}</span>
      <select
        className="rounded-md border px-2 py-1 text-xs bg-white"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function roleForSlot(k: AnySlotKey): Role | null {
  if (k === "LI") return "LI";
  if (k === "OP") return "OP";
  if (k === "S") return "S";
  if (k === "WS1" || k === "WS2") return "WS";
  if (k === "MB1" || k === "MB2") return "MB";
  // banca
  return null;
}
