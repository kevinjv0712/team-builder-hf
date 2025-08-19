// src/data/teams/shiratorizawa.ts
import type { Player } from "../types";

export const shiratorizawaPlayers: Player[] = [
  // ===================== TAICHI KAWANISHI (SR) =====================
  {
    id: "taichi-kawanishi-sr",
    name: "Taichi Kawanishi",
    shortName: "Kawanishi",
    team: "Shiratorizawa",
    rarity: "SR",
    roles: ["MB"],
    typeTags: ["Block", "Quick Attack", "Counter Quick"],
    image: "/characters/shiratorizawa/taichi-kawanishi-sr.png",
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
          "1": "Increases TAICHI KAWANISHI's Block stat by 10%.",
          "2": "Increases TAICHI KAWANISHI's Block stat by 10%.",
          "3": "Increases TAICHI KAWANISHI's Block stat by 10%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Speed Breakthrough!",
        levels: {
          "1": "TAICHI KAWANISHI performs a Quick Spike with 120% of Quick Attack stat as power.",
          "2": "TAICHI KAWANISHI performs a Quick Spike with 120% of Quick Attack stat as power.",
          "3": "TAICHI KAWANISHI performs a Quick Spike with 120% of Quick Attack stat as power.",
          "4": "TAICHI KAWANISHI performs a Quick Spike with 120% of Quick Attack stat as power.",
          "5": "TAICHI KAWANISHI performs a Quick Spike with 120% of Quick Attack stat as power.",
        },
      },
      {
        key: "passive",
        name: "Perfect Timing",
        levels: {
          "1": "When blocking an opponent's Quick Spike, increases TAICHI KAWANISHI's Reflex by 12% for this block.",
          "2": "When blocking an opponent's Quick Spike, increases TAICHI KAWANISHI's Reflex by 12% for this block.",
          "3": "When blocking an opponent's Quick Spike, increases TAICHI KAWANISHI's Reflex by 12% for this block.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Adaptive Move",
        levels: {
          "1": "TAICHI KAWANISHI performs a Block with 220% of Block stat as power.",
          "2": "TAICHI KAWANISHI performs a Block with 220% of Block stat as power.",
          "3": "TAICHI KAWANISHI performs a Block with 220% of Block stat as power.",
          "4": "TAICHI KAWANISHI performs a Block with 220% of Block stat as power.",
          "5": "TAICHI KAWANISHI performs a Block with 220% of Block stat as power.",
        },
      },
    ],
    bonds: [
      {
        to: "satori-tendo-ssr",
        name: "Shiratorizawa’s Middle Block",
        participants: ["taichi-kawanishi-sr", "satori-tendo-ssr"],
        effect: "Increases Block stat of your side's front row players while both are on court.",
      },
    ],
    resonances: [
      { level: "I", name: "Skill Resonance I", effect: "Increases Basic Stats by 6%." },
      { level: "II", name: "Skill Resonance II", effect: "Reduces ADAPTIVE MOVE cooldown by 2 net crossings." },
      { level: "III", name: "Skill Resonance III", effect: "Increases Basic Stats by 6%." },
      { level: "IV", name: "Skill Resonance IV", effect: "Increases TAICHI KAWANISHI's Reflex by 15% when blocking." },
      { level: "V", name: "Skill Resonance V", effect: "Increases Basic Stats by 6%." },
    ],
    potentials: { recommended: { primaryType: "", primaryCount: 4, secondaryType: "", secondaryCount: 2, reason: "" }, equipped: [] },
    memory: { name: "", effect: "" },
  },

  // ===================== TSUTOMU GOSHIKI (SSR) =====================
  {
    id: "tsutomu-goshiki-ssr",
    name: "Tsutomu Goshiki",
    shortName: "Goshiki",
    team: "Shiratorizawa",
    rarity: "SSR",
    roles: ["WS"],
    typeTags: ["Power Attack", "Receive", "Team Morale", "Awareness Up"],
    image: "/characters/shiratorizawa/tsutomu-goshiki-ssr.png",
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
        name: "Rising to the Occasion",
        levels: {
          "1": "When TSUTOMU GOSHIKI scores, increases your Team Morale by 8.",
          "2": "When TSUTOMU GOSHIKI scores, increases your Team Morale by 8.",
          "3": "When TSUTOMU GOSHIKI scores, increases your Team Morale by 8.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Simple Reception",
        levels: {
          "1": "TSUTOMU GOSHIKI performs a Receive with 120% of his Receive stat.",
          "2": "TSUTOMU GOSHIKI performs a Receive with 120% of his Receive stat.",
          "3": "TSUTOMU GOSHIKI performs a Receive with 120% of his Receive stat.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Future Ace",
        levels: {
          "1": "At the end of each turn, TSUTOMU GOSHIKI gains 1 stack(s) of \"Sharp\". Each stack increases his Power Attack by 2.5%, up to 5 stacks.",
          "2": "At the end of each turn, TSUTOMU GOSHIKI gains 1 stack(s) of \"Sharp\". Each stack increases his Power Attack by 2.5%, up to 5 stacks.",
          "3": "At the end of each turn, TSUTOMU GOSHIKI gains 1 stack(s) of \"Sharp\". Each stack increases his Power Attack by 2.5%, up to 5 stacks.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Miracle Maker",
        levels: {
          "1": "TSUTOMU GOSHIKI performs a Power Spike with 225% of his Power Attack stat. For this Spike, his Awareness increases by 10%.",
          "2": "TSUTOMU GOSHIKI performs a Power Spike with 225% of his Power Attack stat. For this Spike, his Awareness increases by 10%.",
          "3": "TSUTOMU GOSHIKI performs a Power Spike with 225% of his Power Attack stat. For this Spike, his Awareness increases by 10%.",
          "4": "TSUTOMU GOSHIKI performs a Power Spike with 225% of his Power Attack stat. For this Spike, his Awareness increases by 10%.",
          "5": "TSUTOMU GOSHIKI performs a Power Spike with 225% of his Power Attack stat. For this Spike, his Awareness increases by 10%.",
        },
      },
    ],
    bonds: [],
    resonances: [
      { level: "I", name: "Skill Resonance I", effect: "Increases Basic Stats by 10%." },
      { level: "II", name: "Skill Resonance II", effect: 'FUTURE ACE new effect: Each stack of "Sharp" increases Awareness by 2%.' },
      { level: "III", name: "Skill Resonance III", effect: "Increases Basic Stats by 10%." },
      { level: "IV", name: "Skill Resonance IV", effect: "When your side enters Team Morale Awakening state, MIRACLE MAKER cooldown is reset." },
      { level: "V", name: "Skill Resonance V", effect: "Increases Basic Stats by 10%." },
    ],
    potentials: { recommended: { primaryType: "", primaryCount: 4, secondaryType: "", secondaryCount: 2, reason: "" }, equipped: [] },
    memory: { name: "", effect: "" },
  },

  // ===================== SATORI TENDŌ (SSR) =====================
  {
    id: "satori-tendo-ssr",
    name: "Satori Tendō",
    shortName: "Tendō",
    team: "Shiratorizawa",
    rarity: "SSR",
    roles: ["MB"],
    typeTags: ["Block", "Quick Attack", "Cooldown"],
    image: "/characters/shiratorizawa/satori-tendo-ssr.png",
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
          "1": "Increases SATORI TENDŌ's Reflex by 12%.",
          "2": "Increases SATORI TENDŌ's Reflex by 12%.",
          "3": "Increases SATORI TENDŌ's Reflex by 12%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Surprise Quick Attack",
        levels: {
          "1": "SATORI TENDŌ performs a Quick Spike with 120% of his Quick Attack stat.",
          "2": "SATORI TENDŌ performs a Quick Spike with 120% of his Quick Attack stat.",
          "3": "SATORI TENDŌ performs a Quick Spike with 120% of his Quick Attack stat.",
          "4": "SATORI TENDŌ performs a Quick Spike with 120% of his Quick Attack stat.",
          "5": "SATORI TENDŌ performs a Quick Spike with 120% of his Quick Attack stat.",
        },
      },
      {
        key: "passive",
        name: "Mind Game Block",
        levels: {
          "1": "When SATORI TENDŌ performs a Critical Block, reduces the cooldown of WILD INSTINCT by 1 net crossings.",
          "2": "When SATORI TENDŌ performs a Critical Block, reduces the cooldown of WILD INSTINCT by 1 net crossings.",
          "3": "When SATORI TENDŌ performs a Critical Block, reduces the cooldown of WILD INSTINCT by 1 net crossings.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Wild Instinct",
        levels: {
          "1": "SATORI TENDŌ performs a Block with 220% of his Block stat. When blocking a Critical Spike, his Reflex increases by 15% for this Block.",
          "2": "SATORI TENDŌ performs a Block with 220% of his Block stat. When blocking a Critical Spike, his Reflex increases by 15% for this Block.",
          "3": "SATORI TENDŌ performs a Block with 220% of his Block stat. When blocking a Critical Spike, his Reflex increases by 15% for this Block.",
          "4": "SATORI TENDŌ performs a Block with 220% of his Block stat. When blocking a Critical Spike, his Reflex increases by 15% for this Block.",
          "5": "SATORI TENDŌ performs a Block with 220% of his Block stat. When blocking a Critical Spike, his Reflex increases by 15% for this Block.",
        },
      },
    ],
    bonds: [
      {
        to: "wakatoshi-ushijima-ur",
        name: "Lifelong Best Friends",
        participants: ["satori-tendo-ssr", "wakatoshi-ushijima-ur"],
        effect: "Increases WAKATOSHI USHIJIMA's Attack Technique and SATORI TENDŌ's Defense Technique while both are deployed.",
      },
      {
        to: "taichi-kawanishi-sr",
        name: "Shiratorizawa’s Middle Block",
        participants: ["satori-tendo-ssr", "taichi-kawanishi-sr"],
        effect: "Front-row block coordination boosts your side's front row Block stat.",
      },
    ],
    resonances: [
      { level: "I", name: "Skill Resonance I", effect: "Increases Basic Stats by 10%." },
      {
        level: "II",
        name: "Skill Resonance II",
        effect: "When SATORI TENDŌ is present, at match start, applies “Enrage” debuff to opponent players (reduces Power/Quick Attack stats).",
      },
      { level: "III", name: "Skill Resonance III", effect: "Increases Basic Stats by 10%." },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect: "Increases SATORI TENDŌ's Block stat by 10%; if the opponent spiker has a debuff when he blocks, increases TENDŌ's Reflex by 10% for that block.",
      },
      { level: "V", name: "Skill Resonance V", effect: "Increases Basic Stats by 10%." },
    ],
    potentials: { recommended: { primaryType: "", primaryCount: 4, secondaryType: "", secondaryCount: 2, reason: "" }, equipped: [] },
    memory: { name: "", effect: "" },
  },

  // ===================== WAKATOSHI USHIJIMA (UR) =====================
  {
    id: "wakatoshi-ushijima-ur",
    name: "Wakatoshi Ushijima",
    shortName: "Ushijima",
    team: "Shiratorizawa",
    rarity: "UR",
    roles: ["OP"],
    typeTags: ["Power Attack", "Serve", "Awareness Up", "Stat Bonus", "Debuff Cleanse"],
    image: "/characters/shiratorizawa/wakatoshi-ushijima-ur.png",
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
          "1": "Increases WAKATOSHI USHIJIMA's Awareness by 8%. While he is on the court, his Awareness increases by an additional 3% at the end of each turn.",
          "2": "Increases WAKATOSHI USHIJIMA's Awareness by 8%. While he is on the court, his Awareness increases by an additional 3% at the end of each turn.",
          "3": "Increases WAKATOSHI USHIJIMA's Awareness by 8%. While he is on the court, his Awareness increases by an additional 3% at the end of each turn.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Dominating Serve",
        levels: {
          "1": "WAKATOSHI USHIJIMA performs a Jump Serve with 125% of his Serve stat. If this Serve is a Critical, the receiving players cannot cast skills. When this Serve scores, reduces DOMINATING SERVE's cooldown by 4 net crossings.",
          "2": "WAKATOSHI USHIJIMA performs a Jump Serve with 125% of his Serve stat. If this Serve is a Critical, the receiving players cannot cast skills. When this Serve scores, reduces DOMINATING SERVE's cooldown by 4 net crossings.",
          "3": "WAKATOSHI USHIJIMA performs a Jump Serve with 125% of his Serve stat. If this Serve is a Critical, the receiving players cannot cast skills. When this Serve scores, reduces DOMINATING SERVE's cooldown by 4 net crossings.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Ace Style",
        levels: {
          "1": "When your players land Critical Spikes, WAKATOSHI USHIJIMA gains 1.5% to all Basic Stats, stacking up to 8 times. When he scores, removes all debuffs from himself.",
          "2": "When your players land Critical Spikes, WAKATOSHI USHIJIMA gains 1.5% to all Basic Stats, stacking up to 8 times. When he scores, removes all debuffs from himself.",
          "3": "When your players land Critical Spikes, WAKATOSHI USHIJIMA gains 1.5% to all Basic Stats, stacking up to 8 times. When he scores, removes all debuffs from himself.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Undisputed Ace",
        levels: {
          "1": "WAKATOSHI USHIJIMA performs a Power Spike with 250% of his Power Attack stat. If this Spike is a Critical, reduces UNDISPUTED ACE's cooldown by 1 net crossings.",
          "2": "WAKATOSHI USHIJIMA performs a Power Spike with 250% of his Power Attack stat. If this Spike is a Critical, reduces UNDISPUTED ACE's cooldown by 1 net crossings.",
          "3": "WAKATOSHI USHIJIMA performs a Power Spike with 250% of his Power Attack stat. If this Spike is a Critical, reduces UNDISPUTED ACE's cooldown by 1 net crossings.",
          "4": "WAKATOSHI USHIJIMA performs a Power Spike with 250% of his Power Attack stat. If this Spike is a Critical, reduces UNDISPUTED ACE's cooldown by 1 net crossings.",
          "5": "WAKATOSHI USHIJIMA performs a Power Spike with 250% of his Power Attack stat. If this Spike is a Critical, reduces UNDISPUTED ACE's cooldown by 1 net crossings.",
        },
      },
    ],
    bonds: [
      {
        to: "satori-tendo-ssr",
        name: "Lifelong Best Friends",
        participants: ["wakatoshi-ushijima-ur", "satori-tendo-ssr"],
        effect: "Increases WAKATOSHI USHIJIMA's Attack Technique and SATORI TENDŌ's Defense Technique while both are deployed.",
      },
    ],
    resonances: [
      { level: "I", name: "Skill Resonance I", effect: "Increases Basic Stats by 13%." },
      {
        level: "II",
        name: "Skill Resonance II",
        effect: "Reduces UNDISPUTED ACE cooldown to 4 net crossings; when a player on your side performs a Critical play, reduces UNDISPUTED ACE cooldown by 1 net crossing.",
      },
      { level: "III", name: "Skill Resonance III", effect: "Increases Basic Stats by 13%." },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect: "Doubles WAKATOSHI USHIJIMA's Awareness stat; when USHIJIMA performs a Critical play, recovers 2 Stamina.",
      },
      { level: "V", name: "Skill Resonance V", effect: "Increases Basic Stats by 13%." },
    ],
    potentials: { recommended: { primaryType: "", primaryCount: 4, secondaryType: "", secondaryCount: 2, reason: "" }, equipped: [] },
    memory: { name: "", effect: "" },
  },
];
