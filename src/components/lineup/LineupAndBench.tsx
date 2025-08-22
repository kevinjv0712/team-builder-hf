// src/components/lineup/LineupAndBench.tsx
"use client";

import { useMemo, useRef, useState, useLayoutEffect, useEffect } from "react";
import type { Role, Slot, SlotKey } from "@/types";
import { players } from "@/data/players";
import {
  useTeamStore,
  type AnySlotKey,
  type BenchKey,
} from "@/stores/teamStore";
import { useSelectionStore } from "@/stores/selectionStore";
import { useSettingsStore } from "@/stores/settingStore";
import { prefix } from "@/utils/prefix";
import Image from "next/image";

/* ================= Constantes y helpers ================= */
const SLOTS: Slot[] = [
  { key: "S", label: "S", role: "S" },
  { key: "MB1", label: "MB", role: "MB" },
  { key: "WS1", label: "WS", role: "WS" },
  { key: "WS2", label: "WS", role: "WS" },
  { key: "MB2", label: "MB", role: "MB" },
  { key: "OP", label: "OP", role: "OP" },
  { key: "LI", label: "LI", role: "LI" },
];
const STARTER_KEYS: SlotKey[] = ["S", "MB1", "WS1", "OP", "MB2", "WS2", "LI"];
const BENCH_KEYS: BenchKey[] = ["B1", "B2", "B3", "B4", "B5", "B6"];

const gridCells: Array<{ posKey: SlotKey; ringIndex: number }> = [
  { posKey: "S", ringIndex: 0 },
  { posKey: "MB1", ringIndex: 1 },
  { posKey: "WS1", ringIndex: 2 },
  { posKey: "OP", ringIndex: 3 },
  { posKey: "MB2", ringIndex: 4 },
  { posKey: "WS2", ringIndex: 5 },
];

function gridClassForSlot(k: SlotKey): string {
  switch (k) {
    case "S":
      return "row-start-1 col-start-2";
    case "MB1":
      return "row-start-1 col-start-3";
    case "WS1":
      return "row-start-1 col-start-4";
    case "WS2":
      return "row-start-2 col-start-2";
    case "MB2":
      return "row-start-2 col-start-3";
    case "OP":
      return "row-start-2 col-start-4";
    case "LI":
      return "row-start-1 col-start-1 row-span-2 self-center";
    default:
      return "";
  }
}

const getPlayerById = (id: string) => players.find((p) => p.id === id) ?? null;
const roleForSlot = (k: AnySlotKey): Role | null => {
  if (k === "LI") return "LI";
  if (k === "OP") return "OP";
  if (k === "S") return "S";
  if (k === "WS1" || k === "WS2") return "WS";
  if (k === "MB1" || k === "MB2") return "MB";
  return null; // bench
};

/* ======== Parámetros ajustables (tamaños) ======== */
const GAP_PX = 16; // separación titulares
const BENCH_GAP_PX = 12; // separación banca
const COL_GAP_PX = 30; // gap entre columnas (md+)

const MAX_SLOT = 120;
const MIN_SAFE = 10;

const BENCH_COLS_MD = 2; // columnas banca en md+
const BENCH_SCALE_MD = 0.6; // escala banca md+
const BENCH_SCALE_SM = 0.5; // escala banca < md

/* ======== Long-press ======== */
const LONG_DELETE_MS = 400; // mantener sin mover → borrar
const CANCEL_MOVE_PX = 10; // si te mueves más de esto, se cancela el long-press

/* ======== Detectar puntero "coarse" (táctil) para desactivar drag en mobile ======== */
function useIsCoarsePointer() {
  const [coarse, setCoarse] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mm = window.matchMedia("(pointer: coarse)");
    const apply = () => setCoarse(mm.matches);
    apply();
    mm.addEventListener?.("change", apply);
    return () => mm.removeEventListener?.("change", apply);
  }, []);
  return coarse;
}

/* ============================================================ */
export default function LineupAndBench({
  highlightIds,
}: {
  highlightIds?: Set<string>;
}) {
  const server = useSettingsStore((s) => s.server);
  const setServer = useSettingsStore((s) => s.setServer);
  const { selectSlot, clearSlot, assignments, swapSlots } = useTeamStore();
  const selectedSlot = useTeamStore((s) => s.selectedSlot);
  const setSelectedPlayer = useSelectionStore((s) => s.setSelectedPlayer);

  const isCoarse = useIsCoarsePointer(); // <md: true en la mayoría de móviles

  // Rotación (3x2 horario - LI no rota)
  const [ring, setRing] = useState<SlotKey[]>([
    "S",
    "MB1",
    "WS1",
    "OP",
    "MB2",
    "WS2",
  ]);
  const rotateOnce = () => setRing((r) => [r[5], r[0], r[1], r[2], r[3], r[4]]);

  const assignedPlayer = (k: AnySlotKey) => {
    const id = assignments[k];
    return id ? getPlayerById(id) : null;
  };

  /* ======== Desktop: DnD con resaltado ======== */
  const [dragging, setDragging] = useState(false);
  const [dropAllowed, setDropAllowed] = useState<Set<AnySlotKey>>(new Set());
  const ALL_KEYS = useMemo(
    () => [...STARTER_KEYS, ...BENCH_KEYS] as AnySlotKey[],
    []
  );

  function computeAllowed(
    dstKeys: AnySlotKey[],
    src: AnySlotKey
  ): Set<AnySlotKey> {
    const out = new Set<AnySlotKey>();
    const srcP = assignedPlayer(src);
    const srcRole = roleForSlot(src);
    dstKeys.forEach((dst) => {
      if (dst === src) return;
      const dstP = assignedPlayer(dst);
      const dstRole = roleForSlot(dst);
      const srcFitsDst = !dstRole || (srcP && srcP.roles.includes(dstRole));
      const dstFitsSrc = !srcRole || !dstP || dstP.roles?.includes(srcRole);
      if (srcFitsDst && dstFitsSrc) out.add(dst);
    });
    return out;
  }
  function desktopDragStart(src: AnySlotKey, hasPlayer: boolean) {
    if (isCoarse) return false; // en mobile no arrastramos
    if (!hasPlayer) return false;
    setDropAllowed(computeAllowed(ALL_KEYS, src));
    setDragging(true);
    return true;
  }
  function desktopDragEnd() {
    setDragging(false);
    setDropAllowed(new Set());
  }

  /* ======== Responsive: detectar breakpoint md ======== */
  const [isMdUp, setIsMdUp] = useState(false);
  useLayoutEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    const onChange = () => setIsMdUp(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  /* ======== Cálculo de tamaños ======== */
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [slotPx, setSlotPx] = useState(140);
  const [benchSlotPx, setBenchSlotPx] = useState(
    Math.round(140 * BENCH_SCALE_MD)
  );

  useLayoutEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const compute = () => {
      const W = el.clientWidth;

      if (isMdUp) {
        const num =
          W - (3 * GAP_PX + COL_GAP_PX + (BENCH_COLS_MD - 1) * BENCH_GAP_PX);
        const den = 4 + BENCH_COLS_MD * BENCH_SCALE_MD;
        let S = Math.floor(num / den);
        if (!Number.isFinite(S) || S < MIN_SAFE) S = MIN_SAFE;
        if (S > MAX_SLOT) S = MAX_SLOT;
        const B = Math.round(S * BENCH_SCALE_MD);
        setSlotPx(S);
        setBenchSlotPx(B);
      } else {
        let S = Math.floor((W - 3 * GAP_PX) / 4);
        if (!Number.isFinite(S) || S < MIN_SAFE) S = MIN_SAFE;
        if (S > MAX_SLOT) S = MAX_SLOT;
        const B = Math.round(S * BENCH_SCALE_SM);
        setSlotPx(S);
        setBenchSlotPx(B);
      }
    };

    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(el);
    window.addEventListener("resize", compute);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", compute);
    };
  }, [isMdUp]);

  const cardHL = (pid?: string | null) =>
    pid && highlightIds?.has(pid) ? "ring-4 ring-blue-700 rounded-md" : "";

  /* ======== Long-press (touch) sin bloquear scroll ======== */
  type PressState = {
    timer: number | null;
    pressing: boolean;
    sx: number;
    sy: number;
  };
  const pressRef = useRef<Record<AnySlotKey, PressState>>({} as any);
  const suppressNextClick = useRef<Record<AnySlotKey, boolean>>({} as any);

  function ensurePress(slot: AnySlotKey): PressState {
    if (!pressRef.current[slot]) {
      pressRef.current[slot] = { timer: null, pressing: false, sx: 0, sy: 0 };
    }
    return pressRef.current[slot];
  }

  const onTouchStartLP = (e: React.TouchEvent, slot: AnySlotKey) => {
    // no borrar slots vacíos
    if (!assignedPlayer(slot)) return;
    const st = ensurePress(slot);
    const t = e.touches[0];
    st.pressing = true;
    st.sx = t.clientX;
    st.sy = t.clientY;
    if (st.timer) clearTimeout(st.timer);
    st.timer = window.setTimeout(() => {
      if (!st.pressing) return;
      suppressNextClick.current[slot] = true;
      clearSlot(slot); // ← borra sin soltar
      try {
        (navigator as any).vibrate?.(12);
      } catch {}
    }, LONG_DELETE_MS);
  };
  const onTouchMoveLP = (e: React.TouchEvent, slot: AnySlotKey) => {
    const st = ensurePress(slot);
    if (!st.pressing) return;
    const t = e.touches[0];
    const dx = Math.abs(t.clientX - st.sx);
    const dy = Math.abs(t.clientY - st.sy);
    if (dx > CANCEL_MOVE_PX || dy > CANCEL_MOVE_PX) {
      if (st.timer) clearTimeout(st.timer);
      st.timer = null;
      st.pressing = false;
    }
  };
  const onTouchEndLP = (_e: React.TouchEvent, slot: AnySlotKey) => {
    const st = ensurePress(slot);
    st.pressing = false;
    if (st.timer) clearTimeout(st.timer);
    st.timer = null;
    // si ya se borró por long-press, suprimimos el click posterior con suppressNextClick
  };
  const onTouchCancelLP = (_e: React.TouchEvent, slot: AnySlotKey) => {
    const st = ensurePress(slot);
    st.pressing = false;
    if (st.timer) clearTimeout(st.timer);
    st.timer = null;
  };

  /* ============================ Render ============================ */
  return (
    <div className="w-full">
      {/* Wrapper: en md+ 2 columnas */}
      <div
        ref={wrapperRef}
        className="w-full md:grid md:grid-cols-[auto_auto] md:items-start"
        style={{ columnGap: `${COL_GAP_PX}px` }}
      >
        {/* ============ ALINEACIÓN (izquierda) ============ */}
        <div className="w-full">
          <div
            className="grid grid-rows-2 grid-cols-4"
            style={{
              gridTemplateColumns: `repeat(4, ${slotPx}px)`,
              columnGap: `${GAP_PX}px`,
              rowGap: "6px",
              margin: "auto",
              maxWidth: `calc(${slotPx}px * 4 + ${GAP_PX}px * 3)`,
            }}
          >
            {gridCells.map(({ posKey, ringIndex }) => {
              const occupant = ring[ringIndex] as AnySlotKey;
              const p = getPlayerById(assignments[occupant] ?? "");
              const isActive = selectedSlot === occupant;
              const meta = SLOTS.find((s) => s.key === occupant);
              const pid = p?.id ?? null;
              const hasPlayer = !!p;

              return (
                <div key={posKey} className={gridClassForSlot(posKey)}>
                  {/* Nombre */}
                  <div className="flex items-end justify-center min-h-3">
                    <div
                      className={`text-xs text-gray-100 font-medium truncate whitespace-nowrap mb-1 ${
                        p ? "opacity-100" : "opacity-0"
                      }`}
                      style={{ maxWidth: `${slotPx}px` }}
                      title={p ? `${p.shortName} — ${meta?.label ?? ""}` : ""}
                    >
                      {p
                        ? `${p.shortName} — ${meta?.label ?? ""}`
                        : "placeholder"}
                    </div>
                  </div>

                  {/* Carta 19/26 */}
                  <div
                    data-slotkey={occupant}
                    data-interactive="true"
                    className={[
                      "relative rounded-2xl bg-neutral-700 transition",
                      "p-0",
                      "aspect-[19/26]",
                      isActive
                        ? "ring-2 ring-gray shadow"
                        : "hover:bg-neutral-600",
                      cardHL(pid),
                      dragging && dropAllowed.has(occupant)
                        ? "outline outline-2 outline-amber-400"
                        : "",
                    ].join(" ")}
                    style={{ width: `${slotPx}px` }}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (dragging || suppressNextClick.current[occupant]) {
                        suppressNextClick.current[occupant] = false;
                        return;
                      }
                      selectSlot(occupant);
                    }}
                    onContextMenu={(e) => {
                      e.preventDefault();
                      if (p) clearSlot(occupant);
                    }}
                    // ---- Desktop DnD + resaltado ----
                    draggable={!!p && !isCoarse}
                    onDragStart={(e) => {
                      if (!desktopDragStart(occupant, hasPlayer)) return;
                      e.dataTransfer.setData(
                        "application/x-slot",
                        String(occupant)
                      );
                      e.dataTransfer.setData("text/plain", String(occupant));
                      e.dataTransfer.effectAllowed = "move";
                    }}
                    onDragOver={(e) => {
                      e.preventDefault();
                      e.dataTransfer.dropEffect = "move";
                    }}
                    onDrop={(e) => {
                      e.preventDefault();
                      const src =
                        (e.dataTransfer.getData(
                          "application/x-slot"
                        ) as AnySlotKey) ||
                        (e.dataTransfer.getData("text/plain") as AnySlotKey);
                      if (!src || src === occupant) {
                        desktopDragEnd();
                        return;
                      }
                      const srcP = assignedPlayer(src);
                      const dstP = assignedPlayer(occupant);
                      const dstRole = roleForSlot(occupant);
                      const srcRole = roleForSlot(src);
                      const srcFitsDst =
                        !dstRole || (srcP && srcP.roles.includes(dstRole));
                      const dstFitsSrc =
                        !srcRole || !dstP || dstP.roles?.includes(srcRole);
                      if (srcFitsDst && dstFitsSrc) swapSlots(src, occupant);
                      desktopDragEnd();
                    }}
                    onDragEnd={desktopDragEnd}
                    // ---- Mobile: solo long-press (sin drag) ----
                    onTouchStart={(e) => onTouchStartLP(e, occupant)}
                    onTouchMove={(e) => onTouchMoveLP(e, occupant)}
                    onTouchEnd={(e) => onTouchEndLP(e, occupant)}
                    onTouchCancel={(e) => onTouchCancelLP(e, occupant)}
                  >
                    {p ? (
                      <Image
                        src={prefix + p.image}
                        alt={p.name}
                        fill
                        className="h-full w-full rounded-md object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="grid place-items-center h-full w-full rounded-xs text-gray-400">
                        <span className="text-sm font-semibold">
                          {meta ? meta.label : occupant}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Escuela */}
                  <div className="mt-0 flex items-center justify-center min-h-4">
                    <div
                      className={`text-center text-[10px] text-gray-300 truncate whitespace-nowrap ${
                        p ? "opacity-100" : "opacity-0"
                      }`}
                      style={{ maxWidth: `${slotPx}px` }}
                      title={p ? p.team : ""}
                    >
                      {p ? p.team : "placeholder"}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* LI */}
            <div className={gridClassForSlot("LI")}>
              {(() => {
                const occupant: AnySlotKey = "LI";
                const p = getPlayerById(assignments[occupant] ?? "");
                const isActive = selectedSlot === occupant;
                const meta = SLOTS.find((s) => s.key === occupant);
                const hasPlayer = !!p;

                return (
                  <>
                    <div className="flex items-end justify-center min-h-3">
                      <div
                        className={`text-[12px] font-medium truncate whitespace-nowrap ${
                          p ? "opacity-100" : "opacity-0"
                        }`}
                        style={{ maxWidth: `${slotPx}px` }}
                        title={p ? `${p.shortName} — ${meta?.label ?? ""}` : ""}
                      >
                        {p
                          ? `${p.shortName} — ${meta?.label ?? ""}`
                          : "placeholder"}
                      </div>
                    </div>
                    <div
                      data-slotkey="LI"
                      data-interactive="true"
                      className={[
                        "relative rounded-2xl bg-neutral-700 transition",
                        "p-0",
                        "aspect-[19/26]",
                        isActive
                          ? "ring-2 ring-white shadow"
                          : "hover:bg-neutral-600",
                        cardHL(p?.id),
                        dragging && dropAllowed.has(occupant)
                          ? "outline outline-2 outline-amber-400"
                          : "",
                      ].join(" ")}
                      style={{ width: `${slotPx}px` }}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (dragging || suppressNextClick.current[occupant]) {
                          suppressNextClick.current[occupant] = false;
                          return;
                        }
                        selectSlot(occupant);
                      }}
                      onContextMenu={(e) => {
                        e.preventDefault();
                        if (p) clearSlot(occupant);
                      }}
                      draggable={!!p && !isCoarse}
                      onDragStart={(e) => {
                        if (!desktopDragStart(occupant, hasPlayer)) return;
                        e.dataTransfer.setData(
                          "application/x-slot",
                          String(occupant)
                        );
                        e.dataTransfer.setData("text/plain", String(occupant));
                        e.dataTransfer.effectAllowed = "move";
                      }}
                      onDragOver={(e) => {
                        e.preventDefault();
                        e.dataTransfer.dropEffect = "move";
                      }}
                      onDrop={(e) => {
                        e.preventDefault();
                        const src =
                          (e.dataTransfer.getData(
                            "application/x-slot"
                          ) as AnySlotKey) ||
                          (e.dataTransfer.getData("text/plain") as AnySlotKey);
                        if (!src || src === occupant) {
                          desktopDragEnd();
                          return;
                        }
                        const srcP = assignedPlayer(src);
                        const dstP = assignedPlayer(occupant);
                        const dstRole = roleForSlot(occupant);
                        const srcRole = roleForSlot(src);
                        const srcFitsDst =
                          !dstRole || (srcP && srcP.roles.includes(dstRole));
                        const dstFitsSrc =
                          !srcRole || !dstP || dstP.roles?.includes(srcRole);
                        if (srcFitsDst && dstFitsSrc) swapSlots(src, occupant);
                        desktopDragEnd();
                      }}
                      onDragEnd={desktopDragEnd}
                      onTouchStart={(e) => onTouchStartLP(e, occupant)}
                      onTouchMove={(e) => onTouchMoveLP(e, occupant)}
                      onTouchEnd={(e) => onTouchEndLP(e, occupant)}
                      onTouchCancel={(e) => onTouchCancelLP(e, occupant)}
                    >
                      {p ? (
                        <Image
                          src={prefix + p.image}
                          alt={p.name}
                          fill
                          className="h-full w-full rounded-md object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="grid place-items-center h-full w-full rounded-xs text-gray-400">
                          <span className="text-sm font-semibold">
                            {meta ? meta.label : occupant}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="mt-0 flex items-center justify-center min-h-4">
                      <div
                        className={`text-center text-[10px] text-gray-500 truncate whitespace-nowrap ${
                          p ? "opacity-100" : "opacity-0"
                        }`}
                        style={{ maxWidth: `${slotPx}px` }}
                        title={p ? p.team : ""}
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
                    {/* TOGGLE SERVER (arriba de la banca) */}
                    <div className="flex items-center justify-center mt-4">
                      <div
                        role="tablist"
                        aria-label="Server"
                        className="inline-flex flex-col rounded-2xl border border-white/20 p-1 bg-neutral-800/60"
                      >
                        <button
                          role="tab"
                          aria-selected={server === "Japan"}
                          onClick={() => setServer("Japan")}
                          className={[
                            "px-3 py-1 text-xs rounded-full transition text-center",
                            server === "Japan"
                              ? "bg-orange-300 text-black font-semibold"
                              : "hover:bg-white/10",
                          ].join(" ")}
                        >
                          Japan
                        </button>
                        <button
                          role="tab"
                          aria-selected={server === "Global"}
                          onClick={() => setServer("Global")}
                          className={[
                            "px-3 py-1 text-xs rounded-full transition",
                            server === "Global"
                              ? "bg-orange-300 text-black font-semibold"
                              : "hover:bg-white/10",
                          ].join(" ")}
                        >
                          Global
                        </button>
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        </div>

        {/* ============ BANCA (md+) ============ */}
        <div
          className="hidden md:grid justify-items-center"
          style={{
            gridTemplateColumns: `repeat(${BENCH_COLS_MD}, ${benchSlotPx}px)`,
            gap: `${BENCH_GAP_PX}px`,
            width: `calc(${benchSlotPx}px * ${BENCH_COLS_MD} + ${BENCH_GAP_PX}px * ${
              BENCH_COLS_MD - 1
            })`,
            marginTop: "20px",
          }}
          data-interactive="true"
        >
          {BENCH_KEYS.map((bk) => {
            const p = getPlayerById(assignments[bk] ?? "");
            const isActive = selectedSlot === bk;
            const hasPlayer = !!p;

            return (
              <button
                data-slotkey={bk}
                key={bk}
                className={[
                  "relative rounded-2xl bg-neutral-500 overflow-hidden",
                  "flex items-center justify-center",
                  isActive
                    ? "ring-2 ring-black shadow"
                    : "hover:bg-neutral-400",
                  dragging && dropAllowed.has(bk)
                    ? "outline outline-2 outline-amber-400"
                    : "",
                  cardHL(p?.id),
                ].join(" ")}
                style={{
                  width: `${benchSlotPx}px`,
                  height: `${benchSlotPx}px`,
                }}
                title={p ? `${p.name} · ${p.team}` : "Bench"}
                onClick={(e) => {
                  e.stopPropagation();
                  if (dragging || suppressNextClick.current[bk]) {
                    suppressNextClick.current[bk] = false;
                    return;
                  }
                  selectSlot(bk);
                }}
                onContextMenu={(e) => {
                  e.preventDefault();
                  if (p) clearSlot(bk);
                }}
                // Desktop DnD + resaltado
                draggable={!!p && !isCoarse}
                onDragStart={(e) => {
                  if (!desktopDragStart(bk, hasPlayer)) return;
                  e.dataTransfer.setData("application/x-slot", String(bk));
                  e.dataTransfer.setData("text/plain", String(bk));
                  e.dataTransfer.effectAllowed = "move";
                }}
                onDragOver={(e) => {
                  e.preventDefault();
                  e.dataTransfer.dropEffect = "move";
                }}
                onDrop={(e) => {
                  e.preventDefault();
                  const src =
                    (e.dataTransfer.getData(
                      "application/x-slot"
                    ) as AnySlotKey) ||
                    (e.dataTransfer.getData("text/plain") as AnySlotKey);
                  if (!src || src === bk) {
                    desktopDragEnd();
                    return;
                  }
                  const srcP = assignedPlayer(src);
                  const dstP = assignedPlayer(bk);
                  const dstRole = roleForSlot(bk);
                  const srcRole = roleForSlot(src);
                  const srcFitsDst =
                    !dstRole || (srcP && srcP.roles.includes(dstRole));
                  const dstFitsSrc =
                    !srcRole || !dstP || dstP.roles?.includes(srcRole);
                  if (srcFitsDst && dstFitsSrc) swapSlots(src, bk);
                  desktopDragEnd();
                }}
                onDragEnd={desktopDragEnd}
                // Mobile: solo long-press (sin drag)
                onTouchStart={(e) => onTouchStartLP(e, bk)}
                onTouchMove={(e) => onTouchMoveLP(e, bk)}
                onTouchEnd={(e) => onTouchEndLP(e, bk)}
                onTouchCancel={(e) => onTouchCancelLP(e, bk)}
              >
                {p ? (
                  <Image
                    src={prefix + p.image}
                    alt={p.name}
                    fill
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-gray-300 text-sm">+</span>
                )}
              </button>
            );
          })}
          <div className="col-span-full text-center text-[12px] text-gray-400 mt-1">
            Bench
          </div>
        </div>
      </div>

      {/* ============ BANCA (< md) ============ */}
      <div className="md:hidden mt-3" data-interactive="true">
        <div
          className="flex flex-wrap justify-center"
          style={{ gap: `${BENCH_GAP_PX}px` }}
        >
          {BENCH_KEYS.map((bk) => {
            const p = getPlayerById(assignments[bk] ?? "");
            const isActive = selectedSlot === bk;

            return (
              <button
                key={bk}
                className={[
                  "relative rounded-xl bg-neutral-500 overflow-hidden",
                  "flex items-center justify-center",
                  isActive
                    ? "ring-2 ring-black shadow"
                    : "hover:bg-neutral-400",
                  cardHL(p?.id),
                ].join(" ")}
                style={{
                  width: `${benchSlotPx}px`,
                  height: `${benchSlotPx}px`,
                }}
                title={p ? `${p.name} · ${p.team}` : "Bench"}
                onClick={(e) => {
                  e.stopPropagation();
                  if (suppressNextClick.current[bk]) {
                    suppressNextClick.current[bk] = false;
                    return;
                  }
                  selectSlot(bk);
                }}
                onContextMenu={(e) => {
                  e.preventDefault();
                  if (p) clearSlot(bk);
                }}
                onTouchStart={(e) => onTouchStartLP(e, bk)}
                onTouchMove={(e) => onTouchMoveLP(e, bk)}
                onTouchEnd={(e) => onTouchEndLP(e, bk)}
                onTouchCancel={(e) => onTouchCancelLP(e, bk)}
              >
                {p ? (
                  <Image
                    src={prefix + p.image}
                    alt={p.name}
                    fill
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-gray-300 text-sm">+</span>
                )}
              </button>
            );
          })}
        </div>
        <div className="text-center text-[12px] text-gray-400 mt-2">Bench</div>
      </div>
    </div>
  );
}
