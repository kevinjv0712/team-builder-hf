// src/teams/inarizaki.ts
import type { Player } from "../types";

export const inarizakiPlayers: Player[] = [
  // ATSUMU MIYA
  {
    id: "atsumu-miya-ur",
    name: "Atsumu Miya",
    shortName: "Atsumu",
    team: "Inarizaki",
    rarity: "UR",
    roles: ["S"],
    typeTags: ["Quick Attack", "Serve", "Setter"],
    image: "/characters/inarizaki/atsumu-miya-ur.png",
    server: "Japan",
    stats: {
      basic: {
        quickAttack: 126,
        powerAttack: 87,
        set: 134,
        serve: 140,
        receive: 113,
        block: 126,
        save: 140,
      },
      bonusAttack: { awareness: 0.05, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.0, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Unconventional play",
        levels: {
          "1": "If serve aimed at weak defense: Serve Power x30%. Otherwise: Rear guard Receive x10% for 1 rally.",
          "2": "If serve aimed at weak defense: Serve Power x40%. Otherwise: Rear guard Receive x12% for 1 rally.",
          "3": "If serve aimed at weak defense: Serve Power x50%. Otherwise: Rear guard Receive x14% for 1 rally.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Careful Set",
        levels: {
          "1": "Sets x 125%. All debuffs of the spiker resets",
          "2": "Sets x 140%. All debuffs of the spiker resets",
          "3": "Sets x 155%. All debuffs of the spiker resets",
          "4": undefined,
          "5": undefined,
        },
      },
    ],
    bonds: [
      {
        to: "atsumu-miya-ur",
        name: "Strongest High School Twins",
        participants: ["atsumu-miya-ur", "osamu-miya-ur"],
        effect:
          "Atsumu sets, and Osamu performs a Quick Attack with [Quick Attack] x (Lv1: 265%, Lv2: 280%, Lv3: 295%, Lv4: 310%, Lv5: 325%). Osamu's [Attack Technique] increases by 15%. This effect lasts until Atsumu or Osamu leaves the court. This play cannot be blocked.",
      },
      {
        to: "miya-atsumu-ur",
        name: "Head and Main Axis",
        participants: ["atsumu-miya-ur", "osamu-miya-ur", "shinsuke-kita-ssr"],
      },
    ],
    resonances: [
      { level: "I", name: "", effect: "" },
      { level: "II", name: "", effect: "" },
      { level: "III", name: "", effect: "" },
      { level: "IV", name: "", effect: "" },
      { level: "V", name: "", effect: "" },
    ],
    potentials: {
      recommended: {
        primaryType: "Attack Technique",
        primaryCount: 4,
        secondaryType: "Serve",
        secondaryCount: 2,
        reason:
          "Potencia su rol OPP: técnica de ataque + consistencia de servicio",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // OSAMU MIYA
  {
    id: "osamu-miya-ur",
    name: "Osamu Miya",
    shortName: "Osamu",
    team: "Inarizaki",
    rarity: "UR",
    roles: ["OP"],
    typeTags: ["Quick Attack", "Serve"],
    image: "/characters/inarizaki/osamu-miya-ur.png",
    server: "Japan",
    stats: {
      basic: {
        quickAttack: 126,
        powerAttack: 87,
        set: 134,
        serve: 140,
        receive: 113,
        block: 126,
        save: 140,
      },
      bonusAttack: { awareness: 0.05, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.0, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Unconventional play",
        levels: {
          "1": "If serve aimed at weak defense: Serve Power x30%. Otherwise: Rear guard Receive x10% for 1 rally.",
          "2": "If serve aimed at weak defense: Serve Power x40%. Otherwise: Rear guard Receive x12% for 1 rally.",
          "3": "If serve aimed at weak defense: Serve Power x50%. Otherwise: Rear guard Receive x14% for 1 rally.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Careful Set",
        levels: {
          "1": "Sets x 125%. All debuffs of the spiker resets",
          "2": "Sets x 140%. All debuffs of the spiker resets",
          "3": "Sets x 155%. All debuffs of the spiker resets",
          "4": undefined,
          "5": undefined,
        },
      },
    ],
    bonds: [
      {
        to: "atsumu-miya-ur",
        name: "Strongest High School Twins",
        participants: ["atsumu-miya-ur", "osamu-miya-ur"],
        effect:
          "Atsumu sets, and Osamu performs a Quick Attack with [Quick Attack] x (Lv1: 265%, Lv2: 280%, Lv3: 295%, Lv4: 310%, Lv5: 325%). Osamu's [Attack Technique] increases by 15%. This effect lasts until Atsumu or Osamu leaves the court. This play cannot be blocked.",
      },
      {
        to: "miya-atsumu-ur",
        name: "Head and Main Axis",
        participants: ["atsumu-miya-ur", "osamu-miya-ur", "shinsuke-kita-ssr"],
      },
    ],
    resonances: [
      { level: "I", name: "", effect: "" },
      { level: "II", name: "", effect: "" },
      { level: "III", name: "", effect: "" },
      { level: "IV", name: "", effect: "" },
      { level: "V", name: "", effect: "" },
    ],
    potentials: {
      recommended: {
        primaryType: "Attack Technique",
        primaryCount: 4,
        secondaryType: "Serve",
        secondaryCount: 2,
        reason:
          "Potencia su rol OPP: técnica de ataque + consistencia de servicio",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },
];
