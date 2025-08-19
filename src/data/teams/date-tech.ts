// src/data/teams/date-tech.ts
import type { Player } from "../types";

export const dateTechPlayers: Player[] = [
  // ===================== TAKANOBU AONE (SP / Swimsuit) =====================
  {
    id: "takanobu-aone-sp",
    name: "Takanobu Aone (Swimsuit)",
    shortName: "Aone (SP)",
    team: "Date Tech",
    rarity: "SP",
    roles: ["MB"],
    typeTags: ["Block", "Serve", "Team Morale"],
    image: "/characters/date/takanobu-aone-sp.png",
    stats: {
      basic: {
        quickAttack: 144,
        powerAttack: 99,
        set: 142,
        serve: 151,
        receive: 128,
        block: 155,
        save: 121,
      },
      bonusAttack: { awareness: 0, strength: 0, attackTechnique: 0 },
      bonusDefense: { reflex: 0.05, spirit: 0, defenseTechnique: 0 },
    },
    skills: [
      {
        key: "passive",
        name: "Mighty High Wall",
        levels: {
          "1": "Each stack of “Reinforced Block” increases AONE (SP)’s Block power by 10% of Block stat. If stacks ≥ 4, cooldown of “Sharp Read Block” becomes 8 net crossings; if stacks ≥ 6, AONE’s Mental +10%; if stacks ≥ 8, cooldown becomes 4.",
          "2": "Each stack of “Reinforced Block” increases AONE (SP)’s Block power by 10% of Block stat. If stacks ≥ 4, cooldown of “Sharp Read Block” becomes 8 net crossings; if stacks ≥ 6, AONE’s Mental +10%; if stacks ≥ 8, cooldown becomes 4.",
          "3": "Each stack of “Reinforced Block” increases AONE (SP)’s Block power by 10% of Block stat. If stacks ≥ 4, cooldown of “Sharp Read Block” becomes 8 net crossings; if stacks ≥ 6, AONE’s Mental +10%; if stacks ≥ 8, cooldown becomes 4.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Sharp Read Block",
        levels: {
          "1": "TAKANOBU AONE (SP) performs a Block with 260% of Block stat as power. Increases your side’s Team Morale by 15.",
          "2": "TAKANOBU AONE (SP) performs a Block with 260% of Block stat as power. Increases your side’s Team Morale by 15.",
          "3": "TAKANOBU AONE (SP) performs a Block with 260% of Block stat as power. Increases your side’s Team Morale by 15.",
          "4": "TAKANOBU AONE (SP) performs a Block with 260% of Block stat as power. Increases your side’s Team Morale by 15.",
          "5": "TAKANOBU AONE (SP) performs a Block with 260% of Block stat as power. Increases your side’s Team Morale by 15.",
        },
      },
      {
        key: "passive",
        name: "Morale-Boosting Jump Serve",
        levels: {
          "1": "Performs a Jump Serve with 140% of Serve stat as power; increases opponent Set-skill cooldown by the number of net crossings. When AONE (SP) enters and uses this serve, allies’ Attack Technique & Defense Technique +5%; if “Reinforced Block” stacks ≥ 3, bonuses +10% more until AONE exits.",
          "2": "Performs a Jump Serve with 140% of Serve stat as power; increases opponent Set-skill cooldown by the number of net crossings. When AONE (SP) enters and uses this serve, allies’ Attack Technique & Defense Technique +5%; if “Reinforced Block” stacks ≥ 3, bonuses +10% more until AONE exits.",
          "3": "Performs a Jump Serve with 140% of Serve stat as power; increases opponent Set-skill cooldown by the number of net crossings. When AONE (SP) enters and uses this serve, allies’ Attack Technique & Defense Technique +5%; if “Reinforced Block” stacks ≥ 3, bonuses +10% more until AONE exits.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Overwhelming Wall",
        levels: {
          "1": "AONE (SP)’s Reflex +10%. When Stamina < 80, Block and Serve +10%. In 2/3-man blocks, for each blocking teammate with a Block skill, this block's power +20% of AONE’s Block stat.",
          "2": "AONE (SP)’s Reflex +10%. When Stamina < 80, Block and Serve +10%. In 2/3-man blocks, for each blocking teammate with a Block skill, this block's power +20% of AONE’s Block stat.",
          "3": "AONE (SP)’s Reflex +10%. When Stamina < 80, Block and Serve +10%. In 2/3-man blocks, for each blocking teammate with a Block skill, this block's power +20% of AONE’s Block stat.",
          "4": "AONE (SP)’s Reflex +10%. When Stamina < 80, Block and Serve +10%. In 2/3-man blocks, for each blocking teammate with a Block skill, this block's power +20% of AONE’s Block stat.",
          "5": "AONE (SP)’s Reflex +10%. When Stamina < 80, Block and Serve +10%. In 2/3-man blocks, for each blocking teammate with a Block skill, this block's power +20% of AONE’s Block stat.",
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
          "While AONE (SP) is on the court, when the opponent scores, apply “Lock On” to opponent-court players.",
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
          "While AONE (SP) is off the court, increases the effect of “Lock On” by 25%.",
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

  // ===================== SSR (S → OP → WS → MB) =====================

  // --------------------- KANJI KOGANEGAWA (SSR) — Setter ---------------------
  {
    id: "kanji-koganegawa-ssr",
    name: "Kanji Koganegawa",
    shortName: "Koganegawa",
    team: "Date Tech",
    rarity: "SSR",
    roles: ["S"],
    typeTags: ["Set", "Block", "Setter Dump", "Block Break"],
    image: "/characters/date/kanji-koganegawa-ssr.png",
    stats: {
      basic: {
        quickAttack: 79,
        powerAttack: 115,
        set: 120,
        serve: 103,
        receive: 95,
        block: 109,
        save: 95,
      },
      bonusAttack: { awareness: 0, strength: 0, attackTechnique: 0 },
      bonusDefense: { reflex: 0, spirit: 0, defenseTechnique: 0 },
    },
    skills: [
      {
        key: "passive",
        name: "Rookie Setter",
        levels: {
          "1": "KANJI KOGANEGAWA performs a Set with 120% of Set stat.",
          "2": "KANJI KOGANEGAWA performs a Set with 120% of Set stat.",
          "3": "KANJI KOGANEGAWA performs a Set with 120% of Set stat.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Block Spark",
        levels: {
          "1": "Performs a Block with 105% of Block stat. While he is on the court, when the opponent performs a Power Spike, your side’s blocking players gain +3% additional Block power based on their own Block stat.",
          "2": "Performs a Block with 105% of Block stat. While he is on the court, when the opponent performs a Power Spike, your side’s blocking players gain +3% additional Block power based on their own Block stat.",
          "3": "Performs a Block with 105% of Block stat. While he is on the court, when the opponent performs a Power Spike, your side’s blocking players gain +3% additional Block power based on their own Block stat.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Iron Wall III",
        levels: {
          "1": "While KOGANEGAWA is on the court, increases Block power of your other players’ Block skills by 2% of their Block stat.",
          "2": "While KOGANEGAWA is on the court, increases Block power of your other players’ Block skills by 2% of their Block stat.",
          "3": "While KOGANEGAWA is on the court, increases Block power of your other players’ Block skills by 2% of their Block stat.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Flash Dump",
        levels: {
          "1": "Performs an unblockable Setter Dump with 210% of Set stat as power.",
          "2": "Performs an unblockable Setter Dump with 210% of Set stat as power.",
          "3": "Performs an unblockable Setter Dump with 210% of Set stat as power.",
          "4": "Performs an unblockable Setter Dump with 210% of Set stat as power.",
          "5": "Performs an unblockable Setter Dump with 210% of Set stat as power.",
        },
      },
    ],
    bonds: [
      {
        to: "kenji-futakuchi-ssr",
        name: "New Captain & Tall Rookie",
        participants: ["kanji-koganegawa-ssr", "kenji-futakuchi-ssr"],
        effect: "Front row Block boost when both are on court.",
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
          "While KOGANEGAWA is in the front row, reduces Power Attack stat of opponent players by 4%.",
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
          "FLASH DUMP new effect: when all your front row players are Block-type, increases this dump’s power by an additional 15% of Set stat.",
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

  // --------------------- TAKEHITO SASAYA (SSR) — Opposite ---------------------
  {
    id: "takehito-sasaya-ssr",
    name: "Takehito Sasaya",
    shortName: "Sasaya",
    team: "Date Tech",
    rarity: "SSR",
    roles: ["OP"],
    typeTags: ["Block", "Power Attack", "Enhance Team"],
    image: "/characters/date/takehito-sasaya-ssr.png",
    stats: {
      basic: {
        quickAttack: 83,
        powerAttack: 121,
        set: 98,
        serve: 104,
        receive: 115,
        block: 110,
        save: 99,
      },
      bonusAttack: { awareness: 0.05, strength: 0, attackTechnique: 0 },
      bonusDefense: { reflex: 0, spirit: 0, defenseTechnique: 0 },
    },
    skills: [
      {
        key: "passive",
        name: "Calm Response",
        levels: {
          "1": "Increases SASAYA’s Awareness by 5%; while SASAYA is present, increases Reflex of players on your side by 5%.",
          "2": "Increases SASAYA’s Awareness by 5%; while SASAYA is present, increases Reflex of players on your side by 5%.",
          "3": "Increases SASAYA’s Awareness by 5%; while SASAYA is present, increases Reflex of players on your side by 5%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Impenetrable Defense",
        levels: {
          "1": "TAKEHITO SASAYA performs a Block with 105% of Block stat as power.",
          "2": "TAKEHITO SASAYA performs a Block with 105% of Block stat as power.",
          "3": "TAKEHITO SASAYA performs a Block with 105% of Block stat as power.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Fortified Iron Wall",
        levels: {
          "1": "While SASAYA is present, when your side is behind, increases your side's Block skill power by an additional 3% of each blocking player's Block stat and increases blocking players' Reflex by 5%.",
          "2": "While SASAYA is present, when your side is behind, increases your side's Block skill power by an additional 3% of each blocking player's Block stat and increases blocking players' Reflex by 5%.",
          "3": "While SASAYA is present, when your side is behind, increases your side's Block skill power by an additional 3% of each blocking player's Block stat and increases blocking players' Reflex by 5%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Aggressive Play",
        levels: {
          "1": "TAKEHITO SASAYA performs a Power Spike with 240% of Power Attack stat as power.",
          "2": "TAKEHITO SASAYA performs a Power Spike with 240% of Power Attack stat as power.",
          "3": "TAKEHITO SASAYA performs a Power Spike with 240% of Power Attack stat as power.",
          "4": "TAKEHITO SASAYA performs a Power Spike with 240% of Power Attack stat as power.",
          "5": "TAKEHITO SASAYA performs a Power Spike with 240% of Power Attack stat as power.",
        },
      },
    ],
    bonds: [
      {
        to: "yutaka-obara-sr",
        name: "Date Kōgyō Wing Spiker",
        participants: ["takehito-sasaya-ssr", "yutaka-obara-sr"],
        effect: "Power/Block synergy when aligned together.",
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
          "SASAYA is immune to debuffs; when your side is behind, SASAYA’s Block and Power Attack +10%.",
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
          "Reduces the cooldown of IMPENETRABLE DEFENSE and AGGRESSIVE PLAY by 2 net crossings.",
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

  // --------------------- KENJI FUTAKUCHI (SSR) — Wing Spiker ---------------------
  {
    id: "kenji-futakuchi-ssr",
    name: "Kenji Futakuchi",
    shortName: "Futakuchi",
    team: "Date Tech",
    rarity: "SSR",
    roles: ["WS"],
    typeTags: ["Serve", "Block", "Combination Block"],
    image: "/characters/date/kenji-futakuchi-ssr.png",
    stats: {
      basic: {
        quickAttack: 79,
        powerAttack: 115,
        set: 100,
        serve: 107,
        receive: 104,
        block: 121,
        save: 98,
      },
      bonusAttack: { awareness: 0.05, strength: 0, attackTechnique: 0 },
      bonusDefense: { reflex: 0, spirit: 0, defenseTechnique: 0 },
    },
    skills: [
      {
        key: "passive",
        name: "Captain’s Authority",
        levels: {
          "1": "While FUTAKUCHI is present, increases your side’s Block power by 8% of each player's Block stat.",
          "2": "While FUTAKUCHI is present, increases your side’s Block power by 8% of each player's Block stat.",
          "3": "While FUTAKUCHI is present, increases your side’s Block power by 8% of each player's Block stat.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Initiate Attack",
        levels: {
          "1": "KENJI FUTAKUCHI performs a Jump Serve with 120% of Serve stat as power.",
          "2": "KENJI FUTAKUCHI performs a Jump Serve with 120% of Serve stat as power.",
          "3": "KENJI FUTAKUCHI performs a Jump Serve with 120% of Serve stat as power.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Raising Defense",
        levels: {
          "1": "While FUTAKUCHI is present, for each Block-type player on your side (1), increases Block power by 0.5% of Block stat.",
          "2": "While FUTAKUCHI is present, for each Block-type player on your side (1), increases Block power by 0.5% of Block stat.",
          "3": "While FUTAKUCHI is present, for each Block-type player on your side (1), increases Block power by 0.5% of Block stat.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Unbreakable Iron Wall",
        levels: {
          "1": "KENJI FUTAKUCHI performs a Block with 195% of Block stat as power; if the opponent's spiking player is affected by a debuff, increases this block's power by an additional 10% of Block stat.",
          "2": "KENJI FUTAKUCHI performs a Block with 195% of Block stat as power; if the opponent's spiking player is affected by a debuff, increases this block's power by an additional 10% of Block stat.",
          "3": "KENJI FUTAKUCHI performs a Block with 195% of Block stat as power; if the opponent's spiking player is affected by a debuff, increases this block's power by an additional 10% of Block stat.",
          "4": "KENJI FUTAKUCHI performs a Block with 195% of Block stat as power; if the opponent's spiking player is affected by a debuff, increases this block's power by an additional 10% of Block stat.",
          "5": "KENJI FUTAKUCHI performs a Block with 195% of Block stat as power; if the opponent's spiking player is affected by a debuff, increases this block's power by an additional 10% of Block stat.",
        },
      },
    ],
    bonds: [
      {
        to: "takanobu-aone-ssr",
        name: "The Silent and the Snarky",
        participants: ["kenji-futakuchi-ssr", "takanobu-aone-ssr"],
        effect: "Enables Double Block synergy when both are on court.",
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
        effect: "Increases KENJI FUTAKUCHI’s Serve stat by 10%.",
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
          "When KENJI FUTAKUCHI blocks, applies “Enrage” debuff to opponent spiker (reduces Power/Quick Attack stats by 10%).",
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

  // --------------------- TAKANOBU AONE (SSR) — Middle Blocker ---------------------
  {
    id: "takanobu-aone-ssr",
    name: "Takanobu Aone",
    shortName: "Aone",
    team: "Date Tech",
    rarity: "SSR",
    roles: ["MB"],
    typeTags: ["Quick Attack", "Block"],
    image: "/characters/date/takanobu-aone-ssr.png",
    stats: {
      basic: {
        quickAttack: 115,
        powerAttack: 79,
        set: 100,
        serve: 107,
        receive: 103,
        block: 122,
        save: 97,
      },
      bonusAttack: { awareness: 0, strength: 0, attackTechnique: 0 },
      bonusDefense: { reflex: 0.05, spirit: 0, defenseTechnique: 0 },
    },
    skills: [
      {
        key: "passive",
        name: "Lock Down Ace",
        levels: {
          "1": "When AONE achieves a PERFECT Block, marks the opponent spiker, reducing their next spike's power by 10% of Power/Quick Attack and increasing their Stamina consumption by 30%.",
          "2": "When AONE achieves a PERFECT Block, marks the opponent spiker, reducing their next spike's power by 12.5% of Power/Quick Attack and increasing their Stamina consumption by 30%.",
          "3": "When AONE achieves a PERFECT Block, marks the opponent spiker, reducing their next spike's power by 15% of Power/Quick Attack and increasing their Stamina consumption by 30%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Heavy Strike",
        levels: {
          "1": "TAKANOBU AONE performs a Quick Spike with 120% of Quick Attack stat as power.",
          "2": "TAKANOBU AONE performs a Quick Spike with 135% of Quick Attack stat as power.",
          "3": "TAKANOBU AONE performs a Quick Spike with 150% of Quick Attack stat as power.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Tri-Wall Formation",
        levels: {
          "1": "When AONE blocks, for each Block-type player on your side (1), increases Block power by 1% of Block stat; when all 3 front row players are Block-type, increases Block power by an additional 4% of Block stat.",
          "2": "When AONE blocks, for each Block-type player on your side (1), increases Block power by 2% of Block stat; when all 3 front row players are Block-type, increases Block power by an additional 4% of Block stat.",
          "3": "When AONE blocks, for each Block-type player on your side (1), increases Block power by 3% of Block stat; when all 3 front row players are Block-type, increases Block power by an additional 4% of Block stat.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Iron Pillar",
        levels: {
          "1": "TAKANOBU AONE performs a Block with 195% of Block stat as power; when blocking an opponent's Power Spike, increases this block's power by an additional 9% of Block stat.",
          "2": "TAKANOBU AONE performs a Block with 210% of Block stat as power; when blocking an opponent's Power Spike, increases this block's power by an additional 9% of Block stat.",
          "3": "TAKANOBU AONE performs a Block with 225% of Block stat as power; when blocking an opponent's Power Spike, increases this block's power by an additional 12% of Block stat.",
          "4": "TAKANOBU AONE performs a Block with 240% of Block stat as power; when blocking an opponent's Power Spike, increases this block's power by an additional 12% of Block stat.",
          "5": "TAKANOBU AONE performs a Block with 255% of Block stat as power; when blocking an opponent's Power Spike, increases this block's power by an additional 15% of Block stat.",
        },
      },
    ],
    bonds: [
      {
        to: "kenji-futakuchi-ssr",
        name: "The Silent and the Snarky",
        participants: ["takanobu-aone-ssr", "kenji-futakuchi-ssr"],
        effect: "Enables Double Block synergy when both are on court.",
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
          "LOCK DOWN ACE condition modified: triggers on any block (not only PERFECT).",
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
          "When AONE blocks and the opponent spiker’s Stamina is below 30, the block result will be at least NORMAL.",
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

  // ===================== SR (S → OP → WS → MB) =====================

  // --------------------- KANAME MONIWA (SR) — Setter ---------------------
  {
    id: "kaname-moniwa-sr",
    name: "Kaname Moniwa",
    shortName: "Moniwa",
    team: "Date Tech",
    rarity: "SR",
    roles: ["S"],
    typeTags: ["Set", "Combination Block", "Block"],
    image: "/characters/date/kaname-moniwa-sr.png",
    stats: {
      basic: {
        quickAttack: 60,
        powerAttack: 88,
        set: 93,
        serve: 98,
        receive: 79,
        block: 92,
        save: 75,
      },
      bonusAttack: { awareness: 0.05, strength: 0, attackTechnique: 0 },
      bonusDefense: { reflex: 0, spirit: 0, defenseTechnique: 0 },
    },
    skills: [
      {
        key: "passive",
        name: "Brilliant Setting",
        levels: {
          "1": "KANAME MONIWA performs a Set with 120% of Set stat as power.",
          "2": "KANAME MONIWA performs a Set with 120% of Set stat as power.",
          "3": "KANAME MONIWA performs a Set with 120% of Set stat as power.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Reflective Setter",
        levels: {
          "1": "Increases MONIWA’s Set stat by 9%; while he is present, increases your side’s players’ Reflex by 10% when blocking.",
          "2": "Increases MONIWA’s Set stat by 9%; while he is present, increases your side’s players’ Reflex by 10% when blocking.",
          "3": "Increases MONIWA’s Set stat by 9%; while he is present, increases your side’s players’ Reflex by 10% when blocking.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Iron Wall Rising",
        levels: {
          "1": "While MONIWA is present, increases your side's Block power by 6% of each player's Block stat.",
          "2": "While MONIWA is present, increases your side's Block power by 6% of each player's Block stat.",
          "3": "While MONIWA is present, increases your side's Block power by 6% of each player's Block stat.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Solid Iron Wall",
        levels: {
          "1": "MONIWA performs a Block with 175% of Block stat as power; when blocking an opponent's Power Spike, increases this block's power by an additional 10% of Block stat.",
          "2": "MONIWA performs a Block with 175% of Block stat as power; when blocking an opponent's Power Spike, increases this block's power by an additional 10% of Block stat.",
          "3": "MONIWA performs a Block with 175% of Block stat as power; when blocking an opponent's Power Spike, increases this block's power by an additional 10% of Block stat.",
          "4": "MONIWA performs a Block with 175% of Block stat as power; when blocking an opponent's Power Spike, increases this block's power by an additional 10% of Block stat.",
          "5": "MONIWA performs a Block with 175% of Block stat as power; when blocking an opponent's Power Spike, increases this block's power by an additional 10% of Block stat.",
        },
      },
    ],
    bonds: [
      {
        to: "yasushi-kamasaki-sr",
        name: "Date Kōgyō Seniors",
        participants: ["kaname-moniwa-sr", "yasushi-kamasaki-sr"],
        effect: "Morale up on PERFECT blocks; improves block coordination.",
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
          "While MONIWA is present, when your side achieves a PERFECT block, increases your Team Morale by 5.",
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
          "While MONIWA is present, increases Block stat of Block-type players on your side by 5%.",
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

  // --------------------- KANJI KOGANEGAWA (SR / Practice) — Setter ---------------------
  {
    id: "kanji-koganegawa-sr",
    name: "Kanji Koganegawa (Practice)",
    shortName: "Koganegawa (Practice)",
    team: "Date Tech",
    rarity: "SR",
    roles: ["S"],
    typeTags: ["Set", "Combination Block"],
    image: "/characters/date/kanji-koganegawa-sr.png",
    stats: {
      basic: {
        quickAttack: 65,
        powerAttack: 94,
        set: 99,
        serve: 84,
        receive: 79,
        block: 94,
        save: 74,
      },
      bonusAttack: { awareness: 0.05, strength: 0, attackTechnique: 0 },
      bonusDefense: { reflex: 0, spirit: 0, defenseTechnique: 0 },
    },
    skills: [
      {
        key: "passive",
        name: "Developing New Move",
        levels: {
          "1": "When KOGANEGAWA (Practice) achieves a PERFECT block, increases your side's next Block power by 8% of the player's Block stat.",
          "2": "When KOGANEGAWA (Practice) achieves a PERFECT block, increases your side's next Block power by 8% of the player's Block stat.",
          "3": "When KOGANEGAWA (Practice) achieves a PERFECT block, increases your side's next Block power by 8% of the player's Block stat.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Short Set",
        levels: {
          "1": "Increases KOGANEGAWA (Practice)'s Set stat by 8%; he also performs a Set with 115% of Set stat as power.",
          "2": "Increases KOGANEGAWA (Practice)'s Set stat by 8%; he also performs a Set with 115% of Set stat as power.",
          "3": "Increases KOGANEGAWA (Practice)'s Set stat by 8%; he also performs a Set with 115% of Set stat as power.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "New Iron Wall Member",
        levels: {
          "1": "While KOGANEGAWA (Practice) is in the front row, increases Block stat of other Block-type players in your side's front row by 8%.",
          "2": "While KOGANEGAWA (Practice) is in the front row, increases Block stat of other Block-type players in your side's front row by 8%.",
          "3": "While KOGANEGAWA (Practice) is in the front row, increases Block stat of other Block-type players in your side's front row by 8%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "All-Out Block",
        levels: {
          "1": "Performs a Block with 175% of Block stat as power; when other front row players are Block-type, increases this block's power by 10% of Block stat.",
          "2": "Performs a Block with 175% of Block stat as power; when other front row players are Block-type, increases this block's power by 10% of Block stat.",
          "3": "Performs a Block with 175% of Block stat as power; when other front row players are Block-type, increases this block's power by 10% of Block stat.",
          "4": "Performs a Block with 175% of Block stat as power; when other front row players are Block-type, increases this block's power by 10% of Block stat.",
          "5": "Performs a Block with 175% of Block stat as power; when other front row players are Block-type, increases this block's power by 10% of Block stat.",
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
          "After casting SHORT SET, increases your side’s next Spike power by 10% of Power/Quick Attack stat.",
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
          "While KOGANEGAWA (Practice) is present, when your side’s Block-type players block an opponent’s Power Spike, increase Block power by 15% of the Block stat.",
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

  // --------------------- TAKEHITO SASAYA (SR / Practice) — Opposite ---------------------
  {
    id: "takehito-sasaya-sr",
    name: "Takehito Sasaya (Practice)",
    shortName: "Sasaya (Practice)",
    team: "Date Tech",
    rarity: "SR",
    roles: ["OP"],
    typeTags: ["Power Attack", "Block", "Enhance Team"],
    image: "/characters/date/takehito-sasaya-sr.png",
    stats: {
      basic: {
        quickAttack: 68,
        powerAttack: 99,
        set: 80,
        serve: 85,
        receive: 94,
        block: 90,
        save: 81,
      },
      bonusAttack: { awareness: 0.05, strength: 0, attackTechnique: 0 },
      bonusDefense: { reflex: 0, spirit: 0, defenseTechnique: 0 },
    },
    skills: [
      {
        key: "passive",
        name: "Power Scoring Engine",
        levels: {
          "1": "Increases TAKEHITO SASAYA (Practice)'s Power Attack by 6% and Awareness by 6%.",
          "2": "Increases TAKEHITO SASAYA (Practice)'s Power Attack by 6% and Awareness by 6%.",
          "3": "Increases TAKEHITO SASAYA (Practice)'s Power Attack by 6% and Awareness by 6%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Aggressive Block",
        levels: {
          "1": "TAKEHITO SASAYA (Practice) performs a Block with 105% of Block stat as power.",
          "2": "TAKEHITO SASAYA (Practice) performs a Block with 105% of Block stat as power.",
          "3": "TAKEHITO SASAYA (Practice) performs a Block with 105% of Block stat as power.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Composed Response",
        levels: {
          "1": "While TAKEHITO SASAYA (Practice) is present, increases your side's Block skill power by 8% of each blocking player's Block stat.",
          "2": "While TAKEHITO SASAYA (Practice) is present, increases your side's Block skill power by 8% of each blocking player's Block stat.",
          "3": "While TAKEHITO SASAYA (Practice) is present, increases your side's Block skill power by 8% of each blocking player's Block stat.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Consistent Offense",
        levels: {
          "1": "TAKEHITO SASAYA (Practice) performs a Power Spike with 220% of Power Attack stat as power.",
          "2": "TAKEHITO SASAYA (Practice) performs a Power Spike with 220% of Power Attack stat as power.",
          "3": "TAKEHITO SASAYA (Practice) performs a Power Spike with 220% of Power Attack stat as power.",
          "4": "TAKEHITO SASAYA (Practice) performs a Power Spike with 220% of Power Attack stat as power.",
          "5": "TAKEHITO SASAYA (Practice) performs a Power Spike with 220% of Power Attack stat as power.",
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
        effect: "When SASAYA (Practice) touches the ball, remove all debuffs.",
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
          "While SASAYA (Practice) is present, increases Reflex of players on your side by 10%.",
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

  // --------------------- KENJI FUTAKUCHI (SR / Practice) — Wing Spiker ---------------------
  {
    id: "kenji-futakuchi-sr",
    name: "Kenji Futakuchi (Practice)",
    shortName: "Futakuchi (Practice)",
    team: "Date Tech",
    rarity: "SR",
    roles: ["WS"],
    typeTags: ["Block", "Power Attack"],
    image: "/characters/date/kenji-futakuchi-sr.png",
    stats: {
      basic: {
        quickAttack: 65,
        powerAttack: 85,
        set: 82,
        serve: 80,
        receive: 85,
        block: 92,
        save: 80,
      },
      bonusAttack: { awareness: 0.05, strength: 0, attackTechnique: 0 },
      bonusDefense: { reflex: 0, spirit: 0, defenseTechnique: 0 },
    },
    skills: [
      {
        key: "passive",
        name: "Iron Wall Wing",
        levels: {
          "1": "While KENJI FUTAKUCHI (Practice) is in the front row, increases your side's Block power by 7% of each player's Block stat.",
          "2": "While KENJI FUTAKUCHI (Practice) is in the front row, increases your side's Block power by 7% of each player's Block stat.",
          "3": "While KENJI FUTAKUCHI (Practice) is in the front row, increases your side's Block power by 7% of each player's Block stat.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Haughty Blocker",
        levels: {
          "1": "FUTAKUCHI (Practice) performs a Block with 105% of Block stat as power.",
          "2": "FUTAKUCHI (Practice) performs a Block with 105% of Block stat as power.",
          "3": "FUTAKUCHI (Practice) performs a Block with 105% of Block stat as power.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Iron Wall Defense",
        levels: {
          "1": "When FUTAKUCHI (Practice) blocks, consumes 3 additional Stamina to increase this block's power by 14% of Block stat.",
          "2": "When FUTAKUCHI (Practice) blocks, consumes 3 additional Stamina to increase this block's power by 14% of Block stat.",
          "3": "When FUTAKUCHI (Practice) blocks, consumes 3 additional Stamina to increase this block's power by 14% of Block stat.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Ace Power",
        levels: {
          "1": "FUTAKUCHI (Practice) consumes 5 additional Stamina to perform a Power Spike with 210% of Power Attack stat as power.",
          "2": "FUTAKUCHI (Practice) consumes 5 additional Stamina to perform a Power Spike with 210% of Power Attack stat as power.",
          "3": "FUTAKUCHI (Practice) consumes 5 additional Stamina to perform a Power Spike with 210% of Power Attack stat as power.",
          "4": "FUTAKUCHI (Practice) consumes 5 additional Stamina to perform a Power Spike with 210% of Power Attack stat as power.",
          "5": "FUTAKUCHI (Practice) consumes 5 additional Stamina to perform a Power Spike with 210% of Power Attack stat as power.",
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
          "IRON WALL DEFENSE and ACE POWER require no additional Stamina.",
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
          "When front row players other than FUTAKUCHI (Practice) are Block-type, increases blocking power by 10% of Block stat.",
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

  // --------------------- YUTAKA OBARA (SR) — Wing Spiker ---------------------
  {
    id: "yutaka-obara-sr",
    name: "Yutaka Obara",
    shortName: "Obara",
    team: "Date Tech",
    rarity: "SR",
    roles: ["WS"],
    typeTags: ["Receive", "Block", "Team Morale"],
    image: "/characters/date/yutaka-obara-sr.png",
    stats: {
      basic: {
        quickAttack: 67,
        powerAttack: 93,
        set: 84,
        serve: 79,
        receive: 98,
        block: 94,
        save: 82,
      },
      bonusAttack: { awareness: 0.05, strength: 0, attackTechnique: 0 },
      bonusDefense: { reflex: 0, spirit: 0, defenseTechnique: 0 },
    },
    skills: [
      {
        key: "passive",
        name: "Defensive Presence",
        levels: {
          "1": "While YUTAKA OBARA is present, increases your side's Block power by 2% of each player's Block stat.",
          "2": "While YUTAKA OBARA is present, increases your side's Block power by 2% of each player's Block stat.",
          "3": "While YUTAKA OBARA is present, increases your side's Block power by 2% of each player's Block stat.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Get This One",
        levels: {
          "1": "YUTAKA OBARA performs a Receive with 120% of Receive stat as power.",
          "2": "YUTAKA OBARA performs a Receive with 120% of Receive stat as power.",
          "3": "YUTAKA OBARA performs a Receive with 120% of Receive stat as power.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Defense Boost",
        levels: {
          "1": "While YUTAKA OBARA is present, when your side achieves a PERFECT block, increases your Team Morale by 3.",
          "2": "While YUTAKA OBARA is present, when your side achieves a PERFECT block, increases your Team Morale by 3.",
          "3": "While YUTAKA OBARA is present, when your side achieves a PERFECT block, increases your Team Morale by 3.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Blocking Machine",
        levels: {
          "1": "YUTAKA OBARA performs a Block with 175% of Block stat as power; when blocking an opponent's Power Spike, increases blocking power by 10% of Block stat.",
          "2": "YUTAKA OBARA performs a Block with 175% of Block stat as power; when blocking an opponent's Power Spike, increases blocking power by 10% of Block stat.",
          "3": "YUTAKA OBARA performs a Block with 175% of Block stat as power; when blocking an opponent's Power Spike, increases blocking power by 10% of Block stat.",
          "4": "YUTAKA OBARA performs a Block with 175% of Block stat as power; when blocking an opponent's Power Spike, increases blocking power by 10% of Block stat.",
          "5": "YUTAKA OBARA performs a Block with 175% of Block stat as power; when blocking an opponent's Power Spike, increases blocking power by 10% of Block stat.",
        },
      },
    ],
    bonds: [
      {
        to: "takehito-sasaya-ssr",
        name: "Date Kōgyō Wing Spiker",
        participants: ["yutaka-obara-sr", "takehito-sasaya-ssr"],
        effect: "Power/Block synergy when aligned together.",
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
        effect: "When YUTAKA OBARA blocks, increases your Team Morale by 3.",
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
          "While YUTAKA OBARA is in the front row, when your side’s player blocks, increases that blocking player’s Reflex by 8%.",
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

  // --------------------- TAKANOBU AONE (SR / Practice) — Middle Blocker ---------------------
  {
    id: "takanobu-aone-sr",
    name: "Takanobu Aone (Practice)",
    shortName: "Aone (Practice)",
    team: "Date Tech",
    rarity: "SR",
    roles: ["MB"],
    typeTags: ["Quick Attack", "Block"],
    image: "/characters/date/takanobu-aone-sr.png",
    stats: {
      basic: {
        quickAttack: 94,
        powerAttack: 65,
        set: 82,
        serve: 87,
        receive: 84,
        block: 99,
        save: 79,
      },
      bonusAttack: { awareness: 0, strength: 0, attackTechnique: 0 },
      bonusDefense: { reflex: 0.05, spirit: 0, defenseTechnique: 0 },
    },
    skills: [
      {
        key: "passive",
        name: "Tenacious Block",
        levels: {
          "1": "Increases AONE (Practice)'s Block stat by 6.5%; when AONE performs a PERFECT Block, reduces opponent spiker's Stamina by 5.",
          "2": "Increases AONE (Practice)'s Block stat by 9%; when AONE performs a PERFECT Block, reduces opponent spiker's Stamina by 5.",
          "3": "Increases AONE (Practice)'s Block stat by 11.5%; when AONE performs a PERFECT Block, reduces opponent spiker's Stamina by 5.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Critical Explosiveness",
        levels: {
          "1": "TAKANOBU AONE (Practice) performs a Quick Spike with 120% of Quick Attack stat as power.",
          "2": "TAKANOBU AONE (Practice) performs a Quick Spike with 135% of Quick Attack stat as power.",
          "3": "TAKANOBU AONE (Practice) performs a Quick Spike with 150% of Quick Attack stat as power.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Iron Wall Block",
        levels: {
          "1": "While AONE (Practice) is present, increases his Block stat by 7% when another Block-type player is in your side's front row.",
          "2": "While AONE (Practice) is present, increases his Block stat by 9.5% when another Block-type player is in your side's front row.",
          "3": "While AONE (Practice) is present, increases his Block stat by 12% when another Block-type player is in your side's front row.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Vertical Wall",
        levels: {
          "1": "TAKANOBU AONE (Practice) performs a Block with 180% of Block stat as power.",
          "2": "TAKANOBU AONE (Practice) performs a Block with 195% of Block stat as power.",
          "3": "TAKANOBU AONE (Practice) performs a Block with 210% of Block stat as power.",
          "4": "TAKANOBU AONE (Practice) performs a Block with 225% of Block stat as power.",
          "5": "TAKANOBU AONE (Practice) performs a Block with 240% of Block stat as power.",
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
          "When TAKANOBU AONE (Practice) blocks, reduces opponent spiker’s Stamina by 5.",
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
          "VERTICAL WALL new effect: When blocking an opponent's Power Spike, increases blocking power by 15% of Block stat.",
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

  // --------------------- YASUSHI KAMASAKI (SR) — Middle Blocker ---------------------
  {
    id: "yasushi-kamasaki-sr",
    name: "Yasushi Kamasaki",
    shortName: "Kamasaki",
    team: "Date Tech",
    rarity: "SR",
    roles: ["MB"],
    typeTags: ["Quick Attack", "Block", "Combination Block"],
    image: "/characters/date/yasushi-kamasaki-sr.png",
    stats: {
      basic: {
        quickAttack: 94,
        powerAttack: 65,
        set: 84,
        serve: 82,
        receive: 94,
        block: 98,
        save: 79,
      },
      bonusAttack: { awareness: 0, strength: 0, attackTechnique: 0 },
      bonusDefense: { reflex: 0.05, spirit: 0, defenseTechnique: 0 },
    },
    skills: [
      {
        key: "passive",
        name: "Skilled Spike",
        levels: {
          "1": "Increases YASUSHI KAMASAKI’s Quick Attack stat by 10%.",
          "2": "Increases YASUSHI KAMASAKI’s Quick Attack stat by 10%.",
          "3": "Increases YASUSHI KAMASAKI’s Quick Attack stat by 10%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Tougher Iron Wall",
        levels: {
          "1": "YASUSHI KAMASAKI performs a Block with 105% of Block stat as power.",
          "2": "YASUSHI KAMASAKI performs a Block with 105% of Block stat as power.",
          "3": "YASUSHI KAMASAKI performs a Block with 105% of Block stat as power.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Blocking Tactics",
        levels: {
          "1": "While KAMASAKI is in the front row, increases your side’s Block power by 6% of each player's Block stat.",
          "2": "While KAMASAKI is in the front row, increases your side’s Block power by 6% of each player's Block stat.",
          "3": "While KAMASAKI is in the front row, increases your side’s Block power by 6% of each player's Block stat.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Speed Strike",
        levels: {
          "1": "Performs a Quick Spike with 215% of Quick Attack stat as power; for this Spike, KAMASAKI’s Awareness increases by 10%.",
          "2": "Performs a Quick Spike with 215% of Quick Attack stat as power; for this Spike, KAMASAKI’s Awareness increases by 10%.",
          "3": "Performs a Quick Spike with 215% of Quick Attack stat as power; for this Spike, KAMASAKI’s Awareness increases by 10%.",
          "4": "Performs a Quick Spike with 215% of Quick Attack stat as power; for this Spike, KAMASAKI’s Awareness increases by 10%.",
          "5": "Performs a Quick Spike with 215% of Quick Attack stat as power; for this Spike, KAMASAKI’s Awareness increases by 10%.",
        },
      },
    ],
    bonds: [
      {
        to: "kaname-moniwa-sr",
        name: "Date Kōgyō Seniors",
        participants: ["yasushi-kamasaki-sr", "kaname-moniwa-sr"],
        effect:
          "Team morale up when blocking; improves front-row defense rhythm.",
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
          "While KAMASAKI is present, when your side’s player performs a Critical play, increases your Team Morale by 4.",
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
          "While KAMASAKI is present, increases Reflex of your side’s players by 10% when blocking.",
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
