import type { Player } from "@/types";

export const inarizakiPlayers: Player[] = [
  // ===== ATSUMU MIYA (UR — JAPAN) =====
  {
    id: "atsumu-miya-ur",
    name: "Atsumu Miya",
    shortName: "Atsumu",
    team: "Inarizaki",
    rarity: "UR",
    roles: ["S"],
    typeTags: ["Quick Attack", "Serve", "Setter"],
    image: "/characters/inarizaki/atsumu-miya-ur.jpg",
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
      // 試合運び／柔軟さ
      {
        key: "passive",
        name: "Flexible Offense",
        levels: {
          "1": "Atsumu’s [Quick Attack] +10%. For every 1% Stamina lost this set, Atsumu’s [Attack Technique] +1% (caps at +10%).",
          "2": "Atsumu’s [Quick Attack] +12%. Each 1% Stamina lost this set grants +1.2% [Attack Technique] (caps at +12%).",
          "3": "Atsumu’s [Quick Attack] +14%. Each 1% Stamina lost this set grants +1.5% [Attack Technique] (caps at +15%).",
          "4": undefined,
          "5": undefined,
        },
      },
      // 冷静なジャンプサーブ
      {
        key: "passive",
        name: "Calm Jump Serve",
        levels: {
          "1": "Performs a Jump Serve with [Serve] x120%. If an ally is receiving this rally, Atsumu’s [Attack Technique] +10% for the receive.",
          "2": "Jump Serve [Serve] x135%. Same +10% [Attack Technique] clause.",
          "3": "Jump Serve [Serve] x150%. Same +10% [Attack Technique] clause.",
          "4": undefined,
          "5": undefined,
        },
      },
      // マルチな能力
      {
        key: "passive",
        name: "Versatile Ability",
        levels: {
          "1": "Atsumu’s [Attack Technique] +1%. When Atsumu serves or receives, inflict 1 stack of “Unstable” on one front-row opponent (Receive -10%). Lasts until 8 net crossings or cleansed.",
          "2": "Atsumu’s [Attack Technique] +1.2%. Same “Unstable” (Receive -10%).",
          "3": "Atsumu’s [Attack Technique] +1.5%. Same “Unstable” (Receive -10%).",
          "4": undefined,
          "5": undefined,
        },
      },
      // 意地のある速攻（必殺）
      {
        key: "active",
        name: "Assured Set Attack",
        levels: {
          "1": "Atsumu converts the pass into a Set Attack with [Set] x260%; during this play, Atsumu’s [Attack Technique] +40%. Lasts 2 net crossings.",
          "2": "[Set] x275%; same +40% [Attack Technique].",
          "3": "[Set] x290%; same +40% [Attack Technique].",
          "4": "[Set] x305%; same +40% [Attack Technique].",
          "5": "[Set] x320%; same +40% [Attack Technique].",
        },
      },
    ],
    bonds: [
      {
        to: "atsumu-miya-ur",
        name: "Strongest High School Twins",
        participants: ["atsumu-miya-ur", "osamu-miya-ur"],
        effect:
          "Atsumu sets, and Osamu performs a Quick Attack with [Quick Attack] x (Lv1: 265%, Lv2: 280%, Lv3: 295%, Lv4: 310%, Lv5: 325%). Osamu’s [Attack Technique] +15% while this link persists (ends if either twin leaves the court). Unblockable.",
      },
      {
        to: "miya-atsumu-ur",
        name: "Head and Main Axis",
        participants: ["atsumu-miya-ur", "osamu-miya-ur", "shinsuke-kita-ssr"],
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
        effect: "Serve effects improved and duration +1 crossing.",
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
          "On scoring with Assured Set Attack: gain 2 stacks of “Attack Tempo”.",
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
        reason: "Control total del ritmo y presión desde el saque.",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // ===== OSAMU MIYA (UR — JAPAN) =====
  {
    id: "osamu-miya-ur",
    name: "Osamu Miya",
    shortName: "Osamu",
    team: "Inarizaki",
    rarity: "UR",
    roles: ["OP"],
    typeTags: ["Quick Attack", "Setter"],
    image: "/characters/inarizaki/osamu-miya-ur.jpg",
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
        name: "Steady Tempo",
        levels: {
          "1": "Osamu’s [Quick Attack] +10%. When Osamu touches the ball, gain 1 stack of “Heat Up” (Quick Attack +1%, up to 6 stacks).",
          "2": "Osamu’s [Quick Attack] +12%. Each touch grants +1.2% (cap 6 stacks).",
          "3": "Osamu’s [Quick Attack] +14%. Each touch grants +1.5% (cap 6 stacks).",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Careful Set",
        levels: {
          "1": "Performs a Set with [Set] x125%; cleanses all debuffs on the spiker for that attack.",
          "2": "Performs a Set with [Set] x140%; cleanses debuffs.",
          "3": "Performs a Set with [Set] x155%; cleanses debuffs.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Composed Serve",
        levels: {
          "1": "If Osamu serves, allies’ next receive gains power +10% of their [Receive].",
          "2": "If Osamu serves, allies’ next receive gains power +12% of their [Receive].",
          "3": "If Osamu serves, allies’ next receive gains power +14% of their [Receive].",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Technique-Weighted Spike",
        levels: {
          "1": "Power Spike with [Power Attack] x260%; during this spike, Osamu’s [Attack Technique] +40%. Lasts 2 net crossings.",
          "2": "[Power Attack] x275%; same +40% [Attack Technique].",
          "3": "[Power Attack] x290%; same +40% [Attack Technique].",
          "4": "[Power Attack] x305%; same +40% [Attack Technique].",
          "5": "[Power Attack] x320%; same +40% [Attack Technique].",
        },
      },
    ],
    bonds: [
      {
        to: "atsumu-miya-ur",
        name: "Strongest High School Twins",
        participants: ["atsumu-miya-ur", "osamu-miya-ur"],
        effect:
          "Atsumu sets, and Osamu performs a Quick Attack with [Quick Attack] x (Lv1: 265%, Lv2: 280%, Lv3: 295%, Lv4: 310%, Lv5: 325%). Osamu’s [Attack Technique] +15% while this link persists. Unblockable.",
      },
      {
        to: "miya-atsumu-ur",
        name: "Head and Main Axis",
        participants: ["atsumu-miya-ur", "osamu-miya-ur", "shinsuke-kita-ssr"],
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
        effect: "Careful Set cleanses and grants +10% Awareness to the spiker.",
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
          "On scoring with Technique-Weighted Spike: gain 2 stacks of “Heat Up”.",
      },
      {
        level: "V",
        name: "Skill Resonance V",
        effect: "Main parameters +13%.",
      },
    ],
    potentials: {
      recommended: {
        primaryType: "Attack Technique",
        primaryCount: 4,
        secondaryType: "Setter",
        secondaryCount: 2,
        reason: "Híbrido: remate técnico + apoyo con colocación.",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // ===== SHINSUKE KITA (SSR — JAPAN) =====
  {
    id: "shinsuke-kita-ssr",
    name: "Shinsuke Kita",
    shortName: "Kita",
    team: "Inarizaki",
    rarity: "SSR",
    roles: ["WS"],
    typeTags: ["Receive"],
    image: "/characters/inarizaki/shinsuke-kita-ssr.jpg",
    server: "Japan",
    stats: {
      basic: {
        quickAttack: 69,
        powerAttack: 87,
        set: 102,
        serve: 99,
        receive: 121,
        block: 93,
        save: 116,
      },
      bonusAttack: { awareness: 0.06, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.08, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Reliable Captain",
        levels: {
          "1": "Kita’s main parameters +6%. His plays never result in a Miss; Kita’s [Defense Technique] scales with [Reflex] (+8%).",
          "2": "Kita’s main parameters +7.5%. Plays never Miss; [Defense Technique] scales (+9.5%).",
          "3": "Kita’s main parameters +9%. Plays never Miss; [Defense Technique] scales (+11%).",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Calm Cover",
        levels: {
          "1": "Performs a Cover with [Save] x120%.",
          "2": "Cover [Save] x135%.",
          "3": "Cover [Save] x150%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "‘Do It Properly’",
        levels: {
          "1": "Kita’s [Receive] +8%. On PERFECT Receive, grant “Reliable Support” to allies (Receive +3%, Strength +3%) for 4 net crossings.",
          "2": "Kita’s [Receive] +9.5%. PERFECT: allies Receive/Strength +4%.",
          "3": "Kita’s [Receive] +11%. PERFECT: allies Receive/Strength +5%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Steadfast Play",
        levels: {
          "1": "Receive with [Receive] x235%.",
          "2": "Receive with [Receive] x250%.",
          "3": "Receive with [Receive] x265%.",
          "4": "Receive with [Receive] x280%.",
          "5": "Receive with [Receive] x295%.",
        },
      },
    ],
    bonds: [
      {
        to: "miya-atsumu-ur",
        name: "Head and Main Axis",
        participants: ["atsumu-miya-ur", "osamu-miya-ur", "shinsuke-kita-ssr"],
        effect:
          "While all three are on court, the Miya twins’ spike power +10% and Kita’s Receives grant +1 stack of “Attack Tempo”.",
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
        effect: "Steadfast Play grants allies +10% [Reflex] for 4 crossings.",
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Main parameters +10%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect: "On PERFECT Receive: immediately +1 “Attack Tempo” (team).",
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
        secondaryType: "Reflex",
        secondaryCount: 2,
        reason: "Libera la identidad de capitán ancla defensiva.",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // ===== RINTARO SUNA (SSR — JAPAN) =====
  {
    id: "rintaro-suna-ssr",
    name: "Rintaro Suna",
    shortName: "Suna",
    team: "Inarizaki",
    rarity: "SSR",
    roles: ["MB"],
    typeTags: ["Quick Attack", "Block"],
    image: "/characters/inarizaki/rintaro-suna-ssr.jpg",
    server: "Japan",
    stats: {
      basic: {
        quickAttack: 121,
        powerAttack: 83,
        set: 97,
        serve: 104,
        receive: 103,
        block: 110,
        save: 108,
      },
      bonusAttack: { awareness: 0.05, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.05, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Seal the Angles",
        levels: {
          "1": "Suna’s [Block] +10%. While on court, if the opponent’s front row aims Power/Receive lines, your blocker’s [Block] +15%.",
          "2": "Suna’s [Block] +12%. Same line-seal bonus +17%.",
          "3": "Suna’s [Block] +14%. Same line-seal bonus +19%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Solid Block",
        levels: {
          "1": "Block with [Block] x120%.",
          "2": "Block with [Block] x135%.",
          "3": "Block with [Block] x150%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Mind Games",
        levels: {
          "1": "Suna’s [Quick Attack] +10%. On his attacks, apply 1 stack of “Irritation” to the opposing front row (each stack: Block Power -10%), lasting 8 net crossings.",
          "2": "Suna’s [Quick Attack] +12%. Irritation stacks as above.",
          "3": "Suna’s [Quick Attack] +14%. Irritation stacks as above.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Unexpected Quick",
        levels: {
          "1": "Quick Spike with [Quick Attack] x240%.",
          "2": "Quick Spike with [Quick Attack] x255%.",
          "3": "Quick Spike with [Quick Attack] x270%.",
          "4": "Quick Spike with [Quick Attack] x285%.",
          "5": "Quick Spike with [Quick Attack] x300%.",
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
        effect:
          "On PERFECT Block: next ally spike power +8% of the spiker’s [Power Attack].",
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Main parameters +10%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect: "Unexpected Quick becomes unblockable once per set.",
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
        reason: "MB mixto: techo firme + amenaza de primer tiempo.",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // ===== ARAN OJIRO (SSR — JAPAN) =====
  {
    id: "aran-ojiru-ssr",
    name: "Aran Ojiro",
    shortName: "Aran",
    team: "Inarizaki",
    rarity: "SSR",
    roles: ["WS"],
    typeTags: ["Power Attack", "Serve"],
    image: "/characters/inarizaki/aran-ojiru-ssr.jpg",
    server: "Japan",
    stats: {
      basic: {
        quickAttack: 84,
        powerAttack: 122,
        set: 98,
        serve: 116,
        receive: 109,
        block: 104,
        save: 98,
      },
      bonusAttack: { awareness: 0.07, strength: 0.16, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.0, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Rhythm Tuning",
        levels: {
          "1": "Whenever Aran spends 10 Stamina, gain 1 stack of “Rhythm Time” (Attack Technique +3%). When serving, consume 1 stack to increase this serve’s power (+10% of [Serve]).",
          "2": "Stacks grant +3.5% Attack Technique; serve bonus +12%.",
          "3": "Stacks grant +4% Attack Technique; serve bonus +14%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "High-Quality Serve",
        levels: {
          "1": "Jump Serve with [Serve] x110%. Reduces the receiving opponent’s [Receive] by 10% for this rally.",
          "2": "Jump Serve [Serve] x125%. Reduce [Receive] -12%.",
          "3": "Jump Serve [Serve] x140%. Reduce [Receive] -14%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Aggressive Offense",
        levels: {
          "1": "Aran’s [Power Attack] +6% and [Serve] +6%. If Aran attacks while under 60% Stamina, this spike’s power +30%.",
          "2": "Aran’s [Power Attack] +7.5% and [Serve] +7.5%. Under 60% Stamina: +33%.",
          "3": "Aran’s [Power Attack] +9% and [Serve] +9%. Under 60% Stamina: +36%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Heavy Spike",
        levels: {
          "1": "Power Spike with [Power Attack] x240%.",
          "2": "Power Spike with [Power Attack] x255%.",
          "3": "Power Spike with [Power Attack] x270%.",
          "4": "Power Spike with [Power Attack] x285%.",
          "5": "Power Spike with [Power Attack] x300%.",
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
        effect: "On Critical Power Spike: reduce blockers’ Stamina by 5.",
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Main parameters +10%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect: "First Jump Serve each set gains +15% power.",
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
        reason: "Ace lateral con presión constante desde el servicio.",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // ===== HITOSHI GINJIMA (SSR — JAPAN) =====
  {
    id: "hitoshi-ginjima-ssr",
    name: "Hitoshi Ginjima",
    shortName: "Ginjima",
    team: "Inarizaki",
    rarity: "SSR",
    roles: ["WS"],
    typeTags: ["Power Attack", "Receive"],
    image: "/characters/inarizaki/hitoshi-ginjima-ssr.jpg",
    server: "Japan",
    stats: {
      basic: {
        quickAttack: 83,
        powerAttack: 121,
        set: 97,
        serve: 104,
        receive: 115,
        block: 109,
        save: 99,
      },
      bonusAttack: { awareness: 0.05, strength: 0.12, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.05, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Steady Defense",
        levels: {
          "1": "Ginjima’s [Power Attack] +6% and [Receive] +6%.",
          "2": "Ginjima’s [Power Attack] +7.5% and [Receive] +7.5%.",
          "3": "Ginjima’s [Power Attack] +9% and [Receive] +9%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Boosted Receive",
        levels: {
          "1": "Receive with [Receive] x120%.",
          "2": "Receive with [Receive] x135%.",
          "3": "Receive with [Receive] x150%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Offensive Response",
        levels: {
          "1": "For each back-row receiver on your side, Ginjima’s [Attack Technique] +2%. If an ally’s Receive is not BAD or worse, Ginjima’s [Strength] +5% (4 crossings).",
          "2": "Per back-row receiver: +2.5% [Attack Technique]; good Receive → [Strength] +6.5%.",
          "3": "Per back-row receiver: +3% [Attack Technique]; good Receive → [Strength] +8%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Forceful Shot",
        levels: {
          "1": "Power Spike with [Power Attack] x235%; if Ginjima is on court’s back row beforehand, this spike gets +30% [Power Attack] as bonus power.",
          "2": "Power Spike x250%; same +30% clause.",
          "3": "Power Spike x265%; same +30% clause.",
          "4": "Power Spike x280%; same +30% clause.",
          "5": "Power Spike x295%; same +30% clause.",
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
        effect: "Back-row Power Spike bonus +10% extra.",
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Main parameters +10%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect: "On PERFECT Receive: next ally spike +8% Awareness.",
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
        secondaryType: "Receive",
        secondaryCount: 2,
        reason: "WS completo: daño + estabilidad en recepción.",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // ===== MICHINARI AKAGI (SSR — JAPAN) =====
  {
    id: "michinari-akagi-ssr",
    name: "Michinari Akagi",
    shortName: "Akagi",
    team: "Inarizaki",
    rarity: "SSR",
    roles: ["LI"],
    typeTags: ["Receive"],
    image: "/characters/inarizaki/michinari-akagi-ssr.jpg",
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
      bonusDefense: { reflex: 0.05, spirit: 0.0, defenseTechnique: 0.05 },
    },
    skills: [
      {
        key: "passive",
        name: "Morale-Boosting Cover",
        levels: {
          "1": "Akagi’s [Receive] and [Cover] +10%. When Akagi Performs a Receive or Cover, allies’ Team Morale +10.",
          "2": "Akagi’s [Receive]/[Cover] +12%. Same team morale +10.",
          "3": "Akagi’s [Receive]/[Cover] +14%. Same team morale +10.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Reliable Libero",
        levels: {
          "1": "Cover with [Save] x120%. When Akagi Covers, allies’ “Defense Technique” +4% (6 net crossings).",
          "2": "Cover [Save] x135%. Buff +5.5%.",
          "3": "Cover [Save] x150%. Buff +7%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Never Let It Drop",
        levels: {
          "1": "Akagi’s [Receive] +10%. While Akagi is on court, on every opponent’s Quick Spike, apply 1 stack of “Pursuit” (up to 3): with 1/2/3 stacks, your side’s next receive power +4%/+8%/+12%. Lasts 5 net crossings.",
          "2": "Akagi’s [Receive] +12%. Pursuit provides +5%/+9%/+13%.",
          "3": "Akagi’s [Receive] +14%. Pursuit provides +6%/+10%/+14%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Steady Receive",
        levels: {
          "1": "Receive with [Receive] x240%.",
          "2": "Receive with [Receive] x255%.",
          "3": "Receive with [Receive] x270%.",
          "4": "Receive with [Receive] x285%.",
          "5": "Receive with [Receive] x300%.",
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
        effect: "Akagi’s Receives grant allies +5% Strength for 2 crossings.",
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Main parameters +10%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect: "First Receive each set is guaranteed NICE (once per set).",
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
        secondaryType: "Reflex",
        secondaryCount: 2,
        reason: "Libero puro: control de saque rival y segundas pelotas.",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // ===== MB (SR — JAPAN) =====
  {
    id: "ren-omimi-sr",
    name: "Ren Omimi",
    shortName: "Rem",
    team: "Inarizaki",
    rarity: "SR",
    roles: ["MB"],
    typeTags: ["Block"],
    image: "/characters/inarizaki/ren-omimi-sr.jpg",
    server: "Japan",
    stats: {
      basic: {
        quickAttack: 93,
        powerAttack: 64,
        set: 82,
        serve: 87,
        receive: 84,
        block: 98,
        save: 80,
      },
      bonusAttack: { awareness: 0.0, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.05, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Wall of Fortitude",
        levels: {
          "1": "Block stat +10%.",
          "2": "Block stat +12%.",
          "3": "Block stat +14%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Endurance",
        levels: {
          "1": "On Block, restore 10 Stamina and gain +2% [Block] (stacks up to 8).",
          "2": "Restore 12 Stamina; +2.5% [Block] per stack.",
          "3": "Restore 14 Stamina; +3% [Block] per stack.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Smart Response",
        levels: {
          "1": "Reflex +6%. On Block, if block isn’t BAD or worse, [Defense Technique] +1% (lasts 2 crossings).",
          "2": "Reflex +7.5%. DT +1.2%.",
          "3": "Reflex +9%. DT +1.5%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Solid Block",
        levels: {
          "1": "Block with [Block] x220%.",
          "2": "Block with [Block] x235%.",
          "3": "Block with [Block] x250%.",
          "4": "Block with [Block] x265%.",
          "5": "Block with [Block] x280%.",
        },
      },
    ],
    bonds: [],
    resonances: [
      { level: "I", name: "Skill Resonance I", effect: "Main parameters +6%." },
      {
        level: "II",
        name: "Skill Resonance II",
        effect: "First Block each set gets +10% power.",
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Main parameters +6%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect: "On PERFECT Block: next ally Quick +8% power.",
      },
      { level: "V", name: "Skill Resonance V", effect: "Main parameters +6%." },
    ],
    potentials: {
      recommended: {
        primaryType: "Block",
        primaryCount: 4,
        secondaryType: "Reflex",
        secondaryCount: 2,
        reason: "SR sencillo para techo constante.",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },
];
