// src/stores/selectionStore.ts
"use client";
import { create } from "zustand";

type SelectionState = {
  selectedPlayerId: string | null;
  setSelectedPlayer: (id: string | null) => void;
  clear: () => void;
};

export const useSelectionStore = create<SelectionState>((set) => ({
  selectedPlayerId: null,
  setSelectedPlayer: (id) => set({ selectedPlayerId: id }),
  clear: () => set({ selectedPlayerId: null }),
}));
