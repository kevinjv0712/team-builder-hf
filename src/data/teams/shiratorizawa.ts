// src/data/teams/shiratorizawa.ts
import type { Player } from "@/types";

export const shiratorizawaPlayers: Player[] = [
  // ===================== WAKATOSHI USHIJIMA (UR — JAPAN) =====================
  {
    id: "wakatoshi-ushijima-ur",
    name: "Wakatoshi Ushijima",
    shortName: "Ushijima",
    team: "Shiratorizawa",
    rarity: "UR",
    roles: ["OP"],
    typeTags: ["Power Attack", "Serve"],
    image: "/characters/shiratorizawa/wakatoshi-ushijima-ur.jpg",
    server: "Global",
    stats: {
      basic: {
        quickAttack: 96,
        powerAttack: 142,
        set: 112,
        serve: 134,
        receive: 112,
        block: 120,
        save: 112,
      },
      bonusAttack: { awareness: 0.05, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.0, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "In the Groove",
        levels: {
          "1": "Ushijima’s [Awareness] +8%. At the end of each turn while on court, gains additional +3% [Awareness] (stacks up to 4 times).",
          "2": "Ushijima’s [Awareness] +10%. End of turn: +3% (max 5 stacks).",
          "3": "Ushijima’s [Awareness] +12%. End of turn: +3% (max 6 stacks).",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Dominating Serve",
        levels: {
          "1": "Jump Serve [Serve] x125%. If Critical, the receivers cannot cast skills this rally. On score, this skill’s cooldown -4 net crossings.",
          "2": "Jump Serve [Serve] x135%. Same restrictions; on score cooldown -4.",
          "3": "Jump Serve [Serve] x145%. Same restrictions; on score cooldown -4.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Ace Style",
        levels: {
          "1": "When your side lands a Critical Spike, Ushijima gains +1.5% to all Basic stats (max 8 stacks). When he scores, cleanse all his debuffs.",
          "2": "Critical Spike -> +1.8% (max 8). Cleanse on score.",
          "3": "Critical Spike -> +2.0% (max 8). Cleanse on score.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Undisputed Ace",
        levels: {
          "1": "Power Spike [Power Attack] x250%. On Critical, cooldown -1 net crossing.",
          "2": "Power Spike x265%. On Critical, cooldown -1.",
          "3": "Power Spike x280%. On Critical, cooldown -1.",
          "4": "Power Spike x295%. On Critical, cooldown -1.",
          "5": "Power Spike x310%. On Critical, cooldown -1.",
        },
      },
    ],
    bonds: [
      {
        to: "wakatoshi-ushijima-ur",
        name: "Lifelong Best Friends",
        participants: ["wakatoshi-ushijima-ur", "satori-tendo-ssr"],
        effect:
          "While both are on court: Ushijima’s [Power Attack] +8% and Tendō’s [Block] +8%.",
      },
      {
        to: "wakatoshi-ushijima-ur",
        name: "Ace and Conductor",
        participants: ["wakatoshi-ushijima-ur", "kenjiro-shirabu-ssr"],
        effect:
          "When Shirabu sets to Ushijima, Ushijima’s next spike gains +12% of his [Power Attack] as extra power (Lv scales with Shirabu’s bond).",
      },
    ],
    resonances: [
      {
        level: "I",
        name: "Skill Resonance I",
        effect: "Main parameters +13%.",
      },
      {
        level: "II",
        name: "Skill Resonance II",
        effect:
          "UNDISPUTED ACE base cooldown reduced by 1; when any ally performs a Critical play, -1 additional crossing (once per rally).",
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Main parameters +13%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect:
          "On Critical Serve, recover 2 Stamina and gain +10% [Awareness] for 1 rally.",
      },
      {
        level: "V",
        name: "Skill Resonance V",
        effect: "Main parameters +13%.",
      },
    ],
    potentials: {
      recommended: {
        primaryType: "Power Attack",
        primaryCount: 4,
        secondaryType: "Serve",
        secondaryCount: 2,
        reason: "DPS principal con presión de saque.",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // ===================== SATORI TENDŌ (SSR — JAPAN) =====================
  {
    id: "satori-tendo-ssr",
    name: "Satori Tendō",
    shortName: "Tendō",
    team: "Shiratorizawa",
    rarity: "SSR",
    roles: ["MB"],
    typeTags: ["Block"],
    image: "/characters/shiratorizawa/satori-tendo-ssr.jpg",
    server: "Global",
    stats: {
      basic: {
        quickAttack: 115,
        powerAttack: 79,
        set: 100,
        serve: 106,
        receive: 103,
        block: 122,
        save: 96,
      },
      bonusAttack: { awareness: 0.0, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.05, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Maverick",
        levels: {
          "1": "Tendō’s [Reflex] +12%.",
          "2": "Tendō’s [Reflex] +14%.",
          "3": "Tendō’s [Reflex] +16%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Surprise Quick",
        levels: {
          "1": "Quick Spike [Quick Attack] x120%.",
          "2": "Quick Spike [Quick Attack] x135%.",
          "3": "Quick Spike [Quick Attack] x150%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Mind Game Block",
        levels: {
          "1": "When Tendō performs a Critical Block, reduces WILD INSTINCT cooldown by 1 crossing.",
          "2": "On Critical Block, cooldown -1 (and Tendō’s [Block] +5% for that play).",
          "3": "On Critical Block, cooldown -2.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Wild Instinct",
        levels: {
          "1": "Block [Block] x220%; when blocking a Critical Spike, +15% [Reflex] for this block.",
          "2": "Block x235%; Critical block grants +15% [Reflex].",
          "3": "Block x250%; Critical block grants +18% [Reflex].",
          "4": "Block x265%; Critical block grants +18% [Reflex].",
          "5": "Block x280%; Critical block grants +20% [Reflex].",
        },
      },
    ],
    bonds: [
      {
        to: "satori-tendo-ssr",
        name: "Lifelong Best Friends",
        participants: ["satori-tendo-ssr", "wakatoshi-ushijima-ur"],
        effect:
          "While both are on court: Tendō’s [Block] +8% and Ushijima’s [Power Attack] +8%.",
      },
      {
        to: "satori-tendo-ssr",
        name: "Shiratorizawa’s Middle Block",
        participants: ["satori-tendo-ssr", "taichi-kawanishi-sr"],
        effect:
          "Front-row coordination: your front row [Block] +6% (Lv scales by bond).",
      },
    ],
    resonances: [
      {
        level: "I",
        name: "Skill Resonance I",
        effect: "Main parameters +10%.",
      },
      {
        level: "II",
        name: "Skill Resonance II",
        effect:
          "At match start, apply a small debuff to opponents’ [Power Attack] and [Quick Attack].",
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Main parameters +10%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect:
          "When the opponent spiker has any debuff, Tendō’s [Reflex] +10% while blocking.",
      },
      {
        level: "V",
        name: "Skill Resonance V",
        effect: "Main parameters +10%.",
      },
    ],
    potentials: {
      recommended: {
        primaryType: "Block",
        primaryCount: 4,
        secondaryType: "Quick Attack",
        secondaryCount: 2,
        reason: "MB de lectura: bloqueo como prioridad con amenaza de quick.",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // ===================== TSUTOMU GOSHIKI (SSR — JAPAN) =====================
  {
    id: "tsutomu-goshiki-ssr",
    name: "Tsutomu Goshiki",
    shortName: "Goshiki",
    team: "Shiratorizawa",
    rarity: "SSR",
    roles: ["WS"],
    typeTags: ["Power Attack", "Serve"],
    image: "/characters/shiratorizawa/tsutomu-goshiki-ssr.jpg",
    server: "Global",
    stats: {
      basic: {
        quickAttack: 83,
        powerAttack: 121,
        set: 98,
        serve: 104,
        receive: 115,
        block: 109,
        save: 98,
      },
      bonusAttack: { awareness: 0.05, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.0, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Powerful Defense",
        levels: {
          "1": "If the opponent’s last play was a Nice Play, this Receive gains +40% of [Receive] as power.",
          "2": "Condition same; +45% of [Receive] as power.",
          "3": "Condition same; +50% of [Receive] as power.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Flow-Changing Receive",
        levels: {
          "1": "Receive [Receive] x120%.",
          "2": "Receive [Receive] x135%.",
          "3": "Receive [Receive] x150%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Future Ace",
        levels: {
          "1": "End of each turn: gain 1 stack of “Sharp” (Power Attack +2.5%, up to 5).",
          "2": "End of each turn: gain 1 stack (Power Attack +3.0%, up to 5).",
          "3": "End of each turn: gain 1 stack (Power Attack +3.5%, up to 5).",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Miracle Maker",
        levels: {
          "1": "Power Spike [Power Attack] x240%; for this spike, [Awareness] +10%.",
          "2": "Power Spike x255%; +10% Awareness.",
          "3": "Power Spike x270%; +12% Awareness.",
          "4": "Power Spike x285%; +12% Awareness.",
          "5": "Power Spike x300%; +15% Awareness.",
        },
      },
    ],
    bonds: [
      {
        to: "tsutomu-goshiki-ssr",
        name: "Captain & Rookie",
        participants: ["tsutomu-goshiki-ssr", "reon-ohira-ssr"],
        effect:
          "While both WS are on court: Goshiki’s [Power Attack] +8% and Ōhira’s [Receive] +8%.",
      },
    ],
    resonances: [
      {
        level: "I",
        name: "Skill Resonance I",
        effect: "Main parameters +10%.",
      },
      {
        level: "II",
        name: "Skill Resonance II",
        effect: "Each “Sharp” stack also grants +2% [Awareness].",
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Main parameters +10%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect:
          "On entering Team Morale Awakening, MIRACLE MAKER cooldown resets once.",
      },
      {
        level: "V",
        name: "Skill Resonance V",
        effect: "Main parameters +10%.",
      },
    ],
    potentials: {
      recommended: {
        primaryType: "Power Attack",
        primaryCount: 4,
        secondaryType: "Serve",
        secondaryCount: 2,
        reason: "WS ofensivo con utilidad de saque y recepción fiable.",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // ===================== REON ŌHIRA (SSR — JAPAN) =====================
  {
    id: "reon-ohira-ssr",
    name: "Reon Ohira",
    shortName: "Ohira",
    team: "Shiratorizawa",
    rarity: "SSR",
    roles: ["WS"],
    typeTags: ["Receive"],
    image: "/characters/shiratorizawa/reon-ohira-ssr.jpg",
    server: "Japan",
    stats: {
      basic: {
        quickAttack: 75,
        powerAttack: 109,
        set: 102,
        serve: 114,
        receive: 121,
        block: 109,
        save: 101,
      },
      bonusAttack: { awareness: 0.05, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.0, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Steady Reception",
        levels: {
          "1": "Ōhira’s [Receive] +8%.",
          "2": "Ōhira’s [Receive] +9.5%.",
          "3": "Ōhira’s [Receive] +11%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Reliable Wing",
        levels: {
          "1": "When performing a Power Spike, his [Strength] +10% for that spike.",
          "2": "When spiking, [Strength] +12.5% for that spike.",
          "3": "When spiking, [Strength] +15% for that spike.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Calm Captaincy",
        levels: {
          "1": "While on court: allies’ [Awareness] +5%.",
          "2": "While on court: allies’ [Awareness] +6.5%.",
          "3": "While on court: allies’ [Awareness] +8%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Accurate Receive",
        levels: {
          "1": "Receive [Receive] x235%.",
          "2": "Receive x250%.",
          "3": "Receive x265%.",
          "4": "Receive x280%.",
          "5": "Receive x295%.",
        },
      },
    ],
    bonds: [
      {
        to: "reon-ohira-ssr",
        name: "Captain & Rookie",
        participants: ["tsutomu-goshiki-ssr", "reon-ohira-ssr"],
        effect:
          "While both WS are on court: Ōhira’s [Receive] +8% and Goshiki’s [Power Attack] +8%.",
      },
    ],
    resonances: [
      {
        level: "I",
        name: "Skill Resonance I",
        effect: "Main parameters +10%.",
      },
      {
        level: "II",
        name: "Skill Resonance II",
        effect: "On PERFECT receive, allies’ next Power Spike +8% power.",
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Main parameters +10%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect:
          "ACCURATE RECEIVE also grants allies +8% [Reflex] for 2 crossings.",
      },
      {
        level: "V",
        name: "Skill Resonance V",
        effect: "Main parameters +10%.",
      },
    ],
    potentials: {
      recommended: {
        primaryType: "Receive",
        primaryCount: 4,
        secondaryType: "Power Attack",
        secondaryCount: 2,
        reason: "WS equilibrado: primera línea constante y recepción estable.",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // ===================== KENJIRO SHIRABU (SSR — JAPAN) =====================
  {
    id: "kenjiro-shirabu-ssr",
    name: "Kenjiro Shirabu",
    shortName: "Shirabu",
    team: "Shiratorizawa",
    rarity: "SSR",
    roles: ["S"],
    typeTags: ["Setter", "Power Attack"],
    image: "/characters/shiratorizawa/kenjiro-shirabu-ssr.jpg",
    server: "Japan",
    stats: {
      basic: {
        quickAttack: 75,
        powerAttack: 109,
        set: 121,
        serve: 114,
        receive: 97,
        block: 109,
        save: 95,
      },
      bonusAttack: { awareness: 0.05, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.0, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Corrective Ability",
        levels: {
          "1": "Shirabu’s [Awareness] +9%.",
          "2": "Shirabu’s [Awareness] +10.5%.",
          "3": "Shirabu’s [Awareness] +12%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Simple Two Attack",
        levels: {
          "1": "Performs a Two-Attack with [Set] x120% (unblockable).",
          "2": "Two-Attack [Set] x135% (unblockable).",
          "3": "Two-Attack [Set] x150% (unblockable).",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Always On Point",
        levels: {
          "1": "Shirabu’s [Set] +8%. When he sets to a WS/OP, that spike gains +8% power.",
          "2": "[Set] +9.5%; the spike gains +10% power.",
          "3": "[Set] +11%; the spike gains +12% power.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Spike-Connecting Set",
        levels: {
          "1": "Set [Set] x210%; for this play, Shirabu’s [Awareness] +10%.",
          "2": "Set x225%; +10% Awareness.",
          "3": "Set x240%; +12% Awareness.",
          "4": "Set x255%; +12% Awareness.",
          "5": "Set x270%; +15% Awareness.",
        },
      },
    ],
    bonds: [
      {
        to: "wakatoshi-ushijima-ur",
        name: "Ace and Conductor",
        participants: ["kenjiro-shirabu-ssr", "wakatoshi-ushijima-ur"],
        effect:
          "When Shirabu sets to Ushijima, Ushijima’s next spike gains extra power equal to 12% of his [Power Attack] (Lv scales with bond).",
      },
    ],
    resonances: [
      {
        level: "I",
        name: "Skill Resonance I",
        effect: "Main parameters +10%.",
      },
      {
        level: "II",
        name: "Skill Resonance II",
        effect: "On PERFECT set, next ally spike +8% power.",
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Main parameters +10%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect: "SPIKE-CONNECTING SET also gives the spiker +8% [Awareness].",
      },
      {
        level: "V",
        name: "Skill Resonance V",
        effect: "Main parameters +10%.",
      },
    ],
    potentials: {
      recommended: {
        primaryType: "Setter",
        primaryCount: 4,
        secondaryType: "Power Attack",
        secondaryCount: 2,
        reason: "Control del ritmo con amenaza de 2nd touch.",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // ===================== EITA SEMI (SSR — JAPAN) =====================
  {
    id: "eita-semi-ssr",
    name: "Eita Semi",
    shortName: "Semi",
    team: "Shiratorizawa",
    rarity: "SSR",
    roles: ["S"],
    typeTags: ["Setter", "Power Attack", "Serve"],
    image: "/characters/shiratorizawa/eita-semi-ssr.jpg",
    server: "Japan",
    stats: {
      basic: {
        quickAttack: 75,
        powerAttack: 109,
        set: 116,
        serve: 121,
        receive: 97,
        block: 109,
        save: 91,
      },
      bonusAttack: { awareness: 0.05, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.0, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Control",
        levels: {
          "1": "When Semi serves, the primary opposing receiver’s [Receive] -13% for up to 4 net crossings.",
          "2": "On serve: opposing primary receiver [Receive] -15% (4 crossings).",
          "3": "On serve: opposing primary receiver [Receive] -17% (4 crossings).",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Flexible Combinations",
        levels: {
          "1": "Set [Set] x120%.",
          "2": "Set [Set] x135%.",
          "3": "Set [Set] x150%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Power Unleashed",
        levels: {
          "1": "When Semi serves: his [Awareness] +5% and [Strength] +10% for that serve.",
          "2": "On serve: [Awareness] +6.5% and [Strength] +12.5%.",
          "3": "On serve: [Awareness] +8% and [Strength] +15%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Freedom—Just This Once",
        levels: {
          "1": "Jump Serve [Serve] x220%. For this serve, allies gain +3% [Awareness] and +6% [Reflex] for 2 net crossings.",
          "2": "Jump Serve x235%. Allies +3% Awareness, +6% Reflex.",
          "3": "Jump Serve x250%. Allies +4% Awareness, +8% Reflex.",
          "4": "Jump Serve x265%. Allies +4% Awareness, +8% Reflex.",
          "5": "Jump Serve x280%. Allies +5% Awareness, +10% Reflex.",
        },
      },
    ],
    bonds: [],
    resonances: [
      {
        level: "I",
        name: "Skill Resonance I",
        effect: "Main parameters +13%.",
      },
      {
        level: "II",
        name: "Skill Resonance II",
        effect: "First serve each set: extra +10% [Serve] power.",
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Main parameters +13%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect: "On scoring with serve, Semi’s next Set gains +10% power.",
      },
      {
        level: "V",
        name: "Skill Resonance V",
        effect: "Main parameters +13%.",
      },
    ],
    potentials: {
      recommended: {
        primaryType: "Setter",
        primaryCount: 4,
        secondaryType: "Serve",
        secondaryCount: 2,
        reason: "Setter agresivo con utilidad de saque.",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // ===================== HAYATO YAMAGATA (SSR — JAPAN) =====================
  {
    id: "hayato-yamagata-ssr",
    name: "Hayato Yamagata",
    shortName: "Yamagata",
    team: "Shiratorizawa",
    rarity: "SSR",
    roles: ["LI"],
    typeTags: ["Receive"],
    image: "/characters/shiratorizawa/hayato-yamagata-ssr.jpg",
    server: "Japan",
    stats: {
      basic: {
        quickAttack: 68,
        powerAttack: 99,
        set: 109,
        serve: 99,
        receive: 122,
        block: 96,
        save: 116,
      },
      bonusAttack: { awareness: 0.0, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.05, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Steady Reaction",
        levels: {
          "1": "Yamagata’s [Reflex] +13%.",
          "2": "Yamagata’s [Reflex] +15%.",
          "3": "Yamagata’s [Reflex] +17%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Wide Coverage",
        levels: {
          "1": "Cover (Receive) [Receive] x120%.",
          "2": "Cover (Receive) [Receive] x135%.",
          "3": "Cover (Receive) [Receive] x150%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Reflex Read",
        levels: {
          "1": "If the opponent’s block result is PERFECT, Yamagata’s Cover gains +40% of his [Cover] as power.",
          "2": "On PERFECT block, Cover gains +45% of [Cover] as power.",
          "3": "On PERFECT block, Cover gains +50% of [Cover] as power.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Solid Receive",
        levels: {
          "1": "Receive [Receive] x235%.",
          "2": "Receive x250%.",
          "3": "Receive x265%.",
          "4": "Receive x280%.",
          "5": "Receive x295%.",
        },
      },
    ],
    bonds: [],
    resonances: [
      {
        level: "I",
        name: "Skill Resonance I",
        effect: "Main parameters +10%.",
      },
      {
        level: "II",
        name: "Skill Resonance II",
        effect: "While Yamagata is on court, back-row allies’ [Receive] +5%.",
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Main parameters +10%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect: "On PERFECT Receive, allies’ next Power Spike +10% power.",
      },
      {
        level: "V",
        name: "Skill Resonance V",
        effect: "Main parameters +10%.",
      },
    ],
    potentials: {
      recommended: {
        primaryType: "Receive",
        primaryCount: 4,
        secondaryType: "Serve",
        secondaryCount: 2,
        reason: "Libero puro con gran lectura y estabilidad.",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // ===================== TAICHI KAWANISHI (SR — JAPAN) =====================
  {
    id: "taichi-kawanishi-sr",
    name: "Taichi Kawanishi",
    shortName: "Kawanishi",
    team: "Shiratorizawa",
    rarity: "SR",
    roles: ["MB"],
    typeTags: ["Block"],
    image: "/characters/shiratorizawa/taichi-kawanishi-sr.jpg",
    server: "Global",
    stats: {
      basic: {
        quickAttack: 84,
        powerAttack: 84,
        set: 82,
        serve: 90,
        receive: 84,
        block: 100,
        save: 79,
      },
      bonusAttack: { awareness: 0.0, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.05, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Versatile Block",
        levels: {
          "1": "Kawanishi’s [Block] +8%.",
          "2": "Kawanishi’s [Block] +9.5%.",
          "3": "Kawanishi’s [Block] +11%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Speed Breakthrough!",
        levels: {
          "1": "Quick Spike [Quick Attack] x120%.",
          "2": "Quick Spike [Quick Attack] x135%.",
          "3": "Quick Spike [Quick Attack] x150%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Perfect Timing",
        levels: {
          "1": "When blocking an opponent’s Quick Spike, Kawanishi’s [Reflex] +12% for that block.",
          "2": "…[Reflex] +14% for that block.",
          "3": "…[Reflex] +16% for that block.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Adaptive Move",
        levels: {
          "1": "Block [Block] x220%.",
          "2": "Block x235%.",
          "3": "Block x250%.",
          "4": "Block x265%.",
          "5": "Block x280%.",
        },
      },
    ],
    bonds: [
      {
        to: "taichi-kawanishi-sr",
        name: "Shiratorizawa’s Middle Block",
        participants: ["taichi-kawanishi-sr", "satori-tendo-ssr"],
        effect: "While both are front row: your front row [Block] +6%.",
      },
    ],
    resonances: [
      { level: "I", name: "Skill Resonance I", effect: "Main parameters +6%." },
      {
        level: "II",
        name: "Skill Resonance II",
        effect: "ADAPTIVE MOVE cooldown -2 crossings.",
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Main parameters +6%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect: "When blocking, Kawanishi’s [Reflex] +10%.",
      },
      { level: "V", name: "Skill Resonance V", effect: "Main parameters +6%." },
    ],
    potentials: {
      recommended: {
        primaryType: "Block",
        primaryCount: 4,
        secondaryType: "Quick Attack",
        secondaryCount: 2,
        reason: "Bloqueador sólido con opción de quick.",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },
];
