import type { Player } from "@/types";
export const nekomaPlayers: Player[] = [
  // src/data/teams/nekoma.ts
  // ===================== KENMA KOZUME (SP) =====================
  {
    id: "kenma-kozume-sp",
    name: "Kenma Kozume (Swimsuit)",
    shortName: "Kenma (SP)",
    team: "Nekoma",
    rarity: "SP",
    roles: ["S"],
    typeTags: ["Receive", "Setter"],
    image: "/characters/nekoma/kenma-kozume-sp.jpg",
    server: "Japan",
    stats: {
      basic: {
        quickAttack: 102,
        powerAttack: 90,
        set: 148,
        serve: 104,
        receive: 136,
        block: 88,
        save: 118,
      },
      bonusAttack: { awareness: 0.05, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.05, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Game Director",
        levels: {
          "1": 'While KENMA (SP) is present, allies’ Receive +6%. On PERFECT Receive or PERFECT Set, gain 1 stack of "Keep It Alive" (max 6): each stack grants allies +1% Receive.',
          "2": 'While KENMA (SP) is present, allies’ Receive +7.5%. On PERFECT Receive or PERFECT Set, gain 1 stack of "Keep It Alive" (max 6): each stack grants allies +1% Receive.',
          "3": 'While KENMA (SP) is present, allies’ Receive +9%. On PERFECT Receive or PERFECT Set, gain 1 stack of "Keep It Alive" (max 6): each stack grants allies +1% Receive.',
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Silent Set",
        levels: {
          "1": "KENMA (SP) performs a Set with 125% of Set stat.",
          "2": "KENMA (SP) performs a Set with 140% of Set stat.",
          "3": "KENMA (SP) performs a Set with 155% of Set stat.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Reading the Flow",
        levels: {
          "1": "After your side achieves a PERFECT Receive, the next Set by KENMA (SP) grants the spiker +6% Power/Quick Attack for 1 rally.",
          "2": "After your side achieves a PERFECT Receive, the next Set by KENMA (SP) grants the spiker +7.5% Power/Quick Attack for 1 rally.",
          "3": "After your side achieves a PERFECT Receive, the next Set by KENMA (SP) grants the spiker +9% Power/Quick Attack for 1 rally.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Sneak Dump",
        levels: {
          "1": "KENMA (SP) performs an unblockable Setter Dump with 235% of Set stat.",
          "2": "KENMA (SP) performs an unblockable Setter Dump with 250% of Set stat.",
          "3": "KENMA (SP) performs an unblockable Setter Dump with 265% of Set stat.",
          "4": "KENMA (SP) performs an unblockable Setter Dump with 280% of Set stat.",
          "5": "KENMA (SP) performs an unblockable Setter Dump with 295% of Set stat.",
        },
      },
    ],
    bonds: [
      {
        to: "shoyo-hinata-sp",
        name: "Cats & Crows in Summer",
        participants: ["kenma-kozume-sp", "shoyo-hinata-sp"],
        effect:
          "After Kenma (SP) casts SNEAK DUMP, Hinata (SP) gains +12% Quick Attack for 1 rally.",
      },
    ],
    resonances: [
      {
        level: "I",
        name: "Skill Resonance I",
        effect: "Increases Basic Stats by 13%.",
      },
      {
        level: "II",
        name: "Skill Resonance II",
        effect: 'When SNEAK DUMP is cast, gain 2 stacks of "Keep It Alive".',
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Increases Basic Stats by 13%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect: 'At match start, gain 4 stacks of "Keep It Alive".',
      },
      {
        level: "V",
        name: "Skill Resonance V",
        effect: "Increases Basic Stats by 13%.",
      },
    ],
    potentials: {
      recommended: {
        primaryType: "",
        primaryCount: 4,
        secondaryType: "",
        secondaryCount: 2,
        reason: "",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // ===================== MORISUKE YAKU (SSR) =====================
  {
    id: "morisuke-yaku-ssr",
    name: "Morisuke Yaku",
    shortName: "Yaku",
    team: "Nekoma",
    rarity: "SSR",
    roles: ["LI"],
    typeTags: ["Receive"],
    image: "/characters/nekoma/morisuke-yaku-ssr.jpg",
    server: "Japan",
    stats: {
      basic: {
        quickAttack: 62,
        powerAttack: 84,
        set: 94,
        serve: 102,
        receive: 132,
        block: 86,
        save: 124,
      },
      bonusAttack: { awareness: 0.05, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.06, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Catlike Reflexes",
        levels: {
          "1": "YAKU’s Receive +10%; Save +8%.",
          "2": "YAKU’s Receive +12%; Save +9%.",
          "3": "YAKU’s Receive +14%; Save +10%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Libero Anchor",
        levels: {
          "1": "While YAKU is present, back-row allies’ Receive +6%.",
          "2": "While YAKU is present, back-row allies’ Receive +7.5%.",
          "3": "While YAKU is present, back-row allies’ Receive +9%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "First Touch Mastery",
        levels: {
          "1": "On PERFECT Receive by YAKU, next Set on your side grants the spiker +6% Power/Quick Attack.",
          "2": "On PERFECT Receive by YAKU, next Set on your side grants the spiker +8% Power/Quick Attack.",
          "3": "On PERFECT Receive by YAKU, next Set on your side grants the spiker +10% Power/Quick Attack.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Laser Receive",
        levels: {
          "1": "YAKU performs a Receive with 230% of Receive stat as power.",
          "2": "YAKU performs a Receive with 242% of Receive stat as power.",
          "3": "YAKU performs a Receive with 255% of Receive stat as power.",
          "4": "YAKU performs a Receive with 268% of Receive stat as power.",
          "5": "YAKU performs a Receive with 281% of Receive stat as power.",
        },
      },
    ],
    bonds: [
      {
        to: "lev-haiba-ssr",
        name: "Wall & Shield",
        participants: ["morisuke-yaku-ssr", "lev-haiba-ssr"],
        effect:
          "When YAKU (SSR) achieves PERFECT Receive, Lev (SSR)’s next Quick gains +12% power.",
      },
    ],
    resonances: [
      {
        level: "I",
        name: "Skill Resonance I",
        effect: "Increases Basic Stats by 10%.",
      },
      {
        level: "II",
        name: "Skill Resonance II",
        effect: "When losing, YAKU’s Receive +12% and Save +12%.",
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Increases Basic Stats by 10%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect:
          "Once per turn, a failed Receive/Save by YAKU becomes opponent free-ball instead.",
      },
      {
        level: "V",
        name: "Skill Resonance V",
        effect: "Increases Basic Stats by 10%.",
      },
    ],
    potentials: {
      recommended: {
        primaryType: "",
        primaryCount: 4,
        secondaryType: "",
        secondaryCount: 2,
        reason: "",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // ===================== KENMA (SSR) =====================
  {
    id: "kenma-kozume-ssr",
    name: "Kenma Kozume",
    shortName: "Kenma",
    team: "Nekoma",
    rarity: "SSR",
    roles: ["S"],
    typeTags: ["Setter", "Receive"],
    image: "/characters/nekoma/kenma-kozume-ssr.jpg",
    server: "Global",
    stats: {
      basic: {
        quickAttack: 81,
        powerAttack: 114,
        set: 136,
        serve: 95,
        receive: 106,
        block: 92,
        save: 93,
      },
      bonusAttack: { awareness: 0.0, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.0, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Divine Vision",
        levels: {
          "1": 'While KENMA is on the court, allies’ Receive +8%. On PERFECT Receive or PERFECT Set, gain 1 stack of "Keep It Alive" (max 6), each stack +3% Receive.',
          "2": 'While KENMA is on the court, allies’ Receive +9.5%. On PERFECT Receive or PERFECT Set, gain 1 stack of "Keep It Alive" (max 6), each stack +3% Receive.',
          "3": 'While KENMA is on the court, allies’ Receive +11%. On PERFECT Receive or PERFECT Set, gain 1 stack of "Keep It Alive" (max 6), each stack +3% Receive.',
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Steady Setting",
        levels: {
          "1": "KENMA performs a Set with 120% of Set stat.",
          "2": "KENMA performs a Set with 132% of Set stat.",
          "3": "KENMA performs a Set with 145% of Set stat.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "The Brain",
        levels: {
          "1": 'Allies’ Receive +6%. If "Keep It Alive" ≥ 6, allies’ Receive +150% and Save +150%; on failed Receive/Save, consume 6 stacks to convert to PERFECT.',
          "2": 'Allies’ Receive +7.5%. If "Keep It Alive" ≥ 6, allies’ Receive +150% and Save +150%; on failed Receive/Save, consume 6 stacks to convert to PERFECT.',
          "3": 'Allies’ Receive +9%. If "Keep It Alive" ≥ 6, allies’ Receive +150% and Save +150%; on failed Receive/Save, consume 6 stacks to convert to PERFECT.',
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Deceptive Dump",
        levels: {
          "1": "KENMA performs an unblockable Setter Dump with 220% of Set stat.",
          "2": "KENMA performs an unblockable Setter Dump with 235% of Set stat.",
          "3": "KENMA performs an unblockable Setter Dump with 250% of Set stat.",
          "4": "KENMA performs an unblockable Setter Dump with 265% of Set stat.",
          "5": "KENMA performs an unblockable Setter Dump with 280% of Set stat.",
        },
      },
    ],
    bonds: [
      {
        to: "tetsuro-kuroo-ur",
        name: "Brain & Control Tower",
        participants: ["kenma-kozume-ssr", "tetsuro-kuroo-ur"],
        effect:
          "Quick/Block coordination: PERFECT Set from Kenma empowers Kuroo’s Quick by +10%.",
      },
    ],
    resonances: [
      {
        level: "I",
        name: "Skill Resonance I",
        effect: "Increases Basic Stats by 10%.",
      },
      {
        level: "II",
        name: "Skill Resonance II",
        effect: "Casting DECEPTIVE DUMP grants 2 stacks of Keep It Alive.",
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Increases Basic Stats by 10%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect: "Start with 4 stacks of Keep It Alive.",
      },
      {
        level: "V",
        name: "Skill Resonance V",
        effect: "Increases Basic Stats by 10%.",
      },
    ],
    potentials: {
      recommended: {
        primaryType: "",
        primaryCount: 4,
        secondaryType: "",
        secondaryCount: 2,
        reason: "",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // ===================== KUROO (SP) =====================
  {
    id: "tetsuro-kuroo-sp",
    name: "Tetsurō Kuroo",
    shortName: "Kuroo",
    team: "Nekoma",
    rarity: "SP",
    roles: ["MB"],
    typeTags: ["Receive", "Block"],
    image: "/characters/nekoma/tetsuro-kuroo-sp.jpg",
    server: "Japan",
    stats: {
      basic: {
        quickAttack: 136,
        powerAttack: 93,
        set: 128,
        serve: 143,
        receive: 151,
        block: 159,
        save: 128,
      },
      bonusAttack: { awareness: 0.0, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.05, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "The command tower that cannot be eaten",
        levels: {
          "1": "While on the court, increases [Spirit] by 20% of allied members in the same front/back position as Kuroo. After Kuroo touches the ball, the power of the next play of the same type is increase by 40% x the corresponding parameter of the member making the play. If Kuroo's play is nice, a random member of the opposing team will be given [Anger].",
          "2": "While on the court, increases [Spirit] by 25% of allied members in the same front/back position as Kuroo. After Kuroo touches the ball, the power of the next play of the same type is increase by 40% x the corresponding parameter of the member making the play. If Kuroo's play is nice, a random member of the opposing team will be given [Anger].",
          "3": "While on the court, increases [Spirit] by 30% of allied members in the same front/back position as Kuroo. After Kuroo touches the ball, the power of the next play of the same type is increase by 40% x the corresponding parameter of the member making the play. If Kuroo's play is nice, a random member of the opposing team will be given [Anger].",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Skillful receive",
        levels: {
          "1": "Kuroo performs a receive with [Receive] x 140% If this is a nice play, the power of this receive is increased by [Receive] x 20%",
          "2": "Kuroo performs a receive with [Receive] x 160% If this is a nice play, the power of this receive is increased by [Receive] x 20%",
          "3": "Kuroo performs a receive with [Receive] x 180% If this is a nice play, the power of this receive is increased by [Receive] x 20%",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "A flawless, all-around player",
        levels: {
          "1": "When Kuroo is in the front line and touches the ball, Kuroo's [Reaction] and [Spirit] increases by 50% of the [Reaction] and [Spirit] of each other allied member in the front line (maximum 100% each). Furthermore, when Kuroo is in the front line, the [Attack Technique] of allied members is increased by 14% and Kuroo's [Block] is increased by 45%. When Kuroo is in the back line and touches the ball, Kuroo's [Reaction] and [Spirit] increases by 50% of the [Reaction] and [Spirit] of each other allied member in the back line (maximum 100% each). Furthermore, when Kuroo is in the back line, the [Defensive Technique] of allied members is increased by 14% and Kuroo's [Receive] is increased by 45%.",
          "2": "When Kuroo is in the front line and touches the ball, Kuroo's [Reaction] and [Spirit] increases by 50% of the [Reaction] and [Spirit] of each other allied member in the front line (maximum 100% each). Furthermore, when Kuroo is in the front line, the [Attack Technique] of allied members is increased by 17% and Kuroo's [Block] is increased by 45%. When Kuroo is in the back line and touches the ball, Kuroo's [Reaction] and [Spirit] increases by 50% of the [Reaction] and [Spirit] of each other allied member in the back line (maximum 100% each). Furthermore, when Kuroo is in the back line, the [Defensive Technique] of allied members is increased by 17% and Kuroo's [Receive] is increased by 45%.",
          "3": "When Kuroo is in the front line and touches the ball, Kuroo's [Reaction] and [Spirit] increases by 50% of the [Reaction] and [Spirit] of each other allied member in the front line (maximum 100% each). Furthermore, when Kuroo is in the front line, the [Attack Technique] of allied members is increased by 20% and Kuroo's [Block] is increased by 45%. When Kuroo is in the back line and touches the ball, Kuroo's [Reaction] and [Spirit] increases by 50% of the [Reaction] and [Spirit] of each other allied member in the back line (maximum 100% each). Furthermore, when Kuroo is in the back line, the [Defensive Technique] of allied members is increased by 20% and Kuroo's [Receive] is increased by 45%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Unpleasant Block",
        levels: {
          "1": "Kuroo performs a block [Block] x 280%; if this block does not bounce the ball back in the opponent's court, the first ally's reception after this play will not result in a point. If this block bounces back into the oponent's court, the main stats of all ally members will increase by 15%. This lasts untils the ball goes over the net 8 times.",
          "2": "Kuroo performs a block [Block] x 300%; if this block does not bounce the ball back in the opponent's court, the first ally's reception after this play will not result in a point. If this block bounces back into the oponent's court, the main stats of all ally members will increase by 15%. This lasts untils the ball goes over the net 8 times.",
          "3": "Kuroo performs a block [Block] x 320%; if this block does not bounce the ball back in the opponent's court, the first ally's reception after this play will not result in a point. If this block bounces back into the oponent's court, the main stats of all ally members will increase by 15%. This lasts untils the ball goes over the net 8 times.",
          "4": "Kuroo performs a block [Block] x 340%; if this block does not bounce the ball back in the opponent's court, the first ally's reception after this play will not result in a point. If this block bounces back into the oponent's court, the main stats of all ally members will increase by 15%. This lasts untils the ball goes over the net 8 times.",
          "5": "Kuroo performs a block [Block] x 360%; if this block does not bounce the ball back in the opponent's court, the first ally's reception after this play will not result in a point. If this block bounces back into the oponent's court, the main stats of all ally members will increase by 15%. This lasts untils the ball goes over the net 8 times.",
        },
      },
    ],
    bonds: [
      {
        to: "kenma-kozume-sp",
        name: "Brain & Control Tower",
        participants: ["tetsuro-kuroo-sp", "kenma-kozume-sp"],
        effect:
          "Kenma sets the ball and Kuroo performs a quick attack with +(Lv1: 280%, Lv2: 300%,Lv3: 320%,Lv4: 340%,Lv5: 360%) of power of [Quick Attack]. Guarantee to be a nice play. Allie's [Attack Technique] is increase by 10%. This effect lasts for 1 set.",
      },
      {
        to: "kei-tsukishima-sp",
        name: "Fireworks display",
        participants: ["tetsuro-kuroo-sp", "kei-tsukishima-sp"],
        effect:
          "Main parameters of allied members increase by +(Lv1: 6%, Lv2: 7%,Lv3: 8%,Lv4: 9%,Lv5: 10%). At the end of each rally, the opponent's front line will be inflicted with [Rage]. This lasts untils the ball crosses the net 8 times. If you inflict [Rage] on an enemy who already has [Rage], you will instead inflict [Distracted]. This lasts untils the ball crosses the net 8 times. The [Distracted] debuff cannot be removed.",
      },
    ],
    resonances: [
      {
        level: "I",
        name: "Skill Resonance I",
        effect: "Main parameters increase by 13%.",
      },
      {
        level: "II",
        name: "Skill Resonance II",
        effect:
          "After Kuroo touches the ball, the next [Quick/Power Attack] of an ally is increased by 20% x Kuroo's [Block], up to 1600 increase. If the member who spikes is in the back line, the [Attack Technique] of that member will be increased by 20%. This effect will last until the ball goes over the net twice.",
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Main parameters increase by 13%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect:
          "When serving, the [Quick/Power Attack] of allied members is increased by 40% and the [Receive] of allied back line is increased by 30%. This effect lasts for 1 rally. Kuroo's [Defensive Technique] is increased by 15%. When Kuroo is in the back line, [Defensive Technique] is increased by an additional 15%",
      },
      {
        level: "V",
        name: "Skill Resonance V",
        effect: "Main parameters increase by 13%.",
      },
    ],
    potentials: {
      recommended: {
        primaryType: "",
        primaryCount: 4,
        secondaryType: "",
        secondaryCount: 2,
        reason: "",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // ===================== KUROO (UR) =====================
  {
    id: "tetsuro-kuroo-ur",
    name: "Tetsurō Kuroo",
    shortName: "Kuroo",
    team: "Nekoma",
    rarity: "UR",
    roles: ["MB"],
    typeTags: ["Quick Attack", "Block"],
    image: "/characters/nekoma/tetsuro-kuroo-ur.jpg",
    server: "Global",
    stats: {
      basic: {
        quickAttack: 121,
        powerAttack: 134,
        set: 86,
        serve: 95,
        receive: 93,
        block: 133,
        save: 93,
      },
      bonusAttack: { awareness: 0.0, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.0, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Supreme Captain",
        levels: {
          "1": "Kuroo’s Quick Attack +10%; each net crossing grants him +5% Quick Attack & Block (max 5 stacks).",
          "2": "Kuroo’s Quick Attack +12%; each net crossing grants him +5% Quick Attack & Block (max 5 stacks).",
          "3": "Kuroo’s Quick Attack +14%; each net crossing grants him +5% Quick Attack & Block (max 5 stacks).",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "A-Quick Attack",
        levels: {
          "1": 'Performs a Quick Spike with 125% of Quick Attack; gain 1 "Power Charge" (each stack: +5% Quick to this skill, max 3).',
          "2": 'Performs a Quick Spike with 140% of Quick Attack; gain 1 "Power Charge" (each stack: +5% Quick to this skill, max 3).',
          "3": 'Performs a Quick Spike with 155% of Quick Attack; gain 1 "Power Charge" (each stack: +5% Quick to this skill, max 3).',
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Conductor",
        levels: {
          "1": "Kuroo’s Block +12%; on PERFECT block, apply Enrage to the spiker (-10% Power/Quick).",
          "2": "Kuroo’s Block +14%; on PERFECT block, apply Enrage to the spiker (-10% Power/Quick).",
          "3": "Kuroo’s Block +16%; on PERFECT block, apply Enrage to the spiker (-10% Power/Quick).",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Reactive Block",
        levels: {
          "1": "Block with 235% of Block; if the spiker is debuffed, +20% of Block added.",
          "2": "Block with 250% of Block; if the spiker is debuffed, +20% of Block added.",
          "3": "Block with 265% of Block; if the spiker is debuffed, +20% of Block added.",
          "4": "Block with 280% of Block; if the spiker is debuffed, +20% of Block added.",
          "5": "Block with 295% of Block; if the spiker is debuffed, +20% of Block added.",
        },
      },
    ],
    bonds: [
      {
        to: "kenma-kozume-ssr",
        name: "Brain & Control Tower",
        participants: ["tetsuro-kuroo-ur", "kenma-kozume-ssr"],
        effect:
          "PERFECT Set from Kenma boosts Kuroo’s next Quick by +10% power.",
      },
    ],
    resonances: [
      {
        level: "I",
        name: "Skill Resonance I",
        effect: "Increases Basic Stats by 13%.",
      },
      {
        level: "II",
        name: "Skill Resonance II",
        effect: "A-QUICK ATTACK cooldown becomes 0 net crossings.",
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Increases Basic Stats by 13%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect: "CONDUCTOR triggers on any block with stronger effect.",
      },
      {
        level: "V",
        name: "Skill Resonance V",
        effect: "Increases Basic Stats by 13%.",
      },
    ],
    potentials: {
      recommended: {
        primaryType: "",
        primaryCount: 4,
        secondaryType: "",
        secondaryCount: 2,
        reason: "",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // ===================== KUROO (SSR / Practice) =====================
  {
    id: "tetsuro-kuroo-ssr",
    name: "Tetsurō Kuroo",
    shortName: "Kuroo",
    team: "Nekoma",
    rarity: "SSR",
    roles: ["MB"],
    typeTags: ["Quick Attack", "Block"],
    image: "/characters/nekoma/tetsuro-kuroo-ssr.jpg",
    server: "Global",
    stats: {
      basic: {
        quickAttack: 115,
        powerAttack: 97,
        set: 92,
        serve: 90,
        receive: 92,
        block: 95,
        save: 82,
      },
      bonusAttack: { awareness: 0.0, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.05, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Expert's Aura",
        levels: {
          "1": "While present, Quick Attack-type allies’ Strength +12%.",
          "2": "While present, Quick Attack-type allies’ Strength +14%.",
          "3": "While present, Quick Attack-type allies’ Strength +16%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Steady Offense",
        levels: {
          "1": 'Quick Spike with 125% of Quick; gain 1 "Power Charge" (each +15% Quick to this skill, up to 2).',
          "2": 'Quick Spike with 140% of Quick; gain 1 "Power Charge" (each +15% Quick to this skill, up to 2).',
          "3": 'Quick Spike with 155% of Quick; gain 1 "Power Charge" (each +15% Quick to this skill, up to 2).',
          "4": 'Quick Spike with 170% of Quick; gain 1 "Power Charge" (each +15% Quick to this skill, up to 2).',
          "5": 'Quick Spike with 185% of Quick; gain 1 "Power Charge" (each +15% Quick to this skill, up to 2).',
        },
      },
      {
        key: "passive",
        name: "Block Control Tower",
        levels: {
          "1": "Allies’ Block +6% while KUROO (SSR) is present.",
          "2": "Allies’ Block +7.5% while KUROO (SSR) is present.",
          "3": "Allies’ Block +9% while KUROO (SSR) is present.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Lockdown",
        levels: {
          "1": "Block with 170% of Block; if other front row Block-types present, +15% Block added.",
          "2": "Block with 185% of Block; if other front row Block-types present, +15% Block added.",
          "3": "Block with 200% of Block; if other front row Block-types present, +15% Block added.",
          "4": "Block with 215% of Block; if other front row Block-types present, +15% Block added.",
          "5": "Block with 230% of Block; if other front row Block-types present, +15% Block added.",
        },
      },
    ],
    bonds: [
      {
        to: "kenma-kozume-ur",
        name: "Captain & Genius",
        participants: ["tetsuro-kuroo-ssr", "kenma-kozume-ur"],
        effect:
          "After KUROO (SSR) blocks, Kenma (UR) gains +10% Set for 1 rally.",
      },
    ],
    resonances: [
      {
        level: "I",
        name: "Skill Resonance I",
        effect: "Increases Basic Stats by 10%.",
      },
      {
        level: "II",
        name: "Skill Resonance II",
        effect: 'STEADY OFFENSE "Power Charge" has no stack limit.',
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Increases Basic Stats by 10%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect:
          "After LOCKDOWN, apply Enrage to the spiker and grant allies +10% Power/Quick.",
      },
      {
        level: "V",
        name: "Skill Resonance V",
        effect: "Increases Basic Stats by 10%.",
      },
    ],
    potentials: {
      recommended: {
        primaryType: "",
        primaryCount: 4,
        secondaryType: "",
        secondaryCount: 2,
        reason: "",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // ===================== KENMA (SR / Practice) =====================
  {
    id: "kenma-kozume-sr",
    name: "Kenma Kozume (Practice)",
    shortName: "Kenma",
    team: "Nekoma",
    rarity: "SR",
    roles: ["S"],
    typeTags: ["Setter", "Receive"],
    image: "/characters/nekoma/kenma-kozume-sr.jpg",
    server: "Global",
    stats: {
      basic: {
        quickAttack: 61,
        powerAttack: 88,
        set: 98,
        serve: 84,
        receive: 90,
        block: 80,
        save: 76,
      },
      bonusAttack: { awareness: 0.05, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.0, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Maintain",
        levels: {
          "1": "Back-row allies’ Receive +6% while KENMA (Practice) is present.",
          "2": "Back-row allies’ Receive +8% while KENMA (Practice) is present.",
          "3": "Back-row allies’ Receive +10% while KENMA (Practice) is present.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Setting Core",
        levels: {
          "1": "On PERFECT Receive, next spike power +6% of spiker’s Power/Quick.",
          "2": "On PERFECT Receive, next spike power +7.5% of spiker’s Power/Quick.",
          "3": "On PERFECT Receive, next spike power +9% of spiker’s Power/Quick.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Tactical Direction",
        levels: {
          "1": 'KENMA’s Set +8%. On PERFECT Receive, gain 1 "Keep It Alive" (each stack +1% team Receive, max 6).',
          "2": 'KENMA’s Set +10%. On PERFECT Receive, gain 1 "Keep It Alive" (each stack +1.25% team Receive, max 6).',
          "3": 'KENMA’s Set +12%. On PERFECT Receive, gain 1 "Keep It Alive" (each stack +1.5% team Receive, max 6).',
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Strategist of the Court",
        levels: {
          "1": "Set with 220% of Set stat.",
          "2": "Set with 235% of Set stat.",
          "3": "Set with 250% of Set stat.",
          "4": "Set with 265% of Set stat.",
          "5": "Set with 280% of Set stat.",
        },
      },
    ],
    bonds: [
      {
        to: "tetsuro-kuroo-ssr",
        name: "Pivot & Control Tower",
        participants: ["kenma-kozume-sr", "tetsuro-kuroo-ssr"],
        effect: "Improves set quality and block coordination when aligned.",
      },
    ],
    resonances: [
      {
        level: "I",
        name: "Skill Resonance I",
        effect: "Increases Basic Stats by 6%.",
      },
      {
        level: "II",
        name: "Skill Resonance II",
        effect: 'Max "Keep It Alive" stacks increased to 10.',
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Increases Basic Stats by 6%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect: "SETTING CORE also triggers when Receive result is not BAD.",
      },
      {
        level: "V",
        name: "Skill Resonance V",
        effect: "Increases Basic Stats by 6%.",
      },
    ],
    potentials: {
      recommended: {
        primaryType: "",
        primaryCount: 4,
        secondaryType: "",
        secondaryCount: 2,
        reason: "",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // ===================== YAKU (SR / Practice) =====================
  {
    id: "morisuke-yaku-sr",
    name: "Morisuke Yaku (Practice)",
    shortName: "Yaku",
    team: "Nekoma",
    rarity: "SR",
    roles: ["LI"],
    typeTags: ["Receive"],
    image: "/characters/nekoma/morisuke-yaku-sr.jpg",
    server: "Global",
    stats: {
      basic: {
        quickAttack: 55,
        powerAttack: 81,
        set: 86,
        serve: 90,
        receive: 100,
        block: 80,
        save: 95,
      },
      bonusAttack: { awareness: 0.0, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.05, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Nekoma Spirit",
        levels: {
          "1": "YAKU (Practice) Receive/Save +8%.",
          "2": "YAKU (Practice) Receive/Save +10%.",
          "3": "YAKU (Practice) Receive/Save +12%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Defense Fortress",
        levels: {
          "1": "Back-row allies’ Receive +6% while present.",
          "2": "Back-row allies’ Receive +7.5% while present.",
          "3": "Back-row allies’ Receive +9% while present.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Absolute Defense",
        levels: {
          "1": "When receiving opponent Quick, YAKU’s Receive +10% (this touch).",
          "2": "When receiving opponent Quick, YAKU’s Receive +12.5% (this touch).",
          "3": "When receiving opponent Quick, YAKU’s Receive +15% (this touch).",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "High Precision Receive",
        levels: {
          "1": "Receive with 220% of Receive stat.",
          "2": "Receive with 235% of Receive stat.",
          "3": "Receive with 250% of Receive stat.",
          "4": "Receive with 265% of Receive stat.",
          "5": "Receive with 280% of Receive stat.",
        },
      },
    ],
    bonds: [],
    resonances: [
      {
        level: "I",
        name: "Skill Resonance I",
        effect: "Increases Basic Stats by 6%.",
      },
      {
        level: "II",
        name: "Skill Resonance II",
        effect: "When losing, YAKU (Practice) Receive +12% and Save +12%.",
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Increases Basic Stats by 6%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect:
          "Once per turn, a failed Receive/Save becomes opponent free-ball.",
      },
      {
        level: "V",
        name: "Skill Resonance V",
        effect: "Increases Basic Stats by 6%.",
      },
    ],
    potentials: {
      recommended: {
        primaryType: "",
        primaryCount: 4,
        secondaryType: "",
        secondaryCount: 2,
        reason: "",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // ===================== LEV HAIBA (SR / Practice) =====================
  {
    id: "lev-haiba-sr",
    name: "Lev Haiba (Practice)",
    shortName: "Lev",
    team: "Nekoma",
    rarity: "SR",
    roles: ["MB"],
    typeTags: ["Quick Attack"],
    image: "/characters/nekoma/lev-haiba-sr.jpg",
    server: "Global",
    stats: {
      basic: {
        quickAttack: 94,
        powerAttack: 65,
        set: 86,
        serve: 88,
        receive: 84,
        block: 86,
        save: 79,
      },
      bonusAttack: { awareness: 0.0, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.05, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Promising Player",
        levels: {
          "1": 'Quick Attack +8%; each net crossing grants 1 "Expectation" (1 turn), each stack +1% Quick (max 4).',
          "2": 'Quick Attack +9.5%; each net crossing grants 1 "Expectation" (1 turn), each stack +1% Quick (max 4).',
          "3": 'Quick Attack +11%; each net crossing grants 1 "Expectation" (1 turn), each stack +1% Quick (max 4).',
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Evolved Block",
        levels: {
          "1": 'Block with 105% of Block; gain 1 "Growth" (each +3% Block to this skill, up to 2).',
          "2": 'Block with 120% of Block; gain 1 "Growth" (each +3% Block to this skill, up to 2).',
          "3": 'Block with 135% of Block; gain 1 "Growth" (each +3% Block to this skill, up to 2).',
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Free Spirit",
        levels: {
          "1": "While in front row, Lev’s Quick +9.5%.",
          "2": "While in front row, Lev’s Quick +11.5%.",
          "3": "While in front row, Lev’s Quick +13.5%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Offensive Wing",
        levels: {
          "1": "Quick Spike with 220% of Quick Attack.",
          "2": "Quick Spike with 235% of Quick Attack.",
          "3": "Quick Spike with 250% of Quick Attack.",
          "4": "Quick Spike with 265% of Quick Attack.",
          "5": "Quick Spike with 280% of Quick Attack.",
        },
      },
    ],
    bonds: [],
    resonances: [
      {
        level: "I",
        name: "Skill Resonance I",
        effect: "Increases Basic Stats by 6%.",
      },
      {
        level: "II",
        name: "Skill Resonance II",
        effect: "When Lev blocks and the spiker is debuffed, Lev’s Block +5%.",
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Increases Basic Stats by 6%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect: 'Gain +1 extra "Expectation" stack each time it is granted.',
      },
      {
        level: "V",
        name: "Skill Resonance V",
        effect: "Increases Basic Stats by 6%.",
      },
    ],
    potentials: {
      recommended: {
        primaryType: "",
        primaryCount: 4,
        secondaryType: "",
        secondaryCount: 2,
        reason: "",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // ===================== LEV HAIBA (SSR) =====================
  {
    id: "lev-haiba-ssr",
    name: "Lev Haiba",
    shortName: "Lev",
    team: "Nekoma",
    rarity: "SSR",
    roles: ["MB"],
    typeTags: ["Quick Attack", "Block"],
    image: "/characters/nekoma/lev-haiba-ssr.jpg",
    server: "Global",
    stats: {
      basic: {
        quickAttack: 116,
        powerAttack: 79,
        set: 87,
        serve: 106,
        receive: 102,
        block: 121,
        save: 96,
      },
      bonusAttack: { awareness: 0.0, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.05, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Triggered Burst",
        levels: {
          "1": "On your PERFECT Receive, Lev’s next Quick gains +12% of Quick Attack stat.",
          "2": "On your PERFECT Receive, Lev’s next Quick gains +15% of Quick Attack stat.",
          "3": "On your PERFECT Receive, Lev’s next Quick gains +18% of Quick Attack stat.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Momentum Block",
        levels: {
          "1": "Block with 110% of Block stat.",
          "2": "Block with 125% of Block stat.",
          "3": "Block with 140% of Block stat.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Gifted Athlete",
        levels: {
          "1": "On Lev’s Quick vs a debuffed blocker: that blocker’s Block -8% (this rally).",
          "2": "On Lev’s Quick vs a debuffed blocker: that blocker’s Block -10% (this rally).",
          "3": "On Lev’s Quick vs a debuffed blocker: that blocker’s Block -12% (this rally).",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Talented Spike",
        levels: {
          "1": "Quick Spike with 245% of Quick Attack.",
          "2": "Quick Spike with 260% of Quick Attack.",
          "3": "Quick Spike with 275% of Quick Attack.",
          "4": "Quick Spike with 290% of Quick Attack.",
          "5": "Quick Spike with 305% of Quick Attack.",
        },
      },
    ],
    bonds: [
      {
        to: "morisuke-yaku-ssr",
        name: "Wall & Shield",
        participants: ["lev-haiba-ssr", "morisuke-yaku-ssr"],
        effect:
          "After Lev (SSR) scores with a Quick, Yaku (SSR) gains +10% Receive for 1 rally.",
      },
    ],
    resonances: [
      {
        level: "I",
        name: "Skill Resonance I",
        effect: "Increases Basic Stats by 10%.",
      },
      {
        level: "II",
        name: "Skill Resonance II",
        effect:
          "When Lev blocks a debuffed spiker, Lev’s Block +5% (stacks up to 2 for this rally).",
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Increases Basic Stats by 10%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect: "On PERFECT Set, Talented Spike gains +12% of Quick Attack.",
      },
      {
        level: "V",
        name: "Skill Resonance V",
        effect: "Increases Basic Stats by 10%.",
      },
    ],
    potentials: {
      recommended: {
        primaryType: "",
        primaryCount: 4,
        secondaryType: "",
        secondaryCount: 2,
        reason: "",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // ===================== TAKETORA YAMAMOTO (SR) =====================
  {
    id: "taketora-yamamoto-sr",
    name: "Taketora Yamamoto",
    shortName: "Yamamoto",
    team: "Nekoma",
    rarity: "SR",
    roles: ["WS"],
    typeTags: ["Power Attack"],
    image: "/characters/nekoma/taketora-yamamoto-sr.jpg",
    server: "Global",
    stats: {
      basic: {
        quickAttack: 58,
        powerAttack: 96,
        set: 82,
        serve: 86,
        receive: 84,
        block: 80,
        save: 83,
      },
      bonusAttack: { awareness: 0.0, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.0, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Peak Performance",
        levels: {
          "1": "Yamamoto’s Power Spike +6% of Power Attack; when your side scores, Team Morale +5.",
          "2": "Yamamoto’s Power Spike +7.5% of Power Attack; when your side scores, Team Morale +5.",
          "3": "Yamamoto’s Power Spike +9% of Power Attack; when your side scores, Team Morale +5.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Perfect Defense",
        levels: {
          "1": "Performs a Receive with 120% of Receive stat.",
          "2": "Performs a Receive with 132% of Receive stat.",
          "3": "Performs a Receive with 145% of Receive stat.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Gritty Spirit",
        levels: {
          "1": "When your side scores, restore 8 Stamina to the ally with the lowest Stamina.",
          "2": "When your side scores, restore 10 Stamina to the ally with the lowest Stamina.",
          "3": "When your side scores, restore 12 Stamina to the ally with the lowest Stamina.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Exhaust Spike",
        levels: {
          "1": "Power Spike with 220% of Power Attack; if it scores, Team Morale +5.",
          "2": "Power Spike with 235% of Power Attack; if it scores, Team Morale +5.",
          "3": "Power Spike with 250% of Power Attack; if it scores, Team Morale +5.",
          "4": "Power Spike with 265% of Power Attack; if it scores, Team Morale +5.",
          "5": "Power Spike with 280% of Power Attack; if it scores, Team Morale +5.",
        },
      },
    ],
    bonds: [
      {
        to: "nobuyuki-kai-sr",
        name: "Neighborhood Trio",
        participants: [
          "taketora-yamamoto-sr",
          "nobuyuki-kai-sr",
          "shohei-fukunaga-sr",
        ],
        effect:
          "When Yamamoto scores with a Power Spike, Kai gains +10% Receive for 1 rally.",
      },
      {
        to: "shohei-fukunaga-sr",
        name: "Neighborhood Trio",
        participants: [
          "taketora-yamamoto-sr",
          "nobuyuki-kai-sr",
          "shohei-fukunaga-sr",
        ],
        effect:
          "When Yamamoto scores with a Power Spike, Fukunaga gains +10% Power Attack for 1 rally.",
      },
    ],
    resonances: [
      {
        level: "I",
        name: "Skill Resonance I",
        effect: "Increases Basic Stats by 6%.",
      },
      {
        level: "II",
        name: "Skill Resonance II",
        effect: "On score by Yamamoto, remove all debuffs from your back row.",
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Increases Basic Stats by 6%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect: "EXHAUST SPIKE power +10% of Power Attack.",
      },
      {
        level: "V",
        name: "Skill Resonance V",
        effect: "Increases Basic Stats by 6%.",
      },
    ],
    potentials: {
      recommended: {
        primaryType: "",
        primaryCount: 4,
        secondaryType: "",
        secondaryCount: 2,
        reason: "",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // ===================== NOBUYUKI KAI (SR) =====================
  {
    id: "nobuyuki-kai-sr",
    name: "Nobuyuki Kai",
    shortName: "Kai",
    team: "Nekoma",
    rarity: "SR",
    roles: ["OP"],
    typeTags: ["Receive"],
    image: "/characters/nekoma/nobuyuki-kai-sr.jpg",
    server: "Global",
    stats: {
      basic: {
        quickAttack: 61,
        powerAttack: 86,
        set: 82,
        serve: 84,
        receive: 99,
        block: 86,
        save: 85,
      },
      bonusAttack: { awareness: 0.0, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.0, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Targeted Jump Serve",
        levels: {
          "1": "When receiving a Jump Serve, this Receive +15% of Receive.",
          "2": "When receiving a Jump Serve, this Receive +20% of Receive.",
          "3": "When receiving a Jump Serve, this Receive +25% of Receive.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Power Spike",
        levels: {
          "1": "Power Spike with 120% of Power Attack.",
          "2": "Power Spike with 132% of Power Attack.",
          "3": "Power Spike with 145% of Power Attack.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Stamina Match",
        levels: {
          "1": "Kai’s Receive +6% of Receive; on PERFECT Receive, Team Morale +3.",
          "2": "Kai’s Receive +8% of Receive; on PERFECT Receive, Team Morale +4.",
          "3": "Kai’s Receive +10% of Receive; on PERFECT Receive, Team Morale +5.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Perfect Reception",
        levels: {
          "1": "Receive with 215% of Receive; if NORMAL, change to PERFECT.",
          "2": "Receive with 230% of Receive; if NORMAL, change to PERFECT.",
          "3": "Receive with 245% of Receive; if NORMAL, change to PERFECT.",
          "4": "Receive with 260% of Receive; if NORMAL, change to PERFECT.",
          "5": "Receive with 275% of Receive; if NORMAL, change to PERFECT.",
        },
      },
    ],
    bonds: [
      {
        to: "taketora-yamamoto-sr",
        name: "Neighborhood Trio",
        participants: [
          "nobuyuki-kai-sr",
          "taketora-yamamoto-sr",
          "shohei-fukunaga-sr",
        ],
        effect:
          "When Kai achieves PERFECT Receive, Yamamoto gains +10% Power Attack for 1 rally.",
      },
      {
        to: "shohei-fukunaga-sr",
        name: "Neighborhood Trio",
        participants: [
          "nobuyuki-kai-sr",
          "taketora-yamamoto-sr",
          "shohei-fukunaga-sr",
        ],
        effect:
          "On Kai PERFECT Receive, Fukunaga gains +8% Power Attack for 1 rally.",
      },
    ],
    resonances: [
      {
        level: "I",
        name: "Skill Resonance I",
        effect: "Increases Basic Stats by 6%.",
      },
      {
        level: "II",
        name: "Skill Resonance II",
        effect:
          "PERFECT RECEPTION: vs tired Quick spikers (Stamina <30), always PERFECT.",
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Increases Basic Stats by 6%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect: "When behind, back-row allies’ Receive +10%.",
      },
      {
        level: "V",
        name: "Skill Resonance V",
        effect: "Increases Basic Stats by 6%.",
      },
    ],
    potentials: {
      recommended: {
        primaryType: "",
        primaryCount: 4,
        secondaryType: "",
        secondaryCount: 2,
        reason: "",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // ===================== SHOHEI FUKUNAGA (SR) =====================
  {
    id: "shohei-fukunaga-sr",
    name: "Shohei Fukunaga",
    shortName: "Fukunaga",
    team: "Nekoma",
    rarity: "SR",
    roles: ["WS"],
    typeTags: ["Power Attack", "Receive"],
    image: "/characters/nekoma/shohei-fukunaga-sr.jpg",
    server: "Global",
    stats: {
      basic: {
        quickAttack: 67,
        powerAttack: 98,
        set: 84,
        serve: 84,
        receive: 94,
        block: 86,
        save: 80,
      },
      bonusAttack: { awareness: 0.05, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.0, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Rally Point",
        levels: {
          "1": "Receive with 120% of Receive stat.",
          "2": "Receive with 132% of Receive stat.",
          "3": "Receive with 145% of Receive stat.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Back Row Tactics",
        levels: {
          "1": "If all back-row allies are Receive-type: Fukunaga Receive +12%; NORMAL Receive becomes PERFECT.",
          "2": "If all back-row allies are Receive-type: Fukunaga Receive +15%; NORMAL Receive becomes PERFECT.",
          "3": "If all back-row allies are Receive-type: Fukunaga Receive +18%; NORMAL Receive becomes PERFECT.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Firm Reception",
        levels: {
          "1": "Fukunaga’s Receive +8%.",
          "2": "Fukunaga’s Receive +10%.",
          "3": "Fukunaga’s Receive +12%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Right-on-Line",
        levels: {
          "1": "Power Spike with 220% of Power Attack.",
          "2": "Power Spike with 235% of Power Attack.",
          "3": "Power Spike with 250% of Power Attack.",
          "4": "Power Spike with 265% of Power Attack.",
          "5": "Power Spike with 280% of Power Attack.",
        },
      },
    ],
    bonds: [
      {
        to: "taketora-yamamoto-sr",
        name: "Neighborhood Trio",
        participants: [
          "shohei-fukunaga-sr",
          "taketora-yamamoto-sr",
          "nobuyuki-kai-sr",
        ],
        effect:
          "On Fukunaga PERFECT Receive, Yamamoto gains +8% Power Attack for 1 rally.",
      },
      {
        to: "nobuyuki-kai-sr",
        name: "Neighborhood Trio",
        participants: [
          "shohei-fukunaga-sr",
          "taketora-yamamoto-sr",
          "nobuyuki-kai-sr",
        ],
        effect:
          "On Fukunaga PERFECT Receive, Kai gains +8% Receive for 1 rally.",
      },
    ],
    resonances: [
      {
        level: "I",
        name: "Skill Resonance I",
        effect: "Increases Basic Stats by 6%.",
      },
      {
        level: "II",
        name: "Skill Resonance II",
        effect:
          "On Fukunaga Power Spike, reduce opponent receive by 5% of their Receive.",
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Increases Basic Stats by 6%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect:
          "On team PERFECT Receive, Fukunaga’s next Power Spike +15% of Power Attack.",
      },
      {
        level: "V",
        name: "Skill Resonance V",
        effect: "Increases Basic Stats by 6%.",
      },
    ],
    potentials: {
      recommended: {
        primaryType: "",
        primaryCount: 4,
        secondaryType: "",
        secondaryCount: 2,
        reason: "",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },
  // ===================== TAMAHIKO TESHIRO (SR) =====================
  {
    id: "tamahiko-teshiro-sr",
    name: "Tamahiko Teshiro",
    shortName: "Teshiro",
    team: "Nekoma",
    rarity: "SR",
    roles: ["S"],
    typeTags: ["Receive", "Serve", "Setter"],
    image: "/characters/nekoma/tamahiko-teshiro-sr.jpg",
    server: "Global",
    stats: {
      basic: {
        quickAttack: 61,
        powerAttack: 82,
        set: 93,
        serve: 88,
        receive: 90,
        block: 80,
        save: 76,
      },
      bonusAttack: { awareness: 0, strength: 0, attackTechnique: 0 },
      bonusDefense: { reflex: 0, spirit: 0, defenseTechnique: 0 },
    },
    skills: [
      {
        key: "passive",
        name: "Calm Setting",
        levels: {
          "1": "TAMAHIKO TESHIRO performs a Set with 120% of Set stat as power.",
          "2": "TAMAHIKO TESHIRO performs a Set with 132% of Set stat as power.",
          "3": "TAMAHIKO TESHIRO performs a Set with 145% of Set stat as power.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Focused Serve",
        levels: {
          "1": "Increases TAMAHIKO TESHIRO's Serve stat by 8%.",
          "2": "Increases TAMAHIKO TESHIRO's Serve stat by 10%.",
          "3": "Increases TAMAHIKO TESHIRO's Serve stat by 12%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Precise Receive",
        levels: {
          "1": "While TAMAHIKO TESHIRO is present, increases back-row allies’ Receive by 6%.",
          "2": "While TAMAHIKO TESHIRO is present, increases back-row allies’ Receive by 7.5%.",
          "3": "While TAMAHIKO TESHIRO is present, increases back-row allies’ Receive by 9%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Ceiling Serve",
        levels: {
          "1": "Performs a Ceiling Serve with 215% of Serve stat as power; for this Serve, TESHIRO's Awareness increases by 10%.",
          "2": "Performs a Ceiling Serve with 230% of Serve stat as power; for this Serve, TESHIRO's Awareness increases by 10%.",
          "3": "Performs a Ceiling Serve with 245% of Serve stat as power; for this Serve, TESHIRO's Awareness increases by 10%.",
          "4": "Performs a Ceiling Serve with 260% of Serve stat as power; for this Serve, TESHIRO's Awareness increases by 10%.",
          "5": "Performs a Ceiling Serve with 275% of Serve stat as power; for this Serve, TESHIRO's Awareness increases by 10%.",
        },
      },
    ],
    bonds: [],
    resonances: [
      {
        level: "I",
        name: "Skill Resonance I",
        effect: "Increases Basic Stats by 6%.",
      },
      {
        level: "II",
        name: "Skill Resonance II",
        effect:
          "When your side is behind, increases TESHIRO's Serve power by an additional 10% of Serve stat.",
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Increases Basic Stats by 6%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect:
          "While TAMAHIKO TESHIRO is present, each net crossing increases back-row allies’ Receive by 3%, stacking up to 5 times.",
      },
      {
        level: "V",
        name: "Skill Resonance V",
        effect: "Increases Basic Stats by 6%.",
      },
    ],
    potentials: {
      recommended: {
        primaryType: "",
        primaryCount: 4,
        secondaryType: "",
        secondaryCount: 2,
        reason: "",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // ===================== SO INUOKA (SR) =====================
  {
    id: "so-inuoka-sr",
    name: "Sō Inuoka",
    shortName: "Inuoka",
    team: "Nekoma",
    rarity: "SR",
    roles: ["MB"],
    typeTags: ["Block"],
    image: "/characters/nekoma/so-inuoka-sr.jpg",
    server: "Global",
    stats: {
      basic: {
        quickAttack: 94,
        powerAttack: 64,
        set: 82,
        serve: 86,
        receive: 90,
        block: 98,
        save: 86,
      },
      bonusAttack: { awareness: 0, strength: 0, attackTechnique: 0 },
      bonusDefense: { reflex: 0.05, spirit: 0, defenseTechnique: 0 },
    },
    skills: [
      {
        key: "passive",
        name: "Rising Wall",
        levels: {
          "1": "SO INUOKA’s Block stat +8%.",
          "2": "SO INUOKA’s Block stat +10%.",
          "3": "SO INUOKA’s Block stat +12%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Shutdown Block",
        levels: {
          "1": "When INUOKA blocks, consume 3 extra Stamina to increase this block's power by 14% of Block stat.",
          "2": "When INUOKA blocks, consume 3 extra Stamina to increase this block's power by 20% of Block stat.",
          "3": "When INUOKA blocks, consume 3 extra Stamina to increase this block's power by 25% of Block stat.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Unquenchable Spirit",
        levels: {
          "1": "While INUOKA is present and your side is behind, team Block power +3% of each player's Block stat.",
          "2": "While INUOKA is present and your side is behind, team Block power +4.5% of each player's Block stat.",
          "3": "While INUOKA is present and your side is behind, team Block power +6% of each player's Block stat.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Cover Block",
        levels: {
          "1": "SO INUOKA performs a Block with 180% of Block stat as power.",
          "2": "SO INUOKA performs a Block with 195% of Block stat as power.",
          "3": "SO INUOKA performs a Block with 210% of Block stat as power.",
          "4": "SO INUOKA performs a Block with 225% of Block stat as power.",
          "5": "SO INUOKA performs a Block with 240% of Block stat as power.",
        },
      },
    ],
    bonds: [],
    resonances: [
      {
        level: "I",
        name: "Skill Resonance I",
        effect: "Increases Basic Stats by 6%.",
      },
      {
        level: "II",
        name: "Skill Resonance II",
        effect: "At the start of each turn, remove all debuffs from SO INUOKA.",
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Increases Basic Stats by 6%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect:
          "When your team achieves a PERFECT touch, reduce COVER BLOCK cooldown by 1 net crossing.",
      },
      {
        level: "V",
        name: "Skill Resonance V",
        effect: "Increases Basic Stats by 6%.",
      },
    ],
    potentials: {
      recommended: {
        primaryType: "",
        primaryCount: 4,
        secondaryType: "",
        secondaryCount: 2,
        reason: "",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },
];
