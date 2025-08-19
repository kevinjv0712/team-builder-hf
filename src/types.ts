// src/types.ts
export type Role = "S" | "WS" | "MB" | "OP" | "LI"; // Setter, Outside, Middle, Opposite, Libero
export type Rarity = "SP" | "UR" | "SSR" | "SR";
export type SlotKey = "LI" | "WS1" | "WS2" | "MB1" | "MB2" | "OP" | "S";

export interface Slot {
  key: SlotKey;
  label: string;
  role: Role;
}

export type SkillKey =
  | "quick attack"
  | "power attack"
  | "set"
  | "serve"
  | "receive"
  | "block"
  | "save";

export interface Skill {
  key: string;
  name: string;
  levels: Record<"1" | "2" | "3" | "4" | "5", string | undefined>;
}

export interface Stats {
  basic: {
    quickAttack: number;
    powerAttack: number;
    set: number;
    serve: number;
    receive: number;
    block: number;
    save: number;
  };
  bonusAttack: {
    awareness: number;
    strength: number;
    attackTechnique: number;
  };
  bonusDefense: {
    reflex: number;
    spirit: number;
    defenseTechnique: number;
  };
}

export interface Bond {
  to: string; // other player id
  name: string; // bond name
  participants: string[];
  effect?: string;
}

export interface Resonance {
  level: "I" | "II" | "III" | "IV" | "V";
  name: string;
  effect: string;
}

export interface Potentials {
  recommended: {
    primaryType: string;
    primaryCount: 4;
    secondaryType: string;
    secondaryCount: 2;
    reason?: string;
  };
  equipped?: { type: string; count: number }[];
}

export interface Memory {
  name: string;
  effect: string;
}

export interface Player {
  id: string;
  name: string;
  shortName: string;
  team: string;
  rarity: Rarity;
  roles: Role[];
  typeTags: string[];
  image: string;
  stats: Stats;
  skills: Skill[];
  bonds: Bond[];
  resonances: Resonance[]; // 5 items
  potentials: Potentials;
  memory: Memory;
}
