// src/components/links/PlayerLinksPanel.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { useSelectionStore } from "@/stores/selectionStore";
import { players } from "@/data/players";
import { useTeamStore } from "@/stores/teamStore";

type Tab = "none" | "details" | "bonds";

export default function PlayerLinksPanel({
  forceTab,
  hideTabs = false,
}: {
  forceTab?: Extract<Tab, "details" | "bonds">;
  hideTabs?: boolean;
}) {
  const selectedPlayerId = useSelectionStore((s) => s.selectedPlayerId);
  const { assignments } = useTeamStore();

  const selected = useMemo(
    () => players.find((p: any) => p.id === selectedPlayerId) ?? null,
    [selectedPlayerId]
  );

  const [tab, setTab] = useState<Tab>(forceTab ?? "none");

  // Si nos fuerzan la pestaña desde fuera, la respetamos
  useEffect(() => {
    if (forceTab) setTab(forceTab);
  }, [forceTab, selectedPlayerId]);

  const onCourtIds = useMemo(() => {
    const KEYS = ["S", "MB1", "WS1", "OP", "MB2", "WS2", "LI"] as const;
    const ids = new Set<string>();
    KEYS.forEach((k) => {
      const id = (assignments as any)[k];
      if (id) ids.add(id);
    });
    return ids;
  }, [assignments]);

  const isBondActive = (b: any) => {
    const participants = b?.participants?.length
      ? b.participants
      : b?.to
      ? [b.to]
      : [];
    return participants?.some((id: string) => onCourtIds.has(id));
  };

  // ===== Niveles por skill (independientes) =====
  const skillKeyFor = (sk: any, i: number) => `${sk?.key ?? "skill"}-${i}`;
  const [skillLevel, setSkillLevel] = useState<
    Record<string, "1" | "2" | "3" | "4" | "5">
  >({});

  useEffect(() => {
    if (!selected) {
      setSkillLevel({});
      return;
    }
    const next: Record<string, "1" | "2" | "3" | "4" | "5"> = {};
    (selected.skills ?? []).forEach((sk: any, i: number) => {
      const lvls = sk?.levels ?? {};
      const chosen = (
        lvls["5"]
          ? "5"
          : lvls["4"]
          ? "4"
          : lvls["3"]
          ? "3"
          : lvls["2"]
          ? "2"
          : "1"
      ) as "1" | "2" | "3" | "4" | "5";
      next[skillKeyFor(sk, i)] = chosen;
    });
    setSkillLevel(next);
  }, [selected]);

  const StatRow = ({
    label,
    value,
  }: {
    label: string;
    value: string | number;
  }) => (
    <div className="flex items-center justify-between text-[12px] px-2 py-1 rounded border border-white/10">
      <span className="opacity-80">{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  );

  return (
    <div className="w-full" data-interactive="true">
      {/* Header jugador + tabs (opcional) */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          {selected ? (
            <img
              src={selected.image}
              alt={selected.name}
              className="h-12 w-12 rounded object-cover shrink-0"
              loading="lazy"
            />
          ) : (
            <div className="h-12 w-12 rounded bg-neutral-800/50 shrink-0" />
          )}
          <div className="min-w-0">
            <div className="text-sm font-semibold truncate">
              {selected ? selected.shortName ?? selected.name : "Sin selección"}
            </div>
            <div className="text-xs text-gray-400 truncate">
              {selected ? selected.team : "Selecciona un jugador"}
            </div>
          </div>
        </div>

        {!hideTabs && (
          <div className="flex gap-1 shrink-0">
            <button
              onClick={() =>
                setTab((t) => (t === "details" ? "none" : "details"))
              }
              className={`rounded-md border px-2 py-1 text-xs ${
                tab === "details"
                  ? "bg-orange-300 text-black font-semibold"
                  : "hover:bg-white/10"
              }`}
            >
              Details
            </button>
            <button
              onClick={() => setTab((t) => (t === "bonds" ? "none" : "bonds"))}
              className={`rounded-md border px-2 py-1 text-xs ${
                tab === "bonds"
                  ? "bg-orange-300 text-black font-semibold"
                  : "hover:bg-white/10"
              }`}
            >
              Bonds
            </button>
          </div>
        )}
      </div>

      {/* Contenido (NO ponemos overflow aquí; el contenedor móvil ya scrolea) */}
      {!selected ? (
        <div className="mt-3 text-sm text-gray-400">
          Selecciona un jugador para ver su información.
        </div>
      ) : (forceTab ?? tab) === "none" ? (
        <div className="mt-3 text-sm text-gray-300">
          {selected.shortName ?? selected.name} — {selected.team}
        </div>
      ) : (forceTab ?? tab) === "details" ? (
        <section className="mt-3 space-y-4">
          {/* Stats */}
          <div>
            <div className="text-xs font-semibold mb-2">Stats</div>
            <div className="grid grid-cols-2 gap-2">
              {selected.stats?.basic && (
                <>
                  <StatRow
                    label="Quick Attack"
                    value={selected.stats.basic.quickAttack}
                  />
                  <StatRow
                    label="Power Attack"
                    value={selected.stats.basic.powerAttack}
                  />
                  <StatRow label="Set" value={selected.stats.basic.set} />
                  <StatRow label="Serve" value={selected.stats.basic.serve} />
                  <StatRow
                    label="Receive"
                    value={selected.stats.basic.receive}
                  />
                  <StatRow label="Block" value={selected.stats.basic.block} />
                  <StatRow label="Save" value={selected.stats.basic.save} />
                </>
              )}
            </div>

            {(selected.stats?.bonusAttack || selected.stats?.bonusDefense) && (
              <div className="mt-3 grid grid-cols-2 gap-2">
                {selected.stats?.bonusAttack && (
                  <>
                    <StatRow
                      label="Awareness"
                      value={`${Math.round(
                        (selected.stats.bonusAttack.awareness ?? 0) * 100
                      )}%`}
                    />
                    <StatRow
                      label="Strength"
                      value={`${Math.round(
                        (selected.stats.bonusAttack.strength ?? 0) * 100
                      )}%`}
                    />
                    <StatRow
                      label="Atk Technique"
                      value={`${Math.round(
                        (selected.stats.bonusAttack.attackTechnique ?? 0) * 100
                      )}%`}
                    />
                  </>
                )}
                {selected.stats?.bonusDefense && (
                  <>
                    <StatRow
                      label="Reflex"
                      value={`${Math.round(
                        (selected.stats.bonusDefense.reflex ?? 0) * 100
                      )}%`}
                    />
                    <StatRow
                      label="Spirit"
                      value={`${Math.round(
                        (selected.stats.bonusDefense.spirit ?? 0) * 100
                      )}%`}
                    />
                    <StatRow
                      label="Def Technique"
                      value={`${Math.round(
                        (selected.stats.bonusDefense.defenseTechnique ?? 0) *
                          100
                      )}%`}
                    />
                  </>
                )}
              </div>
            )}
          </div>

          {/* Skills */}
          <div>
            <div className="text-xs font-semibold mb-2">Skills</div>
            {(selected.skills ?? []).length === 0 ? (
              <div className="text-xs text-gray-500">No skills.</div>
            ) : (
              <ul className="space-y-3">
                {selected.skills.map((sk: any, i: number) => {
                  const lvls = sk?.levels ?? {};
                  const ukey = skillKeyFor(sk, i);
                  const current = (skillLevel[ukey] ??
                    (lvls["5"]
                      ? "5"
                      : lvls["4"]
                      ? "4"
                      : lvls["3"]
                      ? "3"
                      : lvls["2"]
                      ? "2"
                      : "1")) as "1" | "2" | "3" | "4" | "5";
                  const setLvl = (n: "1" | "2" | "3" | "4" | "5") =>
                    setSkillLevel((s) => ({ ...s, [ukey]: n }));

                  return (
                    <li
                      key={`${selected.id}-${ukey}`}
                      className="rounded-lg border border-white/20 p-2"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="text-sm font-medium">{sk.name}</div>
                        <div className="flex items-center gap-1">
                          {(["1", "2", "3", "4", "5"] as const).map((n) => {
                            const enabled = !!lvls[n];
                            return (
                              <button
                                key={`${ukey}-lvl-${n}`}
                                disabled={!enabled}
                                onClick={() => enabled && setLvl(n)}
                                className={`h-6 w-6 rounded text-[11px] border transition
                                  ${
                                    !enabled
                                      ? "opacity-30 cursor-not-allowed"
                                      : "hover:bg-white/10"
                                  }
                                  ${
                                    enabled && current === n
                                      ? "bg-orange-300 text-black font-semibold"
                                      : ""
                                  }`}
                                title={enabled ? `Nivel ${n}` : "Sin nivel"}
                              >
                                {n}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                      <div className="mt-2 text-[12px] text-gray-200">
                        {lvls[current] ?? "Sin descripción para este nivel."}
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </section>
      ) : (
        // Bonds
        <section className="mt-1">
          <div className="text-xs font-semibold mb-2">Bonds</div>
          {(selected.bonds ?? []).length === 0 ? (
            <div className="text-xs text-gray-500">No bonds.</div>
          ) : (
            <ul className="space-y-2">
              {selected.bonds.map((b: any, i: number) => {
                const participants = b?.participants?.length
                  ? b.participants
                  : b?.to
                  ? [b.to]
                  : [];
                const active = isBondActive(b);
                const partPlayers = (participants || [])
                  .map((id: string) => players.find((pp: any) => pp.id === id))
                  .filter(Boolean) as any[];

                return (
                  <li
                    key={`${selected.id}-bond-${b.name}-${i}`}
                    className={`rounded border p-2 ${
                      active
                        ? "border-emerald-400 bg-emerald-950/20"
                        : "border-white/20"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="text-xs font-medium">{b.name}</div>
                      <span
                        className={`text-[10px] rounded px-2 py-0.5 ${
                          active
                            ? "bg-emerald-600 text-black"
                            : "bg-gray-300 text-gray-800"
                        }`}
                      >
                        {active ? "Activo" : "Inactivo"}
                      </span>
                    </div>
                    {b.effect && (
                      <div className="mt-1 text-[11px] text-gray-300">
                        {b.effect}
                      </div>
                    )}
                    {partPlayers.length > 0 && (
                      <div className="mt-2 flex -space-x-1">
                        {partPlayers.map((pp: any) => (
                          <img
                            key={`${b.name}-p-${pp.id}`}
                            src={pp.image}
                            alt={pp.name}
                            title={pp.name}
                            className="h-8 w-8 rounded object-cover border"
                            loading="lazy"
                          />
                        ))}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      )}
    </div>
  );
}
