// src/components/explore/ExplorePlayers.tsx
"use client";

import { useMemo, useState } from "react";
import type { Player, Role } from "@/types";
import { players } from "@/data/players";

const norm = (s: string) => s.trim().toLowerCase();

const ALL_TYPES: string[] = (() => {
  const seen = new Set<string>();
  const prettyByKey = new Map<string, string>(); // key=norm, value=pretty
  for (const p of players) {
    const tags = p.typeTags ?? [];
    for (const t of tags) {
      const k = norm(t);
      if (!seen.has(k)) {
        seen.add(k);
        prettyByKey.set(k, t);
      }
    }
    // fallback: si no tuviera typeTags, intentamos derivarlo de skills
    if ((!p.typeTags || p.typeTags.length === 0) && p.skills?.length) {
      for (const s of p.skills) {
        const k = norm(s.name);
        if (!seen.has(k)) {
          seen.add(k);
          prettyByKey.set(k, s.name);
        }
      }
    }
  }
  return Array.from(prettyByKey.values()).sort((a, b) => a.localeCompare(b));
})();

type ExploreProps = {
  onInspect: (p: Player) => void;
  onBeginHighlight?: (roles: Role[] | Set<Role>) => void;
  onEndHighlight?: () => void;
};

const POSITIONS: Role[] = ["S", "MB", "WS", "OP", "LI"];
const SKILL_TYPES = [
  "Power Attack",
  "Serve",
  "Block",
  "Quick attack",
  "Receive",
  "Setter",
] as const;

export default function ExplorePlayers({
  onInspect,
  onBeginHighlight,
  onEndHighlight,
}: ExploreProps) {
  // -------- Filtros locales --------
  const [filterSchool, setFilterSchool] = useState<string>("all");
  const [filterPosition, setFilterPosition] = useState<string>("all");
  const [filterType, setFilterType] = useState<string>("all");

  const allSchools = useMemo(
    () => Array.from(new Set(players.map((p) => p.team))).sort(),
    []
  );

  const filtered = useMemo(() => {
    return players.filter((p) => {
      const passSchool = filterSchool === "all" || p.team === filterSchool;

      const passPos =
        filterPosition === "all" || p.roles.includes(filterPosition as Role);

      const passType =
        filterType === "all" ||
        (() => {
          const target = norm(filterType);
          const tags = (p.typeTags ?? []).map(norm);
          if (tags.includes(target)) return true;

          // fallback legacy: por si algún jugador no trae typeTags
          const skillNames = (p.skills ?? []).map((s) => norm(s.name));
          return skillNames.includes(target);
        })();

      return passSchool && passPos && passType;
    });
  }, [filterSchool, filterPosition, filterType]);

  const clearFilters = () => {
    setFilterSchool("all");
    setFilterPosition("all");
    setFilterType("all");
  };

  return (
    <section className="rounded-2xl border p-3">
      {/* Filtros */}
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
            ...ALL_TYPES.map((t) => ({ value: t, label: t })),
          ]}
        />

        {(filterSchool !== "all" ||
          filterPosition !== "all" ||
          filterType !== "all") && (
          <button
            onClick={clearFilters}
            className="ml-auto rounded-md border px-2 py-1 text-xs hover:bg-gray-50"
          >
            Clear
          </button>
        )}
      </div>

      {/* Grid Responsivo */}
      {filtered.length === 0 ? (
        <p className="text-sm text-gray-500">No players found.</p>
      ) : (
        <div
          /*
           * Claves de responsividad:
           * --card: ancho mínimo/máximo de cada tarjeta
           * --gap:  separación entre tarjetas
           * El grid calcula cuántas caben por fila sin encimar.
           */
          style={{
            ["--card" as any]: "clamp(10px, 16vw, 60px)",
            ["--gap" as any]: "clamp(4px, 1.2vw, 6px)",
          }}
          className="grid gap-[var(--gap)]"
        >
          <div
            className="grid"
            style={{
              gridTemplateColumns:
                "repeat(auto-fill, minmax(var(--card), 1fr))",
              gap: "var(--gap)",
            }}
          >
            {filtered.map((p) => (
              <PlayerCard
                key={p.id}
                p={p}
                onClick={() => onInspect(p)}
                onBeginHighlight={onBeginHighlight}
                onEndHighlight={onEndHighlight}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

/* ---------- Subcomponentes locales ---------- */

function PlayerCard({
  p,
  onClick,
  onBeginHighlight,
  onEndHighlight,
}: {
  p: Player;
  onClick: () => void;
  onBeginHighlight?: (roles: Role[] | Set<Role>) => void;
  onEndHighlight?: () => void;
}) {
  return (
    <button
      data-interactive="true"
      draggable
      onDragStart={() => onBeginHighlight?.(p.roles)}
      onDragEnd={() => onEndHighlight?.()}
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
      className="group relative block rounded-lg border hover:border-black overflow-hidden"
      style={{ width: "100%" }}
      title={`${p.name} · ${p.team}`}
    >
      <div className="w-full aspect-[19/26]">
        <img
          src={p.image}
          alt={p.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
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
