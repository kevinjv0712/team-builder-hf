// src/stores/teamStore.ts
"use client";
import { create } from "zustand";
import type { SlotKey } from "@/types";
import { players } from "@/data/players";

/** --- Extensión local de slots para incluir banca --- */
export type BenchKey = "B1" | "B2" | "B3" | "B4" | "B5" | "B6";
export type AnySlotKey = SlotKey | BenchKey;

type PanelMode = "details" | "bonds";
type Assignments = Partial<Record<AnySlotKey, string | null>>;

// Mapa id -> nombre (para validar duplicados por nombre)
const NAME_BY_ID: Record<string, string> = Object.fromEntries(
  players.map((p) => [p.id, p.name] as const)
);

interface TeamState {
  selectedSlot: AnySlotKey | null;
  detailsPlayerId: string | null;
  panelMode: PanelMode;
  assignments: Assignments;

  selectSlot: (k: AnySlotKey | null) => void;
  clearSlot: (k: AnySlotKey) => void;
  assignToSelected: (playerId: string) => void;
  isAssigned: (playerId: string) => boolean;
  swapSlots: (a: AnySlotKey, b: AnySlotKey) => void;

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
  selectedSlot: null,
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
    const newName = NAME_BY_ID[playerId];

    // Quitar duplicado por playerId si ya estaba en otro slot
    const already = Object.entries(current).find(([, pid]) => pid === playerId);
    if (already) current[already[0] as AnySlotKey] = undefined as any;

    // 2) Evitar duplicado por MISMO NOMBRE en OTRO slot
    const nameClash = Object.entries(current).find(
      ([key, pid]) =>
        key !== sel && pid && NAME_BY_ID[pid] && NAME_BY_ID[pid] === newName
    );
    if (nameClash) {
      // Bloquear la asignación si el mismo nombre ya está en otro slot
      // (opción alternativa sería "reemplazar" limpiando el otro slot)
      console.warn(
        `[assignToSelected] Bloqueado: ya hay una carta del jugador "${newName}" en ${nameClash[0]}.`
      );
      return;
    }

    current[sel] = playerId;
    set({ assignments: current });
  },

  isAssigned: (pid) => Object.values(get().assignments).includes(pid),

  isNameAssigned: (playerName, exceptKey = null) => {
    const a = get().assignments;
    for (const [k, pid] of Object.entries(a)) {
      if (exceptKey && k === exceptKey) continue;
      if (pid && NAME_BY_ID[pid] === playerName) return true;
    }
    return false;
  },

  setDetailsPlayer: (pid) => set({ detailsPlayerId: pid }),
  setPanelMode: (m) => set({ panelMode: m }),

  reset: () =>
    set({
      selectedSlot: null,
      detailsPlayerId: null,
      panelMode: "details",
      assignments: {},
    }),

  swapSlots: (a, b) =>
    set((state) => {
      const next = { ...state.assignments } as Record<
        AnySlotKey,
        string | null
      >;
      if (!(a in next)) next[a] = null;
      if (!(b in next)) next[b] = null;

      const tmp = next[a] ?? null;
      next[a] = next[b] ?? null;
      next[b] = tmp;

      return { assignments: next, selectedSlot: b };
    }),
}));
