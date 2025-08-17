// src/data/players.ts
import type { Player } from "../types";

export const players: Player[] = [
  /////////////////////////////////////
  ///////////// INARIZAKI /////////////
  /////////////////////////////////////
  // ATSUMU MIYA
  {
    id: "atsumu-miya-ur",
    name: "Atsumu Miya",
    shortName: "Atsumu",
    team: "Inarizaki",
    rarity: "UR",
    roles: ["S"],
    typeTags: ["Quick Attack", "Serve", "Setter"],
    image: "/public/characters/atsumu-miya-ur.png",
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
      bonusAttack: {
        awareness: 0.05,
        strength: 0.0,
        attackTechnique: 0.0,
      },
      bonusDefense: {
        reflex: 0.0,
        spirit: 0.0,
        defenseTechnique: 0.0,
      },
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

    memory: {
      name: "",
      effect: "",
    },
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
    image: "/public/characters/atsumu-miya-ur.png",
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
      bonusAttack: {
        awareness: 0.05,
        strength: 0.0,
        attackTechnique: 0.0,
      },
      bonusDefense: {
        reflex: 0.0,
        spirit: 0.0,
        defenseTechnique: 0.0,
      },
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

    memory: {
      name: "",
      effect: "",
    },
  },
  // SHINSUKE KITA
  {
    id: "shinsuke-kita-ssr",
    name: "Shinsuke Kita",
    shortName: "Kita",
    team: "Inarizaki",
    rarity: "SSR",
    roles: ["WS"],
    typeTags: ["Receive", "Serve"],
    image: "/characters/image.png",
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
      bonusAttack: {
        awareness: 0.05,
        strength: 0.0,
        attackTechnique: 0.0,
      },
      bonusDefense: {
        reflex: 0.0,
        spirit: 0.0,
        defenseTechnique: 0.0,
      },
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

    memory: {
      name: "",
      effect: "",
    },
  },

  // DAICHI SAWAMURA SSR

  {
    id: "daichi-sawamura-ssr",
    name: "Daichi Sawamura",
    shortName: "Daichi",
    team: "Karasuno",
    rarity: "SSR",
    roles: ["OP"],
    typeTags: ["Receive"],
    image: "/public/characters/daichi-sawamura-ssr.png",
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
      bonusAttack: {
        awareness: 0.0,
        strength: 0.0,
        attackTechnique: 0.0,
      },
      bonusDefense: {
        reflex: 0.05,
        spirit: 0.0,
        defenseTechnique: 0.0,
      },
    },
    skills: [
      {
        key: "passive",
        name: "Steady reception",
        levels: {
          "1": "When DAICHI SAWAMURA performs a Receive, restores 3 Stamina to the teammate with the lowest Stamina",
          "2": "When DAICHI SAWAMURA performs a Receive, restores 3 Stamina to the teammate with the lowest Stamina",
          "3": "When DAICHI SAWAMURA performs a Receive, restores 3 Stamina to the teammate with the lowest Stamina",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Sledgehammer Spike",
        levels: {
          "1": "DAICHI SAWAMURA performs a Power SPike with 120% of his Power Attack stat",
          "2": "DAICHI SAWAMURA performs a Power SPike with 120% of his Power Attack stat",
          "3": "DAICHI SAWAMURA performs a Power SPike with 120% of his Power Attack stat",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Team Backbone",
        levels: {
          "1": "While DAICHI SAWAMURA is present, increases receive power of your side's back row players by 10% of their Receive stat",
          "2": "While DAICHI SAWAMURA is present, increases receive power of your side's back row players by 10% of their Receive stat",
          "3": "While DAICHI SAWAMURA is present, increases receive power of your side's back row players by 10% of their Receive stat",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Reliable Defense",
        levels: {
          "1": "DAICHI SAWAMURA performs a Receive with 220% of his Receive stat. If your side's next Spike is a Power Spike, increases that spike's power by 15% of the spiker's Power Attack stat.",
          "2": "DAICHI SAWAMURA performs a Receive with 220% of his Receive stat. If your side's next Spike is a Power Spike, increases that spike's power by 15% of the spiker's Power Attack stat.",
          "3": "DAICHI SAWAMURA performs a Receive with 220% of his Receive stat. If your side's next Spike is a Power Spike, increases that spike's power by 15% of the spiker's Power Attack stat.",
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

    memory: {
      name: "",
      effect: "",
    },
  },
  // DAICHI SAWAMURA SR
  {
    id: "daichi-sawamura-sr",
    name: "Daichi Sawamura",
    shortName: "Daichi",
    team: "Karasuno",
    rarity: "SR",
    roles: ["OP"],
    typeTags: ["Receive"],
    image: "/public/characters/daichi-sawamura-sr.png",
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
      bonusAttack: {
        awareness: 0.0,
        strength: 0.0,
        attackTechnique: 0.0,
      },
      bonusDefense: {
        reflex: 0.05,
        spirit: 0.0,
        defenseTechnique: 0.0,
      },
    },
    skills: [
      {
        key: "passive",
        name: "Solid Defense",
        levels: {
          "1": "Increases DAICHI SAWAMURA (Practice)'s Save and Receive stats by 10%",
          "2": "Increases DAICHI SAWAMURA (Practice)'s Save and Receive stats by 10%",
          "3": "Increases DAICHI SAWAMURA (Practice)'s Save and Receive stats by 10%",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Captain's Strength",
        levels: {
          "1": "DAICHI SAWAMURA (Practice) performs a Power Spike with 120% of Power Attack stat as power",
          "2": "DAICHI SAWAMURA (Practice) performs a Power Spike with 120% of Power Attack stat as power",
          "3": "DAICHI SAWAMURA (Practice) performs a Power Spike with 120% of Power Attack stat as power",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Captain's Coverage",
        levels: {
          "1": "DAICHI SAWAMURA (Practice) consumes 1 additional Stamina whenever he touches the ball. When your side scores, that player recovers 3 Stamina. While SAWAMURA is on the court, increases Receive power by 8% of the receiving player's Receive stat.",
          "2": "DAICHI SAWAMURA (Practice) consumes 1 additional Stamina whenever he touches the ball. When your side scores, that player recovers 3 Stamina. While SAWAMURA is on the court, increases Receive power by 8% of the receiving player's Receive stat.",
          "3": "DAICHI SAWAMURA (Practice) consumes 1 additional Stamina whenever he touches the ball. When your side scores, that player recovers 3 Stamina. While SAWAMURA is on the court, increases Receive power by 8% of the receiving player's Receive stat.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Precision Receptor",
        levels: {
          "1": "DAICHI SAWAMURA (Practice) performs a Receive with 215% of Receive stat as power, when your side's player next casts an attack skill, increases the power of his touch by 10% of the player's corresponding stat.",
          "2": "DAICHI SAWAMURA (Practice) performs a Receive with 215% of Receive stat as power, when your side's player next casts an attack skill, increases the power of his touch by 10% of the player's corresponding stat.",
          "3": "DAICHI SAWAMURA (Practice) performs a Receive with 215% of Receive stat as power, when your side's player next casts an attack skill, increases the power of his touch by 10% of the player's corresponding stat.",
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

    memory: {
      name: "",
      effect: "",
    },
  },

  // SHOYO HINATA SSR
  {
    id: "shoyo-hinata-ssr",
    name: "Shoyo Hinata",
    shortName: "Hinata",
    team: "Karasuno",
    rarity: "SSR",
    roles: ["MB"],
    typeTags: ["Quick Attack"],
    image: "/public/characters/shoyo-hinata-ssr.png",
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
      bonusAttack: {
        awareness: 0.05,
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
        name: "The Greatest Decoy",
        levels: {
          "1": "While SHOYO HINATA is present increases Power/Quick Attack stat of players on your side by 7%",
          "2": "While SHOYO HINATA is present increases Power/Quick Attack stat of players on your side by 7%",
          "3": "While SHOYO HINATA is present increases Power/Quick Attack stat of players on your side by 7%",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Quick Duo",
        levels: {
          "1": "When SHOYO HINATA performs a Quick SPike and the setter is a Quick Attack-type player, increases this spike's power by 15% of that setter's Quick Atteck stat",
          "2": "When SHOYO HINATA performs a Quick SPike and the setter is a Quick Attack-type player, increases this spike's power by 15% of that setter's Quick Atteck stat",
          "3": "When SHOYO HINATA performs a Quick SPike and the setter is a Quick Attack-type player, increases this spike's power by 15% of that setter's Quick Atteck stat",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "On the Ball",
        levels: {
          "1": "Increases SHOYO HINATA's Awareness by 6%. When Hinata lands a Critical hit, additionally increases Awareness by 4%, stacking up to 1 times.",
          "2": "Increases SHOYO HINATA's Awareness by 6%. When Hinata lands a Critical hit, additionally increases Awareness by 4%, stacking up to 1 times.",
          "3": "Increases SHOYO HINATA's Awareness by 6%. When Hinata lands a Critical hit, additionally increases Awareness by 4%, stacking up to 1 times.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Soaring Teen",
        levels: {
          "1": "SHOYO HINATA performs a Quick Spike with 235% of his Quick Attack stat as power. If this spike is a >Critical hit, increases its power by an aditional 20% of his Quick Attack stat.",
          "2": "SHOYO HINATA performs a Quick Spike with 235% of his Quick Attack stat as power. If this spike is a >Critical hit, increases its power by an aditional 20% of his Quick Attack stat.",
          "3": "SHOYO HINATA performs a Quick Spike with 235% of his Quick Attack stat as power. If this spike is a >Critical hit, increases its power by an aditional 20% of his Quick Attack stat.",
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

    memory: {
      name: "",
      effect: "",
    },
  },
  // SHOYO HINATA SR
  {
    id: "shoyo-hinata-sr",
    name: "Shoyo Hinata",
    shortName: "Hinata",
    team: "Karasuno",
    rarity: "SR",
    roles: ["MB"],
    typeTags: ["Quick Attack"],
    image: "/public/characters/shoyo-hinata-sr.png",
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
      bonusAttack: {
        awareness: 0.05,
        strength: 0.0,
        attackTechnique: 0.0,
      },
      bonusDefense: {
        reflex: 0.0,
        spirit: 0.0,
        defenseTechnique: 0.0,
      },
    },
    skills: [
      {
        key: "passive",
        name: "Relentless Runner",
        levels: {
          "1": "Increases SHOYO HINATA (Practice)'s Quick Attack stat by 10%",
          "2": "Increases SHOYO HINATA (Practice)'s Quick Attack stat by 10%",
          "3": "Increases SHOYO HINATA (Practice)'s Quick Attack stat by 10%",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Undying Spirit",
        levels: {
          "1": 'When SHOYO HINATA (Practice) scores, players on your side receive "Spike Intuition" 1(lasts for 8  net crossing), increasing Spike power by 6% of the player\'s Power/Quick Attack stat',
          "2": 'When SHOYO HINATA (Practice) scores, players on your side receive "Spike Intuition" 1(lasts for 8  net crossing), increasing Spike power by 6% of the player\'s Power/Quick Attack stat',
          "3": 'When SHOYO HINATA (Practice) scores, players on your side receive "Spike Intuition" 1(lasts for 8  net crossing), increasing Spike power by 6% of the player\'s Power/Quick Attack stat',
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Above the Block",
        levels: {
          "1": "When SHOYO HINATA (Practice) performs a Quick Spike, reduces opponet's blocking power by 7% of the blcoking player's Block stat.",
          "2": "When SHOYO HINATA (Practice) performs a Quick Spike, reduces opponet's blocking power by 7% of the blcoking player's Block stat.",
          "3": "When SHOYO HINATA (Practice) performs a Quick Spike, reduces opponet's blocking power by 7% of the blcoking player's Block stat.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Super Quick Attack",
        levels: {
          "1": "SHOYO HINATA (Practice) performs a Quick Spike with 215% of Quick Attack stat as power, for this Spike, HINATA (Practice)'s Strength increases by 10%",
          "2": "SHOYO HINATA (Practice) performs a Quick Spike with 215% of Quick Attack stat as power, for this Spike, HINATA (Practice)'s Strength increases by 10%",
          "3": "SHOYO HINATA (Practice) performs a Quick Spike with 215% of Quick Attack stat as power, for this Spike, HINATA (Practice)'s Strength increases by 10%",
          "4": undefined,
          "5": undefined,
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

    memory: {
      name: "",
      effect: "",
    },
  },

  // TOBIO KAGEYAMA UR
  {
    id: "tobio-kageyama-ur",
    name: "Tobio Kageyama",
    shortName: "Kageyama",
    team: "Karasuno",
    rarity: "UR",
    roles: ["S"],
    typeTags: [
      "Serve",
      "Power Attack",
      "Setter",
      "Quick Attack",
      "Block",
      "Receive",
    ],
    image: "/public/characters/tobio-kageyama-ur.png",
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
      bonusAttack: {
        awareness: 0.99,
        strength: 0.99,
        attackTechnique: 0.99,
      },
      bonusDefense: {
        reflex: 0.99,
        spirit: 0.99,
        defenseTechnique: 0.99,
      },
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

    memory: {
      name: "",
      effect: "",
    },
  },
  // TOBIO KAGEYAMA SSR
  {
    id: "tobio-kageyama-ssr",
    name: "Tobio Kageyama",
    shortName: "Kageyama",
    team: "Karasuno",
    rarity: "SSR",
    roles: ["S"],
    typeTags: ["Serve", "Setter", "Quick Attack"],
    image: "/public/characters/tobio-kageyama-ssr.png",
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
      bonusAttack: {
        awareness: 0.05,
        strength: 0.0,
        attackTechnique: 0.0,
      },
      bonusDefense: {
        reflex: 0.0,
        spirit: 0.0,
        defenseTechnique: 0.0,
      },
    },
    skills: [
      {
        key: "passive",
        name: "Tricky Serve",
        levels: {
          "1": "TOBIO KAGEYAMA (Practice) performs a Jump Serve with 120% of Serve stat as power",
          "2": "TOBIO KAGEYAMA (Practice) performs a Jump Serve with 120% of Serve stat as power",
          "3": "TOBIO KAGEYAMA (Practice) performs a Jump Serve with 120% of Serve stat as power",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Sharp Observer",
        levels: {
          "1": "TOBIO KAGEYAMA (Practice) performs a Set with 115% of Set stat as power; for this play, your side's spikers' Strength increases by 10%",
          "2": "TOBIO KAGEYAMA (Practice) performs a Set with 115% of Set stat as power; for this play, your side's spikers' Strength increases by 10%",
          "3": "TOBIO KAGEYAMA (Practice) performs a Set with 115% of Set stat as power; for this play, your side's spikers' Strength increases by 10%",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "The King Awakens",
        levels: {
          "1": "While TOBIO KAGEYAMA (Practice) is present, increases your side's player's Awareness by 10% and increases Spike power by 6% of the player's Power/Quick Attack stat.",
          "2": "While TOBIO KAGEYAMA (Practice) is present, increases your side's player's Awareness by 10% and increases Spike power by 6% of the player's Power/Quick Attack stat.",
          "3": "While TOBIO KAGEYAMA (Practice) is present, increases your side's player's Awareness by 10% and increases Spike power by 6% of the player's Power/Quick Attack stat.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Surprise Dump",
        levels: {
          "1": "TOBIO KAGEYAMA (Practice) performs an ublockable Setter Dump with 225% of Set stat as power",
          "2": "TOBIO KAGEYAMA (Practice) performs an ublockable Setter Dump with 225% of Set stat as power",
          "3": "TOBIO KAGEYAMA (Practice) performs an ublockable Setter Dump with 225% of Set stat as power",
          "4": undefined,
          "5": undefined,
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
          "SURPRISE DUMP modified: during this Setter Dump, increases TOBIO KAGEYAMA (Practice)'s Awareness and Strength by 10%.",
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

    memory: {
      name: "",
      effect: "",
    },
  },

  // KOSHI SUGAWARA
  {
    id: "koshi-sugawara-sr",
    name: "Koshi Sugawara",
    shortName: "Sugawara",
    team: "Karasuno",
    rarity: "SR",
    roles: ["S"],
    typeTags: [
      "Serve",
      "Power Attack",
      "Setter",
      "Quick Attack",
      "Block",
      "Receive",
    ],
    image: "/public/characters/koshi-sugawara-sr.png",
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
      bonusAttack: {
        awareness: 0.05,
        strength: 0.0,
        attackTechnique: 0.0,
      },
      bonusDefense: {
        reflex: 0.09,
        spirit: 0.0,
        defenseTechnique: 0.0,
      },
    },
    skills: [
      {
        key: "passive",
        name: "Senpai's Prowess",
        levels: {
          "1": "KOSHI SUGAWARA performs an Overhand Serve with 120% of Serve stat as power",
          "2": "KOSHI SUGAWARA performs an Overhand Serve with 120% of Serve stat as power",
          "3": "KOSHI SUGAWARA performs an Overhand Serve with 120% of Serve stat as power",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Offensive Tactics",
        levels: {
          "1": "KOSHI SUGAWARA performs a Set with 115% of Set stat as power; while KOSHI SUGAWARA is present, increases the power of Power Spike skills of your Power-type players by 5% of their Power Attack stat",
          "2": "KOSHI SUGAWARA performs a Set with 115% of Set stat as power; while KOSHI SUGAWARA is present, increases the power of Power Spike skills of your Power-type players by 5% of their Power Attack stat",
          "3": "KOSHI SUGAWARA performs a Set with 115% of Set stat as power; while KOSHI SUGAWARA is present, increases the power of Power Spike skills of your Power-type players by 5% of their Power Attack stat",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Rallying Spirit",
        levels: {
          "1": "While KOSHI SUGAWARA is present, reduces your side's Power Spike skills Stamina consumption by 20%",
          "2": "While KOSHI SUGAWARA is present, reduces your side's Power Spike skills Stamina consumption by 20%",
          "3": "While KOSHI SUGAWARA is present, reduces your side's Power Spike skills Stamina consumption by 20%",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Senpai's Worth",
        levels: {
          "1": "KOSHI SUGAWARA performs a Set that increases your side's next spike power by 100% of his Power/Quick Attack stat; when performing a Power Spike, additionally increases this spike's power by 10% of his Power Attack stat",
          "2": "KOSHI SUGAWARA performs a Set that increases your side's next spike power by 100% of his Power/Quick Attack stat; when performing a Power Spike, additionally increases this spike's power by 10% of his Power Attack stat",
          "3": "KOSHI SUGAWARA performs a Set that increases your side's next spike power by 100% of his Power/Quick Attack stat; when performing a Power Spike, additionally increases this spike's power by 10% of his Power Attack stat",
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

    memory: {
      name: "",
      effect: "",
    },
  },

  // ASAHI AZUMANE
  {
    id: "asahi-azumane-ssr",
    name: "Asahi Azumane",
    shortName: "Asahi",
    team: "Karasuno",
    rarity: "SSR",
    roles: ["WS"],
    typeTags: [
      "Serve",
      "Power Attack",
      "Setter",
      "Quick Attack",
      "Block",
      "Receive",
    ],
    image: "/public/characters/asahi-azumane-ssr.png",
    stats: {
      basic: {
        quickAttack: 82,
        powerAttack: 121,
        set: 98,
        serve: 116,
        receive: 110,
        block: 104,
        save: 98,
      },
      bonusAttack: {
        awareness: 0.05,
        strength: 0.0,
        attackTechnique: 0.0,
      },
      bonusDefense: {
        reflex: 0.0,
        spirit: 0.0,
        defenseTechnique: 0.0,
      },
    },
    skills: [
      {
        key: "passive",
        name: "Proficient Defense",
        levels: {
          "1": "ASAHI AZUMANE performs a Receive with 120% of Receive stat as power",
          "2": "ASAHI AZUMANE performs a Receive with 120% of Receive stat as power",
          "3": "ASAHI AZUMANE performs a Receive with 120% of Receive stat as power",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Bullet Serve",
        levels: {
          "1": "ASAHI AZUMANE performs a Jump Serve with 120% of Serve stat as power",
          "2": "ASAHI AZUMANE performs a Jump Serve with 120% of Serve stat as power",
          "3": "ASAHI AZUMANE performs a Jump Serve with 120% of Serve stat as power",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Ace's Aura",
        levels: {
          "1": "When ASAHI AZUMANE's Stamina is above 70, increases his Power Spike's power by 15% of Power Attack stat",
          "2": "When ASAHI AZUMANE's Stamina is above 70, increases his Power Spike's power by 15% of Power Attack stat",
          "3": "When ASAHI AZUMANE's Stamina is above 70, increases his Power Spike's power by 15% of Power Attack stat",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Charged Spike",
        levels: {
          "1": 'ASAHI AZUMANE consumes 30 additional Stamina to perform a Power Spike with 235% of Power Attack stat as power, receives 1 stacks of "Power Charge"; when casting [CHARGED SPIKE] skill each stack of "Power Charge" increases Power Spike power by 50% of Power Attack stat',
          "2": 'ASAHI AZUMANE consumes 30 additional Stamina to perform a Power Spike with 235% of Power Attack stat as power, receives 1 stacks of "Power Charge"; when casting [CHARGED SPIKE] skill each stack of "Power Charge" increases Power Spike power by 50% of Power Attack stat',
          "3": 'ASAHI AZUMANE consumes 30 additional Stamina to perform a Power Spike with 235% of Power Attack stat as power, receives 1 stacks of "Power Charge"; when casting [CHARGED SPIKE] skill each stack of "Power Charge" increases Power Spike power by 50% of Power Attack stat',
          "4": undefined,
          "5": undefined,
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

    memory: {
      name: "",
      effect: "",
    },
  },
  // ASAHI AZUMANE
  {
    id: "asahi-azumane-sr",
    name: "Asahi Azumane",
    shortName: "Asahi",
    team: "Karasuno",
    rarity: "SR",
    roles: ["WS"],
    typeTags: [
      "Serve",
      "Power Attack",
      "Setter",
      "Quick Attack",
      "Block",
      "Receive",
    ],
    image: "/public/characters/asahi-azumane-sr.png",
    stats: {
      basic: {
        quickAttack: 68,
        powerAttack: 98,
        set: 79,
        serve: 99,
        receive: 89,
        block: 84,
        save: 80,
      },
      bonusAttack: {
        awareness: 0.05,
        strength: 0.0,
        attackTechnique: 0.0,
      },
      bonusDefense: {
        reflex: 0.09,
        spirit: 0.0,
        defenseTechnique: 0.0,
      },
    },
    skills: [
      {
        key: "passive",
        name: "Cannon Spike",
        levels: {
          "1": "Increases ASAHI AZUMANE (Practice)'s Power Attack stat by 10%",
          "2": "Increases ASAHI AZUMANE (Practice)'s Power Attack stat by 10%",
          "3": "Increases ASAHI AZUMANE (Practice)'s Power Attack stat by 10%",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Pressure Field",
        levels: {
          "1": "When ASAHI AZUMANE (Practice) scores with Power Spike, reduces opponent's receiving players' Receive stat by 7%, lasting for 4 net crossings",
          "2": "When ASAHI AZUMANE (Practice) scores with Power Spike, reduces opponent's receiving players' Receive stat by 7%, lasting for 4 net crossings",
          "3": "When ASAHI AZUMANE (Practice) scores with Power Spike, reduces opponent's receiving players' Receive stat by 7%, lasting for 4 net crossings",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Advantage Pressure",
        levels: {
          "1": "When your side is leading in points, increases ASAHI AZUMANE (Practice)'s Power Spike power by 10% of Power Attack stat",
          "2": "When your side is leading in points, increases ASAHI AZUMANE (Practice)'s Power Spike power by 10% of Power Attack stat",
          "3": "When your side is leading in points, increases ASAHI AZUMANE (Practice)'s Power Spike power by 10% of Power Attack stat",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Exhaust Spike",
        levels: {
          "1": "ASAHI AZUMANE (Practice) consumes 3 additional Stamina to perform a Power Spike with 225% of Power Attack stat as power",
          "2": "ASAHI AZUMANE (Practice) consumes 3 additional Stamina to perform a Power Spike with 225% of Power Attack stat as power",
          "3": "ASAHI AZUMANE (Practice) consumes 3 additional Stamina to perform a Power Spike with 225% of Power Attack stat as power",
          "4": undefined,
          "5": undefined,
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

    memory: {
      name: "",
      effect: "",
    },
  },

  // YU NISHINOYA
  {
    id: "yu-nishinoya-ssr",
    name: "Yu Nishinoya",
    shortName: "Nishinoya",
    team: "Karasuno",
    rarity: "SSR",
    roles: ["LI"],
    typeTags: [
      "Serve",
      "Power Attack",
      "Setter",
      "Quick Attack",
      "Block",
      "Receive",
    ],
    image: "/public/characters/yu-nishinoya-ssr.png",
    stats: {
      basic: {
        quickAttack: 68,
        powerAttack: 99,
        set: 116,
        serve: 99,
        receive: 122,
        block: 96,
        save: 116,
      },
      bonusAttack: {
        awareness: 0.0,
        strength: 0.0,
        attackTechnique: 0.0,
      },
      bonusDefense: {
        reflex: 0.05,
        spirit: 0.0,
        defenseTechnique: 0.0,
      },
    },
    skills: [
      {
        key: "passive",
        name: "Guardian Deity",
        levels: {
          "1": "When YU NISHINOYA's Save result is not BAD, increases the power of the next Power Spike skill used by your Power-type player by 15% of his Power Attack stat",
          "2": "When YU NISHINOYA's Save result is not BAD, increases the power of the next Power Spike skill used by your Power-type player by 15% of his Power Attack stat",
          "3": "When YU NISHINOYA's Save result is not BAD, increases the power of the next Power Spike skill used by your Power-type player by 15% of his Power Attack stat",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Libero Supreme",
        levels: {
          "1": "YU NISHINOYA performs a Save with 120% of Save stat as power",
          "2": "YU NISHINOYA performs a Save with 120% of Save stat as power",
          "3": "YU NISHINOYA performs a Save with 120% of Save stat as power",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Inspire Morale",
        levels: {
          "1": "When YU NISHINOYA is on the court, increases your Team Morale by 18",
          "2": "When YU NISHINOYA is on the court, increases your Team Morale by 18",
          "3": "When YU NISHINOYA is on the court, increases your Team Morale by 18",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Rolling Thunder",
        levels: {
          "1": "YU NISHINOYA consumes 20 additional Stamina to perform a Receive with 220% of Receive stat power; if the Receive result is not BAD, reduces the cooldown of your side's next Power Spike skill by 6 net crossings",
          "2": "YU NISHINOYA consumes 20 additional Stamina to perform a Receive with 220% of Receive stat power; if the Receive result is not BAD, reduces the cooldown of your side's next Power Spike skill by 6 net crossings",
          "3": "YU NISHINOYA consumes 20 additional Stamina to perform a Receive with 220% of Receive stat power; if the Receive result is not BAD, reduces the cooldown of your side's next Power Spike skill by 6 net crossings",
          "4": undefined,
          "5": undefined,
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

    memory: {
      name: "",
      effect: "",
    },
  },
  // YU NISHINOYA
  {
    id: "yu-nishinoya-sr",
    name: "Yu Nishinoya",
    shortName: "Nishinoya",
    team: "Karasuno",
    rarity: "SR",
    roles: ["LI"],
    typeTags: [
      "Serve",
      "Power Attack",
      "Setter",
      "Quick Attack",
      "Block",
      "Receive",
    ],
    image: "/public/characters/yu-nishinoya-sr.png",
    stats: {
      basic: {
        quickAttack: 55,
        powerAttack: 81,
        set: 90,
        serve: 81,
        receive: 100,
        block: 79,
        save: 101,
      },
      bonusAttack: {
        awareness: 0.0,
        strength: 0.0,
        attackTechnique: 0.0,
      },
      bonusDefense: {
        reflex: 0.05,
        spirit: 0.0,
        defenseTechnique: 0.0,
      },
    },
    skills: [
      {
        key: "passive",
        name: "Primal Instinct",
        levels: {
          "1": "When YU NISHINOYA (Practice)'s Save result is not BAD, increases your side's Spike power by 7% of the player's Power/Quick Attack stat",
          "2": "When YU NISHINOYA (Practice)'s Save result is not BAD, increases your side's Spike power by 7% of the player's Power/Quick Attack stat",
          "3": "When YU NISHINOYA (Practice)'s Save result is not BAD, increases your side's Spike power by 7% of the player's Power/Quick Attack stat",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Elite Libero",
        levels: {
          "1": "YU NISHINOYA (Practice) performs a Save with 120% of Save stat as power",
          "2": "YU NISHINOYA (Practice) performs a Save with 120% of Save stat as power",
          "3": "YU NISHINOYA (Practice) performs a Save with 120% of Save stat as power",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Team's Lifeblood",
        levels: {
          "1": "YU NISHINOYA (Practice)'s Receive stat increases by 7%; When YU NISHINOYA (Practice)'s Receive result is not BAD, increases your Team Morale by 5",
          "2": "YU NISHINOYA (Practice)'s Receive stat increases by 7%; When YU NISHINOYA (Practice)'s Receive result is not BAD, increases your Team Morale by 5",
          "3": "YU NISHINOYA (Practice)'s Receive stat increases by 7%; When YU NISHINOYA (Practice)'s Receive result is not BAD, increases your Team Morale by 5",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Genius Defense",
        levels: {
          "1": "YU NISHINOYA (Practice) performs a Receive with 215% of Receive stat as power; when receiving an opponent's Quick Spike, increases this receive's power by 8% of Receive stat",
          "2": "YU NISHINOYA (Practice) performs a Receive with 215% of Receive stat as power; when receiving an opponent's Quick Spike, increases this receive's power by 8% of Receive stat",
          "3": "YU NISHINOYA (Practice) performs a Receive with 215% of Receive stat as power; when receiving an opponent's Quick Spike, increases this receive's power by 8% of Receive stat",
          "4": undefined,
          "5": undefined,
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

    memory: {
      name: "",
      effect: "",
    },
  },

  // RYUNOSUKE TANAKA
  {
    id: "ryunosuke-tanaka-ssr",
    name: "Ryunosuke Tanaka",
    shortName: "Tanaka",
    team: "Karasuno",
    rarity: "SSR",
    roles: ["WS"],
    typeTags: [
      "Serve",
      "Power Attack",
      "Setter",
      "Quick Attack",
      "Block",
      "Receive",
    ],
    image: "/public/characters/ryunosuke-tanaka-ssr.png",
    stats: {
      basic: {
        quickAttack: 83,
        powerAttack: 134,
        set: 98,
        serve: 104,
        receive: 115,
        block: 109,
        save: 99,
      },
      bonusAttack: {
        awareness: 0.05,
        strength: 0.0,
        attackTechnique: 0.0,
      },
      bonusDefense: {
        reflex: 0.0,
        spirit: 0.0,
        defenseTechnique: 0.0,
      },
    },
    skills: [
      {
        key: "passive",
        name: "The Ace Arrives",
        levels: {
          "1": "Increases the power of RYUNOSUKE TANAKA's 1st Power Spike in each match by 25% of Power Attack stat",
          "2": "Increases the power of RYUNOSUKE TANAKA's 1st Power Spike in each match by 25% of Power Attack stat",
          "3": "Increases the power of RYUNOSUKE TANAKA's 1st Power Spike in each match by 25% of Power Attack stat",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Tenacious Spirit",
        levels: {
          "1": "RYUNOSUKE TANAKA performs a Receive with 115% of Receive stat as power; for this Receive, TANAKA's Reflex increases by 10%",
          "2": "RYUNOSUKE TANAKA performs a Receive with 115% of Receive stat as power; for this Receive, TANAKA's Reflex increases by 10%",
          "3": "RYUNOSUKE TANAKA performs a Receive with 115% of Receive stat as power; for this Receive, TANAKA's Reflex increases by 10%",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Burning Passion",
        levels: {
          "1": "Increases RYUNOSUKE TANAKA's Power Spike power by 10% of Power Attack stat; his Power Spike reduces opponent's blocking and receiving players' Stamina by 5",
          "2": "Increases RYUNOSUKE TANAKA's Power Spike power by 10% of Power Attack stat; his Power Spike reduces opponent's blocking and receiving players' Stamina by 5",
          "3": "Increases RYUNOSUKE TANAKA's Power Spike power by 10% of Power Attack stat; his Power Spike reduces opponent's blocking and receiving players' Stamina by 5",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Super Inner Cross",
        levels: {
          "1": "RYUNOSUKE TANAKA consumes 5 extra Stamina to perform a Short Diagonal Spike with 250% of Power Attack stat as power; when this is TANAKA's first spike in this set, increases spike power by an additional 30% of TANAKA's Power Attack stat",
          "2": "RYUNOSUKE TANAKA consumes 5 extra Stamina to perform a Short Diagonal Spike with 250% of Power Attack stat as power; when this is TANAKA's first spike in this set, increases spike power by an additional 30% of TANAKA's Power Attack stat",
          "3": "RYUNOSUKE TANAKA consumes 5 extra Stamina to perform a Short Diagonal Spike with 250% of Power Attack stat as power; when this is TANAKA's first spike in this set, increases spike power by an additional 30% of TANAKA's Power Attack stat",
          "4": undefined,
          "5": undefined,
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

    memory: {
      name: "",
      effect: "",
    },
  },
  // RYUNOSUKE TANAKA
  {
    id: "ryunosuke-tanaka-sr",
    name: "Ryunosuke Tanaka",
    shortName: "Tanaka",
    team: "Karasuno",
    rarity: "SR",
    roles: ["WS"],
    typeTags: [
      "Serve",
      "Power Attack",
      "Setter",
      "Quick Attack",
      "Block",
      "Receive",
    ],
    image: "/public/characters/ryunosuke-tanaka-sr.png",
    stats: {
      basic: {
        quickAttack: 67,
        powerAttack: 104,
        set: 79,
        serve: 84,
        receive: 100,
        block: 89,
        save: 80,
      },
      bonusAttack: {
        awareness: 0.05,
        strength: 0.0,
        attackTechnique: 0.0,
      },
      bonusDefense: {
        reflex: 0.0,
        spirit: 0.0,
        defenseTechnique: 0.0,
      },
    },
    skills: [
      {
        key: "passive",
        name: "Saving Spirit",
        levels: {
          "1": "Increases RYUNOSUKE TANAKA (Practice)'s Save stat by 7%",
          "2": "Increases RYUNOSUKE TANAKA (Practice)'s Save stat by 7%",
          "3": "Increases RYUNOSUKE TANAKA (Practice)'s Save stat by 7%",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Provocative Nature",
        levels: {
          "1": "RYUNOSUKE TANAKA (Practice) performs a Power Spike with 115% of Power Attack stat as power; applies [Taunt] Debuff to opponent's receiving player (lasts 2 net crossings), reducing their receive power by 3% of their Receive stat",
          "2": "RYUNOSUKE TANAKA (Practice) performs a Power Spike with 115% of Power Attack stat as power; applies [Taunt] Debuff to opponent's receiving player (lasts 2 net crossings), reducing their receive power by 3% of their Receive stat",
          "3": "RYUNOSUKE TANAKA (Practice) performs a Power Spike with 115% of Power Attack stat as power; applies [Taunt] Debuff to opponent's receiving player (lasts 2 net crossings), reducing their receive power by 3% of their Receive stat",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Continuous Growth",
        levels: {
          "1": 'RYUNOSUKE TANAKA (Practice) receives 1 stacks of "Progress" after a Receive, each stack of "Progress" increases RYUNOSUKE TANAKA (Practice)\'s Receive stat by 4%, up to 3 stacks',
          "2": 'RYUNOSUKE TANAKA (Practice) receives 1 stacks of "Progress" after a Receive, each stack of "Progress" increases RYUNOSUKE TANAKA (Practice)\'s Receive stat by 4%, up to 3 stacks',
          "3": 'RYUNOSUKE TANAKA (Practice) receives 1 stacks of "Progress" after a Receive, each stack of "Progress" increases RYUNOSUKE TANAKA (Practice)\'s Receive stat by 4%, up to 3 stacks',
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Stalwart Receives",
        levels: {
          "1": "RYUNOSUKE TANAKA (Practice) performs a Receive with 215% of Receive stat as power; when receiving an Opponent's Quick Attack, TANAKA (Practice)'s Reflex increases by 5%",
          "2": "RYUNOSUKE TANAKA (Practice) performs a Receive with 215% of Receive stat as power; when receiving an Opponent's Quick Attack, TANAKA (Practice)'s Reflex increases by 5%",
          "3": "RYUNOSUKE TANAKA (Practice) performs a Receive with 215% of Receive stat as power; when receiving an Opponent's Quick Attack, TANAKA (Practice)'s Reflex increases by 5%",
          "4": undefined,
          "5": undefined,
        },
      },
    ],
    bonds: [
      {
        to: "yu-nishinoya-sr",
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

    memory: {
      name: "",
      effect: "",
    },
  },

  // KEI TSUKISHIMA SSR
  {
    id: "kei-tsukishima-ssr",
    name: "Kei Tsukishima",
    shortName: "Tsukishima",
    team: "Karasuno",
    rarity: "SSR",
    roles: ["MB"],
    typeTags: [
      "Serve",
      "Power Attack",
      "Setter",
      "Quick Attack",
      "Block",
      "Receive",
    ],
    image: "/public/characters/kei-tsukishima-ssr.png",
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
      bonusAttack: {
        awareness: 0.0,
        strength: 0.0,
        attackTechnique: 0.0,
      },
      bonusDefense: {
        reflex: 0.05,
        spirit: 0.0,
        defenseTechnique: 0.0,
      },
    },
    skills: [
      {
        key: "passive",
        name: "Karasuno's Composure",
        levels: {
          "1": "While KEI TSUKISHIMA is on the court, increases the Strength of your Quick Attack-type players by 10%.",
          "2": "While KEI TSUKISHIMA is on the court, increases the Strength of your Quick Attack-type players by 10%.",
          "3": "While KEI TSUKISHIMA is on the court, increases the Strength of your Quick Attack-type players by 10%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Tactical Quick Attack",
        levels: {
          "1": "KEI TSUKISHIMA performs a Quick Spike with 115% of his Quick Attack stat. The next time a teammate casts a Spike skill their Awareness is increased by 5%.",
          "2": "KEI TSUKISHIMA performs a Quick Spike with 115% of his Quick Attack stat. The next time a teammate casts a Spike skill their Awareness is increased by 5%.",
          "3": "KEI TSUKISHIMA performs a Quick Spike with 115% of his Quick Attack stat. The next time a teammate casts a Spike skill their Awareness is increased by 5%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Moonrise",
        levels: {
          "1": "While KEI TSUKISHIMA is present, increases Block power of your side's front row players by 8% of their Block stat",
          "2": "While KEI TSUKISHIMA is present, increases Block power of your side's front row players by 8% of their Block stat",
          "3": "While KEI TSUKISHIMA is present, increases Block power of your side's front row players by 8% of their Block stat",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Kei's Retort",
        levels: {
          "1": 'KEI TSUKISHIMA performs a Block with 195% of his Block stat as power. Applies the "Enrage" debuff to the opposing spiker (reducing their Power/Quick Attack stats by 10%).',
          "2": 'KEI TSUKISHIMA performs a Block with 195% of his Block stat as power. Applies the "Enrage" debuff to the opposing spiker (reducing their Power/Quick Attack stats by 10%).',
          "3": 'KEI TSUKISHIMA performs a Block with 195% of his Block stat as power. Applies the "Enrage" debuff to the opposing spiker (reducing their Power/Quick Attack stats by 10%).',
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

    memory: {
      name: "",
      effect: "",
    },
  },
  // KEI TSUKISHIMA SR
  {
    id: "kei-tsukishima-sr",
    name: "Kei Tsukishima",
    shortName: "Tsukishima",
    team: "Karasuno",
    rarity: "SR",
    roles: ["MB"],
    typeTags: [
      "Serve",
      "Power Attack",
      "Setter",
      "Quick Attack",
      "Block",
      "Receive",
    ],
    image: "/public/characters/kei-tsukishima-sr.png",
    stats: {
      basic: {
        quickAttack: 99,
        powerAttack: 64,
        set: 82,
        serve: 86,
        receive: 83,
        block: 99,
        save: 78,
      },
      bonusAttack: {
        awareness: 0.05,
        strength: 0.0,
        attackTechnique: 0.0,
      },
      bonusDefense: {
        reflex: 0.05,
        spirit: 0.0,
        defenseTechnique: 0.0,
      },
    },
    skills: [
      {
        key: "active",
        name: "Elevated Strike",
        levels: {
          "1": "KEI TSUKISHIMA (Practice) performs a Quick Spike with 110% of Quick Attack stat as power",
          "2": "KEI TSUKISHIMA (Practice) performs a Quick Spike with 110% of Quick Attack stat as power",
          "3": "KEI TSUKISHIMA (Practice) performs a Quick Spike with 110% of Quick Attack stat as power",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Block Tactician",
        levels: {
          "1": "Increases KEI TSUKISHIMA (Practice)'s Block stat by 6%; when he performs a Block, increases his Reflex by 5%",
          "2": "Increases KEI TSUKISHIMA (Practice)'s Block stat by 6%; when he performs a Block, increases his Reflex by 5%",
          "3": "Increases KEI TSUKISHIMA (Practice)'s Block stat by 6%; when he performs a Block, increases his Reflex by 5%",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Quick Attack Strategy",
        levels: {
          "1": "Increases KEI TSUKISHIMA (Practice)'s Quick Attack stat by 6%; when he performs a Quick Spike, increases his Awareness by 5%",
          "2": "Increases KEI TSUKISHIMA (Practice)'s Quick Attack stat by 6%; when he performs a Quick Spike, increases his Awareness by 5%",
          "3": "Increases KEI TSUKISHIMA (Practice)'s Quick Attack stat by 6%; when he performs a Quick Spike, increases his Awareness by 5%",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Delayed Block",
        levels: {
          "1": "KEI TSUKISHIMA (Practice) performs a Block with 180% of Block stat as power",
          "2": "KEI TSUKISHIMA (Practice) performs a Block with 180% of Block stat as power",
          "3": "KEI TSUKISHIMA (Practice) performs a Block with 180% of Block stat as power",
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
        effect:
          "While KEI TSUKISHIMA (Practice) is present, increases Block stat of your side's front row players by 5%.",
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
          "DELAYED BLOCK new effect (1 time per match): when the opponent performs a Power Spike, this Block will result in at least NORMAL.",
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

    memory: {
      name: "",
      effect: "",
    },
  },

  // TADASHI YAMAGUCHI SR
  {
    id: "tadashi-yamaguchi-sr",
    name: "Tadashi Yamaguchi",
    shortName: "Yamaguchi",
    team: "Karasuno",
    rarity: "SR",
    roles: ["MB"],
    typeTags: [
      "Serve",
      "Power Attack",
      "Setter",
      "Quick Attack",
      "Block",
      "Receive",
    ],
    image: "/public/characters/tadashi-yamaguchi-sr.png",
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
      bonusAttack: {
        awareness: 0.0,
        strength: 0.0,
        attackTechnique: 0.0,
      },
      bonusDefense: {
        reflex: 0.05,
        spirit: 0.0,
        defenseTechnique: 0.0,
      },
    },
    skills: [
      {
        key: "passive",
        name: "Serve Stability",
        levels: {
          "1": "When TADASHI YAMAGUCHI's Serve results in a PERFECT, increases its power by 20% of his Serve stat. When it results in a BAD, reduces its power by 20% of his Serve stat.",
          "2": "When TADASHI YAMAGUCHI's Serve results in a PERFECT, increases its power by 20% of his Serve stat. When it results in a BAD, reduces its power by 20% of his Serve stat.",
          "3": "When TADASHI YAMAGUCHI's Serve results in a PERFECT, increases its power by 20% of his Serve stat. When it results in a BAD, reduces its power by 20% of his Serve stat.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Spotlight Serve",
        levels: {
          "1": "Increases the power of TADASHI YAMAGUCHI's 1st Serve in each match by 15% of his Serve stat. Also increases his Awareness by 15% for that serve.",
          "2": "Increases the power of TADASHI YAMAGUCHI's 1st Serve in each match by 15% of his Serve stat. Also increases his Awareness by 15% for that serve.",
          "3": "Increases the power of TADASHI YAMAGUCHI's 1st Serve in each match by 15% of his Serve stat. Also increases his Awareness by 15% for that serve.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Point by Point",
        levels: {
          "1": "Increases TADASHI YAMAGUCHI's Serve stat by 10%",
          "2": "Increases TADASHI YAMAGUCHI's Serve stat by 10%",
          "3": "Increases TADASHI YAMAGUCHI's Serve stat by 10%",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Defiant Float",
        levels: {
          "1": "TADASHI YAMAGUCHI performs a Jump Float Serve with 210% of his Serve stat as power. If your side is behind, this serve's power is additionally increased by 25% of his Serve stat.",
          "2": "TADASHI YAMAGUCHI performs a Jump Float Serve with 210% of his Serve stat as power. If your side is behind, this serve's power is additionally increased by 25% of his Serve stat.",
          "3": "TADASHI YAMAGUCHI performs a Jump Float Serve with 210% of his Serve stat as power. If your side is behind, this serve's power is additionally increased by 25% of his Serve stat.",
          "4": undefined,
          "5": undefined,
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
        effect:
          "SPOTLIGHT SERVE effect change: applies to the first 2 Serves of the match.",
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
          'DEFIANT FLOAT new effect: when scoring with DEFIANT FLOAT, resets its cooldown and receives 1 stacks of "Supporting Hand".',
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

    memory: {
      name: "",
      effect: "",
    },
  },

  // CHIKARA ENNOSHITA SR
  {
    id: "chikara-ennoshita-sr",
    name: "Chikara Ennoshita",
    shortName: "Ennoshita",
    team: "Karasuno",
    rarity: "SR",
    roles: ["WS"],
    typeTags: [
      "Serve",
      "Power Attack",
      "Setter",
      "Quick Attack",
      "Block",
      "Receive",
    ],
    image: "/public/characters/chikara-ennoshita-sr.png",
    stats: {
      basic: {
        quickAttack: 61,
        powerAttack: 95,
        set: 79,
        serve: 84,
        receive: 104,
        block: 89,
        save: 85,
      },
      bonusAttack: {
        awareness: 0.0,
        strength: 0.0,
        attackTechnique: 0.0,
      },
      bonusDefense: {
        reflex: 0.05,
        spirit: 0.0,
        defenseTechnique: 0.0,
      },
    },
    skills: [
      {
        key: "active",
        name: "Forceful Spike",
        levels: {
          "1": "CHIKARA ENNOSHITA performs a Power Spike with 120% of his Power Attack stat.",
          "2": "CHIKARA ENNOSHITA performs a Power Spike with 120% of his Power Attack stat.",
          "3": "CHIKARA ENNOSHITA performs a Power Spike with 120% of his Power Attack stat.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Carry the Torch",
        levels: {
          "1": "While CHIKARA ENNOSHITA is present, at the start of each turn, there is a 30% chance to remove 1 debuff from players on your side.",
          "2": "While CHIKARA ENNOSHITA is present, at the start of each turn, there is a 30% chance to remove 1 debuff from players on your side.",
          "3": "While CHIKARA ENNOSHITA is present, at the start of each turn, there is a 30% chance to remove 1 debuff from players on your side.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Rising Leader",
        levels: {
          "1": "While CHIKARA ENNOSHITA is on the court, when your side loses a point, the next spike from your side gains additional power equal to 8% of the spiker's Power/Quick Attack stat. If the spike is a Power Spike skill, its power increases further by 6% of the spiker's Power Attack stat.",
          "2": "While CHIKARA ENNOSHITA is on the court, when your side loses a point, the next spike from your side gains additional power equal to 8% of the spiker's Power/Quick Attack stat. If the spike is a Power Spike skill, its power increases further by 6% of the spiker's Power Attack stat.",
          "3": "While CHIKARA ENNOSHITA is on the court, when your side loses a point, the next spike from your side gains additional power equal to 8% of the spiker's Power/Quick Attack stat. If the spike is a Power Spike skill, its power increases further by 6% of the spiker's Power Attack stat.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Fighting Spirit",
        levels: {
          "1": "CHIKARA ENNOSHITA performs a Receive with 220% of his Receive stat",
          "2": "CHIKARA ENNOSHITA performs a Receive with 220% of his Receive stat",
          "3": "CHIKARA ENNOSHITA performs a Receive with 220% of his Receive stat",
          "4": undefined,
          "5": undefined,
        },
      },
    ],
    bonds: [
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

    memory: {
      name: "",
      effect: "",
    },
  },
];
