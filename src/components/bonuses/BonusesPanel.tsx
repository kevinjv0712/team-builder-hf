// src/components/bonuses/BonusesPanel.tsx
"use client";

import { useMemo, useRef, useState, useLayoutEffect, useEffect } from "react";
import { players } from "@/data/players";
import { useTeamStore } from "@/stores/teamStore";
import { schoolBonds } from "@/data/schoolBonds";

// Ajustes
const SCHOOL_THRESHOLD = 3;
const THUMB_MIN = 24;
const THUMB_MAX = 56;
const CHIP_GAP = 8;
const PANEL_RADIUS = 12;
const STARTER_KEYS = ["S", "MB1", "WS1", "OP", "MB2", "WS2", "LI"] as const;

// Fondo por escuela cuando hay bono activo (para la sección de Bonos)
const TEAM_BG: Record<string, string> = {
  AobaJohsai: "/teams/aoba-johsai.webp",
  Date: "/teams/date.webp",
  Fukurodani: "/teams/fukurodani.webp",
  Inarizaki: "/teams/inarizaki.webp",
  Karasuno: "/teams/karasuno.jpeg",
  Nekoma: "/teams/nekoma.webp",
  Shiratorizawa: "/teams/shiratorizawa.webp",
};

type BondEntry = { name: string; effect?: string; participants: string[] };
type SelectedBond =
  | { kind: "school"; team: string; count: number }
  | { kind: "player"; name: string; effect?: string; participants: string[] };

export default function BonusesPanel({
  onHighlightChange,
}: {
  onHighlightChange?: (ids: Set<string>) => void;
}) {
  // 1) Hooks SIEMPRE primero (sin returns aún)
  const assignments = useTeamStore((s) => s.assignments);

  const [sel, setSel] = useState<SelectedBond | null>(null);

  const wrapRef = useRef<HTMLDivElement>(null);
  const [thumbPx, setThumbPx] = useState(32);
  useLayoutEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const compute = () => {
      const W = el.clientWidth;
      const t = Math.max(THUMB_MIN, Math.min(THUMB_MAX, Math.round(W * 0.06)));
      setThumbPx(t);
    };
    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(el);
    window.addEventListener("resize", compute);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", compute);
    };
  }, []);

  const onCourtIds = useMemo(() => {
    const ids = new Set<string>();
    STARTER_KEYS.forEach((k) => {
      const id = (assignments as any)[k];
      if (id) ids.add(id);
    });
    return ids;
  }, [assignments]);

  const onCourtPlayers = useMemo(
    () =>
      Array.from(onCourtIds)
        .map((id) => players.find((p: any) => p.id === id))
        .filter(Boolean) as any[],
    [onCourtIds]
  );

  const { dominantTeam, dominantCount } = useMemo(() => {
    const m = new Map<string, number>();
    for (const p of onCourtPlayers) {
      if (!p?.team) continue;
      m.set(p.team, (m.get(p.team) ?? 0) + 1);
    }
    let topTeam = "";
    let topCount = 0;
    m.forEach((count, team) => {
      if (count > topCount) {
        topTeam = team;
        topCount = count;
      }
    });
    return { dominantTeam: topTeam, dominantCount: topCount };
  }, [onCourtPlayers]);

  const schoolActive = useMemo(
    () => Boolean(dominantTeam && dominantCount >= SCHOOL_THRESHOLD),
    [dominantTeam, dominantCount]
  );

  const dominantBg = useMemo(() => {
    if (!schoolActive) return "";
    return TEAM_BG[dominantTeam] ?? "";
  }, [schoolActive, dominantTeam]);

  const activeBonds = useMemo(() => {
    const map = new Map<string, BondEntry>();
    for (const p of onCourtPlayers) {
      for (const b of p.bonds ?? []) {
        const participants: string[] = b?.participants?.length
          ? b.participants
          : b?.to
          ? [b.to]
          : [];
        const isActive = participants.some((id) => onCourtIds.has(id));
        if (!isActive) continue;
        const key = b.name ?? "Unnamed Bond";
        const prev = map.get(key);
        if (!prev) {
          map.set(key, {
            name: key,
            effect: b.effect,
            participants: [...new Set(participants)],
          });
        } else {
          const merged = new Set([...prev.participants, ...participants]);
          map.set(key, { ...prev, participants: Array.from(merged) });
        }
      }
    }
    return Array.from(map.values());
  }, [onCourtPlayers, onCourtIds]);

  // ids a resaltar según selección
  useEffect(() => {
    if (!onHighlightChange) return;
    if (!sel) {
      onHighlightChange(new Set());
      return;
    }

    if (sel.kind === "school") {
      const ids = new Set(
        onCourtPlayers.filter((p) => p.team === sel.team).map((p) => p.id)
      );
      onHighlightChange(ids);
      return;
    }

    // bond de jugador: resaltar participantes (si alguno está en cancha)
    onHighlightChange(new Set(sel.participants));
  }, [sel, onHighlightChange, onCourtPlayers]);

  const participants = useMemo(() => {
    if (!sel || sel.kind !== "player") return [];
    return sel.participants
      .map((id) => players.find((pp: any) => pp.id === id))
      .filter(Boolean) as any[];
  }, [sel]);

  // 2) Ya con todos los hooks llamados, ahora sí podemos decidir ocultar
  const shouldHide = !schoolActive && activeBonds.length === 0;
  if (shouldHide) return null;

  // 3) Handlers (no-hooks)
  const toggleSchool = () =>
    setSel((s) =>
      s?.kind === "school"
        ? null
        : { kind: "school", team: dominantTeam, count: dominantCount }
    );

  const toggleBond = (b: BondEntry) =>
    setSel((s) =>
      s?.kind === "player" && s.name === b.name
        ? null
        : {
            kind: "player",
            name: b.name,
            effect: b.effect,
            participants: b.participants,
          }
    );

  const schoolInfo = dominantTeam ? schoolBonds[dominantTeam] : undefined;

  // 4) Render
  return (
    <section
      ref={wrapRef}
      className="relative bg-natural-300 rounded-xl p-4 overflow-hidden"
      style={{ borderRadius: PANEL_RADIUS }}
      data-interactive="true"
    >
      {schoolActive && dominantBg && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `url(${dominantBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "saturate(0.7)",
            opacity: 0.25,
          }}
        />
      )}

      <div className="relative">
        <h4 className="text-sm font-bold mb-2">Bonificaciones</h4>

        {schoolActive && (
          <div className="mb-2">
            <button
              onClick={toggleSchool}
              className={`text-xs rounded-full px-2 py-1 mr-2 mb-2 border ${
                sel?.kind === "school" ? "bg-white text-black" : "bg-black/40"
              }`}
            >
              Escuela activa:
              <span className="font-medium ml-1">{dominantTeam}</span>
              <span className="opacity-80"> · {dominantCount} titulares</span>
            </button>
          </div>
        )}

        {activeBonds.length > 0 && (
          <div className="flex flex-wrap" style={{ gap: CHIP_GAP }}>
            {activeBonds.map((b) => (
              <button
                key={b.name}
                onClick={() => toggleBond(b)}
                className={`text-xs rounded-full px-2 py-1 border ${
                  sel?.kind === "player" && sel.name === b.name
                    ? "bg-white text-black"
                    : "bg-black/40"
                }`}
                title={b.effect || b.name}
              >
                {b.name}
              </button>
            ))}
          </div>
        )}

        {sel && (
          <div className="mt-3 rounded-lg border bg-black/40 p-3">
            {sel.kind === "school" ? (
              <>
                <div className="text-sm font-semibold mb-1">
                  {schoolInfo?.name ?? `${sel.team} — Bond de Escuela`}
                </div>
                <div className="text-xs text-gray-200">
                  {schoolInfo?.effect ??
                    `Activo con ${sel.count} titulares de ${sel.team}.`}
                </div>
              </>
            ) : (
              <>
                <div className="text-sm font-semibold mb-1">{sel.name}</div>
                {sel.effect && (
                  <div className="text-xs text-gray-200">{sel.effect}</div>
                )}
                {participants.length > 0 && (
                  <div className="mt-2 flex -space-x-1">
                    {participants.map((pp: any) => (
                      <img
                        key={pp.id}
                        src={pp.image}
                        alt={pp.name}
                        title={`${pp.shortName ?? pp.name} · ${pp.team}`}
                        className="rounded object-cover border"
                        loading="lazy"
                        style={{ width: thumbPx, height: thumbPx }}
                      />
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
