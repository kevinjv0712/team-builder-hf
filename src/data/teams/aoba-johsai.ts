import type { Player } from "../types";

export const aobaJohsaiPlayers: Player[] = [
  // ===== TORU OIKAWA (UR - placeholder) =====
  {
    id: "toru-oikawa-ur",
    name: "Toru Oikawa",
    shortName: "Oikawa",
    team: "Aoba Johsai",
    rarity: "UR",
    roles: ["S"],
    typeTags: [],
    image: "/characters/aoba-johsai/toru-oikawa-ur.png",
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
      bonusAttack: {
        awareness: 0,
        strength: 0,
        attackTechnique: 0,
      },
      bonusDefense: {
        reflex: 0,
        spirit: 0,
        defenseTechnique: 0,
      },
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

  // ===== TORU OIKAWA (SSR) =====
  {
    id: "toru-oikawa-ssr",
    name: "Toru Oikawa",
    shortName: "Oikawa",
    team: "Aoba Johsai",
    rarity: "SSR",
    roles: ["S"],
    typeTags: ["Serve", "Setter", "Awareness"],
    image: "/characters/aoba-johsai/toru-oikawa-ssr.png",
    stats: {
      basic: {
        quickAttack: 75,
        powerAttack: 110,
        set: 116,
        serve: 122,
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
        name: "Court Vision",
        levels: {
          "1": "Increases TORU OIKAWA (Practice)'s Set stat by 10%. When your players cast a Spike skill, they gain 1 stacks of \"Attack Tempo\". Each stack increases your players' Awareness by 1%, up to 10 stacks.",
          "2": "Increases TORU OIKAWA (Practice)'s Set stat by 10%. When your players cast a Spike skill, they gain 1 stacks of \"Attack Tempo\". Each stack increases your players' Awareness by 1%, up to 10 stacks.",
          "3": "Increases TORU OIKAWA (Practice)'s Set stat by 10%. When your players cast a Spike skill, they gain 1 stacks of \"Attack Tempo\". Each stack increases your players' Awareness by 1%, up to 10 stacks.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Game Changer",
        levels: {
          "1": "While TORU OIKAWA (Practice) is on the court, at the start of each turn, if your side is behind, increases all basic stats of your players by 6%, lasting for 8 net crossings.",
          "2": "While TORU OIKAWA (Practice) is on the court, at the start of each turn, if your side is behind, increases all basic stats of your players by 6%, lasting for 8 net crossings.",
          "3": "While TORU OIKAWA (Practice) is on the court, at the start of each turn, if your side is behind, increases all basic stats of your players by 6%, lasting for 8 net crossings.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Control Tower",
        levels: {
          "1": 'While TORU OIKAWA (Practice) is on the court, increases your players\' Awareness by 6%. Each stack of "Attack Tempo" provides an additional 1% Awareness.',
          "2": 'While TORU OIKAWA (Practice) is on the court, increases your players\' Awareness by 6%. Each stack of "Attack Tempo" provides an additional 1% Awareness.',
          "3": 'While TORU OIKAWA (Practice) is on the court, increases your players\' Awareness by 6%. Each stack of "Attack Tempo" provides an additional 1% Awareness.',
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Double-Edged Serve",
        levels: {
          "1": "TORU OIKAWA (Practice) performs a Power Jump Serve with 240% of his Serve stat as power; for this Serve, his Awareness increases by 15%. This Serve has a 5% chance to fail.",
          "2": "TORU OIKAWA (Practice) performs a Power Jump Serve with 240% of his Serve stat as power; for this Serve, his Awareness increases by 15%. This Serve has a 5% chance to fail.",
          "3": "TORU OIKAWA (Practice) performs a Power Jump Serve with 240% of his Serve stat as power; for this Serve, his Awareness increases by 15%. This Serve has a 5% chance to fail.",
          "4": "TORU OIKAWA (Practice) performs a Power Jump Serve with 240% of his Serve stat as power; for this Serve, his Awareness increases by 15%. This Serve has a 5% chance to fail.",
          "5": "TORU OIKAWA (Practice) performs a Power Jump Serve with 240% of his Serve stat as power; for this Serve, his Awareness increases by 15%. This Serve has a 5% chance to fail.",
        },
      },
    ],
    bonds: [
      {
        to: "hajime-iwaizumi-sr",
        name: "Team Chemistry",
        participants: ["toru-oikawa-ssr", "hajime-iwaizumi-sr"],
        effect:
          "Increases TORU OIKAWA (Practice) and HAJIME IWAIZUMI (Practice)'s Awareness",
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
          "DOUBLE-EDGED SERVE new effect: OIKAWA's serves never fail; when TORU OIKAWA (Practice) serves, increases his Awareness by 15%.",
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
          'When casting DOUBLE-EDGED SERVE, receive 2 stacks of "Attack Tempo"; when scoring with DOUBLE-EDGED SERVE, its cooldown resets.',
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

  // ===== HAJIME IWAIZUMI (SSR) =====
  {
    id: "hajime-iwaizumi-ssr",
    name: "Hajime Iwaizumi",
    shortName: "Iwaizumi",
    team: "Aoba Johsai",
    rarity: "SSR",
    roles: ["WS"],
    typeTags: ["Power Attack", "Receive", "Strength"],
    image: "/characters/aoba-johsai/hajime-iwaizumi-ssr.png",
    stats: {
      basic: {
        quickAttack: 83,
        powerAttack: 121,
        set: 98,
        serve: 116,
        receive: 115,
        block: 109,
        save: 99,
      },
      bonusAttack: { awareness: 0.05, strength: 0.1, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.0, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Ace's Strength",
        levels: {
          "1": "Increases HAJIME IWAIZUMI's Awareness by 5% and Strength by 10%",
          "2": "Increases HAJIME IWAIZUMI's Awareness by 5% and Strength by 10%",
          "3": "Increases HAJIME IWAIZUMI's Awareness by 5% and Strength by 10%",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Focused Defense",
        levels: {
          "1": "HAJIME IWAIZUMI performs a Receive with 120% of Receive stat as power",
          "2": "HAJIME IWAIZUMI performs a Receive with 120% of Receive stat as power",
          "3": "HAJIME IWAIZUMI performs a Receive with 120% of Receive stat as power",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Vice-Captain's Rally",
        levels: {
          "1": "While HAJIME IWAIZUMI is present, increases Strength of players on your side by 6%",
          "2": "While HAJIME IWAIZUMI is present, increases Strength of players on your side by 6%",
          "3": "While HAJIME IWAIZUMI is present, increases Strength of players on your side by 6%",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Head-to-Head",
        levels: {
          "1": "HAJIME IWAIZUMI performs a Power Spike with 240% of Power Attack stat as power; when this spike achieves a Critical result, increases its power by 15% of Power Attack stat",
          "2": "HAJIME IWAIZUMI performs a Power Spike with 240% of Power Attack stat as power; when this spike achieves a Critical result, increases its power by 15% of Power Attack stat",
          "3": "HAJIME IWAIZUMI performs a Power Spike with 240% of Power Attack stat as power; when this spike achieves a Critical result, increases its power by 15% of Power Attack stat",
          "4": "HAJIME IWAIZUMI performs a Power Spike with 240% of Power Attack stat as power; when this spike achieves a Critical result, increases its power by 15% of Power Attack stat",
          "5": "HAJIME IWAIZUMI performs a Power Spike with 240% of Power Attack stat as power; when this spike achieves a Critical result, increases its power by 15% of Power Attack stat",
        },
      },
    ],
    bonds: [
      {
        to: "kentaro-kyotani-ssr",
        name: "The Wolf Pack",
        participants: ["hajime-iwaizumi-ssr", "kentaro-kyotani-ssr"],
        effect:
          "Increases HAJIME IWAIZUMI and KENTARO KYOTANI's Power Attack stat",
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
          "While HAJIME IWAIZUMI is present, increases Strength of players on your side by 15%.",
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
          "HEAD-TO-HEAD new effect: reduces opponent's blocking power by 20% of Block stat.",
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

  // ===== HAJIME IWAIZUMI (SR) =====
  {
    id: "hajime-iwaizumi-sr",
    name: "Hajime Iwaizumi",
    shortName: "Iwaizumi",
    team: "Aoba Johsai",
    rarity: "SR",
    roles: ["WS"],
    typeTags: ["Power Attack", "Receive"],
    image: "/characters/aoba-johsai/hajime-iwaizumi-sr.png",
    stats: {
      basic: {
        quickAttack: 68,
        powerAttack: 89,
        set: 80,
        serve: 85,
        receive: 94,
        block: 84,
        save: 81,
      },
      bonusAttack: { awareness: 0.05, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.0, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Burning Spike",
        levels: {
          "1": "Increases HAJIME IWAIZUMI (Practice)'s Power Attack stat by 10%",
          "2": "Increases HAJIME IWAIZUMI (Practice)'s Power Attack stat by 10%",
          "3": "Increases HAJIME IWAIZUMI (Practice)'s Power Attack stat by 10%",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Calm Receive",
        levels: {
          "1": "HAJIME IWAIZUMI (Practice) performs a Receive with 115% of Receive stat as power; for this Receive, IWAIZUMI (Practice)'s Spirit increases by 8%",
          "2": "HAJIME IWAIZUMI (Practice) performs a Receive with 115% of Receive stat as power; for this Receive, IWAIZUMI (Practice)'s Spirit increases by 8%",
          "3": "HAJIME IWAIZUMI (Practice) performs a Receive with 115% of Receive stat as power; for this Receive, IWAIZUMI (Practice)'s Spirit increases by 8%",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Rising Spirit",
        levels: {
          "1": "Increases HAJIME IWAIZUMI (Practice)'s Awareness and Reflex by 5%",
          "2": "Increases HAJIME IWAIZUMI (Practice)'s Awareness and Reflex by 5%",
          "3": "Increases HAJIME IWAIZUMI (Practice)'s Awareness and Reflex by 5%",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Unstoppable Spike",
        levels: {
          "1": "HAJIME IWAIZUMI (Practice) performs a Power Spike with 220% of Power Attack stat as power",
          "2": "HAJIME IWAIZUMI (Practice) performs a Power Spike with 220% of Power Attack stat as power",
          "3": "HAJIME IWAIZUMI (Practice) performs a Power Spike with 220% of Power Attack stat as power",
          "4": "HAJIME IWAIZUMI (Practice) performs a Power Spike with 220% of Power Attack stat as power",
          "5": "HAJIME IWAIZUMI (Practice) performs a Power Spike with 220% of Power Attack stat as power",
        },
      },
    ],
    bonds: [
      {
        to: "toru-oikawa-ssr",
        name: "Team Chemistry",
        participants: ["toru-oikawa-ssr", "hajime-iwaizumi-sr"],
        effect:
          "Increases TORU OIKAWA (Practice) and HAJIME IWAIZUMI (Practice)'s Awareness",
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
          "UNSTOPPABLE SPIKE new effect: increases HAJIME IWAIZUMI (Practice)'s Awareness by 15% during this Power Spike.",
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
          "UNSTOPPABLE SPIKE new effect: increases HAJIME IWAIZUMI (Practice)'s Strength by 15% during this Power Spike.",
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

  // ===== KENTARO KYOTANI (SSR) =====
  {
    id: "kentaro-kyotani-ssr",
    name: "Kentaro Kyotani",
    shortName: "Kyotani",
    team: "Aoba Johsai",
    rarity: "SSR",
    roles: ["OP"],
    typeTags: ["Power Attack", "Serve", "Strength"],
    image: "/characters/aoba-johsai/kentaro-kyotani-ssr.png",
    stats: {
      basic: {
        quickAttack: 83,
        powerAttack: 121,
        set: 97,
        serve: 116,
        receive: 108,
        block: 103,
        save: 97,
      },
      bonusAttack: { awareness: 0.08, strength: 0.18, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.0, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Fierce Attack",
        levels: {
          "1": "Increases KENTARO KYOTANI's Awareness by 8% and Power Attack stat by 5%",
          "2": "Increases KENTARO KYOTANI's Awareness by 8% and Power Attack stat by 5%",
          "3": "Increases KENTARO KYOTANI's Awareness by 8% and Power Attack stat by 5%",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Mad Dog Serve",
        levels: {
          "1": "KENTARO KYOTANI performs a Serve with 130% of his Serve stat. For this Serve, his Awareness increases by 15%, with a fixed 10% chance to fail.",
          "2": "KENTARO KYOTANI performs a Serve with 130% of his Serve stat. For this Serve, his Awareness increases by 15%, with a fixed 10% chance to fail.",
          "3": "KENTARO KYOTANI performs a Serve with 130% of his Serve stat. For this Serve, his Awareness increases by 15%, with a fixed 10% chance to fail.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Strength Burst",
        levels: {
          "1": "Increases KENTARO KYOTANI's Strength by 18%",
          "2": "Increases KENTARO KYOTANI's Strength by 18%",
          "3": "Increases KENTARO KYOTANI's Strength by 18%",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Mad Dog's Fang",
        levels: {
          "1": "KENTARO KYOTANI performs a Power Spike with 210% of his Power Attack stat, reducing the Stamina of the opponent's blocking and receiving players by 10",
          "2": "KENTARO KYOTANI performs a Power Spike with 210% of his Power Attack stat, reducing the Stamina of the opponent's blocking and receiving players by 10",
          "3": "KENTARO KYOTANI performs a Power Spike with 210% of his Power Attack stat, reducing the Stamina of the opponent's blocking and receiving players by 10",
          "4": "KENTARO KYOTANI performs a Power Spike with 210% of his Power Attack stat, reducing the Stamina of the opponent's blocking and receiving players by 10",
          "5": "KENTARO KYOTANI performs a Power Spike with 210% of his Power Attack stat, reducing the Stamina of the opponent's blocking and receiving players by 10",
        },
      },
    ],
    bonds: [
      {
        to: "hajime-iwaizumi-ssr",
        name: "The Wolf Pack",
        participants: ["hajime-iwaizumi-ssr", "kentaro-kyotani-ssr"],
        effect:
          "Increases HAJIME IWAIZUMI and KENTARO KYOTANI's Power Attack stat",
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
          "When KENTARO KYOTANI performs a Critical Power Spike, reduces opponent's blocking and receiving players' Stamina by 5.",
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
          "MAD DOG'S FANG new effect: When opponent's receiver has less than 50% Stamina, their Receive stat is reduced by 18%.",
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

  // ===== KENTARO KYOTANI (SR) =====
  {
    id: "kentaro-kyotani-sr",
    name: "Kentaro Kyotani",
    shortName: "Kyotani",
    team: "Aoba Johsai",
    rarity: "SR",
    roles: ["OP"],
    typeTags: ["Power Attack", "Serve", "Strength"],
    image: "/characters/aoba-johsai/kentaro-kyotani-sr.png",
    stats: {
      basic: {
        quickAttack: 68,
        powerAttack: 98,
        set: 79,
        serve: 95,
        receive: 84,
        block: 84,
        save: 79,
      },
      bonusAttack: { awareness: 0.0, strength: 0.15, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.0, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Predator Serve",
        levels: {
          "1": "KENTARO KYOTANI (Practice) performs a Jump Serve with 120% of Serve stat as power",
          "2": "KENTARO KYOTANI (Practice) performs a Jump Serve with 120% of Serve stat as power",
          "3": "KENTARO KYOTANI (Practice) performs a Jump Serve with 120% of Serve stat as power",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Explosive Strength",
        levels: {
          "1": "When KENTARO KYOTANI (Practice) performs a Power Spike, increases his Strength by 15% for this Spike",
          "2": "When KENTARO KYOTANI (Practice) performs a Power Spike, increases his Strength by 15% for this Spike",
          "3": "When KENTARO KYOTANI (Practice) performs a Power Spike, increases his Strength by 15% for this Spike",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Revving Up",
        levels: {
          "1": 'Increases KENTARO KYOTANI (Practice)\'s Power Attack stat by 8%; when he performs a Power Spike, receives 1 stacks of "Heat Up"; each stack increases Power Attack stat by 1%, up to 4 stacks',
          "2": 'Increases KENTARO KYOTANI (Practice)\'s Power Attack stat by 8%; when he performs a Power Spike, receives 1 stacks of "Heat Up"; each stack increases Power Attack stat by 1%, up to 4 stacks',
          "3": 'Increases KENTARO KYOTANI (Practice)\'s Power Attack stat by 8%; when he performs a Power Spike, receives 1 stacks of "Heat Up"; each stack increases Power Attack stat by 1%, up to 4 stacks',
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Rampaging Offense",
        levels: {
          "1": "KENTARO KYOTANI (Practice) performs a Power Spike with 220% of Power Attack stat as power",
          "2": "KENTARO KYOTANI (Practice) performs a Power Spike with 220% of Power Attack stat as power",
          "3": "KENTARO KYOTANI (Practice) performs a Power Spike with 220% of Power Attack stat as power",
          "4": "KENTARO KYOTANI (Practice) performs a Power Spike with 220% of Power Attack stat as power",
          "5": "KENTARO KYOTANI (Practice) performs a Power Spike with 220% of Power Attack stat as power",
        },
      },
    ],
    bonds: [
      {
        to: "hajime-iwaizumi-ssr",
        name: "The Wolf Pack",
        participants: ["hajime-iwaizumi-ssr", "kentaro-kyotani-sr"],
        effect:
          "Increases HAJIME IWAIZUMI and KENTARO KYOTANI's Power Attack stat",
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
          "RAMPAGING OFFENSE new effect: increases KENTARO KYOTANI (Practice)'s Awareness by 15% during this Power Spike.",
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
          'REVVING UP condition modified: "When KENTARO KYOTANI (Practice) performs a Power Spike" changed to "When KENTARO KYOTANI (Practice) touches the ball".',
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

  // ===== ISSEI MATSUKAWA (SR) =====
  {
    id: "issei-matsukawa-sr",
    name: "Issei Matsukawa",
    shortName: "Matsukawa",
    team: "Aoba Johsai",
    rarity: "SR",
    roles: ["MB"],
    typeTags: ["Block", "Quick Attack", "Reflex"],
    image: "/characters/aoba-johsai/issei-matsukawa-sr.png",
    stats: {
      basic: {
        quickAttack: 93,
        powerAttack: 84,
        set: 81,
        serve: 84,
        receive: 98,
        block: 95,
        save: 79,
      },
      bonusAttack: { awareness: 0.05, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.05, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Perfect Touch",
        levels: {
          "1": "When ISSEI MATSUKAWA blocks an opponent's Quick Spike, increases blocking power by 11% of Block stat",
          "2": "When ISSEI MATSUKAWA blocks an opponent's Quick Spike, increases blocking power by 11% of Block stat",
          "3": "When ISSEI MATSUKAWA blocks an opponent's Quick Spike, increases blocking power by 11% of Block stat",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Overwhelming Spike",
        levels: {
          "1": "ISSEI MATSUKAWA performs a Quick Spike with 120% of Quick Attack stat as power",
          "2": "ISSEI MATSUKAWA performs a Quick Spike with 120% of Quick Attack stat as power",
          "3": "ISSEI MATSUKAWA performs a Quick Spike with 120% of Quick Attack stat as power",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Crushing Block",
        levels: {
          "1": "Increases ISSEI MATSUKAWA's Block stat by 8%; when MATSUKAWA performs a PERFECT Block, increases your side's next spiker's Awareness by 4%",
          "2": "Increases ISSEI MATSUKAWA's Block stat by 8%; when MATSUKAWA performs a PERFECT Block, increases your side's next spiker's Awareness by 4%",
          "3": "Increases ISSEI MATSUKAWA's Block stat by 8%; when MATSUKAWA performs a PERFECT Block, increases your side's next spiker's Awareness by 4%",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Unbreakable Block",
        levels: {
          "1": "ISSEI MATSUKAWA performs a Block with 180% of Block stat as power",
          "2": "ISSEI MATSUKAWA performs a Block with 180% of Block stat as power",
          "3": "ISSEI MATSUKAWA performs a Block with 180% of Block stat as power",
          "4": "ISSEI MATSUKAWA performs a Block with 180% of Block stat as power",
          "5": "ISSEI MATSUKAWA performs a Block with 180% of Block stat as power",
        },
      },
    ],
    bonds: [
      {
        to: "takahiro-hanamaki-sr",
        name: "Seijoh's Senior Year Pillars",
        participants: ["issei-matsukawa-sr", "takahiro-hanamaki-sr"],
        effect:
          "Increases ISSEI MATSUKAWA's Block stat and TAKAHIRO HANAMAKI's Receive stat",
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
          "PERFECT TOUCH condition modified: triggers on Block against Quick Spikes more reliably (easier condition).",
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
          "UNBREAKABLE BLOCK new effect: Increases ISSEI MATSUKAWA's Reflex by 10% during this Block.",
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

  // ===== TAKAHIRO HANAMAKI (SR) =====
  {
    id: "takahiro-hanamaki-sr",
    name: "Takahiro Hanamaki",
    shortName: "Hanamaki",
    team: "Aoba Johsai",
    rarity: "SR",
    roles: ["WS"],
    typeTags: ["Power Attack", "Receive"],
    image: "/characters/aoba-johsai/takahiro-hanamaki-sr.png",
    stats: {
      basic: {
        quickAttack: 61,
        powerAttack: 84,
        set: 84,
        serve: 84,
        receive: 94,
        block: 89,
        save: 84,
      },
      bonusAttack: { awareness: 0.08, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.05, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Reliable Wing Spiker",
        levels: {
          "1": "Increases TAKAHIRO HANAMAKI's Awareness by 8%; When his Power Spike is Critical, reduces blocking players' Block stat by 5%",
          "2": "Increases TAKAHIRO HANAMAKI's Awareness by 8%; When his Power Spike is Critical, reduces blocking players' Block stat by 5%",
          "3": "Increases TAKAHIRO HANAMAKI's Awareness by 8%; When his Power Spike is Critical, reduces blocking players' Block stat by 5%",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Precise Spike",
        levels: {
          "1": 'TAKAHIRO HANAMAKI performs a Power Spike with 115% of Power Attack stat as power; receives 1 stacks of "Attack Tempo", each stack increases the Awareness of players on your side by 1%, up to 10 stacks',
          "2": 'TAKAHIRO HANAMAKI performs a Power Spike with 115% of Power Attack stat as power; receives 1 stacks of "Attack Tempo", each stack increases the Awareness of players on your side by 1%, up to 10 stacks',
          "3": 'TAKAHIRO HANAMAKI performs a Power Spike with 115% of Power Attack stat as power; receives 1 stacks of "Attack Tempo", each stack increases the Awareness of players on your side by 1%, up to 10 stacks',
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Perfect Defense",
        levels: {
          "1": "Increases TAKAHIRO HANAMAKI's Receive stat by 8%; when he receives an opponent's Quick Spike, increases receive power by 4% of Receive stat",
          "2": "Increases TAKAHIRO HANAMAKI's Receive stat by 8%; when he receives an opponent's Quick Spike, increases receive power by 4% of Receive stat",
          "3": "Increases TAKAHIRO HANAMAKI's Receive stat by 8%; when he receives an opponent's Quick Spike, increases receive power by 4% of Receive stat",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Perfect Read",
        levels: {
          "1": "TAKAHIRO HANAMAKI performs a Receive with 220% of Receive stat as power",
          "2": "TAKAHIRO HANAMAKI performs a Receive with 220% of Receive stat as power",
          "3": "TAKAHIRO HANAMAKI performs a Receive with 220% of Receive stat as power",
          "4": "TAKAHIRO HANAMAKI performs a Receive with 220% of Receive stat as power",
          "5": "TAKAHIRO HANAMAKI performs a Receive with 220% of Receive stat as power",
        },
      },
    ],
    bonds: [
      {
        to: "issei-matsukawa-sr",
        name: "Seijoh's Senior Year Pillars",
        participants: ["issei-matsukawa-sr", "takahiro-hanamaki-sr"],
        effect:
          "Increases ISSEI MATSUKAWA's Block stat and TAKAHIRO HANAMAKI's Receive stat",
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
          'At the start of each match, your side receives 1 stacks of "Attack Tempo" Buff.',
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
          "When casting PERFECT READ, increases Reflex of players on your side by 10%, lasting for 4 net crossings.",
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

  // ===== SHINJI WATARI (SR) =====
  {
    id: "shinji-watari-sr",
    name: "Shinji Watari",
    shortName: "Watari",
    team: "Aoba Johsai",
    rarity: "SR",
    roles: ["LI"],
    typeTags: ["Receive", "Save", "Enhance Team"],
    image: "/characters/aoba-johsai/shinji-watari-sr.png",
    stats: {
      basic: {
        quickAttack: 56,
        powerAttack: 81,
        set: 89,
        serve: 81,
        receive: 98,
        block: 79,
        save: 94,
      },
      bonusAttack: { awareness: 0.0, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.05, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Complete Defense",
        levels: {
          "1": "Increases SHINJI WATARI's Save and Receive stats by 8%",
          "2": "Increases SHINJI WATARI's Save and Receive stats by 8%",
          "3": "Increases SHINJI WATARI's Save and Receive stats by 8%",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Skilled Save",
        levels: {
          "1": "SHINJI WATARI performs a Save with 120% of Save stat as power",
          "2": "SHINJI WATARI performs a Save with 120% of Save stat as power",
          "3": "SHINJI WATARI performs a Save with 120% of Save stat as power",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Seamless Reception",
        levels: {
          "1": "When receiving an opponent's Quick Spike, increases SHINJI WATARI's receive power by 20% of Receive stat",
          "2": "When receiving an opponent's Quick Spike, increases SHINJI WATARI's receive power by 20% of Receive stat",
          "3": "When receiving an opponent's Quick Spike, increases SHINJI WATARI's receive power by 20% of Receive stat",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Consistent Reception",
        levels: {
          "1": "SHINJI WATARI performs a Receive with 215% of Receive stat as power; when this Receive achieves a PERFECT result, increases your side's players' Strength by 10% when performing Power Spikes for 1 turns",
          "2": "SHINJI WATARI performs a Receive with 215% of Receive stat as power; when this Receive achieves a PERFECT result, increases your side's players' Strength by 10% when performing Power Spikes for 1 turns",
          "3": "SHINJI WATARI performs a Receive with 215% of Receive stat as power; when this Receive achieves a PERFECT result, increases your side's players' Strength by 10% when performing Power Spikes for 1 turns",
          "4": "SHINJI WATARI performs a Receive with 215% of Receive stat as power; when this Receive achieves a PERFECT result, increases your side's players' Strength by 10% when performing Power Spikes for 1 turns",
          "5": "SHINJI WATARI performs a Receive with 215% of Receive stat as power; when this Receive achieves a PERFECT result, increases your side's players' Strength by 10% when performing Power Spikes for 1 turns",
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
          "While SHINJI WATARI is present, increase Receive power of your side's back row players by 5% of their Receive stat.",
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
          "When casting Consistent Reception, increases your side's players' Strength by an additional 10% when performing Power Spikes for 1 turns.",
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

  // ===== SHIGERU YAHABA (SR) =====
  {
    id: "shigeru-yahaba-sr",
    name: "Shigeru Yahaba",
    shortName: "Yahaba",
    team: "Aoba Johsai",
    rarity: "SR",
    roles: ["S"],
    typeTags: ["Serve", "Setter", "Enhance Team"],
    image: "/characters/aoba-johsai/shigeru-yahaba-sr.png",
    stats: {
      basic: {
        quickAttack: 61,
        powerAttack: 88,
        set: 93,
        serve: 98,
        receive: 80,
        block: 84,
        save: 75,
      },
      bonusAttack: { awareness: 0.05, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.0, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "All-out Set",
        levels: {
          "1": "SHIGERU YAHABA performs a Set with 120% of Set stat as power",
          "2": "SHIGERU YAHABA performs a Set with 120% of Set stat as power",
          "3": "SHIGERU YAHABA performs a Set with 120% of Set stat as power",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Developing Setter",
        levels: {
          "1": "Increases SHIGERU YAHABA's Serve and Set stats by 8%",
          "2": "Increases SHIGERU YAHABA's Serve and Set stats by 8%",
          "3": "Increases SHIGERU YAHABA's Serve and Set stats by 8%",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Pride Defense",
        levels: {
          "1": "Increases SHIGERU YAHABA's Set stat by 4%; while YAHABA is present, increases Awareness and Reflex of players on your side by 8%",
          "2": "Increases SHIGERU YAHABA's Set stat by 4%; while YAHABA is present, increases Awareness and Reflex of players on your side by 8%",
          "3": "Increases SHIGERU YAHABA's Set stat by 4%; while YAHABA is present, increases Awareness and Reflex of players on your side by 8%",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Will to Score",
        levels: {
          "1": "SHIGERU YAHABA performs a Jump Serve with 220% of Serve stat as power",
          "2": "SHIGERU YAHABA performs a Jump Serve with 220% of Serve stat as power",
          "3": "SHIGERU YAHABA performs a Jump Serve with 220% of Serve stat as power",
          "4": "SHIGERU YAHABA performs a Jump Serve with 220% of Serve stat as power",
          "5": "SHIGERU YAHABA performs a Jump Serve with 220% of Serve stat as power",
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
          "Increases SHIGERU YAHABA's 1st Serve power by 10% of his Serve stat.",
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
          "While SHIGERU YAHABA is present, increases the power of your side's first 2 Power Spikes by 8% of the spiker's Power Attack stat and increases the spiker's Awareness.",
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

  // ===== YUTARO KINDAICHI (SR) =====
  {
    id: "yutaro-kindaichi-sr",
    name: "Yutaro Kindaichi",
    shortName: "Kindaichi",
    team: "Aoba Johsai",
    rarity: "SR",
    roles: ["MB"],
    typeTags: ["Quick Attack", "Block", "Strength"],
    image: "/characters/aoba-johsai/yutaro-kindaichi-sr.png",
    stats: {
      basic: {
        quickAttack: 99,
        powerAttack: 68,
        set: 84,
        serve: 84,
        receive: 88,
        block: 84,
        save: 88,
      },
      bonusAttack: { awareness: 0.05, strength: 0.08, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.0, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Overhead Spike",
        levels: {
          "1": "When YUTARO KINDAICHI performs a Quick Spike, reduces the opponent blocker's Block by 10% of their Block stat",
          "2": "When YUTARO KINDAICHI performs a Quick Spike, reduces the opponent blocker's Block by 10% of their Block stat",
          "3": "When YUTARO KINDAICHI performs a Quick Spike, reduces the opponent blocker's Block by 10% of their Block stat",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Decisive Hit",
        levels: {
          "1": "Increases YUTARO KINDAICHI's Awareness by 8% and Strength by 8%",
          "2": "Increases YUTARO KINDAICHI's Awareness by 8% and Strength by 8%",
          "3": "Increases YUTARO KINDAICHI's Awareness by 8% and Strength by 8%",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Elevated Block",
        levels: {
          "1": "YUTARO KINDAICHI performs a Block with 105% of his Block stat",
          "2": "YUTARO KINDAICHI performs a Block with 105% of his Block stat",
          "3": "YUTARO KINDAICHI performs a Block with 105% of his Block stat",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Power C-Quick",
        levels: {
          "1": "YUTARO KINDAICHI performs a Quick Spike with 220% of Quick Attack stat as power",
          "2": "YUTARO KINDAICHI performs a Quick Spike with 220% of Quick Attack stat as power",
          "3": "YUTARO KINDAICHI performs a Quick Spike with 220% of Quick Attack stat as power",
          "4": "YUTARO KINDAICHI performs a Quick Spike with 220% of Quick Attack stat as power",
          "5": "YUTARO KINDAICHI performs a Quick Spike with 220% of Quick Attack stat as power",
        },
      },
    ],
    bonds: [
      {
        to: "akira-kunimi-sr",
        name: "Blunt and Composed",
        participants: ["yutaro-kindaichi-sr", "akira-kunimi-sr"],
        effect:
          "Increases YUTARO KINDAICHI's Quick Attack stat and AKIRA KUNIMI's Power Attack stat",
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
          "After casting POWER C-QUICK, increases the player's Strength by 10%; when your side's player next casts a Spike skill, it gains additional power.",
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
          "When YUTARO KINDAICHI performs a Critical Quick Spike, reduces opponent's blocking power by 12% of the blocking player's Block stat.",
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

  // ===== AKIRA KUNIMI (SR) =====
  {
    id: "akira-kunimi-sr",
    name: "Akira Kunimi",
    shortName: "Kunimi",
    team: "Aoba Johsai",
    rarity: "SR",
    roles: ["OP"],
    typeTags: ["Power Attack", "Receive", "Stamina"],
    image: "/characters/aoba-johsai/akira-kunimi-sr.png",
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
        name: "Efficient Spike",
        levels: {
          "1": "Increases AKIRA KUNIMI's Power Attack stat by 10%",
          "2": "Increases AKIRA KUNIMI's Power Attack stat by 10%",
          "3": "Increases AKIRA KUNIMI's Power Attack stat by 10%",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Effortless Reception",
        levels: {
          "1": "AKIRA KUNIMI performs a Receive with 120% of Receive stat as power",
          "2": "AKIRA KUNIMI performs a Receive with 120% of Receive stat as power",
          "3": "AKIRA KUNIMI performs a Receive with 120% of Receive stat as power",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Power Saving Mode",
        levels: {
          "1": "Reduces AKIRA KUNIMI's Stamina consumption by 15%",
          "2": "Reduces AKIRA KUNIMI's Stamina consumption by 15%",
          "3": "Reduces AKIRA KUNIMI's Stamina consumption by 15%",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Focus Mode",
        levels: {
          "1": "AKIRA KUNIMI performs a Power Spike with 220% of Power Attack stat as power",
          "2": "AKIRA KUNIMI performs a Power Spike with 220% of Power Attack stat as power",
          "3": "AKIRA KUNIMI performs a Power Spike with 220% of Power Attack stat as power",
          "4": "AKIRA KUNIMI performs a Power Spike with 220% of Power Attack stat as power",
          "5": "AKIRA KUNIMI performs a Power Spike with 220% of Power Attack stat as power",
        },
      },
    ],
    bonds: [
      {
        to: "yutaro-kindaichi-sr",
        name: "Blunt and Composed",
        participants: ["yutaro-kindaichi-sr", "akira-kunimi-sr"],
        effect:
          "Increases YUTARO KINDAICHI's Quick Attack stat and AKIRA KUNIMI's Power Attack stat",
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
          "When the turn count exceeds 3, increases AKIRA KUNIMI's Awareness by 12% when spiking.",
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
          "FOCUS MODE effect modified: AKIRA KUNIMI performs a tip attack, and its power increases by an additional 8% of his Power Attack stat; also increases his Strength.",
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
