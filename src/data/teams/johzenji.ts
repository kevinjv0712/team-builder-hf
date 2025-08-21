// src/teams/johzenji.ts
import type { Player } from "@/types";

export const johzenjiPlayers: Player[] = [
  // YUJI TERUSHIMA — SSR (Serve + Power Attack)
  {
    id: "yuji-terushima-ssr",
    name: "Yuji Terushima",
    shortName: "Terushima",
    team: "Johzenji",
    rarity: "SSR",
    roles: ["WS"],
    typeTags: ["Power Attack", "Serve"],
    image: "/characters/johzenji/yuji-terushima-ssr.jpg",
    server: "Japan",
    stats: {
      basic: {
        quickAttack: 83,
        powerAttack: 121,
        set: 98,
        serve: 115,
        receive: 110,
        block: 104,
        save: 98,
      },
      bonusAttack: { awareness: 0.05, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.0, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Free-Spirited",
        levels: {
          "1": "Terushima’s [Power Attack] +8%. While on court, when allies’ Receive/Cover/Set do not become BAD, gain 1 stack of [More Fun] (Power/Quick +2.5% per stack, max 4).",
          "2": "Terushima’s [Power Attack] +10%. Same stack effect (2.5% each, max 4).",
          "3": "Terushima’s [Power Attack] +12%. Same stack effect (2.5% each, max 4).",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Fun Serve",
        levels: {
          "1": "Performs a Jump Serve with [Serve] x120%.",
          "2": "Performs a Jump Serve with [Serve] x135%.",
          "3": "Performs a Jump Serve with [Serve] x150%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Playground",
        levels: {
          "1": "For each ally on court with [Receive] role, Terushima’s [Receive] +4%. If Terushima misses a receive, it won’t cause a lost point (up to 10 net crossings).",
          "2": "For each such ally, [Receive] +5%. Missed receive won’t cause a lost point (up to 10 crossings).",
          "3": "For each such ally, [Receive] +6%. Missed receive won’t cause a lost point (up to 10 crossings).",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "finisher",
        name: "Thrilling Spike",
        levels: {
          "1": "[Power Attack] x235%. If this rally decides the point, allies’ [Receive] +10% until the ball crosses the net 3 times.",
          "2": "[Power Attack] x250% (+same receive bonus).",
          "3": "[Power Attack] x265% (+same receive bonus).",
          "4": "[Power Attack] x280% (+same receive bonus).",
          "5": "[Power Attack] x295% (+same receive bonus).",
        },
      },
    ],
    bonds: [],
    resonances: [
      { level: "I", name: "", effect: "Main parameters +10%." },
      { level: "II", name: "", effect: "Main parameters +10%." },
      { level: "III", name: "", effect: "Main parameters +10%." },
      { level: "IV", name: "", effect: "Main parameters +10%." },
      { level: "V", name: "", effect: "Main parameters +10%." },
    ],
    potentials: {
      recommended: {
        primaryType: "Power Attack",
        primaryCount: 4,
        secondaryType: "Serve",
        secondaryCount: 2,
        reason: "DPS principal con presión constante desde el saque.",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // TAKEHARU NIGI — SR (Setter)
  {
    id: "takeharu-nigi-sr",
    name: "Takeharu Nigi",
    shortName: "Nigi",
    team: "Johzenji",
    rarity: "SR",
    roles: ["S"],
    typeTags: ["Setter"],
    image: "/characters/johzenji/takeharu-nigi-sr.jpg",
    server: "Japan",
    stats: {
      basic: {
        quickAttack: 61,
        powerAttack: 88,
        set: 99,
        serve: 94,
        receive: 80,
        block: 88,
        save: 75,
      },
      bonusAttack: { awareness: 0.05, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.0, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Skilled Technician",
        levels: {
          "1": "Nigi’s [Set] +10%.",
          "2": "Nigi’s [Set] +12%.",
          "3": "Nigi’s [Set] +14%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Overhand Serve",
        levels: {
          "1": "Performs an Overhand Serve with [Serve] x120%.",
          "2": "Overhand Serve with [Serve] x135%.",
          "3": "Overhand Serve with [Serve] x150%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Truly Free",
        levels: {
          "1": "While Nigi is on court, if an ally’s Receive result is not BAD, the first back-row ally after this play gains [Toss] boosted by Nigi’s [Set] x18%.",
          "2": "Same trigger: boost equals Nigi’s [Set] x20%.",
          "3": "Same trigger: boost equals Nigi’s [Set] x22%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "finisher",
        name: "Varied Set",
        levels: {
          "1": "Performs a Set with [Set] x220%.",
          "2": "Performs a Set with [Set] x235%.",
          "3": "Performs a Set with [Set] x250%.",
          "4": "Performs a Set with [Set] x265%.",
          "5": "Performs a Set with [Set] x280%.",
        },
      },
    ],
    bonds: [],
    resonances: [
      { level: "I", name: "", effect: "Main parameters +6%." },
      { level: "II", name: "", effect: "Main parameters +6%." },
      { level: "III", name: "", effect: "Main parameters +6%." },
      { level: "IV", name: "", effect: "Main parameters +6%." },
      { level: "V", name: "", effect: "Main parameters +6%." },
    ],
    potentials: {
      recommended: {
        primaryType: "Setter",
        primaryCount: 4,
        secondaryType: "Serve",
        secondaryCount: 2,
        reason: "Asegura sets consistentes y abre con overhand serve.",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // SHODO HIGASHI — SR (WS Power Attack)
  {
    id: "shodo-higashi-sr",
    name: "Shodo Higashi",
    shortName: "Higashi",
    team: "Johzenji",
    rarity: "SR",
    roles: ["WS"],
    typeTags: ["Power Attack"],
    image: "/characters/johzenji/shodo-higashi-sr.jpg",
    server: "Japan",
    stats: {
      basic: {
        quickAttack: 69,
        powerAttack: 100,
        set: 81,
        serve: 85,
        receive: 95,
        block: 91,
        save: 81,
      },
      bonusAttack: { awareness: 0.05, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.0, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Quick Judgment",
        levels: {
          "1": "While on court, if an ally’s Receive result is not BAD: back-row allies’ [Power Attack] +8% for 1 rally.",
          "2": "Same trigger: back-row allies’ [Power Attack] +10% for 1 rally.",
          "3": "Same trigger: back-row allies’ [Power Attack] +12% for 1 rally.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Quick Receive",
        levels: {
          "1": "Performs [Receive] x120%.",
          "2": "[Receive] x135%.",
          "3": "[Receive] x150%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Flexible Play",
        levels: {
          "1": "When Higashi is in front row: allies’ back-row [Receive] and [Cover] +10% (lasts until the ball crosses the net up to 3 times).",
          "2": "Front row: back-row [Receive] and [Cover] +12% (same duration).",
          "3": "Front row: back-row [Receive] and [Cover] +14% (same duration).",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "finisher",
        name: "Free Spike",
        levels: {
          "1": "[Power Attack] x220%.",
          "2": "[Power Attack] x235%.",
          "3": "[Power Attack] x250%.",
          "4": "[Power Attack] x265%.",
          "5": "[Power Attack] x280%.",
        },
      },
    ],
    bonds: [],
    resonances: [
      { level: "I", name: "", effect: "Main parameters +6%." },
      { level: "II", name: "", effect: "Main parameters +6%." },
      { level: "III", name: "", effect: "Main parameters +6%." },
      { level: "IV", name: "", effect: "Main parameters +6%." },
      { level: "V", name: "", effect: "Main parameters +6%." },
    ],
    potentials: {
      recommended: {
        primaryType: "Power Attack",
        primaryCount: 4,
        secondaryType: "Receive",
        secondaryCount: 2,
        reason: "WS ofensivo con soporte defensivo puntual.",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },
];
