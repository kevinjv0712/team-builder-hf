// src/stores/settingsStore.ts
import { create } from "zustand";

export type Server = "Japan" | "Global";
type SettingsState = {
  server: Server;
  setServer: (s: Server) => void;
};

export const useSettingsStore = create<SettingsState>((set) => ({
  server: "Global",
  setServer: (server) => set({ server }),
}));
