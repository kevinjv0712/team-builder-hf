"use client"
import { create } from "zustand"
import type { SlotKey } from "@/types"

type State = {
  selected: SlotKey | null
  assignments: Partial<Record<SlotKey, string>> // slot -> playerId
}
type Actions = {
  selectSlot: (k: SlotKey) => void
  clearSlot: (k: SlotKey) => void
  assignSelected: (playerId: string) => void
  reset: () => void
  isAssigned: (playerId: string) => boolean
}

const initial: State = {
  selected: null,
  assignments: {}
}

export const useTeamStore = create<State & Actions>((set, get) => ({
  ...initial,
  selectSlot: (k) => set({ selected: k }),
  clearSlot: (k) =>
    set((s) => {
      const next = { ...s.assignments }
      delete next[k]
      return { assignments: next }
    }),
  assignSelected: (playerId) =>
    set((s) => {
      if (!s.selected) return {}
      // evita duplicados: quita al jugador de otros slots
      const next = { ...s.assignments }
      for (const key of Object.keys(next) as SlotKey[]) {
        if (next[key] === playerId) delete next[key]
      }
      next[s.selected] = playerId
      return { assignments: next }
    }),
  reset: () => set({ ...initial }),
  isAssigned: (playerId) => {
    const vals = Object.values(get().assignments)
    return vals.includes(playerId)
  }
}))
