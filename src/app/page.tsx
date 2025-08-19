// src/app/page.tsx
"use client";

import { useEffect, useState } from "react";
import LineupAndBench from "@/components/lineup/LineupAndBench";
import AvailableForSlot from "@/components/available/AvailableForSlot";
import PlayersList from "@/components/explore/PlayerList";
import PlayerDetails from "@/components/players/PlayerDetails";
import { useTeamStore } from "@/stores/teamStore";
import { useSelectionStore } from "@/stores/selectionStore";
import BonusesPanel from "@/components/bonuses/BonusesPanel";
import MobileSlidePanel from "@/components/mobile/MobileSlidePanel";

export default function Page() {
  // Panel de Vínculos en mobile (abre desde el header)
  const [linksOpen, setLinksOpen] = useState(false);

  // VISIBILIDAD CONDICIONAL (puedes cambiar los defaults para probar)
  const [showBonusMdUp, setShowBonusMdUp] = useState(true); // Bonificaciones en ≥ md
  const [showBonusMobile, setShowBonusMobile] = useState(true); // Bonificaciones en < md

  // Panel móvil que baja desde el header
  const [mobilePanel, setMobilePanel] = useState<"none" | "details" | "bonds">(
    "none"
  );

  const resetTeam = useTeamStore((s) => s.reset);
  const clearSelection = useSelectionStore((s) => s.clear);
  const [highlightIds, setHighlightIds] = useState<Set<string>>(new Set());

  const hardReset = () => {
    resetTeam?.();
    clearSelection();
    setHighlightIds(new Set());
  };

  // Bloquea el scroll del body cuando el panel móvil está abierto
  useEffect(() => {
    document.body.style.overflow = linksOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [linksOpen]);

  // Cerrar con Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLinksOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <main className="min-h-dvh text-neutral-100 bg-neutral-900/96">
      {/* HEADER:
          - < md: fijo arriba (siempre visible).
          - ≥ md: header normal (no sticky). */}
      <header
        className="
          fixed p-2 inset-x-0 top-0 z-40 h-14 bg-neutral-900/96
          md:static md:h-auto md:bg-neutral-900/96
        "
      >
        <div className="mx-auto max-w-7xl h-full px-4 flex items-center justify-between">
          <h1 className="text-base md:text-lg font-semibold tracking-wide">
            Haikyu Team Builder
          </h1>

          {/* Acciones desktop: 1 botón (≥ md) */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={hardReset}
              className="rounded border px-3 py-1.5 text-sm font-semibold
               border-red-400/70 text-red-300 bg-red-900/20
               hover:bg-red-800/30"
              title="Reset Team"
            >
              Reset
            </button>
          </div>

          {/* Acciones mobile: 3 botones (< md) */}
          <div className="flex md:hidden items-center gap-2">
            {/* Details */}
            <button
              onClick={() =>
                setMobilePanel((p) => (p === "details" ? "none" : "details"))
              }
              aria-expanded={mobilePanel === "details"}
              className={`rounded border px-3 py-1 text-sm ${
                mobilePanel === "details"
                  ? "bg-orange-300 text-black font-semibold"
                  : "border-white"
              }`}
            >
              Details
            </button>

            {/* Bonds */}
            <button
              onClick={() =>
                setMobilePanel((p) => (p === "bonds" ? "none" : "bonds"))
              }
              aria-expanded={mobilePanel === "bonds"}
              className={`rounded border px-3 py-1 text-sm ${
                mobilePanel === "bonds"
                  ? "bg-orange-300 text-black font-semibold"
                  : "border-white"
              }`}
            >
              Bonds
            </button>

            {/* Reset (peligroso) */}
            <button
              onClick={() => {
                // asumiendo que tu store tiene 'reset'
                const reset = useTeamStore.getState().reset;
                reset?.();
              }}
              className="rounded border px-3 py-1.5 text-sm font-semibold
               border-red-400/70 text-red-300 bg-red-900/20
               hover:bg-red-800/30"
              title="Reset Team"
            >
              Reset
            </button>
          </div>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <div className="mx-auto max-w-7xl px-4 pt-20 md:pt-4 pb-8">
        {/* Grid: 1 col en mobile; 2 col (2fr/1fr) en ≥ md → 67%/33% */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr]">
          {/* ======== MOBILE-ONLY: Bonificaciones primero (si está visible) ======== */}
          {showBonusMobile && (
            <section className="md:hidden rounded-xl bg-neutral-600/100 mb-2">
              <BonusesPanel />
            </section>
          )}

          {/* ======== COLUMNA IZQUIERDA (67%) ======== */}
          <div className="order-2 md:order-none md:min-w-0 space-y-2">
            {/* Jugadores (con tu componente existente) */}
            <section className="p-2">
              {/* Centrado dentro del bloque, sin lógica adicional */}
              <section className="w-full flex justify-center">
                {/* Si tu componente acepta props como highlightIds, pásalas aquí */}
                <LineupAndBench highlightIds={highlightIds} />
              </section>
            </section>

            {/* Disponibles */}
            <section className="pl-4 pb-2">
              <div className="w-full">
                <AvailableForSlot />
              </div>
            </section>

            {/* Lista */}
            <section className="rounded-xl bg-neutral-700/40 p-4">
              <PlayersList />
            </section>
          </div>

          {/* ======== COLUMNA DERECHA (33%) — SIEMPRE A LA VISTA (≥ md) ======== */}
          <aside className="hidden md:block">
            {/* Tu cálculo de ancho/posición para fixed (como ya lo resolviste) */}
            <div
              className="fixed top-14 flex flex-col gap-4"
              style={{
                width: "calc((100vw - 2rem) / 3 - 1.5rem)",
                maxWidth: "calc((1280px - 2rem) / 3 - 1.5rem)",
                right: `max(1rem, calc((100vw - 1280px) / 2))`,
              }}
            >
              {showBonusMdUp ? (
                <>
                  {/* BONIFICACIONES ARRIBA (estado normal) */}
                  <section className="rounded-xl bg-neutral-600/100">
                    <h2 className="sr-only">Bonificaciones</h2>
                    <BonusesPanel onHighlightChange={setHighlightIds} />
                  </section>
                  {/* VÍNCULOS DEBAJO */}
                  <section
                    className="rounded-xl bg-neutral-700/40 pt-4 pl-4 pr-4"
                    data-interactive="true"
                  >
                    <PlayerDetails />
                  </section>
                </>
              ) : (
                <>
                  {/* VÍNCULOS SOLO (si Bonificaciones está oculto) */}
                  <section
                    className="rounded border border-white p-4"
                    data-interactive="true"
                  >
                    <h2 className="mb-2 font-medium uppercase tracking-wide text-sm">
                      Vínculos
                    </h2>
                    <PlayerDetails />
                  </section>
                </>
              )}
            </div>
          </aside>
        </div>
      </div>

      {/* PANEL DESPLEGABLE DESDE EL HEADER (solo mobile) */}
      <MobileSlidePanel
        open={mobilePanel !== "none"}
        title={
          mobilePanel === "details"
            ? "Details"
            : mobilePanel === "bonds"
            ? "Bonds"
            : ""
        }
        onClose={() => setMobilePanel("none")}
        maxHeightVar="70vh" // ajustable
      >
        {mobilePanel === "details" && (
          <PlayerDetails forceTab="details" hideTabs />
        )}
        {mobilePanel === "bonds" && <PlayerDetails forceTab="bonds" hideTabs />}
      </MobileSlidePanel>
    </main>
  );
}
