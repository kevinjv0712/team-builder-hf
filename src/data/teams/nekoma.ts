import type { Player } from "../types";

export const nekomaPlayers: Player[] = [
  // ===================== PLACEHOLDERS (futuros) =====================
  {
    id: "morisuke-yaku-ssr",
    name: "Morisuke Yaku",
    shortName: "Yaku",
    team: "Nekoma",
    rarity: "SSR",
    roles: ["LI"],
    typeTags: [],
    image: "/characters/nekoma/morisuke-yaku-ssr.png",
    stats: {
      basic: {
        quickAttack: 0,
        powerAttack: 0,
        set: 0,
        serve: 0,
        receive: 0,
        block: 0,
        save: 0,
      },
      bonusAttack: { awareness: 0, strength: 0, attackTechnique: 0 },
      bonusDefense: { reflex: 0, spirit: 0, defenseTechnique: 0 },
    },
    skills: [
      {
        key: "passive",
        name: "",
        levels: { "1": "", "2": "", "3": "", "4": "", "5": "" },
      },
      {
        key: "passive",
        name: "",
        levels: { "1": "", "2": "", "3": "", "4": "", "5": "" },
      },
      {
        key: "passive",
        name: "",
        levels: { "1": "", "2": "", "3": "", "4": "", "5": "" },
      },
      {
        key: "active",
        name: "",
        levels: { "1": "", "2": "", "3": "", "4": "", "5": "" },
      },
    ],
    bonds: [],
    resonances: [
      { level: "I", name: "", effect: "" },
      { level: "II", name: "", effect: "" },
      { level: "III", name: "", effect: "" },
      { level: "IV", name: "", effect: "" },
      { level: "V", name: "", effect: "" },
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
  {
    id: "tamahiko-teshiro-sr",
    name: "Tamahiko Teshiro",
    shortName: "Teshiro",
    team: "Nekoma",
    rarity: "SR",
    roles: ["S"],
    typeTags: [],
    image: "/characters/nekoma/tamahiko-teshiro-sr.png",
    stats: {
      basic: {
        quickAttack: 0,
        powerAttack: 0,
        set: 0,
        serve: 0,
        receive: 0,
        block: 0,
        save: 0,
      },
      bonusAttack: { awareness: 0, strength: 0, attackTechnique: 0 },
      bonusDefense: { reflex: 0, spirit: 0, defenseTechnique: 0 },
    },
    skills: [
      {
        key: "passive",
        name: "",
        levels: { "1": "", "2": "", "3": "", "4": "", "5": "" },
      },
      {
        key: "passive",
        name: "",
        levels: { "1": "", "2": "", "3": "", "4": "", "5": "" },
      },
      {
        key: "passive",
        name: "",
        levels: { "1": "", "2": "", "3": "", "4": "", "5": "" },
      },
      {
        key: "active",
        name: "",
        levels: { "1": "", "2": "", "3": "", "4": "", "5": "" },
      },
    ],
    bonds: [],
    resonances: [
      { level: "I", name: "", effect: "" },
      { level: "II", name: "", effect: "" },
      { level: "III", name: "", effect: "" },
      { level: "IV", name: "", effect: "" },
      { level: "V", name: "", effect: "" },
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
  {
    id: "so-inuoka-sr",
    name: "Sō Inuoka",
    shortName: "Inuoka",
    team: "Nekoma",
    rarity: "SR",
    roles: ["MB"],
    typeTags: [],
    image: "/characters/nekoma/so-inuoka-sr.png",
    stats: {
      basic: {
        quickAttack: 0,
        powerAttack: 0,
        set: 0,
        serve: 0,
        receive: 0,
        block: 0,
        save: 0,
      },
      bonusAttack: { awareness: 0, strength: 0, attackTechnique: 0 },
      bonusDefense: { reflex: 0, spirit: 0, defenseTechnique: 0 },
    },
    skills: [
      {
        key: "passive",
        name: "",
        levels: { "1": "", "2": "", "3": "", "4": "", "5": "" },
      },
      {
        key: "passive",
        name: "",
        levels: { "1": "", "2": "", "3": "", "4": "", "5": "" },
      },
      {
        key: "passive",
        name: "",
        levels: { "1": "", "2": "", "3": "", "4": "", "5": "" },
      },
      {
        key: "active",
        name: "",
        levels: { "1": "", "2": "", "3": "", "4": "", "5": "" },
      },
    ],
    bonds: [],
    resonances: [
      { level: "I", name: "", effect: "" },
      { level: "II", name: "", effect: "" },
      { level: "III", name: "", effect: "" },
      { level: "IV", name: "", effect: "" },
      { level: "V", name: "", effect: "" },
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
    typeTags: ["Set", "Receive", "Control"],
    image: "/characters/nekoma/kenma-kozume-ssr.png",
    stats: {
      // (valores aproximados de tus capturas)
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
          "1": "While KENMA KOZUME is on the court, increases your side's players' Receive power by 8% of their Receive stat. When Kozume's Set or your side's Receive results in PERFECT, gain 1 stacks of \"Keep It Alive\". Each stack increases Receive power of your side's players by 3%, up to 6 stacks.",
          "2": "While KENMA KOZUME is on the court, increases your side's players' Receive power by 8% of their Receive stat. When Kozume's Set or your side's Receive results in PERFECT, gain 1 stacks of \"Keep It Alive\". Each stack increases Receive power of your side's players by 3%, up to 6 stacks.",
          "3": "While KENMA KOZUME is on the court, increases your side's players' Receive power by 8% of their Receive stat. When Kozume's Set or your side's Receive results in PERFECT, gain 1 stacks of \"Keep It Alive\". Each stack increases Receive power of your side's players by 3%, up to 6 stacks.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Steady Setting",
        levels: {
          "1": "KENMA KOZUME performs a Set with 120% of his Set stat.",
          "2": "KENMA KOZUME performs a Set with 120% of his Set stat.",
          "3": "KENMA KOZUME performs a Set with 120% of his Set stat.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "The Brain",
        levels: {
          "1": 'While KENMA KOZUME is on the court, increases your side\'s players\' Receive power by 6% of their Receive stat. If "Keep It Alive" exceeds 5 stacks, additionally increases their Receive power by 150% and Save power by 150%. When your side\'s Receive or Save fails, consumes 6 stacks of "Keep It Alive" to convert the result to PERFECT.',
          "2": 'While KENMA KOZUME is on the court, increases your side\'s players\' Receive power by 6% of their Receive stat. If "Keep It Alive" exceeds 5 stacks, additionally increases their Receive power by 150% and Save power by 150%. When your side\'s Receive or Save fails, consumes 6 stacks of "Keep It Alive" to convert the result to PERFECT.',
          "3": 'While KENMA KOZUME is on the court, increases your side\'s players\' Receive power by 6% of their Receive stat. If "Keep It Alive" exceeds 5 stacks, additionally increases their Receive power by 150% and Save power by 150%. When your side\'s Receive or Save fails, consumes 6 stacks of "Keep It Alive" to convert the result to PERFECT.',
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Deceptive Dump",
        levels: {
          "1": "KENMA KOZUME performs an unblockable Setter Dump with 220% of his Set stat.",
          "2": "KENMA KOZUME performs an unblockable Setter Dump with 220% of his Set stat.",
          "3": "KENMA KOZUME performs an unblockable Setter Dump with 220% of his Set stat.",
          "4": "KENMA KOZUME performs an unblockable Setter Dump with 220% of his Set stat.",
          "5": "KENMA KOZUME performs an unblockable Setter Dump with 220% of his Set stat.",
        },
      },
    ],
    bonds: [
      {
        to: "tetsuro-kuroo-ur",
        name: "Brain & Control Tower",
        participants: ["kenma-kozume-ssr", "tetsuro-kuroo-ur"],
        effect:
          "Con habilidades combinadas que potencian Quick Spike y control del bloqueo cuando ambos están en cancha.",
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
          'When casting DECEPTIVE DUMP, gain 2 stacks of "Keep It Alive" Buff.',
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
          'While KENMA KOZUME is present, at the start of each match, receive 4 stacks of "Keep It Alive" Buff.',
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

  // ===================== KUROO (UR) =====================
  {
    id: "tetsuro-kuroo-ur",
    name: "Tetsurō Kuroo",
    shortName: "Kuroo",
    team: "Nekoma",
    rarity: "UR",
    roles: ["MB"],
    typeTags: ["Quick Attack", "Block", "Debuff"],
    image: "/characters/nekoma/tetsuro-kuroo-ur.png",
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
          "1": "Increases TETSURO KUROO's Quick Attack stat by 10%; while KUROO is present, each time the ball crosses the net, increases his Block and Quick Attack stats by 5%, up to 5 stacks.",
          "2": "Increases TETSURO KUROO's Quick Attack stat by 10%; while KUROO is present, each time the ball crosses the net, increases his Block and Quick Attack stats by 5%, up to 5 stacks.",
          "3": "Increases TETSURO KUROO's Quick Attack stat by 10%; while KUROO is present, each time the ball crosses the net, increases his Block and Quick Attack stats by 5%, up to 5 stacks.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "A-Quick Attack",
        levels: {
          "1": 'TETSURO KUROO performs a Quick Spike with 125% of Quick Attack stat as power; receives 1 stacks of "Power Charge"; each stack increases A-Quick Attack Spike power by 5% of Quick Attack stat, up to 3 stacks.',
          "2": 'TETSURO KUROO performs a Quick Spike with 125% of Quick Attack stat as power; receives 1 stacks of "Power Charge"; each stack increases A-Quick Attack Spike power by 5% of Quick Attack stat, up to 3 stacks.',
          "3": 'TETSURO KUROO performs a Quick Spike with 125% of Quick Attack stat as power; receives 1 stacks of "Power Charge"; each stack increases A-Quick Attack Spike power by 5% of Quick Attack stat, up to 3 stacks.',
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Conductor",
        levels: {
          "1": 'Increases TETSURO KUROO\'s Block stat by 14%; when KUROO achieves a PERFECT block result, applies "Enrage" Debuff to opponent spiker (reduces Power/Quick Attack stats by 10%).',
          "2": 'Increases TETSURO KUROO\'s Block stat by 14%; when KUROO achieves a PERFECT block result, applies "Enrage" Debuff to opponent spiker (reduces Power/Quick Attack stats by 10%).',
          "3": 'Increases TETSURO KUROO\'s Block stat by 14%; when KUROO achieves a PERFECT block result, applies "Enrage" Debuff to opponent spiker (reduces Power/Quick Attack stats by 10%).',
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Reactive Block",
        levels: {
          "1": "TETSURO KUROO performs a Block with 235% of Block stat as power; when the opponent's spiking player is affected by a debuff, increases this block's power by an additional 20% of Block stat.",
          "2": "TETSURO KUROO performs a Block with 235% of Block stat as power; when the opponent's spiking player is affected by a debuff, increases this block's power by an additional 20% of Block stat.",
          "3": "TETSURO KUROO performs a Block with 235% of Block stat as power; when the opponent's spiking player is affected by a debuff, increases this block's power by an additional 20% of Block stat.",
          "4": "TETSURO KUROO performs a Block with 235% of Block stat as power; when the opponent's spiking player is affected by a debuff, increases this block's power by an additional 20% of Block stat.",
          "5": "TETSURO KUROO performs a Block with 235% of Block stat as power; when the opponent's spiking player is affected by a debuff, increases this block's power by an additional 20% of Block stat.",
        },
      },
    ],
    bonds: [
      {
        to: "kenma-kozume-ssr",
        name: "Brain & Control Tower",
        participants: ["tetsuro-kuroo-ur", "kenma-kozume-ssr"],
        effect:
          "Sinergia de Quick Spike y control defensivo al estar ambos en cancha.",
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
        effect: "Reduces A-QUICK ATTACK cooldown to 0 net crossings.",
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Increases Basic Stats by 13%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect:
          "CONDUCTOR condition modified: triggers on any block, with stronger debuff.",
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
    typeTags: ["Quick Attack", "Block", "Enhance Team"],
    image: "/characters/nekoma/tetsuro-kuroo-ssr.png",
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
          "1": "While TETSURO KUROO (Practice) is present, increases Strength of Quick Attack-type players on your side by 16%.",
          "2": "While TETSURO KUROO (Practice) is present, increases Strength of Quick Attack-type players on your side by 16%.",
          "3": "While TETSURO KUROO (Practice) is present, increases Strength of Quick Attack-type players on your side by 16%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Steady Offense",
        levels: {
          "1": 'TETSURO KUROO (Practice) performs a Quick Spike with 125% of Quick Attack stat as power; receives 1 stacks of "Power Charge"; when casting STEADY OFFENSE, each stack increases spike power by 15% of Quick Attack stat, up to 2 stacks.',
          "2": 'TETSURO KUROO (Practice) performs a Quick Spike with 125% of Quick Attack stat as power; receives 1 stacks of "Power Charge"; when casting STEADY OFFENSE, each stack increases spike power by 15% of Quick Attack stat, up to 2 stacks.',
          "3": 'TETSURO KUROO (Practice) performs a Quick Spike with 125% of Quick Attack stat as power; receives 1 stacks of "Power Charge"; when casting STEADY OFFENSE, each stack increases spike power by 15% of Quick Attack stat, up to 2 stacks.',
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Block Control Tower",
        levels: {
          "1": "While TETSURO KUROO (Practice) is present, increases Block stat of players on your side by 8%.",
          "2": "While TETSURO KUROO (Practice) is present, increases Block stat of players on your side by 8%.",
          "3": "While TETSURO KUROO (Practice) is present, increases Block stat of players on your side by 8%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Lockdown",
        levels: {
          "1": "TETSURO KUROO (Practice) performs a Block with 170% of Block stat as power; when other front row Block-type players are present, increases this block's power by 15% of Block stat.",
          "2": "TETSURO KUROO (Practice) performs a Block with 170% of Block stat as power; when other front row Block-type players are present, increases this block's power by 15% of Block stat.",
          "3": "TETSURO KUROO (Practice) performs a Block with 170% of Block stat as power; when other front row Block-type players are present, increases this block's power by 15% of Block stat.",
          "4": "TETSURO KUROO (Practice) performs a Block with 170% of Block stat as power; when other front row Block-type players are present, increases this block's power by 15% of Block stat.",
          "5": "TETSURO KUROO (Practice) performs a Block with 170% of Block stat as power; when other front row Block-type players are present, increases this block's power by 15% of Block stat.",
        },
      },
    ],
    bonds: [
      {
        to: "kenma-kozume-sr",
        name: "Pivot & Control Tower",
        participants: ["tetsuro-kuroo-ssr", "kenma-kozume-sr"],
        effect:
          "Mejoran Set y control de bloqueos cuando ambos están en cancha.",
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
          'STEADY OFFENSE effect modified: "Power Charge" Buff has no stack limit.',
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
          'After casting LOCKDOWN, applies "Enrage" Debuff to opponent spiker and increases your side\'s Power/Quick Attack stats by 10%.',
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
    typeTags: ["Set", "Enhance Team"],
    image: "/characters/nekoma/kenma-kozume-sr.png",
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
          "1": "While KENMA KOZUME (Practice) is present, increases Receive stat of your side's back row players by 8%.",
          "2": "While KENMA KOZUME (Practice) is present, increases Receive stat of your side's back row players by 8%.",
          "3": "While KENMA KOZUME (Practice) is present, increases Receive stat of your side's back row players by 8%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Setting Core",
        levels: {
          "1": "While KENMA KOZUME (Practice) is present, when your side achieves a PERFECT receive, increases your side's next spike power by 7% of the spiker's Power/Quick Attack stat.",
          "2": "While KENMA KOZUME (Practice) is present, when your side achieves a PERFECT receive, increases your side's next spike power by 7% of the spiker's Power/Quick Attack stat.",
          "3": "While KENMA KOZUME (Practice) is present, when your side achieves a PERFECT receive, increases your side's next spike power by 7% of the spiker's Power/Quick Attack stat.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Tactical Direction",
        levels: {
          "1": 'Increases KENMA KOZUME (Practice)\'s Set stat by 8%; while present, when your side achieves a PERFECT receive, receives 1 stacks of "Keep It Alive"; each stack increases Receive stat of players on your side by 1%, up to 6 stacks.',
          "2": 'Increases KENMA KOZUME (Practice)\'s Set stat by 8%; while present, when your side achieves a PERFECT receive, receives 1 stacks of "Keep It Alive"; each stack increases Receive stat of players on your side by 1%, up to 6 stacks.',
          "3": 'Increases KENMA KOZUME (Practice)\'s Set stat by 8%; while present, when your side achieves a PERFECT receive, receives 1 stacks of "Keep It Alive"; each stack increases Receive stat of players on your side by 1%, up to 6 stacks.',
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Strategist of the Court",
        levels: {
          "1": "KENMA KOZUME (Practice) performs a Set with 220% of Set stat as power.",
          "2": "KENMA KOZUME (Practice) performs a Set with 220% of Set stat as power.",
          "3": "KENMA KOZUME (Practice) performs a Set with 220% of Set stat as power.",
          "4": "KENMA KOZUME (Practice) performs a Set with 220% of Set stat as power.",
          "5": "KENMA KOZUME (Practice) performs a Set with 220% of Set stat as power.",
        },
      },
    ],
    bonds: [
      {
        to: "tetsuro-kuroo-ssr",
        name: "Pivot & Control Tower",
        participants: ["kenma-kozume-sr", "tetsuro-kuroo-ssr"],
        effect:
          "Set mejorado y torre de control de bloqueo al alinearlos juntos.",
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
          'While KENMA KOZUME (Practice) is present, the maximum stack limit of "Keep It Alive" Buff is 10.',
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
          "SETTING CORE condition modified: triggers when your side's receive result is not BAD.",
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
    typeTags: ["Receive", "Save", "Counter Quick"],
    image: "/characters/nekoma/morisuke-yaku-sr.png",
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
          "1": "Increases MORISUKE YAKU (Practice)'s Receive and Save stats by 10%.",
          "2": "Increases MORISUKE YAKU (Practice)'s Receive and Save stats by 10%.",
          "3": "Increases MORISUKE YAKU (Practice)'s Receive and Save stats by 10%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Defense Fortress",
        levels: {
          "1": "While MORISUKE YAKU (Practice) is present, increases Receive stat of your side's back row players by 6%.",
          "2": "While MORISUKE YAKU (Practice) is present, increases Receive stat of your side's back row players by 6%.",
          "3": "While MORISUKE YAKU (Practice) is present, increases Receive stat of your side's back row players by 6%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Absolute Defense",
        levels: {
          "1": "When MORISUKE YAKU (Practice) receives an opponent's Quick Spike, increases receive power by 12% of Receive stat.",
          "2": "When MORISUKE YAKU (Practice) receives an opponent's Quick Spike, increases receive power by 12% of Receive stat.",
          "3": "When MORISUKE YAKU (Practice) receives an opponent's Quick Spike, increases receive power by 12% of Receive stat.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "High Precision Receive",
        levels: {
          "1": "MORISUKE YAKU (Practice) performs a Receive with 220% of Receive stat as power.",
          "2": "MORISUKE YAKU (Practice) performs a Receive with 220% of Receive stat as power.",
          "3": "MORISUKE YAKU (Practice) performs a Receive with 220% of Receive stat as power.",
          "4": "MORISUKE YAKU (Practice) performs a Receive with 220% of Receive stat as power.",
          "5": "MORISUKE YAKU (Practice) performs a Receive with 220% of Receive stat as power.",
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
          "When losing, increases YAKU (Practice)'s Receive power by 12% of Receive stat and Save power by 12% of Save stat.",
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
          "Once per turn, when YAKU (Practice) would lose a point on a Receive/Save, the result changes to an opponent free-ball instead of a lost point.",
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
    typeTags: ["Quick Attack", "Block"],
    image: "/characters/nekoma/lev-haiba-sr.png",
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
          "1": 'Increases LEV HAIBA (Practice)\'s Quick Attack stat by 8%; while he is present, each time the ball crosses the net, LEV receives 1 stacks of "Expectation" (lasting 1 turns), each stack increases Quick Attack stat by 1%, up to 4 stacks.',
          "2": 'Increases LEV HAIBA (Practice)\'s Quick Attack stat by 8%; while he is present, each time the ball crosses the net, LEV receives 1 stacks of "Expectation" (lasting 1 turns), each stack increases Quick Attack stat by 1%, up to 4 stacks.',
          "3": 'Increases LEV HAIBA (Practice)\'s Quick Attack stat by 8%; while he is present, each time the ball crosses the net, LEV receives 1 stacks of "Expectation" (lasting 1 turns), each stack increases Quick Attack stat by 1%, up to 4 stacks.',
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Evolved Block",
        levels: {
          "1": 'LEV HAIBA (Practice) performs a Block with 105% of Block stat as power, receives 1 stacks of "Growth"; when casting EVOLVED BLOCK, each stack of "Growth" increases block power by 3% of Block stat, up to 2 stacks.',
          "2": 'LEV HAIBA (Practice) performs a Block with 105% of Block stat as power, receives 1 stacks of "Growth"; when casting EVOLVED BLOCK, each stack of "Growth" increases block power by 3% of Block stat, up to 2 stacks.',
          "3": 'LEV HAIBA (Practice) performs a Block with 105% of Block stat as power, receives 1 stacks of "Growth"; when casting EVOLVED BLOCK, each stack of "Growth" increases block power by 3% of Block stat, up to 2 stacks.',
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Free Spirit",
        levels: {
          "1": "While LEV HAIBA (Practice) is in the front row, increases his Quick Attack stat by 11.5%.",
          "2": "While LEV HAIBA (Practice) is in the front row, increases his Quick Attack stat by 11.5%.",
          "3": "While LEV HAIBA (Practice) is in the front row, increases his Quick Attack stat by 11.5%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Offensive Wing",
        levels: {
          "1": "LEV HAIBA (Practice) performs a Quick Spike with 220% of Quick Attack stat as power.",
          "2": "LEV HAIBA (Practice) performs a Quick Spike with 220% of Quick Attack stat as power.",
          "3": "LEV HAIBA (Practice) performs a Quick Spike with 220% of Quick Attack stat as power.",
          "4": "LEV HAIBA (Practice) performs a Quick Spike with 220% of Quick Attack stat as power.",
          "5": "LEV HAIBA (Practice) performs a Quick Spike with 220% of Quick Attack stat as power.",
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
          'When LEV HAIBA (Practice) scores with a Block, applies "Enrage" Debuff to the opponent spiker (reduces Power/Quick Attack stats by 10%).',
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
          'Each time you receive "Expectation" Buff, receive 1 additional stacks of "Expectation" Buff.',
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
    typeTags: ["Quick Attack", "Block", "Debuff"],
    image: "/characters/nekoma/lev-haiba-ssr.png",
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
          "1": "While LEV HAIBA is on the court, when your side achieves a PERFECT Receive, his next Quick Spike gains 15% of his Quick Attack stat as additional power.",
          "2": "While LEV HAIBA is on the court, when your side achieves a PERFECT Receive, his next Quick Spike gains 15% of his Quick Attack stat as additional power.",
          "3": "While LEV HAIBA is on the court, when your side achieves a PERFECT Receive, his next Quick Spike gains 15% of his Quick Attack stat as additional power.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Momentum Block",
        levels: {
          "1": "LEV HAIBA performs a Block with 105% of his Block stat.",
          "2": "LEV HAIBA performs a Block with 105% of his Block stat.",
          "3": "LEV HAIBA performs a Block with 105% of his Block stat.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Gifted Athlete",
        levels: {
          "1": "When LEV HAIBA performs a Quick Spike and the opponent's blocker is affected by a debuff, reduces that blocker's Block power by 10% of their Block stat.",
          "2": "When LEV HAIBA performs a Quick Spike and the opponent's blocker is affected by a debuff, reduces that blocker's Block power by 10% of their Block stat.",
          "3": "When LEV HAIBA performs a Quick Spike and the opponent's blocker is affected by a debuff, reduces that blocker's Block power by 10% of their Block stat.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Talented Spike",
        levels: {
          "1": "LEV HAIBA performs a Quick Spike with 245% of his Quick Attack stat as power.",
          "2": "LEV HAIBA performs a Quick Spike with 245% of his Quick Attack stat as power.",
          "3": "LEV HAIBA performs a Quick Spike with 245% of his Quick Attack stat as power.",
          "4": "LEV HAIBA performs a Quick Spike with 245% of his Quick Attack stat as power.",
          "5": "LEV HAIBA performs a Quick Spike with 245% of his Quick Attack stat as power.",
        },
      },
    ],
    bonds: [],
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
          "When LEV HAIBA blocks, if the opponent spiker has a debuff, increases LEV HAIBA's Block stat by 5%.",
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
          "TALENTED SPIKE new effect: When your side achieves a PERFECT Set, increases this Quick Spike's power by 12% of Quick Attack stat.",
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
    typeTags: ["Power Attack", "Receive", "Team Morale"],
    image: "/characters/nekoma/taketora-yamamoto-sr.png",
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
          "1": "Increases TAKETORA YAMAMOTO's Power Spike power by 8% of his Power Attack stat. While he is on the court, your Team Morale gains 5 when scoring.",
          "2": "Increases TAKETORA YAMAMOTO's Power Spike power by 8% of his Power Attack stat. While he is on the court, your Team Morale gains 5 when scoring.",
          "3": "Increases TAKETORA YAMAMOTO's Power Spike power by 8% of his Power Attack stat. While he is on the court, your Team Morale gains 5 when scoring.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Perfect Defense",
        levels: {
          "1": "TAKETORA YAMAMOTO performs a Receive with 120% of his Receive stat.",
          "2": "TAKETORA YAMAMOTO performs a Receive with 120% of his Receive stat.",
          "3": "TAKETORA YAMAMOTO performs a Receive with 120% of his Receive stat.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Gritty Spirit",
        levels: {
          "1": "While TAKETORA YAMAMOTO is on the court, when your side scores, restores 10 Stamina to the teammate with the lowest Stamina.",
          "2": "While TAKETORA YAMAMOTO is on the court, when your side scores, restores 10 Stamina to the teammate with the lowest Stamina.",
          "3": "While TAKETORA YAMAMOTO is on the court, when your side scores, restores 10 Stamina to the teammate with the lowest Stamina.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Exhaust Spike",
        levels: {
          "1": "TAKETORA YAMAMOTO performs a Power Spike with 220% of his Power Attack stat as power; if it scores, increases your Team Morale by 5.",
          "2": "TAKETORA YAMAMOTO performs a Power Spike with 220% of his Power Attack stat as power; if it scores, increases your Team Morale by 5.",
          "3": "TAKETORA YAMAMOTO performs a Power Spike with 220% of his Power Attack stat as power; if it scores, increases your Team Morale by 5.",
          "4": "TAKETORA YAMAMOTO performs a Power Spike with 220% of his Power Attack stat as power; if it scores, increases your Team Morale by 5.",
          "5": "TAKETORA YAMAMOTO performs a Power Spike with 220% of his Power Attack stat as power; if it scores, increases your Team Morale by 5.",
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
          "When TAKETORA YAMAMOTO scores, removes all debuff effects from your side's back row players.",
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
          "EXHAUST SPIKE new effect: increases its power by an additional 10% of Power Attack stat.",
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
    roles: ["WS"],
    typeTags: ["Receive", "Power Attack", "Team Morale"],
    image: "/characters/nekoma/nobuyuki-kai-sr.png",
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
          "1": "When NOBUYUKI KAI receives an opponent's Jump Serve, increases this receive's power by 20% of Receive stat.",
          "2": "When NOBUYUKI KAI receives an opponent's Jump Serve, increases this receive's power by 20% of Receive stat.",
          "3": "When NOBUYUKI KAI receives an opponent's Jump Serve, increases this receive's power by 20% of Receive stat.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Power Spike",
        levels: {
          "1": "NOBUYUKI KAI performs a Power Spike with 120% of Power Attack stat as power.",
          "2": "NOBUYUKI KAI performs a Power Spike with 120% of Power Attack stat as power.",
          "3": "NOBUYUKI KAI performs a Power Spike with 120% of Power Attack stat as power.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Stamina Match",
        levels: {
          "1": "Increases NOBUYUKI KAI's Receive power by 8% of Receive stat; when he achieves a PERFECT receive, increases your Team Morale by 5.",
          "2": "Increases NOBUYUKI KAI's Receive power by 8% of Receive stat; when he achieves a PERFECT receive, increases your Team Morale by 5.",
          "3": "Increases NOBUYUKI KAI's Receive power by 8% of Receive stat; when he achieves a PERFECT receive, increases your Team Morale by 5.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Perfect Reception",
        levels: {
          "1": "NOBUYUKI KAI performs a Receive with 215% of Receive stat as power; when this Receive's result is NORMAL, changes it to PERFECT.",
          "2": "NOBUYUKI KAI performs a Receive with 215% of Receive stat as power; when this Receive's result is NORMAL, changes it to PERFECT.",
          "3": "NOBUYUKI KAI performs a Receive with 215% of Receive stat as power; when this Receive's result is NORMAL, changes it to PERFECT.",
          "4": "NOBUYUKI KAI performs a Receive with 215% of Receive stat as power; when this Receive's result is NORMAL, changes it to PERFECT.",
          "5": "NOBUYUKI KAI performs a Receive with 215% of Receive stat as power; when this Receive's result is NORMAL, changes it to PERFECT.",
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
          "PERFECT RECEPTION new effect: When opponent's Quick Spiker's Stamina is below 30, this receive will always be PERFECT.",
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
          "While NOBUYUKI KAI is present, when your side is behind, increases your side's back row players' Receive stat by 10%.",
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
    typeTags: ["Receive", "Power Attack"],
    image: "/characters/nekoma/shohei-fukunaga-sr.png",
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
          "1": "SHOHEI FUKUNAGA performs a Receive with 120% of Receive stat as power.",
          "2": "SHOHEI FUKUNAGA performs a Receive with 120% of Receive stat as power.",
          "3": "SHOHEI FUKUNAGA performs a Receive with 120% of Receive stat as power.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Back Row Tactics",
        levels: {
          "1": "When all your back row players are of Receive-type, increases SHOHEI FUKUNAGA's Receive power by 18% of Receive stat; when FUKUNAGA's Receive result is NORMAL, changes it to PERFECT.",
          "2": "When all your back row players are of Receive-type, increases SHOHEI FUKUNAGA's Receive power by 18% of Receive stat; when FUKUNAGA's Receive result is NORMAL, changes it to PERFECT.",
          "3": "When all your back row players are of Receive-type, increases SHOHEI FUKUNAGA's Receive power by 18% of Receive stat; when FUKUNAGA's Receive result is NORMAL, changes it to PERFECT.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Firm Reception",
        levels: {
          "1": "Increases SHOHEI FUKUNAGA's Receive stat by 10%.",
          "2": "Increases SHOHEI FUKUNAGA's Receive stat by 10%.",
          "3": "Increases SHOHEI FUKUNAGA's Receive stat by 10%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Right-on-Line",
        levels: {
          "1": "SHOHEI FUKUNAGA performs a Power Spike with 220% of Power Attack stat as power.",
          "2": "SHOHEI FUKUNAGA performs a Power Spike with 220% of Power Attack stat as power.",
          "3": "SHOHEI FUKUNAGA performs a Power Spike with 220% of Power Attack stat as power.",
          "4": "SHOHEI FUKUNAGA performs a Power Spike with 220% of Power Attack stat as power.",
          "5": "SHOHEI FUKUNAGA performs a Power Spike with 220% of Power Attack stat as power.",
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
          "When SHOHEI FUKUNAGA performs a Power Spike, reduces opponent's receive power by 5% of the receiving player's Receive stat.",
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
          "While SHOHEI FUKUNAGA is present, when your side achieves a PERFECT receive, increases his Power Spike power by an additional 15% of Power Attack stat.",
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
  // ===================== Tamahiko Teshiro (SR) =====================
  {
    id: "tamahiko-teshiro-sr",
    name: "Tamahiko Teshiro",
    shortName: "Teshiro",
    team: "Nekoma",
    rarity: "SR",
    roles: ["S"],
    typeTags: ["Set", "Serve", "Enhance Team"],
    image: "/characters/nekoma/tamahiko-teshiro-sr.png",
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
          "2": "TAMAHIKO TESHIRO performs a Set with 120% of Set stat as power.",
          "3": "TAMAHIKO TESHIRO performs a Set with 120% of Set stat as power.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Focused Serve",
        levels: {
          "1": "Increases TAMAHIKO TESHIRO's Serve stat by 10%.",
          "2": "Increases TAMAHIKO TESHIRO's Serve stat by 10%.",
          "3": "Increases TAMAHIKO TESHIRO's Serve stat by 10%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Precise Receive",
        levels: {
          "1": "While TAMAHIKO TESHIRO is present, increases Receive stat of your side's back row players by 6%.",
          "2": "While TAMAHIKO TESHIRO is present, increases Receive stat of your side's back row players by 6%.",
          "3": "While TAMAHIKO TESHIRO is present, increases Receive stat of your side's back row players by 6%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Ceiling Serve",
        levels: {
          "1": "TAMAHIKO TESHIRO performs a Ceiling Serve with 215% of Serve stat as power; for this Serve, TESHIRO's Awareness increases by 10%.",
          "2": "TAMAHIKO TESHIRO performs a Ceiling Serve with 215% of Serve stat as power; for this Serve, TESHIRO's Awareness increases by 10%.",
          "3": "TAMAHIKO TESHIRO performs a Ceiling Serve with 215% of Serve stat as power; for this Serve, TESHIRO's Awareness increases by 10%.",
          "4": "TAMAHIKO TESHIRO performs a Ceiling Serve with 215% of Serve stat as power; for this Serve, TESHIRO's Awareness increases by 10%.",
          "5": "TAMAHIKO TESHIRO performs a Ceiling Serve with 215% of Serve stat as power; for this Serve, TESHIRO's Awareness increases by 10%.",
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
          "When your side is behind, increases TAMAHIKO TESHIRO's Serve power by an additional 10% of Serve stat.",
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
          "While TAMAHIKO TESHIRO is present, each time the ball crosses the net, increases your side's back row players' Receive stat by 3%, stacking up to 5 times.",
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
  // ===================== So Inuoka (SR) =====================
  {
    id: "so-inuoka-sr",
    name: "Sō Inuoka",
    shortName: "Inuoka",
    team: "Nekoma",
    rarity: "SR",
    roles: ["MB"],
    typeTags: ["Quick Attack", "Block", "Enhance Team"],
    image: "/characters/nekoma/so-inuoka-sr.png",
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
        key: "active",
        name: "Explosive Quick Attack",
        levels: {
          "1": "SO INUOKA performs a Quick Spike with 120% of Quick Attack stat as power.",
          "2": "SO INUOKA performs a Quick Spike with 120% of Quick Attack stat as power.",
          "3": "SO INUOKA performs a Quick Spike with 120% of Quick Attack stat as power.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Shutdown Block",
        levels: {
          "1": "Increases SO INUOKA's Block stat by 10%.",
          "2": "Increases SO INUOKA's Block stat by 10%.",
          "3": "Increases SO INUOKA's Block stat by 10%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Unquenchable Spirit",
        levels: {
          "1": "While SO INUOKA is present, when your side is behind, increases your side's Block power by 3% of each player's Block stat, and increases back-row players' Receive power by 3% of their Receive stat.",
          "2": "While SO INUOKA is present, when your side is behind, increases your side's Block power by 3% of each player's Block stat, and increases back-row players' Receive power by 3% of their Receive stat.",
          "3": "While SO INUOKA is present, when your side is behind, increases your side's Block power by 3% of each player's Block stat, and increases back-row players' Receive power by 3% of their Receive stat.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Cover Block",
        levels: {
          "1": "SO INUOKA performs a Block with 180% of Block stat as power.",
          "2": "SO INUOKA performs a Block with 180% of Block stat as power.",
          "3": "SO INUOKA performs a Block with 180% of Block stat as power.",
          "4": "SO INUOKA performs a Block with 180% of Block stat as power.",
          "5": "SO INUOKA performs a Block with 180% of Block stat as power.",
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
          "At the start of each turn, removes all debuff effects from SO INUOKA.",
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
          "When your side's players achieve a PERFECT touch, reduces COVER BLOCK cooldown by 1 net crossings.",
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
