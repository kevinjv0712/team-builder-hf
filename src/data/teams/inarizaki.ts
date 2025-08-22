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
        name: "Unconventional Play",
        levels: {
          "1": "When serving: if aiming at a weak-defense zone, this serve gains +30% of Serve as bonus power; otherwise, allies’ back-row Receive +10% for 1 rally.",
          "2": "When serving: if aiming at a weak-defense zone, this serve gains +40% of Serve as bonus power; otherwise, allies’ back-row Receive +12% for 1 rally.",
          "3": "When serving: if aiming at a weak-defense zone, this serve gains +50% of Serve as bonus power; otherwise, allies’ back-row Receive +14% for 1 rally.",
          "4": undefined,
          "5": undefined,
        },
      },
      // 冷静なジャンプサーブ
      {
        key: "passive",
        name: "Polite Toss",
        levels: {
          "1": "Performs a Set with Set ×125%. Cleanses all debuffs on the spiker for that attack.",
          "2": "Performs a Set with Set ×140%. Cleanses all debuffs on the spiker.",
          "3": "Performs a Set with Set ×155%. Cleanses all debuffs on the spiker.",
          "4": undefined,
          "5": undefined,
        },
      },
      // マルチな能力
      {
        key: "passive",
        name: "Sincere & Dedicated Toss",
        levels: {
          "1": "Toss +8%. If an ally’s play is not NICE, gain 2 stacks of “Donpishari” (Toss +2% per stack, max 10). When a Toss consumes stacks, spikers gain Attack Technique +2.5% and Quick Attack +2.5% per stack consumed (lasts 10 net crossings).",
          "2": "Toss +11%. Same Donpishari (Toss +2%/stack, max 10). Same per-stack team buffs on consumption.",
          "3": "Toss +14%. Same Donpishari (Toss +2%/stack, max 10). Same per-stack team buffs on consumption.",
          "4": undefined,
          "5": undefined,
        },
      },
      // 意地のある速攻（必殺）
      {
        key: "active",
        name: "Two-Way Serve",
        levels: {
          "1": "Alternates Jump Float Serve and Spike Serve. • Jump Float: Serve ×230%, disables opponents’ Power/Quick spikes until the ball crosses the net twice. • Spike Serve: Serve ×260%, Atsumu’s Awareness +1% per 3 team morale (lasts until the ball crosses the net twice).",
          "2": "Alternates Jump Float Serve and Spike Serve. • Jump Float: Serve ×245%, disables opponents’ Power/Quick spikes (2 crossings). • Spike Serve: Serve ×275%, Awareness +1% per 3 team morale (2 crossings).",
          "3": "Alternates Jump Float Serve and Spike Serve. • Jump Float: Serve ×260%, disables opponents’ Power/Quick spikes (2 crossings). • Spike Serve: Serve ×290%, Awareness +1% per 3 team morale (2 crossings).",
          "4": "Alternates Jump Float Serve and Spike Serve. • Jump Float: Serve ×275%, disables opponents’ Power/Quick spikes (2 crossings). • Spike Serve: Serve ×305%, Awareness +1% per 3 team morale (2 crossings).",
          "5": "Alternates Jump Float Serve and Spike Serve. • Jump Float: Serve ×290%, disables opponents’ Power/Quick spikes (2 crossings). • Spike Serve: Serve ×320%, Awareness +1% per 3 team morale (2 crossings).",
        },
      },
    ],
    bonds: [
      {
        to: "atsumu-miya-ur",
        name: "Strongest High School Twins",
        participants: ["atsumu-miya-ur", "osamu-miya-ur"],
        effect:
          "Atsumu raises the toss and Osamu performs a twin minus-tempo Quick with Quick Attack ×(Lv1: 265%, Lv2: 280%, Lv3: 295%, Lv4: 310%, Lv5: 325%). Osamu’s Attack Technique +15% while both remain on court. Unblockable.",
      },
      {
        to: "atsumu-miya-ur",
        name: "Head and Main Axis",
        participants: ["atsumu-miya-ur", "osamu-miya-ur", "shinsuke-kita-ssr"],
        effect:
          "Osamu’s Attack Technique +(Lv1: 3%, Lv2: 3.5%, Lv3: 4%, Lv4: 4.5%, Lv5: 5%); Shinsuke Kita’s main parameters +(Lv1: 3%, Lv2: 3.5%, Lv3: 4%, Lv4: 4.5%, Lv5: 5%). At match start: Atsumu gains 3 stacks of Donpishari (Toss +2%/stack, max 10); Kita gains 1 stack of “Sure Action” (Receive +2%/stack, max 3). Osamu’s first Quick each set gains +12% of Quick Attack as power.",
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
          "Atsumu’s Strength +30%. On participation, gain 5 stacks of Donpishari (Toss +2% per stack, max 10).",
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
          "Donpishari improves: Toss gains an additional +3% per stack. When Donpishari is consumed, immediately gain 5 Donpishari stacks (Toss +2%/stack, max 10).",
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
        name: "Flexible Attack",
        levels: {
          "1": "Quick Attack +10%. At match start, Awareness is reduced to 0%; for every 1% reduced, Attack Technique +1%.",
          "2": "Quick Attack +12%. Same Awareness-to-Attack-Tech scaling (+1% per 1%).",
          "3": "Quick Attack +14%. Same Awareness-to-Attack-Tech scaling (+1% per 1%).",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Calm Jump Serve",
        levels: {
          "1": "Jump Serve with Serve ×120%. If the receiver has “Suppression”, Osamu’s Attack Technique +10% (lasts 8 net crossings).",
          "2": "Jump Serve with Serve ×135%. Same +10% Attack Technique if receiver has Suppression (8 crossings).",
          "3": "Jump Serve with Serve ×150%. Same +10% Attack Technique if receiver has Suppression (8 crossings).",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Multi-Ability",
        levels: {
          "1": "Attack Technique +10%. On Osamu’s Quick or Serve, inflict 1 stack of “Suppression” on the opponent’s back row (Receive -10%), lasting 10 net crossings.",
          "2": "Attack Technique +13%. Same Suppression infliction (Receive -10%, 10 crossings).",
          "3": "Attack Technique +16%. Same Suppression infliction (Receive -10%, 10 crossings).",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Flexible Quick",
        levels: {
          "1": "Quick Attack ×260%; during this play, Quick power gains +40% of Attack Technique. Lasts until the ball crosses the net twice.",
          "2": "Quick Attack ×275%; same +40% of Attack Technique (2 crossings).",
          "3": "Quick Attack ×290%; same +40% of Attack Technique (2 crossings).",
          "4": "Quick Attack ×305%; same +40% of Attack Technique (2 crossings).",
          "5": "Quick Attack ×320%; same +40% of Attack Technique (2 crossings).",
        },
      },
    ],
    bonds: [
      {
        to: "osamu-miya-ur",
        name: "Strongest High School Twins",
        participants: ["atsumu-miya-ur", "osamu-miya-ur"],
        effect:
          "Atsumu raises the toss and Osamu performs a twin minus-tempo Quick with Quick Attack ×(Lv1: 265%, Lv2: 280%, Lv3: 295%, Lv4: 310%, Lv5: 325%). Osamu’s Attack Technique +15% while both remain on court. Unblockable.",
      },
      {
        to: "osamu-miya-ur",
        name: "Head and Main Axis",
        participants: ["atsumu-miya-ur", "osamu-miya-ur", "shinsuke-kita-ssr"],
        effect:
          "Osamu’s Attack Technique +(Lv1: 3%, Lv2: 3.5%, Lv3: 4%, Lv4: 4.5%, Lv5: 5%); Shinsuke Kita’s main parameters +(Lv1: 3%, Lv2: 3.5%, Lv3: 4%, Lv4: 4.5%, Lv5: 5%). At match start: Atsumu gains 3 stacks of Donpishari (Toss +2%/stack, max 10); Kita gains 1 stack of “Sure Action” (Receive +2%/stack, max 3). Osamu’s first Quick each set gains +12% of Quick Attack as power.",
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
          "When Osamu performs a Quick, if the receiver has “Suppression”, that Quick gains +60% of Quick Attack as bonus power.",
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
          "After Osamu scores with a Quick: for the next two ally specials, the caster gains +20% Attack Technique and +20% Defense Technique.",
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
        name: "Repeat. Continue. Courteous.",
        levels: {
          "1": "Main parameters +6%. Kita’s plays never Miss. Defense Technique increases by 80% of Reflex.",
          "2": "Main parameters +8%. Plays never Miss. Defense Technique increases by 80% of Reflex.",
          "3": "Main parameters +10%. Plays never Miss. Defense Technique increases by 80% of Reflex.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Calm Play",
        levels: {
          "1": "Covers with Save ×120%.",
          "2": "Covers with Save ×135%.",
          "3": "Covers with Save ×150%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "“Do It Properly”",
        levels: {
          "1": "Receive +8%. If Kita’s Receive is not NICE, gain 1 stack of “Sure Action” (Receive +3%/stack, max 3). At 3 stacks, consume them to grant the vanguard Attack Technique +10% (lasts 8 net crossings).",
          "2": "Receive +10%. Same Sure Action (Receive +3%/stack, max 3) and 3-stack consumption effect.",
          "3": "Receive +12%. Same Sure Action (Receive +3%/stack, max 3) and 3-stack consumption effect.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Solid Play",
        levels: {
          "1": "Receive with Receive ×235%.",
          "2": "Receive with Receive ×250%.",
          "3": "Receive with Receive ×265%.",
          "4": "Receive with Receive ×280%.",
          "5": "Receive with Receive ×295%.",
        },
      },
    ],
    bonds: [
      {
        to: "shinsuke-kita-ssr",
        name: "Head and Main Axis",
        participants: ["atsumu-miya-ur", "osamu-miya-ur", "shinsuke-kita-ssr"],
        effect:
          "Osamu’s Attack Technique +(Lv1: 3%, Lv2: 3.5%, Lv3: 4%, Lv4: 4.5%, Lv5: 5%); Shinsuke Kita’s main parameters +(Lv1: 3%, Lv2: 3.5%, Lv3: 4%, Lv4: 4.5%, Lv5: 5%). At match start: Atsumu gains 3 stacks of Donpishari (Toss +2%/stack, max 10); Kita gains 1 stack of “Sure Action” (Receive +2%/stack, max 3). Osamu’s first Quick each set gains +12% of Quick Attack as power.",
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
          "“Properly” trigger change: gain “Sure Action” when a teammate’s Receive is not NICE (instead of only Kita’s).",
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
          "On non-missed Receive by Kita: team morale +10. While Kita is on court, when an ally uses a special, that ally restores 10 Stamina.",
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
        name: "Seal the Course",
        levels: {
          "1": "Block +10%. While Suna is on court, if the opposing spiker has “Confusion”, allied blockers’ Block +15% against that spiker.",
          "2": "Block +12%. Same bonus +20% if the target has Confusion.",
          "3": "Block +14%. Same bonus +25% if the target has Confusion.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Skilled Block",
        levels: {
          "1": "Blocks with Block ×120%.",
          "2": "Blocks with Block ×135%.",
          "3": "Blocks with Block ×150%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Opposite-Read Attack",
        levels: {
          "1": "Quick Attack +10%. On Suna’s Quick, inflict 1 stack of “Confusion” on the opponent’s vanguard (Block -10% per stack), lasting 8 net crossings.",
          "2": "Quick Attack +12%. Same Confusion application (Block -10%, 8 crossings).",
          "3": "Quick Attack +14%. Same Confusion application (Block -10%, 8 crossings).",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Wide-Point Quick",
        levels: {
          "1": "Quick Attack ×240%.",
          "2": "Quick Attack ×255%.",
          "3": "Quick Attack ×270%.",
          "4": "Quick Attack ×285%.",
          "5": "Quick Attack ×300%.",
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
          "When Suna uses a special, inflict 1 stack of “Confusion” on the opponent’s vanguard (Block -10%, lasts 8 net crossings).",
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
          "On successful Quick: gain +7% Attack Technique (max 5 stacks).",
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
        name: "Rhythm Adjustment",
        levels: {
          "1": "For every 10 Stamina Aran spends, gain 1 stack of “Breathing Time” (Attack Technique +3% per stack). At rally end, consume all stacks; per stack consumed, restore 4 Stamina.",
          "2": "Stacks grant +3.5% Attack Technique; same Stamina restore on consumption.",
          "3": "Stacks grant +4% Attack Technique; same Stamina restore on consumption.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "High-Quality Serve",
        levels: {
          "1": "Jump Serve with Serve ×110%; receiver’s Receive -10% for this rally (lasts up to 6 net crossings).",
          "2": "Jump Serve with Serve ×125%; receiver’s Receive -10% (up to 6 crossings).",
          "3": "Jump Serve with Serve ×140%; receiver’s Receive -10% (up to 6 crossings).",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Aggressive Attack",
        levels: {
          "1": "Power Attack +6% and Serve +6%. When Aran attacks, he may consume 60% of current Stamina; this spike gains +30% of Power Attack as bonus power.",
          "2": "Power Attack +8% and Serve +8%. Consuming Stamina grants +40% bonus power.",
          "3": "Power Attack +10% and Serve +10%. Consuming Stamina grants +50% bonus power.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Roaring Spikes",
        levels: {
          "1": "Power Spike ×240%.",
          "2": "Power Spike ×255%.",
          "3": "Power Spike ×270%.",
          "4": "Power Spike ×285%.",
          "5": "Power Spike ×300%.",
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
          "At rally start, gain 3 stacks of “Breathing Time” (Attack Technique increases per stack).",
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
          "Up to twice per rally, when an ally restores Stamina and Aran is on court, Aran restores 8 Stamina.",
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
        name: "Stable Offense & Defense",
        levels: {
          "1": "Power Attack +6% and Receive +6%. On Receive vs a Power Spike, this Receive gains +15% of Receive as bonus power.",
          "2": "Power Attack +8% and Receive +8%. Versus Power Spike: +25% of Receive.",
          "3": "Power Attack +10% and Receive +10%. Versus Power Spike: +35% of Receive.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Powerful Reception",
        levels: {
          "1": "Receive with Receive ×120%.",
          "2": "Receive with Receive ×135%.",
          "3": "Receive with Receive ×150%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Responsible & Eager Attack",
        levels: {
          "1": "Per friendly back-row receiver: Attack Technique +2%. If an ally’s Receive is not BAD, Ginjima’s Power Attack +15% (4 net crossings).",
          "2": "Per friendly back-row receiver: Attack Technique +2.5%. Good Receive → Power Attack +15% (4 crossings).",
          "3": "Per friendly back-row receiver: Attack Technique +3%. Good Receive → Power Attack +15% (4 crossings).",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Powerful Shot",
        levels: {
          "1": "Power Spike ×225%. If Ginjima is in the back row, this spike gains +30% of Power Attack as bonus power.",
          "2": "Power Spike ×240%. Same +30% if back row.",
          "3": "Power Spike ×255%. Same +30% if back row.",
          "4": "Power Spike ×270%. Same +30% if back row.",
          "5": "Power Spike ×285%. Same +30% if back row.",
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
          "Ginjima’s Receive +15%. His first Receive in each set cannot concede a point.",
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
          "While on court: if a teammate’s Receive result is not BAD, Ginjima’s Awareness +12% for 1 rally.",
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
        name: "Morale-Boosting Covers",
        levels: {
          "1": "Receive and Cover +8%. When Akagi Receives or Covers, team morale +10.",
          "2": "Receive and Cover +10%. When he Receives or Covers, team morale +10.",
          "3": "Receive and Cover +12%. When he Receives or Covers, team morale +10.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Reliable Libero",
        levels: {
          "1": "Covers with Save ×120%. Allies’ Defense Technique +4% (6 net crossings).",
          "2": "Covers with Save ×135%. Allies’ Defense Technique +6% (6 crossings).",
          "3": "Covers with Save ×150%. Allies’ Defense Technique +8% (6 crossings).",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Chasing the Ball",
        levels: {
          "1": "Receive +10%. While Akagi is on court, apply 1 stack of “Looming” to opposing Power Spikers (each stack: Power Attack -8%) for 3 net crossings. If the target already has Looming, your side’s Defense Technique +8% for 3 crossings.",
          "2": "Receive +12%. Looming reduces Power Attack -10%/stack (3 crossings). If already Looming: your side’s Defense Technique +8% (3 crossings).",
          "3": "Receive +14%. Looming reduces Power Attack -12%/stack (3 crossings). If already Looming: your side’s Defense Technique +8% (3 crossings).",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Grit Reception",
        levels: {
          "1": "Receive with Receive ×240%.",
          "2": "Receive with Receive ×255%.",
          "3": "Receive with Receive ×270%.",
          "4": "Receive with Receive ×285%.",
          "5": "Receive with Receive ×300%.",
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
          "Akagi’s Receive +14%. While he is on court, if the player in the back row fails to get a NICE on Receive, reduce that player’s Receive-skill cooldown by 1 net crossing.",
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
          "Akagi’s Defense Technique +15%. If Akagi’s Receive or Cover is not BAD, the first ally to spike after this play gains +15% Attack Technique for 2 net crossings.",
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
          "1": "Reflex +6%. On Block, if block isn’t BAD or worse, Defense Technique +1% (lasts 2 crossings).",
          "2": "Reflex +7.5%. Defense Technique +1.2%.",
          "3": "Reflex +9%. Defense Technique +1.5%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Solid Block",
        levels: {
          "1": "Block with Block ×220%.",
          "2": "Block with Block ×235%.",
          "3": "Block with Block ×250%.",
          "4": "Block with Block ×265%.",
          "5": "Block with Block ×280%.",
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
