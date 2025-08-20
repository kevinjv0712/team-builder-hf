// src/data/teams/karasuno.ts
import type { Player } from "../types";

export const karasunoPlayers: Player[] = [
  // =========================================================
  // =========================  SP  ==========================
  // ======== ORDER: S -> OP -> LI -> WS -> MB ===============
  // =========================================================

  // KOSHI SUGAWARA SP
  {
    id: "koshi-sugawara-sp",
    name: "Koshi Sugawara",
    shortName: "Sugawara",
    team: "Karasuno",
    rarity: "SP",
    roles: ["S"],
    typeTags: ["Setter", "Serve"],
    image: "/characters/karasuno/koshi-sugawara-sp.png",
    stats: {
      // SP baseline for a setter (consistent with Karasuno scaling)
      basic: {
        quickAttack: 111,
        powerAttack: 104,
        set: 143,
        serve: 131,
        receive: 130,
        block: 126,
        save: 121,
      },
      bonusAttack: { awareness: 0.05, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.05, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Senpai’s Guidance",
        levels: {
          "1": "While KOSHI SUGAWARA (After School) is on the court, your side’s spikers gain +10% Strength; when your side’s spike is a Nice Play, reduces that spiker’s next Spike skill Stamina cost by 10%.",
          "2": "While KOSHI SUGAWARA (After School) is on the court, your side’s spikers gain +10% Strength; when your side’s spike is a Nice Play, reduces that spiker’s next Spike skill Stamina cost by 10%.",
          "3": "While KOSHI SUGAWARA (After School) is on the court, your side’s spikers gain +10% Strength; when your side’s spike is a Nice Play, reduces that spiker’s next Spike skill Stamina cost by 10%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "A Pass",
        levels: {
          "1": "KOSHI SUGAWARA (After School) performs a Set with 140% of his Set stat as power; SUGAWARA’s Awareness increases by 15% for the next 2 net crossings.",
          "2": "KOSHI SUGAWARA (After School) performs a Set with 140% of his Set stat as power; SUGAWARA’s Awareness increases by 15% for the next 2 net crossings.",
          "3": "KOSHI SUGAWARA (After School) performs a Set with 140% of his Set stat as power; SUGAWARA’s Awareness increases by 15% for the next 2 net crossings.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Lift the Team",
        levels: {
          "1": "When your side makes a Nice Play, reduces the cooldown of a random teammate’s Spike skill by 2 net crossings and increases that player’s Attack Technique by 8% for 2 net crossings.",
          "2": "When your side makes a Nice Play, reduces the cooldown of a random teammate’s Spike skill by 2 net crossings and increases that player’s Attack Technique by 8% for 2 net crossings.",
          "3": "When your side makes a Nice Play, reduces the cooldown of a random teammate’s Spike skill by 2 net crossings and increases that player’s Attack Technique by 8% for 2 net crossings.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Senpai’s Touch",
        levels: {
          "1": "KOSHI SUGAWARA (After School) performs a Set that increases your side’s next Spike power by 110% of his Power/Quick Attack stat; if that next Spike is a Power Spike, it gains an additional +15% of the spiker’s Power Attack stat.",
          "2": "KOSHI SUGAWARA (After School) performs a Set that increases your side’s next Spike power by 110% of his Power/Quick Attack stat; if that next Spike is a Power Spike, it gains an additional +15% of the spiker’s Power Attack stat.",
          "3": "KOSHI SUGAWARA (After School) performs a Set that increases your side’s next Spike power by 110% of his Power/Quick Attack stat; if that next Spike is a Power Spike, it gains an additional +15% of the spiker’s Power Attack stat.",
          "4": undefined,
          "5": undefined,
        },
      },
    ],
    bonds: [
      {
        to: "asahi-azumane-ssr",
        name: "Karasuno Senior Year",
        participants: [
          "daichi-sawamura-ssr",
          "asahi-azumane-ssr",
          "koshi-sugawara-sr",
        ],
        effect:
          "Reduces Stamina consumption for your side's Spike skills; Increases Attack Technique when performing Power Spikes",
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
        effect:
          "A PASS modified: additionally increases the next spiker’s Awareness by 10% for 2 net crossings.",
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
          "When your side’s spike scores, reduces SENPAI’S TOUCH cooldown by 4 net crossings.",
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

  // (no SP Opposite on Karasuno)

  // YU NISHINOYA SP
  {
    id: "yu-nishinoya-sp",
    name: "Yu Nishinoya",
    shortName: "Nishinoya",
    team: "Karasuno",
    rarity: "SP",
    roles: ["LI"],
    typeTags: ["Receive"],
    image: "/characters/karasuno/yu-nishinoya-sp.png",
    stats: {
      basic: {
        quickAttack: 90,
        powerAttack: 131,
        set: 143,
        serve: 131,
        receive: 158,
        block: 127,
        save: 151,
      },
      bonusAttack: { awareness: 0.0, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.05, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Top-Class Reflexes",
        levels: {
          "1": "Increases YU NISHINOYA (After School)’s Reflex by 10%. When an opponent’s play is a Nice Play, NISHINOYA (After School) gains +1.5% Reflex, stacking up to 10 times and lasting for 6 net crossings.",
          "2": "Increases YU NISHINOYA (After School)’s Reflex by 10%. When an opponent’s play is a Nice Play, NISHINOYA (After School) gains +1.5% Reflex, stacking up to 10 times and lasting for 6 net crossings.",
          "3": "Increases YU NISHINOYA (After School)’s Reflex by 10%. When an opponent’s play is a Nice Play, NISHINOYA (After School) gains +1.5% Reflex, stacking up to 10 times and lasting for 6 net crossings.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "A Pass",
        levels: {
          "1": "YU NISHINOYA (After School) performs a Set with 140% of his Set stat as power; NISHINOYA (After School)’s Awareness increases by 20% for the next 2 net crossings.",
          "2": "YU NISHINOYA (After School) performs a Set with 140% of his Set stat as power; NISHINOYA (After School)’s Awareness increases by 20% for the next 2 net crossings.",
          "3": "YU NISHINOYA (After School) performs a Set with 140% of his Set stat as power; NISHINOYA (After School)’s Awareness increases by 20% for the next 2 net crossings.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Save the Day",
        levels: {
          "1": "YU NISHINOYA (After School)’s Spirit increases by 20%. When a teammate makes a Nice Play, reduces FOOT RECEIVE cooldown by 1 net crossing.",
          "2": "YU NISHINOYA (After School)’s Spirit increases by 20%. When a teammate makes a Nice Play, reduces FOOT RECEIVE cooldown by 1 net crossing.",
          "3": "YU NISHINOYA (After School)’s Spirit increases by 20%. When a teammate makes a Nice Play, reduces FOOT RECEIVE cooldown by 1 net crossing.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Foot Receive",
        levels: {
          "1": "YU NISHINOYA (After School) performs a Receive with 260% of his Receive stat as power; his Receive increases by 20% for the next 2 net crossings.",
          "2": "YU NISHINOYA (After School) performs a Receive with 260% of his Receive stat as power; his Receive increases by 20% for the next 2 net crossings.",
          "3": "YU NISHINOYA (After School) performs a Receive with 260% of his Receive stat as power; his Receive increases by 20% for the next 2 net crossings.",
          "4": undefined,
          "5": undefined,
        },
      },
    ],
    bonds: [
      {
        to: "ryunosuke-tanaka-ssr",
        name: "Kiyoko’s Knights",
        participants: ["yu-nishinoya-ssr", "ryunosuke-tanaka-ssr"],
        effect: "When scoring, increases Team Morale",
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
        effect:
          "FOOT RECEIVE modified: additional +10% Receive for this Receive.",
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
          "When your side makes 2 consecutive Nice Plays, immediately reduce FOOT RECEIVE cooldown by 3 net crossings.",
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

  // (no SP WS on Karasuno)

  // SHOYO HINATA SP
  {
    id: "shoyo-hinata-sp",
    name: "Shoyo Hinata",
    shortName: "Hinata",
    team: "Karasuno",
    rarity: "SP",
    roles: ["MB"],
    typeTags: ["Quick Attack"],
    image: "/characters/karasuno/shoyo-hinata-sp.png",
    stats: {
      basic: {
        quickAttack: 118,
        powerAttack: 108,
        set: 128,
        serve: 113,
        receive: 131,
        block: 141,
        save: 128,
      },
      bonusAttack: { awareness: 0.01, strength: 0.04, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.0, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Seize the Moment",
        levels: {
          "1": "While SHOYO HINATA (Hanami) is on the court, your front-row allies’ Defense Technique increases by 10%. When HINATA (Hanami) makes a Nice Play, his Attack Technique increases by 3%, stacking up to 4 times.",
          "2": "While SHOYO HINATA (Hanami) is on the court, your front-row allies’ Defense Technique increases by 10%. When HINATA (Hanami) makes a Nice Play, his Attack Technique increases by 3%, stacking up to 4 times.",
          "3": "While SHOYO HINATA (Hanami) is on the court, your front-row allies’ Defense Technique increases by 10%. When HINATA (Hanami) makes a Nice Play, his Attack Technique increases by 3%, stacking up to 4 times.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Anchor Receive",
        levels: {
          "1": "SHOYO HINATA (Hanami) performs a Receive with 140% of his Receive stat as power; all allies’ main parameter increases by 12% for up to 6 net crossings.",
          "2": "SHOYO HINATA (Hanami) performs a Receive with 140% of his Receive stat as power; all allies’ main parameter increases by 12% for up to 6 net crossings.",
          "3": "SHOYO HINATA (Hanami) performs a Receive with 140% of his Receive stat as power; all allies’ main parameter increases by 12% for up to 6 net crossings.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Counter Spark",
        levels: {
          "1": "If a teammate’s Receive result is BAD while HINATA (Hanami) is on the court, your side’s Attack Technique increases by 12% for 2 net crossings. If HINATA (Hanami) is in the back row, front-row allies gain +10% Defense Technique.",
          "2": "If a teammate’s Receive result is BAD while HINATA (Hanami) is on the court, your side’s Attack Technique increases by 12% for 2 net crossings. If HINATA (Hanami) is in the back row, front-row allies gain +10% Defense Technique.",
          "3": "If a teammate’s Receive result is BAD while HINATA (Hanami) is on the court, your side’s Attack Technique increases by 12% for 2 net crossings. If HINATA (Hanami) is in the back row, front-row allies gain +10% Defense Technique.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Leap High",
        levels: {
          "1": "SHOYO HINATA (Hanami) performs a Quick Spike with 260% of his Quick Attack stat as power. If this play is a Nice Play, increases its power by an additional 40% of his Quick Attack stat.",
          "2": "SHOYO HINATA (Hanami) performs a Quick Spike with 260% of his Quick Attack stat as power. If this play is a Nice Play, increases its power by an additional 40% of his Quick Attack stat.",
          "3": "SHOYO HINATA (Hanami) performs a Quick Spike with 260% of his Quick Attack stat as power. If this play is a Nice Play, increases its power by an additional 40% of his Quick Attack stat.",
          "4": undefined,
          "5": undefined,
        },
      },
    ],
    bonds: [],
    resonances: [
      {
        level: "I",
        name: "Skill Resonance I",
        effect: "Increases Basic Stats by 13%.",
      },
      {
        level: "II",
        name: "Skill Resonance II",
        effect:
          "SEIZE THE MOMENT modified: maximum stacks increased from 4 to 6.",
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
          "When HINATA (Hanami) lands a Critical Quick Spike, reset LEAP HIGH cooldown.",
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

  // KEI TSUKISHIMA SP
  {
    id: "kei-tsukishima-sp",
    name: "Kei Tsukishima",
    shortName: "Tsukishima",
    team: "Karasuno",
    rarity: "SP",
    roles: ["MB"],
    typeTags: ["Block", "Quick Attack"],
    image: "/characters/karasuno/kei-tsukishima-sp.png",
    stats: {
      // SP baseline for a blocker (consistent with Karasuno scaling)
      basic: {
        quickAttack: 121,
        powerAttack: 83,
        set: 102,
        serve: 114,
        receive: 120,
        block: 146,
        save: 125,
      },
      bonusAttack: { awareness: 0.0, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.05, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Ice-Cold Read",
        levels: {
          "1": "While KEI TSUKISHIMA (Fireworks) is on the court, your front-row players’ Block power increases by 10% of their Block stat.",
          "2": "While KEI TSUKISHIMA (Fireworks) is on the court, your front-row players’ Block power increases by 10% of their Block stat.",
          "3": "While KEI TSUKISHIMA (Fireworks) is on the court, your front-row players’ Block power increases by 10% of their Block stat.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Delayed Read",
        levels: {
          "1": "KEI TSUKISHIMA (Fireworks) performs a Block with 200% of his Block stat as power; applies Enrage to the opposing spiker, reducing their Power/Quick Attack by 10% for 2 net crossings.",
          "2": "KEI TSUKISHIMA (Fireworks) performs a Block with 200% of his Block stat as power; applies Enrage to the opposing spiker, reducing their Power/Quick Attack by 10% for 2 net crossings.",
          "3": "KEI TSUKISHIMA (Fireworks) performs a Block with 200% of his Block stat as power; applies Enrage to the opposing spiker, reducing their Power/Quick Attack by 10% for 2 net crossings.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Calculated Pressure",
        levels: {
          "1": "When your side performs a Quick Spike, increases that spiker’s Awareness by 8% and reduces the opponent blockers’ Reflex by 5% for 2 net crossings.",
          "2": "When your side performs a Quick Spike, increases that spiker’s Awareness by 8% and reduces the opponent blockers’ Reflex by 5% for 2 net crossings.",
          "3": "When your side performs a Quick Spike, increases that spiker’s Awareness by 8% and reduces the opponent blockers’ Reflex by 5% for 2 net crossings.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Moonlit Quick",
        levels: {
          "1": "KEI TSUKISHIMA (Fireworks) performs a Quick Spike with 235% of his Quick Attack stat as power; if the opponent’s receiver has a debuff, increases this spike’s power by an additional 20% of his Quick Attack stat.",
          "2": "KEI TSUKISHIMA (Fireworks) performs a Quick Spike with 235% of his Quick Attack stat as power; if the opponent’s receiver has a debuff, increases this spike’s power by an additional 20% of his Quick Attack stat.",
          "3": "KEI TSUKISHIMA (Fireworks) performs a Quick Spike with 235% of his Quick Attack stat as power; if the opponent’s receiver has a debuff, increases this spike’s power by an additional 20% of his Quick Attack stat.",
          "4": undefined,
          "5": undefined,
        },
      },
    ],
    bonds: [
      {
        to: "tadashi-yamaguchi-sr",
        name: "Shield and Spear",
        participants: ["kei-tsukishima-ssr", "tadashi-yamaguchi-sr"],
        effect:
          "Increases Kei Tsukishima's Block stat and Tadashi Yamaguchi's Serve stat",
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
        effect:
          "DELAYED READ modified: Enrage also reduces the target’s Defense Technique by 10%.",
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Increases Basic Stats by 13%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect: "When scoring with MOONLIT QUICK, reset DELAYED READ cooldown.",
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

  // =========================================================
  // =========================  UR  ==========================
  // ======== ORDER: S -> OP -> LI -> WS -> MB ===============
  // =========================================================

  // TOBIO KAGEYAMA UR (placeholder – leave for you to edit stats)
  {
    id: "tobio-kageyama-ur",
    name: "Tobio Kageyama",
    shortName: "Kageyama",
    team: "Karasuno",
    rarity: "UR",
    roles: ["S"],
    typeTags: ["Serve", "Setter", "Quick Attack"],
    image: "/characters/karasuno/tobio-kageyama-ur.png",
    stats: {
      basic: {
        quickAttack: 999,
        powerAttack: 999,
        set: 999,
        serve: 999,
        receive: 999,
        block: 999,
        save: 999,
      },
      bonusAttack: { awareness: 0.99, strength: 0.99, attackTechnique: 0.99 },
      bonusDefense: { reflex: 0.99, spirit: 0.99, defenseTechnique: 0.99 },
    },
    skills: [
      {
        key: "passive",
        name: "",
        levels: {
          "1": undefined,
          "2": undefined,
          "3": undefined,
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "",
        levels: {
          "1": undefined,
          "2": undefined,
          "3": undefined,
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "",
        levels: {
          "1": undefined,
          "2": undefined,
          "3": undefined,
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "",
        levels: {
          "1": undefined,
          "2": undefined,
          "3": undefined,
          "4": undefined,
          "5": undefined,
        },
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

  // =========================================================
  // ========================  SSR  ==========================
  // ======== ORDER: S -> OP -> LI -> WS -> MB ===============
  // =========================================================

  // TOBIO KAGEYAMA SSR (S)
  {
    id: "tobio-kageyama-ssr",
    name: "Tobio Kageyama",
    shortName: "Kageyama",
    team: "Karasuno",
    rarity: "SSR",
    roles: ["S"],
    typeTags: ["Serve", "Setter", "Quick Attack"],
    image: "/characters/karasuno/tobio-kageyama-ssr.png",
    stats: {
      basic: {
        quickAttack: 109,
        powerAttack: 75,
        set: 121,
        serve: 115,
        receive: 98,
        block: 109,
        save: 92,
      },
      bonusAttack: { awareness: 0.05, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.0, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Tricky Serve",
        levels: {
          "1": "TOBIO KAGEYAMA (Practice) performs a Jump Serve with 120% of Serve stat as power",
          "2": "TOBIO KAGEYAMA (Practice) performs a Jump Serve with 135% of Serve stat as power",
          "3": "TOBIO KAGEYAMA (Practice) performs a Jump Serve with 150% of Serve stat as power",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Sharp Observer",
        levels: {
          "1": "TOBIO KAGEYAMA (Practice) performs a Set with 115% of Set stat as power; for this play, your side's spikers' Strength increases by 10%",
          "2": "TOBIO KAGEYAMA (Practice) performs a Set with 130% of Set stat as power; for this play, your side's spikers' Strength increases by 10%",
          "3": "TOBIO KAGEYAMA (Practice) performs a Set with 145% of Set stat as power; for this play, your side's spikers' Strength increases by 10%",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "The King Awakens",
        levels: {
          "1": "While TOBIO KAGEYAMA (Practice) is present, increases your side's players' Awareness by 10% and increases Spike power by 6% of the player's Power/Quick Attack stat.",
          "2": "While TOBIO KAGEYAMA (Practice) is present, increases your side's players' Awareness by 10% and increases Spike power by 8% of the player's Power/Quick Attack stat.",
          "3": "While TOBIO KAGEYAMA (Practice) is present, increases your side's players' Awareness by 10% and increases Spike power by 10% of the player's Power/Quick Attack stat.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Surprise Dump",
        levels: {
          "1": "TOBIO KAGEYAMA (Practice) performs an unblockable Setter Dump with 225% of Set stat as power",
          "2": "TOBIO KAGEYAMA (Practice) performs an unblockable Setter Dump with 240% of Set stat as power",
          "3": "TOBIO KAGEYAMA (Practice) performs an unblockable Setter Dump with 255% of Set stat as power",
          "4": "TOBIO KAGEYAMA (Practice) performs an unblockable Setter Dump with 270% of Set stat as power",
          "5": "TOBIO KAGEYAMA (Practice) performs an unblockable Setter Dump with 285% of Set stat as power",
        },
      },
    ],
    bonds: [
      {
        to: "shoyo-hinata-sr",
        name: "Teammates on the Court",
        participants: ["tobio-kageyama-ssr", "shoyo-hinata-sr"],
        effect:
          "When casting Quick Spike skills increases this player's Awareness",
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
          "SURPRISE DUMP modified: during this Setter Dump, increases TOBIO KAGEYAMA (Practice)'s Awareness and Strength by 10%. and increases your side's Awareness and Strength by 5% for 2 turns",
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
          "When your side performs a Critical Spike, reduces SURPRISE DUMP cooldown by 8 net crossings.",
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

  // DAICHI SAWAMURA SSR (OP)
  {
    id: "daichi-sawamura-ssr",
    name: "Daichi Sawamura",
    shortName: "Daichi",
    team: "Karasuno",
    rarity: "SSR",
    roles: ["OP"],
    typeTags: ["Receive"],
    image: "/characters/karasuno/daichi-sawamura-ssr.png",
    stats: {
      basic: {
        quickAttack: 75,
        powerAttack: 109,
        set: 98,
        serve: 103,
        receive: 121,
        block: 109,
        save: 104,
      },
      bonusAttack: { awareness: 0.0, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.05, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Steady Reception",
        levels: {
          "1": "When DAICHI SAWAMURA performs a Receive, restores 3 Stamina to the teammate with the lowest Stamina",
          "2": "When DAICHI SAWAMURA performs a Receive, restores 5 Stamina to the teammate with the lowest Stamina",
          "3": "When DAICHI SAWAMURA performs a Receive, restores 7 Stamina to the teammate with the lowest Stamina",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Sledgehammer Spike",
        levels: {
          "1": "DAICHI SAWAMURA performs a Power Spike with 120% of his Power Attack stat",
          "2": "DAICHI SAWAMURA performs a Power Spike with 135% of his Power Attack stat",
          "3": "DAICHI SAWAMURA performs a Power Spike with 150% of his Power Attack stat",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Team Backbone",
        levels: {
          "1": "While DAICHI SAWAMURA is present, increases receive power of your side's back row players by 10% of their Receive stat",
          "2": "While DAICHI SAWAMURA is present, increases receive power of your side's back row players by 12% of their Receive stat",
          "3": "While DAICHI SAWAMURA is present, increases receive power of your side's back row players by 14% of their Receive stat",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Reliable Defense",
        levels: {
          "1": "DAICHI SAWAMURA performs a Receive with 220% of his Receive stat. If your side's next Spike is a Power Spike, increases that spike's power by 15% of the spiker's Power Attack stat.",
          "2": "DAICHI SAWAMURA performs a Receive with 235% of his Receive stat. If your side's next Spike is a Power Spike, increases that spike's power by 15% of the spiker's Power Attack stat.",
          "3": "DAICHI SAWAMURA performs a Receive with 250% of his Receive stat. If your side's next Spike is a Power Spike, increases that spike's power by 15% of the spiker's Power Attack stat.",
          "4": "DAICHI SAWAMURA performs a Receive with 265% of his Receive stat. If your side's next Spike is a Power Spike, increases that spike's power by 15% of the spiker's Power Attack stat.",
          "5": "DAICHI SAWAMURA performs a Receive with 280% of his Receive stat. If your side's next Spike is a Power Spike, increases that spike's power by 15% of the spiker's Power Attack stat.",
        },
      },
    ],
    bonds: [
      {
        to: "asahi-azumane-ssr",
        name: "Karasuno Senior Year",
        participants: [
          "daichi-sawamura-ssr",
          "asahi-azumane-ssr",
          "koshi-sugawara-sr",
        ],
        effect:
          "Reduces Stamina consumption for your side's Spike skills; Increases Attack Technique when performing Power Spikes",
      },
      {
        to: "chikara-ennoshita-sr",
        name: "Karasuno's Pillar",
        participants: ["daichi-sawamura-ssr", "chikara-ennoshita-sr"],
        effect: "When achieving a PERFECT receive, increases Team Morale",
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
          "When your side is behind, reduces RELIABLE DEFENSE cooldown to 4 net crossings.",
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
          "RELIABLE DEFENSE new effect: your side's next Power Spike additionally gains power equal to 25% of the spiker's Power Attack stat.",
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

  // YU NISHINOYA SSR (LI)
  {
    id: "yu-nishinoya-ssr",
    name: "Yu Nishinoya",
    shortName: "Nishinoya",
    team: "Karasuno",
    rarity: "SSR",
    roles: ["LI"],
    typeTags: ["Receive"],
    image: "/characters/karasuno/yu-nishinoya-ssr.png",
    stats: {
      basic: {
        quickAttack: 68,
        powerAttack: 99,
        set: 110,
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
        name: "Guardian Deity",
        levels: {
          "1": "When YU NISHINOYA's Save result is not BAD, increases the power of the next Power Spike skill used by your Power-type player by 15% of his Power Attack stat",
          "2": "When YU NISHINOYA's Save result is not BAD, increases the power of the next Power Spike skill used by your Power-type player by 17.5% of his Power Attack stat",
          "3": "When YU NISHINOYA's Save result is not BAD, increases the power of the next Power Spike skill used by your Power-type player by 20% of his Power Attack stat",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Libero Supreme",
        levels: {
          "1": "YU NISHINOYA performs a Save with 120% of Save stat as power",
          "2": "YU NISHINOYA performs a Save with 140% of Save stat as power",
          "3": "YU NISHINOYA performs a Save with 160% of Save stat as power",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Inspire Morale",
        levels: {
          "1": "When YU NISHINOYA is on the court, increases your Team Morale by 18",
          "2": "When YU NISHINOYA is on the court, increases your Team Morale by 20",
          "3": "When YU NISHINOYA is on the court, increases your Team Morale by 25",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Rolling Thunder",
        levels: {
          "1": "YU NISHINOYA consumes 20 additional Stamina to perform a Receive with 220% of Receive stat power; if the Receive result is not BAD, reduces the cooldown of your side's next Power Spike skill by 6 net crossings",
          "2": "YU NISHINOYA consumes 20 additional Stamina to perform a Receive with 235% of Receive stat power; if the Receive result is not BAD, reduces the cooldown of your side's next Power Spike skill by 6 net crossings",
          "3": "YU NISHINOYA consumes 20 additional Stamina to perform a Receive with 250% of Receive stat power; if the Receive result is not BAD, reduces the cooldown of your side's next Power Spike skill by 6 net crossings",
          "4": "YU NISHINOYA consumes 20 additional Stamina to perform a Receive with 265% of Receive stat power; if the Receive result is not BAD, reduces the cooldown of your side's next Power Spike skill by 6 net crossings",
          "5": "YU NISHINOYA consumes 20 additional Stamina to perform a Receive with 280% of Receive stat power; if the Receive result is not BAD, reduces the cooldown of your side's next Power Spike skill by 6 net crossings",
        },
      },
    ],
    bonds: [
      {
        to: "ryunosuke-tanaka-ssr",
        name: "Kiyoko's Knights",
        participants: ["yu-nishinoya-ssr", "ryunosuke-tanaka-ssr"],
        effect: "When scoring, increases Team Morale",
      },
      {
        to: "asahi-azumane-ssr",
        name: "Guardian Deity and Wing Spiker",
        participants: ["yu-nishinoya-ssr", "asahi-azumane-ssr"],
        effect:
          "When YU NISHINOYA or ASAHI AZUMANE casts a skill, increases their Attack Technique and Defense Technique",
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
          "ROLLING THUNDER modified: additional Stamina consumption reduced to 10.",
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
          "YU NISHINOYA's first Receive/Save in each match gains increased power: Receive power increases by 30% of Receive stat.",
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

  // ASAHI AZUMANE SSR (WS)
  {
    id: "asahi-azumane-ssr",
    name: "Asahi Azumane",
    shortName: "Asahi",
    team: "Karasuno",
    rarity: "SSR",
    roles: ["WS"],
    typeTags: ["Serve", "Power Attack"],
    image: "/characters/karasuno/asahi-azumane-ssr.png",
    stats: {
      basic: {
        quickAttack: 83,
        powerAttack: 121,
        set: 98,
        serve: 116,
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
        name: "Proficient Defense",
        levels: {
          "1": "ASAHI AZUMANE performs a Receive with 120% of Receive stat as power",
          "2": "ASAHI AZUMANE performs a Receive with 135% of Receive stat as power",
          "3": "ASAHI AZUMANE performs a Receive with 150% of Receive stat as power",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Bullet Serve",
        levels: {
          "1": "ASAHI AZUMANE performs a Jump Serve with 120% of Serve stat as power",
          "2": "ASAHI AZUMANE performs a Jump Serve with 135% of Serve stat as power",
          "3": "ASAHI AZUMANE performs a Jump Serve with 150% of Serve stat as power",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Ace's Aura",
        levels: {
          "1": "When ASAHI AZUMANE's Stamina is above 70, increases his Power Spike's power by 15% of Power Attack stat",
          "2": "When ASAHI AZUMANE's Stamina is above 70, increases his Power Spike's power by 17.5% of Power Attack stat",
          "3": "When ASAHI AZUMANE's Stamina is above 70, increases his Power Spike's power by 20% of Power Attack stat",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Charged Spike",
        levels: {
          "1": 'ASAHI AZUMANE consumes 30 additional Stamina to perform a Power Spike with 235% of Power Attack stat as power, receives 1 stacks of "Power Charge"; when casting [CHARGED SPIKE] skill each stack of "Power Charge" increases Power Spike power by 50% of Power Attack stat',
          "2": 'ASAHI AZUMANE consumes 30 additional Stamina to perform a Power Spike with 250% of Power Attack stat as power, receives 1 stacks of "Power Charge"; when casting [CHARGED SPIKE] skill each stack of "Power Charge" increases Power Spike power by 50% of Power Attack stat',
          "3": 'ASAHI AZUMANE consumes 30 additional Stamina to perform a Power Spike with 265% of Power Attack stat as power, receives 1 stacks of "Power Charge"; when casting [CHARGED SPIKE] skill each stack of "Power Charge" increases Power Spike power by 50% of Power Attack stat',
          "4": 'ASAHI AZUMANE consumes 30 additional Stamina to perform a Power Spike with 280% of Power Attack stat as power, receives 1 stacks of "Power Charge"; when casting [CHARGED SPIKE] skill each stack of "Power Charge" increases Power Spike power by 50% of Power Attack stat',
          "5": 'ASAHI AZUMANE consumes 30 additional Stamina to perform a Power Spike with 295% of Power Attack stat as power, receives 1 stacks of "Power Charge"; when casting [CHARGED SPIKE] skill each stack of "Power Charge" increases Power Spike power by 50% of Power Attack stat',
        },
      },
    ],
    bonds: [
      {
        to: "daichi-sawamura-ssr",
        name: "Karasuno Senior Year",
        participants: [
          "daichi-sawamura-ssr",
          "asahi-azumane-ssr",
          "koshi-sugawara-sr",
        ],
        effect:
          "Reduces Stamina consumption for your side's Spike skills; Increases Attack Technique when performing Power Spikes",
      },
      {
        to: "yu-nishinoya-ssr",
        name: "Guardian Deity and Wing Spiker",
        participants: ["yu-nishinoya-ssr", "asahi-azumane-ssr"],
        effect:
          "When YU NISHINOYA or ASAHI AZUMANE casts a skill, increases their Attack Technique and Defense Technique",
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
          "PROFICIENT DEFENSE Stamina consumption reduced to 0; CHARGED SPIKE additional Stamina consumption reduced to 20.",
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
          'CHARGED SPIKE new effect: Each stack of "Power Charge" increases this Power Spike\'s power by an additional 60% of Power Attack stat.',
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

  // RYUNOSUKE TANAKA SSR (WS)
  {
    id: "ryunosuke-tanaka-ssr",
    name: "Ryunosuke Tanaka",
    shortName: "Tanaka",
    team: "Karasuno",
    rarity: "SSR",
    roles: ["WS"],
    typeTags: ["Power Attack"],
    image: "/characters/karasuno/ryunosuke-tanaka-ssr.png",
    stats: {
      basic: {
        quickAttack: 83,
        powerAttack: 121,
        set: 98,
        serve: 104,
        receive: 115,
        block: 109,
        save: 99,
      },
      bonusAttack: { awareness: 0.05, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.0, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "The Ace Arrives",
        levels: {
          "1": "Increases the power of RYUNOSUKE TANAKA's 1st Power Spike in each match by 25% of Power Attack stat",
          "2": "Increases the power of RYUNOSUKE TANAKA's 1st Power Spike in each match by 40% of Power Attack stat",
          "3": "Increases the power of RYUNOSUKE TANAKA's 1st Power Spike in each match by 5% of Power Attack stat",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Tenacious Spirit",
        levels: {
          "1": "RYUNOSUKE TANAKA performs a Receive with 115% of Receive stat as power; for this Receive, TANAKA's Reflex increases by 10%",
          "2": "RYUNOSUKE TANAKA performs a Receive with 130% of Receive stat as power; for this Receive, TANAKA's Reflex increases by 10%",
          "3": "RYUNOSUKE TANAKA performs a Receive with 145% of Receive stat as power; for this Receive, TANAKA's Reflex increases by 10%",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Burning Passion",
        levels: {
          "1": "Increases RYUNOSUKE TANAKA's Power Spike power by 10% of Power Attack stat; his Power Spike reduces opponent's blocking and receiving players' Stamina by 5",
          "2": "Increases RYUNOSUKE TANAKA's Power Spike power by 12% of Power Attack stat; his Power Spike reduces opponent's blocking and receiving players' Stamina by 5",
          "3": "Increases RYUNOSUKE TANAKA's Power Spike power by 14% of Power Attack stat; his Power Spike reduces opponent's blocking and receiving players' Stamina by 5",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Super Inner Cross",
        levels: {
          "1": "RYUNOSUKE TANAKA consumes 5 extra Stamina to perform a Short Diagonal Spike with 250% of Power Attack stat as power; when this is TANAKA's first spike in this set, increases spike power by an additional 30% of TANAKA's Power Attack stat",
          "2": "RYUNOSUKE TANAKA consumes 5 extra Stamina to perform a Short Diagonal Spike with 260% of Power Attack stat as power; when this is TANAKA's first spike in this set, increases spike power by an additional 30% of TANAKA's Power Attack stat",
          "3": "RYUNOSUKE TANAKA consumes 5 extra Stamina to perform a Short Diagonal Spike with 275% of Power Attack stat as power; when this is TANAKA's first spike in this set, increases spike power by an additional 30% of TANAKA's Power Attack stat",
          "4": "RYUNOSUKE TANAKA consumes 5 extra Stamina to perform a Short Diagonal Spike with 290% of Power Attack stat as power; when this is TANAKA's first spike in this set, increases spike power by an additional 30% of TANAKA's Power Attack stat",
          "5": "RYUNOSUKE TANAKA consumes 5 extra Stamina to perform a Short Diagonal Spike with 305% of Power Attack stat as power; when this is TANAKA's first spike in this set, increases spike power by an additional 30% of TANAKA's Power Attack stat",
        },
      },
    ],
    bonds: [
      {
        to: "yu-nishinoya-ssr",
        name: "Kiyoko's Knights",
        participants: ["ryunosuke-tanaka-ssr", "yu-nishinoya-ssr"],
        effect: "When scoring, increases Team Morale",
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
          "THE ACE ARRIVES effect change: applies to the first 2 Power Spikes per match.",
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
          "When scoring with SUPER INNER CROSS, players on your side gain +40% Power Attack stat (1 time per set).",
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

  // KEI TSUKISHIMA SSR (MB)
  {
    id: "kei-tsukishima-ssr",
    name: "Kei Tsukishima",
    shortName: "Tsukishima",
    team: "Karasuno",
    rarity: "SSR",
    roles: ["MB"],
    typeTags: ["Quick Attack", "Block"],
    image: "/characters/karasuno/kei-tsukishima-ssr.png",
    stats: {
      basic: {
        quickAttack: 115,
        powerAttack: 79,
        set: 101,
        serve: 106,
        receive: 103,
        block: 122,
        save: 97,
      },
      bonusAttack: { awareness: 0.0, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.05, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Karasuno's Composure",
        levels: {
          "1": "While KEI TSUKISHIMA is on the court, increases the Strength of your Quick Attack-type players by 10%.",
          "2": "While KEI TSUKISHIMA is on the court, increases the Strength of your Quick Attack-type players by 12.5%.",
          "3": "While KEI TSUKISHIMA is on the court, increases the Strength of your Quick Attack-type players by 15%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Tactical Quick Attack",
        levels: {
          "1": "KEI TSUKISHIMA performs a Quick Spike with 115% of his Quick Attack stat. The next time a teammate casts a Spike skill their Awareness is increased by 5%.",
          "2": "KEI TSUKISHIMA performs a Quick Spike with 130% of his Quick Attack stat. The next time a teammate casts a Spike skill their Awareness is increased by 5%.",
          "3": "KEI TSUKISHIMA performs a Quick Spike with 145% of his Quick Attack stat. The next time a teammate casts a Spike skill their Awareness is increased by 5%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Moonrise",
        levels: {
          "1": "While KEI TSUKISHIMA is present, increases Block power of your side's front row players by 8% of their Block stat",
          "2": "While KEI TSUKISHIMA is present, increases Block power of your side's front row players by 10% of their Block stat",
          "3": "While KEI TSUKISHIMA is present, increases Block power of your side's front row players by 12% of their Block stat",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Kei's Retort",
        levels: {
          "1": 'KEI TSUKISHIMA performs a Block with 195% of his Block stat as power. Applies the "Enrage" debuff to the opposing spiker (reducing their Power/Quick Attack stats by 10%).',
          "2": 'KEI TSUKISHIMA performs a Block with 210% of his Block stat as power. Applies the "Enrage" debuff to the opposing spiker (reducing their Power/Quick Attack stats by 10%).',
          "3": 'KEI TSUKISHIMA performs a Block with 225% of his Block stat as power. Applies the "Enrage" debuff to the opposing spiker (reducing their Power/Quick Attack stats by 10%).',
          "4": 'KEI TSUKISHIMA performs a Block with 240% of his Block stat as power. Applies the "Enrage" debuff to the opposing spiker (reducing their Power/Quick Attack stats by 10%).',
          "5": 'KEI TSUKISHIMA performs a Block with 255% of his Block stat as power. Applies the "Enrage" debuff to the opposing spiker (reducing their Power/Quick Attack stats by 10%).',
        },
      },
    ],
    bonds: [
      {
        to: "tadashi-yamaguchi-sr",
        name: "Shield and Spear",
        participants: ["kei-tsukishima-ssr", "tadashi-yamaguchi-sr"],
        effect:
          "Increases Kei Tsukishima's Block stat and Tadashi Yamaguchi's Serve stat",
      },
    ],
    resonances: [
      {
        level: "I",
        name: "Skill Resonance I",
        effect:
          "When KEI TSUKISHIMA blocks, increases your side's receivers' Receive stat by 3%, stacking up to 3 times.",
      },
      {
        level: "II",
        name: "Skill Resonance II",
        effect: "Increases Basic Stats by 10%.",
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
          "When casting KEI'S RETORT, applies \"Enrage\" to opponent's front row players (reduces Power/Quick Attack stats by 10%).",
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

  // SHOYO HINATA SSR (MB)
  {
    id: "shoyo-hinata-ssr",
    name: "Shoyo Hinata",
    shortName: "Hinata",
    team: "Karasuno",
    rarity: "SSR",
    roles: ["MB"],
    typeTags: ["Quick Attack"],
    image: "/characters/karasuno/shoyo-hinata-ssr.png",
    stats: {
      basic: {
        quickAttack: 121,
        powerAttack: 83,
        set: 98,
        serve: 103,
        receive: 105,
        block: 109,
        save: 110,
      },
      bonusAttack: { awareness: 0.05, strength: 0, attackTechnique: 0 },
      bonusDefense: { reflex: 0, spirit: 0, defenseTechnique: 0 },
    },
    skills: [
      {
        key: "passive",
        name: "The Greatest Decoy",
        levels: {
          "1": "While SHOYO HINATA is present increases Power/Quick Attack stat of players on your side by 7%",
          "2": "While SHOYO HINATA is present increases Power/Quick Attack stat of players on your side by 10%",
          "3": "While SHOYO HINATA is present increases Power/Quick Attack stat of players on your side by 13%",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Quick Duo",
        levels: {
          "1": "When SHOYO HINATA performs a Quick Spike and the setter is a Quick Attack-type player, increases this spike's power by 15% of that setter's Quick Attack stat",
          "2": "When SHOYO HINATA performs a Quick Spike and the setter is a Quick Attack-type player, increases this spike's power by 17% of that setter's Quick Attack stat",
          "3": "When SHOYO HINATA performs a Quick Spike and the setter is a Quick Attack-type player, increases this spike's power by 19% of that setter's Quick Attack stat",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "On the Ball",
        levels: {
          "1": "Increases SHOYO HINATA's Awareness by 6%. When Hinata lands a Critical hit, additionally increases Awareness by 4%, stacking up to 1 times.",
          "2": "Increases SHOYO HINATA's Awareness by 7%. When Hinata lands a Critical hit, additionally increases Awareness by 4%, stacking up to 1 times.",
          "3": "Increases SHOYO HINATA's Awareness by 7%. When Hinata lands a Critical hit, additionally increases Awareness by 5%, stacking up to 1 times.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Soaring Teen",
        levels: {
          "1": "SHOYO HINATA performs a Quick Spike with 235% of his Quick Attack stat as power. If this spike is a Critical hit, increases its power by an additional 20% of his Quick Attack stat.",
          "2": "SHOYO HINATA performs a Quick Spike with 250% of his Quick Attack stat as power. If this spike is a Critical hit, increases its power by an additional 20% of his Quick Attack stat.",
          "3": "SHOYO HINATA performs a Quick Spike with 265% of his Quick Attack stat as power. If this spike is a Critical hit, increases its power by an additional 20% of his Quick Attack stat.",
          "4": "SHOYO HINATA performs a Quick Spike with 280% of his Quick Attack stat as power. If this spike is a Critical hit, increases its power by an additional 20% of his Quick Attack stat.",
          "5": "SHOYO HINATA performs a Quick Spike with 295% of his Quick Attack stat as power. If this spike is a Critical hit, increases its power by an additional 20% of his Quick Attack stat.",
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
        effect: "ON THE BALL modified: maximum stacks increased from 1 to 3.",
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
          "When SHOYO HINATA performs a Critical Quick Spike, reset SOARING TEEN cooldown.",
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

  // =========================================================
  // =========================  SR  ==========================
  // ======== ORDER: S -> OP -> LI -> WS -> MB ===============
  // =========================================================

  // KOSHI SUGAWARA SR (S)
  {
    id: "koshi-sugawara-sr",
    name: "Koshi Sugawara",
    shortName: "Sugawara",
    team: "Karasuno",
    rarity: "SR",
    roles: ["S"],
    typeTags: ["Serve", "Power Attack", "Setter"],
    image: "/characters/karasuno/koshi-sugawara-sr.png",
    stats: {
      basic: {
        quickAttack: 61,
        powerAttack: 89,
        set: 94,
        serve: 99,
        receive: 79,
        block: 88,
        save: 75,
      },
      bonusAttack: { awareness: 0.05, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.09, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Senpai's Prowess",
        levels: {
          "1": "KOSHI SUGAWARA performs an Overhand Serve with 120% of Serve stat as power",
          "2": "KOSHI SUGAWARA performs an Overhand Serve with 135% of Serve stat as power",
          "3": "KOSHI SUGAWARA performs an Overhand Serve with 150% of Serve stat as power",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Offensive Tactics",
        levels: {
          "1": "KOSHI SUGAWARA performs a Set with 115% of Set stat as power; while KOSHI SUGAWARA is present, increases the power of Power Spike skills of your Power-type players by 5% of their Power Attack stat",
          "2": "KOSHI SUGAWARA performs a Set with 130% of Set stat as power; while KOSHI SUGAWARA is present, increases the power of Power Spike skills of your Power-type players by 5% of their Power Attack stat",
          "3": "KOSHI SUGAWARA performs a Set with 145% of Set stat as power; while KOSHI SUGAWARA is present, increases the power of Power Spike skills of your Power-type players by 5% of their Power Attack stat",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Rallying Spirit",
        levels: {
          "1": "While KOSHI SUGAWARA is present, reduces your side's Power Spike skills Stamina consumption by 20%",
          "2": "While KOSHI SUGAWARA is present, reduces your side's Power Spike skills Stamina consumption by 30%",
          "3": "While KOSHI SUGAWARA is present, reduces your side's Power Spike skills Stamina consumption by 40%",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Senpai's Worth",
        levels: {
          "1": "KOSHI SUGAWARA performs a Set that increases your side's next spike power by 100% of his Power/Quick Attack stat; when performing a Power Spike, additionally increases this spike's power by 10% of his Power Attack stat",
          "2": "KOSHI SUGAWARA performs a Set that increases your side's next spike power by 115% of his Power/Quick Attack stat; when performing a Power Spike, additionally increases this spike's power by 10% of his Power Attack stat",
          "3": "KOSHI SUGAWARA performs a Set that increases your side's next spike power by 130% of his Power/Quick Attack stat; when performing a Power Spike, additionally increases this spike's power by 15% of his Power Attack stat",
          "4": "KOSHI SUGAWARA performs a Set that increases your side's next spike power by 145% of his Power/Quick Attack stat; when performing a Power Spike, additionally increases this spike's power by 15% of his Power Attack stat",
          "5": "KOSHI SUGAWARA performs a Set that increases your side's next spike power by 160% of his Power/Quick Attack stat; when performing a Power Spike, additionally increases this spike's power by 15% of his Power Attack stat",
        },
      },
    ],
    bonds: [
      {
        to: "asahi-azumane-ssr",
        name: "Karasuno Senior Year",
        participants: [
          "daichi-sawamura-ssr",
          "asahi-azumane-ssr",
          "koshi-sugawara-sr",
        ],
        effect:
          "Reduces Stamina consumption for your side's Spike skills; Increases Attack Technique when performing Power Spikes",
      },
    ],
    resonances: [
      {
        level: "I",
        name: "Skill Resonance I",
        effect:
          "Increases KOSHI SUGAWARA's Setting power by an additional 6% of Set stat.",
      },
      {
        level: "II",
        name: "Skill Resonance II",
        effect: "Increases Basic Stats by 6%.",
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
          "Can be used 1 time per match. When KOSHI SUGAWARA is present and any player on your side has less than 30 Stamina, restore 20 Stamina to that player.",
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

  // DAICHI SAWAMURA SR (OP)
  {
    id: "daichi-sawamura-sr",
    name: "Daichi Sawamura",
    shortName: "Daichi",
    team: "Karasuno",
    rarity: "SR",
    roles: ["OP"],
    typeTags: ["Receive"],
    image: "/characters/karasuno/daichi-sawamura-sr.png",
    stats: {
      basic: {
        quickAttack: 61,
        powerAttack: 89,
        set: 80,
        serve: 84,
        receive: 99,
        block: 89,
        save: 85,
      },
      bonusAttack: { awareness: 0.0, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.05, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Solid Defense",
        levels: {
          "1": "Increases DAICHI SAWAMURA (Practice)'s Save and Receive stats by 10%",
          "2": "Increases DAICHI SAWAMURA (Practice)'s Save and Receive stats by 12%",
          "3": "Increases DAICHI SAWAMURA (Practice)'s Save and Receive stats by 14%",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Captain's Strength",
        levels: {
          "1": "DAICHI SAWAMURA (Practice) performs a Power Spike with 120% of Power Attack stat as power",
          "2": "DAICHI SAWAMURA (Practice) performs a Power Spike with 135% of Power Attack stat as power",
          "3": "DAICHI SAWAMURA (Practice) performs a Power Spike with 150% of Power Attack stat as power",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Captain's Coverage",
        levels: {
          "1": "DAICHI SAWAMURA (Practice) consumes 1 additional Stamina whenever he touches the ball. When your side scores, that player recovers 3 Stamina. While SAWAMURA is on the court, increases Receive power by 8% of the receiving player's Receive stat.",
          "2": "DAICHI SAWAMURA (Practice) consumes 1 additional Stamina whenever he touches the ball. When your side scores, that player recovers 3 Stamina. While SAWAMURA is on the court, increases Receive power by 10% of the receiving player's Receive stat.",
          "3": "DAICHI SAWAMURA (Practice) consumes 1 additional Stamina whenever he touches the ball. When your side scores, that player recovers 3 Stamina. While SAWAMURA is on the court, increases Receive power by 12% of the receiving player's Receive stat.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Precision Receptor",
        levels: {
          "1": "DAICHI SAWAMURA (Practice) performs a Receive with 215% of Receive stat as power, when your side's player next casts an attack skill, increases the power of his touch by 10% of the player's corresponding stat.",
          "2": "DAICHI SAWAMURA (Practice) performs a Receive with 230% of Receive stat as power, when your side's player next casts an attack skill, increases the power of his touch by 10% of the player's corresponding stat.",
          "3": "DAICHI SAWAMURA (Practice) performs a Receive with 245% of Receive stat as power, when your side's player next casts an attack skill, increases the power of his touch by 10% of the player's corresponding stat.",
          "4": "DAICHI SAWAMURA (Practice) performs a Receive with 260% of Receive stat as power, when your side's player next casts an attack skill, increases the power of his touch by 10% of the player's corresponding stat.",
          "5": "DAICHI SAWAMURA (Practice) performs a Receive with 275% of Receive stat as power, when your side's player next casts an attack skill, increases the power of his touch by 10% of the player's corresponding stat.",
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
          "While DAICHI SAWAMURA (Practice) is present, reduces Stamina consumption by 2 when players on your side cast skills.",
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
          "When casting PRECISION RECEPTION, restores 10 Stamina to the player with lowest Stamina on your side.",
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

  // YU NISHINOYA SR (LI)
  {
    id: "yu-nishinoya-sr",
    name: "Yu Nishinoya",
    shortName: "Nishinoya",
    team: "Karasuno",
    rarity: "SR",
    roles: ["LI"],
    typeTags: ["Receive"],
    image: "/characters/karasuno/yu-nishinoya-sr.png",
    stats: {
      basic: {
        quickAttack: 55,
        powerAttack: 81,
        set: 90,
        serve: 81,
        receive: 100,
        block: 79,
        save: 95,
      },
      bonusAttack: { awareness: 0.0, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.05, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Primal Instinct",
        levels: {
          "1": "When YU NISHINOYA (Practice)'s Save result is not BAD, increases your side's Spike power by 7% of the player's Power/Quick Attack stat",
          "2": "When YU NISHINOYA (Practice)'s Save result is not BAD, increases your side's Spike power by 9.5% of the player's Power/Quick Attack stat",
          "3": "When YU NISHINOYA (Practice)'s Save result is not BAD, increases your side's Spike power by 12% of the player's Power/Quick Attack stat",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Elite Libero",
        levels: {
          "1": "YU NISHINOYA (Practice) performs a Save with 120% of Save stat as power",
          "2": "YU NISHINOYA (Practice) performs a Save with 135% of Save stat as power",
          "3": "YU NISHINOYA (Practice) performs a Save with 150% of Save stat as power",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Team's Lifeblood",
        levels: {
          "1": "YU NISHINOYA (Practice)'s Receive stat increases by 7%; When YU NISHINOYA (Practice)'s Receive result is not BAD, increases your Team Morale by 5",
          "2": "YU NISHINOYA (Practice)'s Receive stat increases by 9.5%; When YU NISHINOYA (Practice)'s Receive result is not BAD, increases your Team Morale by 5",
          "3": "YU NISHINOYA (Practice)'s Receive stat increases by 12%; When YU NISHINOYA (Practice)'s Receive result is not BAD, increases your Team Morale by 5",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Genius Defense",
        levels: {
          "1": "YU NISHINOYA (Practice) performs a Receive with 215% of Receive stat as power; when receiving an opponent's Quick Spike, increases this receive's power by 8% of Receive stat",
          "2": "YU NISHINOYA (Practice) performs a Receive with 230% of Receive stat as power; when receiving an opponent's Quick Spike, increases this receive's power by 8% of Receive stat",
          "3": "YU NISHINOYA (Practice) performs a Receive with 245% of Receive stat as power; when receiving an opponent's Quick Spike, increases this receive's power by 8% of Receive stat",
          "4": "YU NISHINOYA (Practice) performs a Receive with 260% of Receive stat as power; when receiving an opponent's Quick Spike, increases this receive's power by 8% of Receive stat",
          "5": "YU NISHINOYA (Practice) performs a Receive with 275% of Receive stat as power; when receiving an opponent's Quick Spike, increases this receive's power by 8% of Receive stat",
        },
      },
    ],
    bonds: [
      {
        to: "asahi-azumane-sr",
        name: "Guardian Deity and Ace",
        participants: ["yu-nishinoya-sr", "asahi-azumane-sr"],
        effect:
          "When YU NISHINOYA (Practice) or ASAHI AZUMANE (Practice) casts a skill, increases their Attack Technique and Defense Technique",
      },
      {
        to: "ryunosuke-tanaka-sr",
        name: "Karasuno's Sophomore",
        participants: [
          "ryunosuke-tanaka-sr",
          "yu-nishinoya-sr",
          "chikara-ennoshita-sr",
        ],
        effect: "Increases Receive stat of back row players",
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
          "When YU NISHINOYA (Practice) casts a Receive skill, increases your Team Morale by 5.",
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
          "GENIUS DEFENSE new effect: When receiving an opponent's Quick Spike, increases this receive's power by an additional 20% of Receive stat.",
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

  // RYUNOSUKE TANAKA SR (WS)
  {
    id: "ryunosuke-tanaka-sr",
    name: "Ryunosuke Tanaka",
    shortName: "Tanaka",
    team: "Karasuno",
    rarity: "SR",
    roles: ["WS"],
    typeTags: ["Power Attack"],
    image: "/characters/karasuno/ryunosuke-tanaka-sr.png",
    stats: {
      basic: {
        quickAttack: 67,
        powerAttack: 98,
        set: 79,
        serve: 84,
        receive: 94,
        block: 89,
        save: 80,
      },
      bonusAttack: { awareness: 0.05, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.0, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Saving Spirit",
        levels: {
          "1": "Increases RYUNOSUKE TANAKA (Practice)'s Save stat by 7%",
          "2": "Increases RYUNOSUKE TANAKA (Practice)'s Save stat by 9.5%",
          "3": "Increases RYUNOSUKE TANAKA (Practice)'s Save stat by 12%",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Provocative Nature",
        levels: {
          "1": "RYUNOSUKE TANAKA (Practice) performs a Power Spike with 115% of Power Attack stat as power; applies [Taunt] Debuff to opponent's receiving player (lasts 2 net crossings), reducing their receive power by 3% of their Receive stat",
          "2": "RYUNOSUKE TANAKA (Practice) performs a Power Spike with 130% of Power Attack stat as power; applies [Taunt] Debuff to opponent's receiving player (lasts 2 net crossings), reducing their receive power by 4% of their Receive stat",
          "3": "RYUNOSUKE TANAKA (Practice) performs a Power Spike with 145% of Power Attack stat as power; applies [Taunt] Debuff to opponent's receiving player (lasts 2 net crossings), reducing their receive power by 5% of their Receive stat",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Continuous Growth",
        levels: {
          "1": 'RYUNOSUKE TANAKA (Practice) receives 1 stacks of "Progress" after a Receive; each stack increases RYUNOSUKE TANAKA (Practice)\'s Receive stat by 4%, up to 3 stacks',
          "2": 'RYUNOSUKE TANAKA (Practice) receives 1 stacks of "Progress" after a Receive; each stack increases RYUNOSUKE TANAKA (Practice)\'s Receive stat by 5%, up to 3 stacks',
          "3": 'RYUNOSUKE TANAKA (Practice) receives 1 stacks of "Progress" after a Receive; each stack increases RYUNOSUKE TANAKA (Practice)\'s Receive stat by 6%, up to 3 stacks',
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Stalwart Receives",
        levels: {
          "1": "RYUNOSUKE TANAKA (Practice) performs a Receive with 215% of Receive stat as power; when receiving an Opponent's Quick Attack, TANAKA (Practice)'s Reflex increases by 5%",
          "2": "RYUNOSUKE TANAKA (Practice) performs a Receive with 230% of Receive stat as power; when receiving an Opponent's Quick Attack, TANAKA (Practice)'s Reflex increases by 5%",
          "3": "RYUNOSUKE TANAKA (Practice) performs a Receive with 245% of Receive stat as power; when receiving an Opponent's Quick Attack, TANAKA (Practice)'s Reflex increases by 5%",
          "4": "RYUNOSUKE TANAKA (Practice) performs a Receive with 260% of Receive stat as power; when receiving an Opponent's Quick Attack, TANAKA (Practice)'s Reflex increases by 5%",
          "5": "RYUNOSUKE TANAKA (Practice) performs a Receive with 275% of Receive stat as power; when receiving an Opponent's Quick Attack, TANAKA (Practice)'s Reflex increases by 5%",
        },
      },
    ],
    bonds: [
      //{
      //to: "yu-nishinoya-sr",
      //name: "Karasuno's Sophomore",
      // participants: [
      // "ryunosuke-tanaka-sr",
      //"yu-nishinoya-sr",
      //"chikara-ennoshita-r",
      //],
      // effect: "Increases Receive stat of back row players",
      // },
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
          'CONTINUOUS GROWTH effect change: each stack of "Progress" increases both Receive and Power Attack stats.',
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
          "STALWART RECEIVE new effect: increases RYUNOSUKE TANAKA (Practice)'s Spirit by 10% during this Receive.",
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

  // CHIKARA ENNOSHITA SR (WS)
  {
    id: "chikara-ennoshita-sr",
    name: "Chikara Ennoshita",
    shortName: "Ennoshita",
    team: "Karasuno",
    rarity: "SR",
    roles: ["WS"],
    typeTags: ["Receive"],
    image: "/characters/karasuno/chikara-ennoshita-sr.png",
    stats: {
      basic: {
        quickAttack: 61,
        powerAttack: 89,
        set: 79,
        serve: 84,
        receive: 98,
        block: 89,
        save: 85,
      },
      bonusAttack: { awareness: 0.0, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.05, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "active",
        name: "Forceful Spike",
        levels: {
          "1": "CHIKARA ENNOSHITA performs a Power Spike with 120% of his Power Attack stat.",
          "2": "CHIKARA ENNOSHITA performs a Power Spike with 135% of his Power Attack stat.",
          "3": "CHIKARA ENNOSHITA performs a Power Spike with 150% of his Power Attack stat.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Carry the Torch",
        levels: {
          "1": "While CHIKARA ENNOSHITA is present, at the start of each turn, there is a 30% chance to remove 1 debuff from players on your side.",
          "2": "While CHIKARA ENNOSHITA is present, at the start of each turn, there is a 45% chance to remove 1 debuff from players on your side.",
          "3": "While CHIKARA ENNOSHITA is present, at the start of each turn, there is a 60% chance to remove 1 debuff from players on your side.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Rising Leader",
        levels: {
          "1": "While CHIKARA ENNOSHITA is on the court, when your side loses a point, the next spike from your side gains additional power equal to 8% of the spiker's Power/Quick Attack stat. If the spike is a Power Spike skill, its power increases further by 6% of the spiker's Power Attack stat.",
          "2": "While CHIKARA ENNOSHITA is on the court, when your side loses a point, the next spike from your side gains additional power equal to 10% of the spiker's Power/Quick Attack stat. If the spike is a Power Spike skill, its power increases further by 6% of the spiker's Power Attack stat.",
          "3": "While CHIKARA ENNOSHITA is on the court, when your side loses a point, the next spike from your side gains additional power equal to 12% of the spiker's Power/Quick Attack stat. If the spike is a Power Spike skill, its power increases further by 6% of the spiker's Power Attack stat.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "pasive",
        name: "Fighting Spirit",
        levels: {
          "1": "CHIKARA ENNOSHITA performs a Receive with 220% of his Receive stat",
          "2": "CHIKARA ENNOSHITA performs a Receive with 235% of his Receive stat",
          "3": "CHIKARA ENNOSHITA performs a Receive with 250% of his Receive stat",
          "4": "CHIKARA ENNOSHITA performs a Receive with 265% of his Receive stat",
          "5": "CHIKARA ENNOSHITA performs a Receive with 280% of his Receive stat",
        },
      },
    ],
    bonds: [
      {
        to: "daichi-sawamura-ssr",
        name: "Karasuno's Pillar",
        participants: ["daichi-sawamura-ssr", "chikara-ennoshita-sr"],
        effect: "When achieving a PERFECT receive, increases Team Morale",
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
          "RISING LEADER new effect: reduces your side's next Power Spike Stamina consumption by 10% and cooldown by 2 net crossings.",
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Increases Basic Stats by 6%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect: "When casting FIGHTING SPIRIT, trigger RISING LEADER 1 time.",
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

  // ASAHI AZUMANE SR (WS)
  {
    id: "asahi-azumane-sr",
    name: "Asahi Azumane",
    shortName: "Asahi",
    team: "Karasuno",
    rarity: "SR",
    roles: ["WS"],
    typeTags: ["Serve", "Power Attack"],
    image: "/characters/karasuno/asahi-azumane-sr.png",
    stats: {
      basic: {
        quickAttack: 68,
        powerAttack: 98,
        set: 79,
        serve: 94,
        receive: 89,
        block: 84,
        save: 80,
      },
      bonusAttack: { awareness: 0.05, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.09, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Cannon Spike",
        levels: {
          "1": "Increases ASAHI AZUMANE (Practice)'s Power Attack stat by 10%",
          "2": "Increases ASAHI AZUMANE (Practice)'s Power Attack stat by 12%",
          "3": "Increases ASAHI AZUMANE (Practice)'s Power Attack stat by 14%",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Pressure Field",
        levels: {
          "1": "When ASAHI AZUMANE (Practice) scores with Power Spike, reduces opponent's receiving players' Receive stat by 7%, lasting for 4 net crossings",
          "2": "When ASAHI AZUMANE (Practice) scores with Power Spike, reduces opponent's receiving players' Receive stat by 9.5%, lasting for 4 net crossings",
          "3": "When ASAHI AZUMANE (Practice) scores with Power Spike, reduces opponent's receiving players' Receive stat by 12%, lasting for 4 net crossings",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Advantage Pressure",
        levels: {
          "1": "When your side is leading in points, increases ASAHI AZUMANE (Practice)'s Power Spike power by 10% of Power Attack stat",
          "2": "When your side is leading in points, increases ASAHI AZUMANE (Practice)'s Power Spike power by 12.5% of Power Attack stat",
          "3": "When your side is leading in points, increases ASAHI AZUMANE (Practice)'s Power Spike power by 15% of Power Attack stat",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Exhaust Spike",
        levels: {
          "1": "ASAHI AZUMANE (Practice) consumes 3 additional Stamina to perform a Power Spike with 225% of Power Attack stat as power",
          "2": "ASAHI AZUMANE (Practice) consumes 3 additional Stamina to perform a Power Spike with 240% of Power Attack stat as power",
          "3": "ASAHI AZUMANE (Practice) consumes 3 additional Stamina to perform a Power Spike with 255% of Power Attack stat as power",
          "4": "ASAHI AZUMANE (Practice) consumes 3 additional Stamina to perform a Power Spike with 270% of Power Attack stat as power",
          "5": "ASAHI AZUMANE (Practice) consumes 3 additional Stamina to perform a Power Spike with 285% of Power Attack stat as power",
        },
      },
    ],
    bonds: [
      {
        to: "yu-nishinoya-sr",
        name: "Guardian Deity and Ace",
        participants: ["asahi-azumane-sr", "yu-nishinoya-sr"],
        effect:
          "When YU NISHINOYA (Practice) or ASAHI AZUMANE (Practice) casts a skill, increases their Attack Technique and Defense Technique",
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
          "When scoring with EXHAUST SPIKE, reduces EXHAUST SPIKE cooldown by 4 net crossings.",
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
          "EXHAUST SPIKE new effect: When the opponent's receiver has a debuff, reduces their Receive power by 10% of his Receive stat.",
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

  // KEI TSUKISHIMA SR (MB)
  {
    id: "kei-tsukishima-sr",
    name: "Kei Tsukishima",
    shortName: "Tsukishima",
    team: "Karasuno",
    rarity: "SR",
    roles: ["MB"],
    typeTags: ["Quick Attack", "Block"],
    image: "/characters/karasuno/kei-tsukishima-sr.png",
    stats: {
      basic: {
        quickAttack: 94,
        powerAttack: 64,
        set: 82,
        serve: 86,
        receive: 83,
        block: 99,
        save: 78,
      },
      bonusAttack: { awareness: 0.05, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.05, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "active",
        name: "Elevated Strike",
        levels: {
          "1": "KEI TSUKISHIMA (Practice) performs a Quick Spike with 110% of Quick Attack stat as power",
          "2": "KEI TSUKISHIMA (Practice) performs a Quick Spike with 120% of Quick Attack stat as power",
          "3": "KEI TSUKISHIMA (Practice) performs a Quick Spike with 140% of Quick Attack stat as power",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Block Tactician",
        levels: {
          "1": "Increases KEI TSUKISHIMA (Practice)'s Block stat by 6%; when he performs a Block, increases his Reflex by 5%",
          "2": "Increases KEI TSUKISHIMA (Practice)'s Block stat by 7.5%; when he performs a Block, increases his Reflex by 5%",
          "3": "Increases KEI TSUKISHIMA (Practice)'s Block stat by 9%; when he performs a Block, increases his Reflex by 5%",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Quick Attack Strategy",
        levels: {
          "1": "Increases KEI TSUKISHIMA (Practice)'s Quick Attack stat by 6%; when he performs a Quick Spike, increases his Awareness by 5%",
          "2": "Increases KEI TSUKISHIMA (Practice)'s Quick Attack stat by 7.5%; when he performs a Quick Spike, increases his Awareness by 5%",
          "3": "Increases KEI TSUKISHIMA (Practice)'s Quick Attack stat by 9%; when he performs a Quick Spike, increases his Awareness by 5%",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Delayed Block",
        levels: {
          "1": "KEI TSUKISHIMA (Practice) performs a Block with 180% of Block stat as power",
          "2": "KEI TSUKISHIMA (Practice) performs a Block with 195% of Block stat as power",
          "3": "KEI TSUKISHIMA (Practice) performs a Block with 210% of Block stat as power",
          "4": "KEI TSUKISHIMA (Practice) performs a Block with 225% of Block stat as power",
          "5": "KEI TSUKISHIMA (Practice) performs a Block with 240% of Block stat as power",
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
          "While KEI TSUKISHIMA (Practice) is present, increases Block stat of your side's front row players by 5%.",
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
          "DELAYED BLOCK new effect (1 time per match): when the opponent performs a Power Spike, this Block will result in at least NORMAL. and applies the [Enrage] Debuff to the spiker, reducing their Power/Quick Attack stats by 10%",
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

  // SHOYO HINATA SR (MB)
  {
    id: "shoyo-hinata-sr",
    name: "Shoyo Hinata",
    shortName: "Hinata",
    team: "Karasuno",
    rarity: "SR",
    roles: ["MB"],
    typeTags: ["Quick Attack"],
    image: "/characters/karasuno/shoyo-hinata-sr.png",
    stats: {
      basic: {
        quickAttack: 98,
        powerAttack: 67,
        set: 79,
        serve: 83,
        receive: 84,
        block: 88,
        save: 89,
      },
      bonusAttack: { awareness: 0.05, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.0, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Relentless Runner",
        levels: {
          "1": "Increases SHOYO HINATA (Practice)'s Quick Attack stat by 10%",
          "2": "Increases SHOYO HINATA (Practice)'s Quick Attack stat by 12%",
          "3": "Increases SHOYO HINATA (Practice)'s Quick Attack stat by 14%",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Undying Spirit",
        levels: {
          "1": 'When SHOYO HINATA (Practice) scores, players on your side receive "Spike Intuition" 1 (lasts for 8 net crossings), increasing Spike power by 6% of the player\'s Power/Quick Attack stat',
          "2": 'When SHOYO HINATA (Practice) scores, players on your side receive "Spike Intuition" 1 (lasts for 8 net crossings), increasing Spike power by 7.5% of the player\'s Power/Quick Attack stat',
          "3": 'When SHOYO HINATA (Practice) scores, players on your side receive "Spike Intuition" 1 (lasts for 8 net crossings), increasing Spike power by 9% of the player\'s Power/Quick Attack stat',
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Above the Block",
        levels: {
          "1": "When SHOYO HINATA (Practice) performs a Quick Spike, reduces opponent's blocking power by 7% of the blocking player's Block stat.",
          "2": "When SHOYO HINATA (Practice) performs a Quick Spike, reduces opponent's blocking power by 9.5% of the blocking player's Block stat.",
          "3": "When SHOYO HINATA (Practice) performs a Quick Spike, reduces opponent's blocking power by 12% of the blocking player's Block stat.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Super Quick Attack",
        levels: {
          "1": "SHOYO HINATA (Practice) performs a Quick Spike with 215% of Quick Attack stat as power; for this Quick Spike, HINATA (Practice)'s Strength increases by 10%",
          "2": "SHOYO HINATA (Practice) performs a Quick Spike with 230% of Quick Attack stat as power; for this Quick Spike, HINATA (Practice)'s Strength increases by 10%",
          "3": "SHOYO HINATA (Practice) performs a Quick Spike with 245% of Quick Attack stat as power; for this Quick Spike, HINATA (Practice)'s Strength increases by 10%",
          "4": "SHOYO HINATA (Practice) performs a Quick Spike with 260% of Quick Attack stat as power; for this Quick Spike, HINATA (Practice)'s Strength increases by 10%",
          "5": "SHOYO HINATA (Practice) performs a Quick Spike with 275% of Quick Attack stat as power; for this Quick Spike, HINATA (Practice)'s Strength increases by 10%",
        },
      },
    ],
    bonds: [
      {
        to: "tobio-kageyama-ssr",
        name: "Teammates on the Court",
        participants: ["tobio-kageyama-ssr", "shoyo-hinata-sr"],
        effect:
          "When casting Quick Spike skills increases this player's Awareness",
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
          "When SHOYO HINATA (Practice) scores with a Quick Spike, increases your Team Morale by 15.",
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
          "SUPER QUICK ATTACK new effect: Increases SHOYO HINATA (Practice)'s Strength by an additional 20% during this Quick Spike.",
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

  // TADASHI YAMAGUCHI SR (MB)
  {
    id: "tadashi-yamaguchi-sr",
    name: "Tadashi Yamaguchi",
    shortName: "Yamaguchi",
    team: "Karasuno",
    rarity: "SR",
    roles: ["MB"],
    typeTags: ["Serve"],
    image: "/characters/karasuno/tadashi-yamaguchi-sr.png",
    stats: {
      basic: {
        quickAttack: 88,
        powerAttack: 60,
        set: 93,
        serve: 99,
        receive: 80,
        block: 88,
        save: 75,
      },
      bonusAttack: { awareness: 0.0, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.05, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Serve Stability",
        levels: {
          "1": "When TADASHI YAMAGUCHI's Serve results in a PERFECT, increases its power by 20% of his Serve stat. When it results in a BAD, reduces its power by 20% of his Serve stat.",
          "2": "When TADASHI YAMAGUCHI's Serve results in a PERFECT, increases its power by 25% of his Serve stat. When it results in a BAD, reduces its power by 25% of his Serve stat.",
          "3": "When TADASHI YAMAGUCHI's Serve results in a PERFECT, increases its power by 30 his Serve stat. When it results in a BAD, reduces its power by 30% of his Serve stat.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Spotlight Serve",
        levels: {
          "1": "Increases the power of TADASHI YAMAGUCHI's 1st Serve in each match by 15% of his Serve stat. Also increases his Awareness by 15% for that serve.",
          "2": "Increases the power of TADASHI YAMAGUCHI's 1st Serve in each match by 30% of his Serve stat. Also increases his Awareness by 15% for that serve.",
          "3": "Increases the power of TADASHI YAMAGUCHI's 1st Serve in each match by 45% of his Serve stat. Also increases his Awareness by 15% for that serve.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Point by Point",
        levels: {
          "1": "Increases TADASHI YAMAGUCHI's Serve stat by 10%",
          "2": "Increases TADASHI YAMAGUCHI's Serve stat by 12%",
          "3": "Increases TADASHI YAMAGUCHI's Serve stat by 14%",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "pasive",
        name: "Defiant Float",
        levels: {
          "1": "TADASHI YAMAGUCHI performs a Jump Float Serve with 210% of his Serve stat as power. If your side is behind, this serve's power is additionally increased by 25% of his Serve stat.",
          "2": "TADASHI YAMAGUCHI performs a Jump Float Serve with 225% of his Serve stat as power. If your side is behind, this serve's power is additionally increased by 25% of his Serve stat.",
          "3": "TADASHI YAMAGUCHI performs a Jump Float Serve with 240% of his Serve stat as power. If your side is behind, this serve's power is additionally increased by 25% of his Serve stat.",
          "4": "TADASHI YAMAGUCHI performs a Jump Float Serve with 255% of his Serve stat as power. If your side is behind, this serve's power is additionally increased by 25% of his Serve stat.",
          "5": "TADASHI YAMAGUCHI performs a Jump Float Serve with 270% of his Serve stat as power. If your side is behind, this serve's power is additionally increased by 25% of his Serve stat.",
        },
      },
    ],
    bonds: [
      {
        to: "kei-tsukishima-ssr",
        name: "Shield and Spear",
        participants: ["kei-tsukishima-ssr", "tadashi-yamaguchi-sr"],
        effect:
          "Increases Kei Tsukishima's Block stat and Tadashi Yamaguchi's Serve stat",
      },
    ],
    resonances: [
      {
        level: "I",
        name: "Skill Resonance I",
        effect: " Increases Basic Stats by 6%.",
      },
      {
        level: "II",
        name: "Skill Resonance II",
        effect:
          "SPOTLIGHT SERVE effect change: applies to the first 2 Serves of the match.",
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
          "DEFIANT FLOAT new effect: when scoring with DEFIANT FLOAT, resets its cooldown and receives 1 stacks of \"Supporting Hand\" Each stack increases your side's front row players' Awareness by 10% during Quick Attacks and Reflex by 10% when blocking, up to 2 stats.",
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
