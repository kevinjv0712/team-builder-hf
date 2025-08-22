// src/components/available/AvailableForSlot.tsx
"use client";

import { useLayoutEffect, useMemo, useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { players } from "@/data/players";
import { useTeamStore } from "@/stores/teamStore";
import type { AnySlotKey } from "@/stores/teamStore";
import { useHasMounted } from "@/utils/useHasMounted";
import { useSettingsStore } from "@/stores/settingStore";
import { prefix } from "@/utils/prefix";
import Image from "next/image";

/* ========= Parámetros AJUSTABLES ========= */
const COLS_XS = 5; // < sm
const COLS_SM = 10; // ≥ sm
const COLS_XL = 12; // ≥ xl

const CARD_GAP = 8;
const SECTION_GAP = 12;

const MIN_SAFE = 70; // px
const MAX_CARD = 180; // px (tope superior)

const PANEL_MARGIN = 8; // margen a bordes de viewport
const PANEL_MAX_W = 920; // ancho máximo del panel
const PANEL_MIN_W = 280; // ancho mínimo del panel
const PANEL_MAX_H_VH = 80; // alto máximo del panel en % de viewport

/* ===== Helpers de rol/slots ===== */
const STARTER_KEYS = new Set(["S", "MB1", "WS1", "OP", "MB2", "WS2", "LI"]);
const roleForSlot = (k: AnySlotKey | null | undefined) =>
  k === "S"
    ? "S"
    : k === "LI"
    ? "LI"
    : k === "OP"
    ? "OP"
    : k === "WS1" || k === "WS2"
    ? "WS"
    : k === "MB1" || k === "MB2"
    ? "MB"
    : null;

const isBenchSlot = (k: AnySlotKey | null | undefined) =>
  !!k && !STARTER_KEYS.has(k);

const NAME_BY_ID: Record<string, string> = Object.fromEntries(
  players.map((p) => [p.id, p.name] as const)
);

function hasBondWithOnCourt(candidate: any, onCourtIds: Set<string>): boolean {
  if (!candidate?.bonds?.length) return false;
  for (const b of candidate.bonds) {
    const participants = b?.participants?.length
      ? b.participants
      : b?.to
      ? [b.to]
      : [];
    if (participants?.some((id: string) => onCourtIds.has(id))) return true;
  }
  return false;
}

/* ====== Panel flotante anclado a un slot ====== */
export default function AvailableForSlot({
  open = true,
  onClose,
}: {
  open?: boolean;
  onClose?: () => void;
}) {
  const server = useSettingsStore((s) => s.server);
  const mounted = useHasMounted();
  const { selectedSlot, assignments } = useTeamStore();
  const selectSlot = useTeamStore((s) => s.selectSlot);

  const assignToSelected =
    (useTeamStore.getState() as any).assignToSelected ||
    ((pid: string) => console.warn("Falta assignToSelected(pid) en el store"));

  // IDs ya usados (se excluyen de la lista)
  const assignedIds = useMemo(() => {
    const vals = Object.values(assignments ?? {}).filter(Boolean) as string[];
    return new Set(vals);
  }, [assignments]);

  const assignedNamesExceptSelected = useMemo(() => {
    const out = new Set<string>();
    Object.entries(assignments ?? {}).forEach(([k, pid]) => {
      if (!pid) return;
      if (k === (selectedSlot ?? "")) return; // ignora el slot actual
      const nm = NAME_BY_ID[pid];
      if (nm) out.add(nm);
    });
    return out;
  }, [assignments, selectedSlot]);

  const selectedRole = roleForSlot(selectedSlot as AnySlotKey);
  const showAll = isBenchSlot(selectedSlot);

  // Filtrado por slot
  const base = useMemo(() => {
    if (!selectedSlot) return [] as any[];
    const pool =
      showAll || !selectedRole
        ? players
        : players.filter((p) => p.roles?.includes(selectedRole));
    const serverOK = (p: any) =>
      server === "Global" ? (p.server ?? "Global") === "Global" : true; // Japan muestra todo
    return pool.filter(
      (p) =>
        !assignedIds.has(p.id) && // no repitas misma carta
        !assignedNamesExceptSelected.has(p.name) && // no repitas el mismo NOMBRE en otro slot
        serverOK(p)
    );
  }, [
    selectedSlot,
    showAll,
    selectedRole,
    assignedIds,
    assignedNamesExceptSelected,
    server,
  ]);

  // IDs en cancha para recomendaciones
  const onCourtIds = useMemo(() => {
    const ids = new Set<string>();
    STARTER_KEYS.forEach((k) => {
      const id = (assignments as any)[k];
      if (id) ids.add(id);
    });
    return ids;
  }, [assignments]);

  const recommended = useMemo(
    () => base.filter((p) => hasBondWithOnCourt(p, onCourtIds)),
    [base, onCourtIds]
  );
  const others = useMemo(
    () => base.filter((p) => !hasBondWithOnCourt(p, onCourtIds)),
    [base, onCourtIds]
  );

  /* ===== Tamaño de tarjeta ===== */
  const contentRef = useRef<HTMLDivElement>(null);
  const [cardPx, setCardPx] = useState(90);

  useLayoutEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const mqlSm = window.matchMedia("(min-width: 640px)");
    const mqlXl = window.matchMedia("(min-width: 1280px)");

    const compute = () => {
      const W = el.clientWidth;
      const colsTarget = mqlXl.matches
        ? COLS_XL
        : mqlSm.matches
        ? COLS_SM
        : COLS_XS;
      let s = Math.floor((W - CARD_GAP * (colsTarget - 1)) / colsTarget);
      if (!Number.isFinite(s) || s < MIN_SAFE) s = MIN_SAFE;
      if (s > MAX_CARD) s = MAX_CARD;
      setCardPx(s);
    };

    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(el);
    mqlSm.addEventListener("change", compute);
    mqlXl.addEventListener("change", compute);
    window.addEventListener("resize", compute);
    return () => {
      ro.disconnect();
      mqlSm.removeEventListener("change", compute);
      mqlXl.removeEventListener("change", compute);
      window.removeEventListener("resize", compute);
    };
  }, [mounted]);

  /* ===== Posicionamiento anclado ===== */
  const [pos, setPos] = useState<{ left: number; top: number; width: number }>({
    left: 0,
    top: 0,
    width: 360,
  });

  const recomputePosition = () => {
    if (!selectedSlot || !mounted) return;

    const anchor =
      (document.querySelector(
        `[data-slotkey="${selectedSlot}"]`
      ) as HTMLElement) || null;

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const width = Math.min(
      Math.max(PANEL_MIN_W, Math.round(vw * 0.9)),
      PANEL_MAX_W
    );

    // Default: centro de la pantalla
    let left = Math.round(Math.max(PANEL_MARGIN, (vw - width) / 2));
    let top = Math.round(PANEL_MARGIN + 56); // bajo el header fijo como fallback

    if (anchor) {
      const r = anchor.getBoundingClientRect();
      const centerX = r.left + r.width / 2;

      // Preferimos debajo del slot, centrado
      let candidateTop = Math.round(r.bottom + PANEL_MARGIN);
      let candidateLeft = Math.round(
        Math.min(
          Math.max(centerX - width / 2, PANEL_MARGIN),
          vw - width - PANEL_MARGIN
        )
      );

      // Si no hay espacio abajo, intentamos arriba
      const maxHeight = Math.round((PANEL_MAX_H_VH / 100) * vh);
      const needHeight = Math.min(maxHeight, vh - 2 * PANEL_MARGIN);
      if (candidateTop + needHeight > vh - PANEL_MARGIN) {
        candidateTop = Math.round(r.top - PANEL_MARGIN - needHeight);
        if (candidateTop < PANEL_MARGIN) {
          candidateTop = Math.round(
            Math.max(PANEL_MARGIN, vh - needHeight - PANEL_MARGIN)
          );
        }
      }

      left = candidateLeft;
      top = candidateTop;
    }

    setPos({ left, top, width });
  };

  useLayoutEffect(() => {
    if (!mounted || !selectedSlot) return;
    recomputePosition();

    const onScroll = () => {
      // Reposicionar mientras se desplaza
      recomputePosition();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", recomputePosition, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", recomputePosition);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted, selectedSlot]);

  const close = () => {
    try {
      selectSlot(null as any); // limpiamos el slot para que no se reabra
    } catch {}
    onClose?.(); // avisamos al padre para que ponga availableOpen=false
  };

  // Cerrar con Escape
  useEffect(() => {
    if (!selectedSlot) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedSlot]);

  // Si no hay slot seleccionado → no renderizamos nada
  if (!mounted || !selectedSlot) return null;

  const body = (
    <div className="fixed inset-0 z-50">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={close}
        aria-hidden
      />
      {/* panel */}
      <div
        role="dialog"
        aria-label="Available players"
        className="absolute rounded-xl border bg-neutral-900 shadow-xl"
        style={{
          left: pos.left,
          top: pos.top,
          width: pos.width,
          maxHeight: `min(${PANEL_MAX_H_VH}vh, 680px)`,
          overflow: "hidden",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* header del panel */}
        <div className="flex items-center justify-between gap-2 px-3 py-2 border-b border-white/10">
          <div className="text-md font-semibold text-gray-200">
            {showAll ? "Available Players" : `Available — ${selectedRole}`}
          </div>
          <button
            onClick={close}
            className="rounded border px-2 py-1 text-xs bg-neutral-400 hover:bg-white/10"
            aria-label="Close"
          >
            Close
          </button>
        </div>

        {/* contenido scroleable */}
        <div
          ref={contentRef}
          className="px-3 py-3 overflow-auto"
          style={{ maxHeight: `calc(min(${PANEL_MAX_H_VH}vh, 680px) - 40px)` }}
        >
          {recommended.length > 0 && (
            <section className="mb-[14px]">
              <div className="text-md text-neutral-300 font-semibold mb-2">
                Recommended
              </div>
              <ThumbGrid
                list={recommended}
                cardPx={cardPx}
                gap={CARD_GAP}
                onClick={(p) => {
                  assignToSelected(p.id);
                  close();
                }}
                showBadge
              />
            </section>
          )}

          <section
            style={{ marginTop: recommended.length ? `${SECTION_GAP}px` : 0 }}
          >
            <ThumbGrid
              list={others}
              cardPx={cardPx}
              gap={CARD_GAP}
              onClick={(p) => {
                assignToSelected(p.id);
                close();
              }}
            />
          </section>

          {recommended.length === 0 && others.length === 0 && (
            <p className="text-center text-xs text-gray-400 py-6">
              No hay jugadores disponibles para este slot.
            </p>
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(body, document.body);
}

/* ===================== Subcomponente: Grid ===================== */
function ThumbGrid({
  list,
  cardPx,
  gap,
  onClick,
  showBadge = false,
}: {
  list: any[];
  cardPx: number;
  gap: number;
  onClick: (p: any) => void;
  showBadge?: boolean;
}) {
  if (!list.length) return null;

  return (
    <div className="flex flex-wrap justify-center" style={{ gap: `${gap}px` }}>
      {list.map((p) => (
        <button
          key={p.id}
          onClick={() => onClick(p)}
          className="relative rounded-lg border border-white/40 bg-neutral-800 hover:bg-neutral-700 transition overflow-hidden"
          style={{
            width: `${cardPx}px`,
            aspectRatio: "19 / 26",
          }}
          title={`${p.name} · ${p.team}`}
        >
          <Image
            src={prefix + p.image}
            alt={p.name}
            fill
            className="object-cover"
            loading="lazy"
          />
          {showBadge && (
            <div className="absolute top-0 left-0 rounded-md bg-amber-400 text-black text-[8px] font-bold px-1.5 py-0.5">
              ★
            </div>
          )}
        </button>
      ))}
    </div>
  );
}
