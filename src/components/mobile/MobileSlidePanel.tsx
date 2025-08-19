// src/components/mobile/MobileSlidePanel.tsx
"use client";

import { useEffect } from "react";

export default function MobileSlidePanel({
  open,
  title,
  onClose,
  children,
  maxHeightVar = "70vh", // ajustable
}: {
  open: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  maxHeightVar?: string;
}) {
  // Bloquea el scroll del <body> cuando el panel está abierto
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Escape para cerrar
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <>
      {/* Overlay */}
      <button
        aria-hidden={!open}
        onClick={onClose}
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-200 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        } bg-black/50`}
      />

      {/* Panel deslizable (desde debajo del header fijo) */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={`
          fixed inset-x-0 top-14 z-50 md:hidden
          transform-gpu transition-[transform,opacity] duration-300
          ${
            open
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0 pointer-events-none"
          }
        `}
      >
        <div className="mx-auto max-w-7xl px-4">
          <section className="rounded-b-lg border border-white bg-neutral-900 p-3 shadow-xl">
            <div className="mb-2 flex items-center justify-between">
              <h2 className="font-medium tracking-wide text-sm">{title}</h2>
              <button
                onClick={onClose}
                className="rounded border border-white/60 px-2 py-1 text-xs"
              >
                Close
              </button>
            </div>
            {/* Contenido scroleable */}
            <div
              className="overflow-auto"
              style={{
                maxHeight: `var(--mobile-panel-max-h, ${maxHeightVar})`,
              }}
            >
              {children}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
