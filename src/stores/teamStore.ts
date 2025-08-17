// src/stores/teamStore.ts
"use client";
import { create } from "zustand";
import type { SlotKey } from "../types";

/** --- Extensión local de slots para incluir banca --- */
export type BenchKey = "B1" | "B2" | "B3" | "B4" | "B5" | "B6";
export type AnySlotKey = SlotKey | BenchKey;

type PanelMode = "details" | "bonds";
type Assignments = Partial<Record<AnySlotKey, string>>;

interface TeamState {
  selectedSlot: AnySlotKey | null;
  detailsPlayerId: string | null;
  panelMode: PanelMode;
  assignments: Assignments;

  selectSlot: (k: AnySlotKey) => void;
  clearSlot: (k: AnySlotKey) => void;
  assignToSelected: (playerId: string) => void;
  isAssigned: (playerId: string) => boolean;

  // Mantengo esta firma por si luego quieres mover la lógica al store;
  // el filtro por NOMBRE lo hacemos en la UI (con acceso a players).
  isNameAssigned: (
    playerName: string,
    exceptKey?: AnySlotKey | null
  ) => boolean;

  setDetailsPlayer: (playerId: string | null) => void;
  setPanelMode: (m: PanelMode) => void;
  reset: () => void;
}

export const useTeamStore = create<TeamState>((set, get) => ({
  selectedSlot: "S",
  detailsPlayerId: null,
  panelMode: "details",
  assignments: {},

  selectSlot: (k) => set({ selectedSlot: k }),

  clearSlot: (k) =>
    set((s) => {
      const a = { ...s.assignments };
      delete a[k];
      return {
        assignments: a,
        detailsPlayerId: s.detailsPlayerId === a[k] ? null : s.detailsPlayerId,
      };
    }),

  assignToSelected: (playerId) => {
    const sel = get().selectedSlot;
    if (!sel) return;
    const current = { ...get().assignments };

    // Quitar duplicado por playerId si ya estaba en otro slot
    const already = Object.entries(current).find(([, pid]) => pid === playerId);
    if (already) current[already[0] as AnySlotKey] = undefined as any;

    current[sel] = playerId;
    set({ assignments: current });
  },

  isAssigned: (pid) => Object.values(get().assignments).includes(pid),

  isNameAssigned: () => false,

  setDetailsPlayer: (pid) => set({ detailsPlayerId: pid }),
  setPanelMode: (m) => set({ panelMode: m }),

  reset: () =>
    set({
      selectedSlot: null,
      detailsPlayerId: null,
      panelMode: "details",
      assignments: {},
    }),
}));
