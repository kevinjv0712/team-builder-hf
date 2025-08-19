// src/components/list/PlayersList.tsx
"use client";

import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { players } from "@/data/players";
import { useSelectionStore } from "@/stores/selectionStore";
import { useHasMounted } from "@/utils/useHasMounted";

// ===== Parámetros ajustables =====
const COLS_XS = 8; // < sm
const COLS_SM = 10; // ≥ sm
const COLS_XL = 14; // ≥ xl
const CARD_GAP = 8;
const MIN_SAFE = 48;
const MAX_CARD = 160;
const SECTION_GAP = 16;

export default function PlayersList() {
  const setSelectedPlayer = useSelectionStore((s) => s.setSelectedPlayer);

  // ---------- Opciones de filtros (derivadas del dataset) ----------
  const teams = useMemo(() => {
    const s = new Set<string>();
    players.forEach((p: any) => p.team && s.add(p.team));
    return ["Todos", ...Array.from(s).sort()];
  }, []);

  const roles = ["Todos", "S", "WS", "MB", "OP", "LI"];

  const hasTypeTags = useMemo(
    () => players.some((p: any) => (p.typeTags ?? []).length > 0),
    []
  );

  const allTypeTags = useMemo(() => {
    const s = new Set<string>();
    players.forEach((p: any) =>
      (p.typeTags ?? []).forEach((t: string) => s.add(t))
    );
    return ["Todos", ...Array.from(s).sort()];
  }, []);

  // ---------- Estado filtros ----------
  const [query, setQuery] = useState("");
  const [team, setTeam] = useState<string>("Todos");
  const [role, setRole] = useState<string>("Todos");
  const [typeTag, setTypeTag] = useState<string>(hasTypeTags ? "Todos" : "N/A");

  // ---------- Filtrado ----------
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return players.filter((p: any) => {
      if (team !== "Todos" && p.team !== team) return false;
      if (role !== "Todos" && !(p.roles || []).includes(role)) return false;
      if (
        hasTypeTags &&
        typeTag !== "Todos" &&
        !(p.typeTags || []).includes(typeTag)
      )
        return false;
      if (
        q &&
        !(
          p.name?.toLowerCase().includes(q) ||
          p.shortName?.toLowerCase().includes(q)
        )
      )
        return false;
      return true;
    });
  }, [team, role, typeTag, query, hasTypeTags]);

  // ---------- Layout responsivo: muchas columnas, mini-thumbs ----------
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardPx, setCardPx] = useState(90);

  useLayoutEffect(() => {
    const el = containerRef.current;
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
      if (s > MAX_CARD) s = MAX_CARD; // miniaturas siempre pequeñas
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

  const mounted = useHasMounted();

  if (!mounted) {
    // SSR: markup fijo y pequeño; nada controlado ni calculado
    return (
      <div className="w-full" suppressHydrationWarning>
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <div className="h-7 w-28 rounded bg-neutral-800/40" />
          <div className="h-7 w-28 rounded bg-neutral-800/40" />
          <div className="h-7 w-20 rounded bg-neutral-800/40" />
          <div className="h-7 w-20 rounded bg-neutral-800/40" />
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="rounded bg-neutral-800/40"
              style={{ width: 72, aspectRatio: "19 / 26" }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full" suppressHydrationWarning data-interactive="true">
      {/* Controles */}
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <label className="flex items-center gap-1">
          <span className="text-[10px] uppercase tracking-wide opacity-70">
            Buscar
          </span>
          <input
            className="rounded border bg-neutral-900 px-2 py-1 text-xs"
            placeholder="..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            data-interactive="true"
          />
        </label>

        <label className="flex items-center gap-1">
          <span className="text-[10px] uppercase tracking-wide opacity-70">
            Equipo
          </span>
          <select
            suppressHydrationWarning
            className="rounded border bg-neutral-900 px-2 py-1 text-xs"
            value={team}
            onChange={(e) => setTeam(e.target.value)}
            data-interactive="true"
          >
            {teams.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>

        <label className="flex items-center gap-1">
          <span className="text-[10px] uppercase tracking-wide opacity-70">
            Posición
          </span>
          <select
            className="rounded border bg-neutral-900 px-2 py-1 text-xs"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            data-interactive="true"
          >
            {roles.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </label>

        {hasTypeTags && (
          <label className="flex items-center gap-1">
            <span className="text-[10px] uppercase tracking-wide opacity-70">
              Type
            </span>
            <select
              className="rounded border bg-neutral-900 px-2 py-1 text-xs"
              value={typeTag}
              onChange={(e) => setTypeTag(e.target.value)}
              data-interactive="true"
            >
              {allTypeTags.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </label>
        )}

        <button
          className="rounded border px-2 py-1 text-xs hover:bg-white/10"
          onClick={() => {
            setQuery("");
            setTeam("Todos");
            setRole("Todos");
            if (hasTypeTags) setTypeTag("Todos");
          }}
          title="Limpiar filtros"
          data-interactive="true"
        >
          Limpiar
        </button>
      </div>

      {/* Grid miniaturas: NO rellena; muchas columnas; centrado */}
      <div ref={containerRef}>
        <div className="flex flex-wrap" style={{ gap: `${CARD_GAP}px` }}>
          {filtered.map((p: any) => (
            <button
              key={p.id}
              onClick={() => setSelectedPlayer(p.id)}
              className="relative rounded-lg border border-white/40 bg-neutral-800 hover:bg-neutral-700 transition overflow-hidden"
              style={{ width: `${cardPx}px`, aspectRatio: "19 / 26" }}
              title={`${p.name} · ${p.team}`}
              data-interactive="true"
            >
              <img
                src={p.image}
                alt={p.name}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 p-1.5 bg-black/45 text-left">
                <div className="text-[11px] font-medium truncate">
                  {p.shortName ?? p.name}
                </div>
                <div className="text-[10px] opacity-80 truncate">{p.team}</div>
              </div>
            </button>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="mt-4 text-center text-xs text-gray-400">
            Sin resultados.
          </p>
        )}
      </div>

      <div style={{ height: SECTION_GAP }} />
    </div>
  );
}
