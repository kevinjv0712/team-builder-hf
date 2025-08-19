// src/components/available/AvailableForSlot.tsx
"use client";

import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { players } from "@/data/players";
import { useTeamStore } from "@/stores/teamStore";
import type { AnySlotKey, BenchKey } from "@/stores/teamStore";

/* ========= Parámetros AJUSTABLES (lo importante) ========= */
// n° de columnas objetivo por breakpoint
const COLS_XS = 8; // < sm (muy pequeñas)
const COLS_SM = 10; // ≥ sm
const COLS_XL = 12; // ≥ xl (muy, muy pequeñas)

// separaciones
const CARD_GAP = 8; // gap entre tarjetas
const SECTION_GAP = 14; // separación vertical entre secciones

// límites de seguridad (no afectan el “ser pequeñas”, solo evitan rarezas)
const MIN_SAFE = 46; // px
const MAX_CARD = 160; // px (tope superior por si el contenedor es gigantesco)

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

// Bonds → ¿candidato tiene vínculo con alguien en cancha?
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

export default function AvailableForSlot() {
  const { selectedSlot, assignments } = useTeamStore();

  const assignToSelected =
    (useTeamStore.getState() as any).assignToSelected ||
    ((pid: string) => console.warn("Falta assignToSelected(pid) en el store"));

  const assignedIds = useMemo(() => {
    const vals = Object.values(assignments ?? {}).filter(Boolean) as string[];
    return new Set(vals);
  }, [assignments]);

  const selectedRole = roleForSlot(selectedSlot as AnySlotKey);
  const showAll = isBenchSlot(selectedSlot);
  // Filtrado base por rol (o todos si banca)
  const base = useMemo(() => {
    const pool =
      showAll || !selectedRole
        ? players
        : players.filter((p) => p.roles?.includes(selectedRole));
    return pool.filter((p) => !assignedIds.has(p.id));
  }, [selectedSlot, assignedIds]);

  // IDs en cancha (para recomendaciones)
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

  /* ===== Tamaño de tarjeta derivado del bloque padre (no “rellenar”) =====
     Estrategia: calculamos un ancho fijo de tarjeta en px según #columnas “target”.
     Usamos FLEX + WRAP; cada item tiene width fijo (no crece para rellenar).
     Si hay 1 sola tarjeta, queda PEQUEÑA y centrada (no enorme). */
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardPx, setCardPx] = useState(90);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const mqlSm = window.matchMedia("(min-width: 640px)");
    const mqlXl = window.matchMedia("(min-width: 1280px)");

    const compute = () => {
      const W = el.clientWidth; // ancho REAL del bloque
      const colsTarget = mqlXl.matches
        ? COLS_XL
        : mqlSm.matches
        ? COLS_SM
        : COLS_XS;

      // ancho de tarjeta “fijo” para lograr X columnas (sin rellenar):
      // card = floor((W - gap*(cols-1)) / cols)
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
  }, []);

  if (!selectedSlot) {
    return (
      <p className="text-sm text-gray-400">
        Selecciona un slot para ver jugadores disponibles.
      </p>
    );
  }

  return (
    <div ref={containerRef} className="w-full">
      {/* Recomendados (arriba si hay) */}
      {recommended.length > 0 && (
        <section className="mb-[14px]">
          <div className="text-xs font-semibold mb-2">Recomendados</div>
          <ThumbGrid
            list={recommended}
            cardPx={cardPx}
            gap={CARD_GAP}
            onClick={(p) => assignToSelected(p.id)}
            showBadge
          />
        </section>
      )}

      {/* Resto */}
      <section
        style={{ marginTop: recommended.length ? `${SECTION_GAP}px` : 0 }}
      >
        <ThumbGrid
          list={others}
          cardPx={cardPx}
          gap={CARD_GAP}
          onClick={(p) => assignToSelected(p.id)}
        />
      </section>
    </div>
  );
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
    <div className="flex flex-wrap" style={{ gap: `${gap}px` }}>
      {list.map((p) => (
        <button
          key={p.id}
          onClick={() => onClick(p)}
          className="relative rounded-lg border border-white/40 bg-neutral-800 hover:bg-neutral-700 transition overflow-hidden"
          style={{
            width: `${cardPx}px`,
            aspectRatio: "19 / 26", // mantiene 19:26
          }}
          title={`${p.name} · ${p.team}`}
        >
          <img
            src={p.image}
            alt={p.name}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          {/* badge */}
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
