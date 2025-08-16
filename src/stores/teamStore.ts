// stores/teamStore.ts
import { create } from "zustand";

// -----------------------------
// Slot types
// -----------------------------
export type SlotKey =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6" // on court
  | "L" // libero (does NOT rotate)
  | "B1"
  | "B2"
  | "B3"
  | "B4"
  | "B5"
  | "B6"; // bench

export type OnCourt = Exclude<SlotKey, "B1" | "B2" | "B3" | "B4" | "B5" | "B6">;

// -----------------------------
// Rotation ring (CLOCKWISE)
// Layout (E 1 6 5 / L 2 3 4) -> ring: 1→6→5→4→3→2
// -----------------------------
export const ROTATION_RING: OnCourt[] = ["1", "6", "5", "4", "3", "2"];

// -----------------------------
// Store shape
// -----------------------------
type TeamState = {
  selected: SlotKey | null; // currently selected slot in UI
  assignments: Record<SlotKey, string | undefined>; // slot -> playerId
  rotation: number; // 0..5 (how many CW steps)

  selectSlot: (k: SlotKey) => void; // select a slot
  clearSlot: (k: SlotKey) => void; // clear slot assignment
  assignSelected: (playerId: string) => void; // assign selected slot
  isAssigned: (playerId: string) => boolean; // check duplicates
  reset: () => void; // reset everything

  rotate: () => void; // rotate CW (libero stays)
};

// -----------------------------
// Store
// -----------------------------
export const useTeamStore = create<TeamState>()((set, get) => ({
  selected: null,

  // start empty
  assignments: {
    "1": undefined,
    "2": undefined,
    "3": undefined,
    "4": undefined,
    "5": undefined,
    "6": undefined,
    L: undefined,
    B1: undefined,
    B2: undefined,
    B3: undefined,
    B4: undefined,
    B5: undefined,
    B6: undefined,
  },

  rotation: 0,

  selectSlot: (k) => set({ selected: k }),

  clearSlot: (k) =>
    set((state) => ({ assignments: { ...state.assignments, [k]: undefined } })),

  assignSelected: (playerId) =>
    set((state) => {
      const { selected } = state;
      if (!selected) return {};
      const a = { ...state.assignments };

      // remove this player from any other slot
      (Object.keys(a) as SlotKey[]).forEach((k) => {
        if (a[k] === playerId) a[k] = undefined;
      });

      // assign to the selected slot
      a[selected] = playerId;
      return { assignments: a };
    }),

  isAssigned: (playerId) => {
    const a = get().assignments;
    return (Object.values(a).filter(Boolean) as string[]).includes(playerId);
  },

  reset: () =>
    set({
      selected: null,
      rotation: 0,
      assignments: {
        "1": undefined,
        "2": undefined,
        "3": undefined,
        "4": undefined,
        "5": undefined,
        "6": undefined,
        L: undefined,
        B1: undefined,
        B2: undefined,
        B3: undefined,
        B4: undefined,
        B5: undefined,
        B6: undefined,
      },
    }),

  // ------------- ROTATE (CLOCKWISE) -------------
  // Right-shift along ROTATION_RING:
  //   ring[i] gets the previous value ring[i-1]; ring[0] gets the old last
  // This moves players CW. We also increment "rotation" so role labels shift CW too.
  rotate: () =>
    set((state) => {
      const a = { ...state.assignments };

      // save the last value to wrap around
      const last = a[ROTATION_RING[ROTATION_RING.length - 1]];
      // walk backwards so we don't overwrite early
      for (let i = ROTATION_RING.length - 1; i >= 1; i--) {
        const cur = ROTATION_RING[i];
        const prev = ROTATION_RING[i - 1];
        a[cur] = a[prev];
      }
      // first receives old last
      a[ROTATION_RING[0]] = last;

      // rotation increases (CW)
      const rotation = (state.rotation + 1) % ROTATION_RING.length;
      return { assignments: a, rotation };
    }),
}));
