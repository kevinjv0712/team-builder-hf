// src/teams/aoba-johsai.ts
import type { Player } from "@/types";

export const aobaJohsaiPlayers: Player[] = [
  // ===== AKIRA KUNIMI (SP) =====
  {
    id: "akira-kunimi-sp",
    name: "Akira Kunimi",
    shortName: "Kunimi",
    team: "AobaJohsai",
    rarity: "SR",
    roles: ["OP"],
    typeTags: ["Receive", "Power Attack"],
    image: "/characters/aoba-johsai/akira-kunimi-sp.jpg",
    server: "Japan",
    stats: {
      basic: {
        quickAttack: 109,
        powerAttack: 159,
        set: 128,
        serve: 136,
        receive: 151,
        block: 144,
        save: 128,
      },
      bonusAttack: { awareness: 0.05, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.0, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Leave Some Energy",
        levels: {
          "1": "Kunimi’s [Power Attack] +10%. If stamina is below 80, [Powe attack] increases an additional 1.2%. If his stamina limit exceeds 80 at the end of each rally, his stamina limit will reduce by 10 and he will recover 120 stamina. Kunimi gains 1 stack of [Conserve Stamina] for every 10 stamina lost by an ally, each stack increases [Awareness] by 7%. Max 30 stacks, max 10 stacks per rally.",
          "2": "Kunimi’s [Power Attack] +13%. If stamina is below 80, [Powe attack] increases an additional 1.2%. If his stamina limit exceeds 80 at the end of each rally, his stamina limit will reduce by 10 and he will recover 120 stamina. Kunimi gains 1 stack of [Conserve Stamina] for every 10 stamina lost by an ally, each stack increases [Awareness] by 7%. Max 30 stacks, max 10 stacks per rally.",
          "3": "Kunimi’s [Power Attack] +16%. If stamina is below 80, [Powe attack] increases an additional 1.2%. If his stamina limit exceeds 80 at the end of each rally, his stamina limit will reduce by 10 and he will recover 120 stamina. Kunimi gains 1 stack of [Conserve Stamina] for every 10 stamina lost by an ally, each stack increases [Awareness] by 7%. Max 30 stacks, max 10 stacks per rally.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Accurate Defense",
        levels: {
          "1": "Receive x140% and increases the main parameters of all team members by 10% until the ball goes over the net twice",
          "2": "Receive x160% and increases the main parameters of all team members by 10% until the ball goes over the net twice",
          "3": "Receive x180% and increases the main parameters of all team members by 10% until the ball goes over the net twice",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Full Power",
        levels: {
          "1": "Each time Kunimi's stamina is recovered, [Power Attack] increases by 0.8%. Up to a maximum of 16%. At the start of a rally, if stamina limit is 80 or less, gains the [Critical Moment] effect. When he has this effect, the cooldown of [Hot Fighting Spirit] will be 6 net crosses. When kunimi's [Awareness] exceeds 100%, for every 1% it exceeds, [Power] increases 0.9%, up to 90%. After gainin [Critical Moment] effect, the first 2 times he actives [Hot Fighting Spirit] the cooldown will be reset.",
          "2": "Each time Kunimi's stamina is recovered, [Power Attack] increases by 1.1%. Up to a maximum of 22%. At the start of a rally, if stamina limit is 80 or less, gains the [Critical Moment] effect. When he has this effect, the cooldown of [Hot Fighting Spirit] will be 6 net crosses. When kunimi's [Awareness] exceeds 100%, for every 1% it exceeds, [Power] increases 0.9%, up to 90%. After gainin [Critical Moment] effect, the first 2 times he actives [Hot Fighting Spirit] the cooldown will be reset.",
          "3": "Each time Kunimi's stamina is recovered, [Power Attack] increases by 1.4%. Up to a maximum of 28%. At the start of a rally, if stamina limit is 80 or less, gains the [Critical Moment] effect. When he has this effect, the cooldown of [Hot Fighting Spirit] will be 6 net crosses. When kunimi's [Awareness] exceeds 100%, for every 1% it exceeds, [Power] increases 0.9%, up to 90%. After gainin [Critical Moment] effect, the first 2 times he actives [Hot Fighting Spirit] the cooldown will be reset.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Hot Fighting Spirit",
        levels: {
          "1": "Kunimi consumes an additional 8 stamina and performs a Power Spike x295%. If stamina exceeds 50, the power of this attack increases by [Power Attack] x 50%",
          "2": "Kunimi consumes an additional 8 stamina and performs a Power Spike x315%. If stamina exceeds 50, the power of this attack increases by [Power Attack] x 50%",
          "3": "Kunimi consumes an additional 8 stamina and performs a Power Spike x335%. If stamina exceeds 50, the power of this attack increases by [Power Attack] x 50%",
          "4": "Kunimi consumes an additional 8 stamina and performs a Power Spike x355%. If stamina exceeds 50, the power of this attack increases by [Power Attack] x 50%",
          "5": "Kunimi consumes an additional 8 stamina and performs a Power Spike x375%. If stamina exceeds 50, the power of this attack increases by [Power Attack] x 50%",
        },
      },
    ],
    bonds: [
      {
        to: "akira-kunimi-sp",
        name: "Sports Festival",
        participants: ["akira-kunimi-sp", "kanji-koganegawa-sp"],
        effect:
          "When an ally touches the ball, consumes an additional 1 stamina and increases the main stat of that ally by 3% until the ball goes over the net twice. If the touch is a block, the ally's [Block] is increase by an additional 5%.",
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
        effect: "Soon..",
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Main parameters +13%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect: "Soon..",
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
        secondaryType: "Receive",
        secondaryCount: 2,
        reason: "OP que aporta daño y estabilidad al pase.",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // ===== TORU OIKAWA (UR) =====
  {
    id: "toru-oikawa-ur",
    name: "Toru Oikawa",
    shortName: "Oikawa",
    team: "AobaJohsai",
    rarity: "UR",
    roles: ["S"],
    typeTags: ["Serve", "Setter", "Power Attack"],
    image: "/characters/aoba-johsai/toru-oikawa-ur.jpg",
    server: "Global",
    stats: {
      basic: {
        quickAttack: 64,
        powerAttack: 128,
        set: 156,
        serve: 160,
        receive: 118,
        block: 134,
        save: 106,
      },
      bonusAttack: { awareness: 0.05, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.0, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      // 指揮者
      {
        key: "passive",
        name: "Conductor",
        levels: {
          "1": "While Oikawa is on court: allies’ [Awareness] +10%. When an ally activates a Power Attack skill, consume 6 stacks of “Attack Tempo” to guarantee a Nice Play.",
          "2": "While Oikawa is on court: allies’ [Awareness] +14%. Same Nice Play effect (consumes 6 stacks).",
          "3": "While Oikawa is on court: allies’ [Awareness] +18%. Same Nice Play effect (consumes 6 stacks).",
          "4": undefined,
          "5": undefined,
        },
      },
      // 圧倒的なセンス
      {
        key: "active",
        name: "Overwhelming Sense",
        levels: {
          "1": "Performs a Two-Attack with [Set] x115% (cannot be blocked). While Oikawa is on court, allies with Power Attack gain [Power] +20%.",
          "2": "Two-Attack [Set] x130% (unblockable). Allies with Power Attack: [Power] +20%.",
          "3": "Two-Attack [Set] x145% (unblockable). Allies with Power Attack: [Power] +20%.",
          "4": undefined,
          "5": undefined,
        },
      },
      // 大王様のトス
      {
        key: "passive",
        name: "King’s Toss",
        levels: {
          "1": "Oikawa performs a Set with [Set] x120%. When an ally makes a Nice Play, gain 1 stack of “Attack Tempo”. Each stack gives allies’ [Awareness] +1% (max 10 stacks).",
          "2": "Set [Set] x135%. Same “Attack Tempo” effect (+1% Awareness per stack, max 10).",
          "3": "Set [Set] x150%. Same “Attack Tempo” effect (+1% Awareness per stack, max 10).",
          "4": undefined,
          "5": undefined,
        },
      },
      // 大半径のジャンプサーブ
      {
        key: "finisher",
        name: "Grand King Jump Serve",
        levels: {
          "1": "Performs a Power Jump Serve with [Serve] x260%. For this play: Oikawa’s [Awareness] +20% and [Power] +20%.",
          "2": "Power Jump Serve [Serve] x275%. Same +20% Awareness/Power for this play.",
          "3": "Power Jump Serve [Serve] x290%. Same +20% Awareness/Power for this play.",
          "4": "Power Jump Serve [Serve] x305%. Same +20% Awareness/Power for this play.",
          "5": "Power Jump Serve [Serve] x320%. Same +20% Awareness/Power for this play.",
        },
      },
    ],
    bonds: [
      {
        to: "toru-oikawa-ur",
        name: "Childhood Duo",
        participants: ["toru-oikawa-ur", "hajime-iwaizumi-ssr"],
        effect:
          "If Oikawa sets to Iwaizumi this rally: Iwaizumi’s [Power Attack] x (Lv1: 250%, Lv2: 270%, Lv3: 285%, Lv4: 300%, Lv5: 315%) and [Awareness] +10% for the spike.",
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
          "Start of match: gain 2 stacks of “Attack Tempo”. While Oikawa is on court, each stack also increases allies’ [Set/Serve] effectiveness by 0.5%.",
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
          "When Grand King Jump Serve scores, gain +2 “Attack Tempo” and its cooldown resets (once per set).",
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
        reason: "Maximiza control del juego y presión desde el saque.",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // ===== TORU OIKAWA (SSR — GLOBAL) =====
  {
    id: "toru-oikawa-ssr",
    name: "Toru Oikawa",
    shortName: "Oikawa",
    team: "AobaJohsai",
    rarity: "SSR",
    roles: ["S"],
    typeTags: ["Serve", "Setter", "Power Attack"],
    image: "/characters/aoba-johsai/toru-oikawa-ssr.jpg",
    server: "Global",
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
          "1": 'Oikawa’s [Set] +10%. When your players cast a Spike skill, they gain 1 stack of "Attack Tempo" (Awareness +1% per stack, up to 10).',
          "2": "Oikawa’s [Set] +12%. Same stacks (Awareness +1% per stack, up to 10).",
          "3": "Oikawa’s [Set] +14%. Same stacks (Awareness +1% per stack, up to 10).",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Game Changer",
        levels: {
          "1": "If your side is behind at turn start: allies’ basic stats +6% for 8 net crossings.",
          "2": "If behind: allies’ basic stats +9% for 8 net crossings.",
          "3": "If behind: allies’ basic stats +12% for 8 net crossings.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Control Tower",
        levels: {
          "1": 'While Oikawa is on court: allies’ [Awareness] +6%. Each "Attack Tempo" stack adds +1% Awareness.',
          "2": "While Oikawa is on court: allies’ [Awareness] +9%. Each stack adds +1%.",
          "3": "While Oikawa is on court: allies’ [Awareness] +12%. Each stack adds +1.5%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Double-Edged Serve",
        levels: {
          "1": "Power Jump Serve [Serve] x240%; for this serve Oikawa’s [Awareness] +15%. 5% fixed fail chance.",
          "2": "Power Jump Serve [Serve] x255%; same +15% Awareness and fail chance.",
          "3": "Power Jump Serve [Serve] x270%; same +15% Awareness and fail chance.",
          "4": "Power Jump Serve [Serve] x285%; same +15% Awareness and fail chance.",
          "5": "Power Jump Serve [Serve] x300%; same +15% Awareness and fail chance.",
        },
      },
    ],
    bonds: [
      {
        to: "toru-oikawa-ssr",
        name: "Team Chemistry",
        participants: ["toru-oikawa-ssr", "hajime-iwaizumi-sr"],
        effect:
          "Toru Oikawa (SSR) and Hajime Iwaizumi (SR)'s [awareness] has increased (Lv1: 6%, Lv2: 7%, Lv3: 8%, Lv4: 9%, Lv5: 10%)",
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
          "DOUBLE-EDGED SERVE: serves never fail; when Oikawa serves, his [Awareness] +15%.",
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
          'When casting DOUBLE-EDGED SERVE, gain 2 stacks of "Attack Tempo"; on score, its cooldown resets.',
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
        secondaryType: "Serve",
        secondaryCount: 2,
        reason: "Set consistente y presión con saque.",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // ===== HAJIME IWAIZUMI (SSR — GLOBAL) =====
  {
    id: "hajime-iwaizumi-ssr",
    name: "Hajime Iwaizumi",
    shortName: "Iwaizumi",
    team: "AobaJohsai",
    rarity: "SSR",
    roles: ["WS"],
    typeTags: ["Power Attack"],
    image: "/characters/aoba-johsai/hajime-iwaizumi-ssr.jpg",
    server: "Global",
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
          "1": "Iwaizumi’s [Awareness] +5% and [Strength] +10%.",
          "2": "Iwaizumi’s [Awareness] +5% and [Strength] +15%.",
          "3": "Iwaizumi’s [Awareness] +8% and [Strength] +15%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Focused Defense",
        levels: {
          "1": "Performs [Receive] x120%.",
          "2": "[Receive] x135%.",
          "3": "[Receive] x150%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Vice-Captain's Rally",
        levels: {
          "1": "While on court: allies’ [Strength] +6%.",
          "2": "While on court: allies’ [Strength] +8.5%.",
          "3": "While on court: allies’ [Strength] +11%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Head-to-Head",
        levels: {
          "1": "Power Spike [Power Attack] x240%; on Critical, extra +15% of [Power Attack] as power.",
          "2": "Power Spike [Power Attack] x255%; on Critical, extra +15%.",
          "3": "Power Spike [Power Attack] x270%; on Critical, extra +15%.",
          "4": "Power Spike [Power Attack] x285%; on Critical, extra +15%.",
          "5": "Power Spike [Power Attack] x300%; on Critical, extra +15%.",
        },
      },
    ],
    bonds: [
      {
        to: "hajime-iwaizumi-ssr",
        name: "The Wolf Pack",
        participants: ["hajime-iwaizumi-ssr", "kentaro-kyotani-ssr"],
        effect:
          "Hajime Iwaizumi's [banging], Kentaro Kyotani's [banging] (Lv.1:6%, Lv2:7%, Lv.3:8%, Lv.4:9%, Lv.5:10%) up",
      },
      {
        to: "hajime-iwaizumi-ssr",
        name: "Childhood Duo",
        participants: ["toru-oikawa-ur", "hajime-iwaizumi-ssr"],
        effect:
          "If Oikawa sets to Iwaizumi: Iwaizumi’s [Power Attack] +15% and spike power scales up as per bond on Oikawa UR.",
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
        effect: "While on court: allies’ [Strength] +15%.",
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Main parameters +10%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect: "HEAD-TO-HEAD: reduces opponent’s blocker [Block] by 20%.",
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
        reason: "DPS con estabilidad defensiva.",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // ===== HAJIME IWAIZUMI (SR — GLOBAL) =====
  {
    id: "hajime-iwaizumi-sr",
    name: "Hajime Iwaizumi",
    shortName: "Iwaizumi",
    team: "AobaJohsai",
    rarity: "SR",
    roles: ["WS"],
    typeTags: ["Power Attack"],
    image: "/characters/aoba-johsai/hajime-iwaizumi-sr.jpg",
    server: "Global",
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
          "1": "Iwaizumi (Practice) [Power Attack] +10%.",
          "2": "Iwaizumi (Practice) [Power Attack] +11.5%.",
          "3": "Iwaizumi (Practice) [Power Attack] +13%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Calm Receive",
        levels: {
          "1": "Receive x115%; for this receive, [Spirit] +8%.",
          "2": "Receive x130%; [Spirit] +9.5%.",
          "3": "Receive x145%; [Spirit] +11%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Rising Spirit",
        levels: {
          "1": "[Awareness] & [Reflex] +5%.",
          "2": "[Awareness] & [Reflex] +6.5%.",
          "3": "[Awareness] & [Reflex] +8%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Unstoppable Spike",
        levels: {
          "1": "Power Spike x220%.",
          "2": "Power Spike x235%.",
          "3": "Power Spike x250%.",
          "4": "Power Spike x265%.",
          "5": "Power Spike x280%.",
        },
      },
    ],
    bonds: [
      {
        to: "hajime-iwaizumi-sr",
        name: "Team Chemistry",
        participants: ["toru-oikawa-ssr", "hajime-iwaizumi-sr"],
        effect:
          "Toru Oikawa (SSR) and Hajime Iwaizumi (SR)'s [awareness] has increased (Lv1: 6%, Lv2: 7%, Lv3: 8%, Lv4: 9%, Lv5: 10%)",
      },
      {
        to: "hajime-iwaizumi-sr",
        name: "The Wolf Pack",
        participants: ["hajime-iwaizumi-sr", "kentaro-kyotani-sr"],
        effect:
          "Increases Hajime Iwaizumi and Kentaro Kyotanis Power attact stat by  (Lv.1:6%, Lv2:7%, Lv.3:8%, Lv.4:9%, Lv.5:10%) ",
      },
    ],
    resonances: [
      { level: "I", name: "Skill Resonance I", effect: "Main parameters +6%." },
      {
        level: "II",
        name: "Skill Resonance II",
        effect: "UNSTOPPABLE SPIKE: +15% [Awareness] during the spike.",
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Main parameters +6%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect: "UNSTOPPABLE SPIKE: +15% [Strength] during the spike.",
      },
      { level: "V", name: "Skill Resonance V", effect: "Main parameters +6%." },
    ],
    potentials: {
      recommended: {
        primaryType: "Power Attack",
        primaryCount: 4,
        secondaryType: "Serve",
        secondaryCount: 2,
        reason: "Ataque constante y presión extra con saque.",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // ===== KENTARO KYOTANI (SSR — GLOBAL) =====
  {
    id: "kentaro-kyotani-ssr",
    name: "Kentaro Kyotani",
    shortName: "Kyotani",
    team: "AobaJohsai",
    rarity: "SSR",
    roles: ["OP"],
    typeTags: ["Power Attack", "Serve"],
    image: "/characters/aoba-johsai/kentaro-kyotani-ssr.jpg",
    server: "Global",
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
          "1": "Kyotani’s [Awareness] +8% and [Power Attack] +5%.",
          "2": "Kyotani’s [Awareness] +9.5% and [Power Attack] +6.5%.",
          "3": "Kyotani’s [Awareness] +11% and [Power Attack] +8%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Mad Dog Serve",
        levels: {
          "1": "Serve x130%; for this serve, [Awareness] +15% (10% fixed fail).",
          "2": "Serve x145%; +15% Awareness, 10% fail.",
          "3": "Serve x160%; +15% Awareness, 10% fail.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Strength Burst",
        levels: {
          "1": "[Strength] +18%.",
          "2": "[Strength] +21%.",
          "3": "[Strength] +24%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Mad Dog's Fang",
        levels: {
          "1": "Power Spike x210%; reduces blocking & receiving opponents’ Stamina by 10.",
          "2": "Power Spike x225%; same stamina reduction.",
          "3": "Power Spike x240%; same.",
          "4": "Power Spike x255%; same.",
          "5": "Power Spike x270%; same.",
        },
      },
    ],
    bonds: [
      {
        to: "kentaro-kyotani-ssr",
        name: "The Wolf Pack",
        participants: ["hajime-iwaizumi-ssr", "kentaro-kyotani-ssr"],
        effect:
          "Hajime Iwaizumi's [banging], Kentaro Kyotani's [banging] (Lv.1:6%, Lv2:7%, Lv.3:8%, Lv.4:9%, Lv.5:10%) up",
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
          "On Critical Power Spike: -5 Stamina to opponent blockers/receivers.",
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Main parameters +10%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect: "When receiver <50% Stamina: their [Receive] -18%.",
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
        reason: "OP agresivo con presión desde el servicio.",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // ===== KENTARO KYOTANI (SR — GLOBAL) =====
  {
    id: "kentaro-kyotani-sr",
    name: "Kentaro Kyotani",
    shortName: "Kyotani",
    team: "AobaJohsai",
    rarity: "SR",
    roles: ["OP"],
    typeTags: ["Power Attack", "Serve"],
    image: "/characters/aoba-johsai/kentaro-kyotani-sr.jpg",
    server: "Global",
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
          "1": "Jump Serve [Serve] x120%.",
          "2": "Jump Serve [Serve] x135%.",
          "3": "Jump Serve [Serve] x150%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Explosive Strength",
        levels: {
          "1": "When Kyotani spikes: [Strength] +15% for that spike.",
          "2": "… +18% for that spike.",
          "3": "… +21% for that spike.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Revving Up",
        levels: {
          "1": "[Power Attack] +8%; on Power Spike, gain 1 “Heat Up” stack (+1% Power Attack, up to 4).",
          "2": "[Power Attack] +10%; same stacks.",
          "3": "[Power Attack] +12%; same stacks.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Rampaging Offense",
        levels: {
          "1": "Power Spike x220%.",
          "2": "Power Spike x235%.",
          "3": "Power Spike x250%.",
          "4": "Power Spike x265%.",
          "5": "Power Spike x280%.",
        },
      },
    ],
    bonds: [
      {
        to: "kentaro-kyotani-sr",
        name: "The Wolf Pack",
        participants: ["hajime-iwaizumi-sr", "kentaro-kyotani-sr"],
        effect:
          "Increases Hajime Iwaizumi and Kentaro Kyotanis Power attact stat by  (Lv.1:6%, Lv2:7%, Lv.3:8%, Lv.4:9%, Lv.5:10%) ",
      },
    ],
    resonances: [
      { level: "I", name: "Skill Resonance I", effect: "Main parameters +6%." },
      {
        level: "II",
        name: "Skill Resonance II",
        effect: "RAMPAGING OFFENSE: +15% [Awareness] during the spike.",
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Main parameters +6%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect:
          "REVVING UP trigger broadened: now when Kyotani touches the ball.",
      },
      { level: "V", name: "Skill Resonance V", effect: "Main parameters +6%." },
    ],
    potentials: {
      recommended: {
        primaryType: "Power Attack",
        primaryCount: 4,
        secondaryType: "Serve",
        secondaryCount: 2,
        reason: "Ataque + presión con saque desde SR.",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // ===== ISSEI MATSUKAWA (SR — GLOBAL) =====
  {
    id: "issei-matsukawa-sr",
    name: "Issei Matsukawa",
    shortName: "Matsukawa",
    team: "AobaJohsai",
    rarity: "SR",
    roles: ["MB"],
    typeTags: ["Block", "Quick Attack"],
    image: "/characters/aoba-johsai/issei-matsukawa-sr.jpg",
    server: "Global",
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
          "1": "When Matsukawa blocks an opponent's Quick Spike: +11% of [Block] as extra block power.",
          "2": "When Matsukawa blocks an opponent's Quick Spike: +13% of [Block] as extra block power.",
          "3": "When Matsukawa blocks an opponent's Quick Spike: +15% of [Block] as extra block power.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Overwhelming Spike",
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
        name: "Crushing Block",
        levels: {
          "1": "Matsukawa’s [Block] +8%. On PERFECT Block: next ally spiker [Awareness] +4%.",
          "2": "Matsukawa’s [Block] +10.5%. On PERFECT Block: next ally spiker [Awareness] +4%.",
          "3": "Matsukawa’s [Block] +1%. On PERFECT Block: next ally spiker [Awareness] +4%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Unbreakable Block",
        levels: {
          "1": "Block x180%.",
          "2": "Block x195%.",
          "3": "Block x210%.",
          "4": "Block x225%.",
          "5": "Block x240%.",
        },
      },
    ],
    bonds: [
      {
        to: "issei-matsukawa-sr",
        name: "Seijoh's Senior Year Pillars",
        participants: ["issei-matsukawa-sr", "takahiro-hanamaki-sr"],
        effect: "Boosts Matsukawa’s [Block] and Hanamaki’s [Receive].",
      },
    ],
    resonances: [
      { level: "I", name: "Skill Resonance I", effect: "Main parameters +6%." },
      {
        level: "II",
        name: "Skill Resonance II",
        effect: "PERFECT TOUCH triggers more reliably versus Quick Spikes.",
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Main parameters +6%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect: "UNBREAKABLE BLOCK: +10% [Reflex] during the block.",
      },
      { level: "V", name: "Skill Resonance V", effect: "Main parameters +6%." },
    ],
    potentials: {
      recommended: {
        primaryType: "Block",
        primaryCount: 4,
        secondaryType: "Quick Attack",
        secondaryCount: 2,
        reason: "Muro principal con amenaza de quick.",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // ===== TAKAHIRO HANAMAKI (SR — GLOBAL) =====
  {
    id: "takahiro-hanamaki-sr",
    name: "Takahiro Hanamaki",
    shortName: "Hanamaki",
    team: "AobaJohsai",
    rarity: "SR",
    roles: ["WS"],
    typeTags: ["Receive", "Power Attack"],
    image: "/characters/aoba-johsai/takahiro-hanamaki-sr.jpg",
    server: "Global",
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
          "1": "Hanamaki’s [Awareness] +8%. On Critical Power Spike: blockers’ [Block] -5%.",
          "2": "Hanamaki’s [Awareness] +10%. On Critical Power Spike: blockers’ [Block] -5%.",
          "3": "Hanamaki’s [Awareness] +12%. On Critical Power Spike: blockers’ [Block] -5%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Precise Spike",
        levels: {
          "1": 'Power Spike x115%; gain 1 "Attack Tempo" (allies’ [Awareness] +1% per stack, up to 10).',
          "2": 'Power Spike x130%; gain 1 "Attack Tempo" (same).',
          "3": 'Power Spike x145%; gain 1 "Attack Tempo" (same).',
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Perfect Defense",
        levels: {
          "1": "Hanamaki’s [Receive] +8%. When receiving Quick Spike: +4% of [Receive] as extra power.",
          "2": "Hanamaki’s [Receive] +10%. When receiving Quick Spike: +5.5% of [Receive].",
          "3": "Hanamaki’s [Receive] +12%. When receiving Quick Spike: +7% of [Receive].",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Perfect Read",
        levels: {
          "1": "Receive x220%.",
          "2": "Receive x235%.",
          "3": "Receive x250%.",
          "4": "Receive x265%.",
          "5": "Receive x280%.",
        },
      },
    ],
    bonds: [
      {
        to: "takahiro-hanamaki-sr",
        name: "Seijoh's Senior Year Pillars",
        participants: ["issei-matsukawa-sr", "takahiro-hanamaki-sr"],
        effect: "Boosts Matsukawa’s [Block] and Hanamaki’s [Receive].",
      },
    ],
    resonances: [
      { level: "I", name: "Skill Resonance I", effect: "Main parameters +6%." },
      {
        level: "II",
        name: "Skill Resonance II",
        effect: 'Start of match: +1 "Attack Tempo" to your side.',
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Main parameters +6%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect: "On PERFECT READ: allies’ [Reflex] +10% for 4 net crossings.",
      },
      { level: "V", name: "Skill Resonance V", effect: "Main parameters +6%." },
    ],
    potentials: {
      recommended: {
        primaryType: "Receive",
        primaryCount: 4,
        secondaryType: "Power Attack",
        secondaryCount: 2,
        reason: "Equilibrio: recepción sólida con amenaza de remate.",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // ===== SHINJI WATARI (SR — GLOBAL) =====
  {
    id: "shinji-watari-sr",
    name: "Shinji Watari",
    shortName: "Watari",
    team: "AobaJohsai",
    rarity: "SR",
    roles: ["LI"],
    typeTags: ["Receive"],
    image: "/characters/aoba-johsai/shinji-watari-sr.jpg",
    server: "Global",
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
          "1": "Watari’s [Save] & [Receive] +8%.",
          "2": "Watari’s [Save] & [Receive] +10%.",
          "3": "Watari’s [Save] & [Receive] +12%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Skilled Save",
        levels: {
          "1": "Save x120%.",
          "2": "Save x135%.",
          "3": "Save x150%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Seamless Reception",
        levels: {
          "1": "When receiving Quick Spike: +20% of [Receive] as extra power.",
          "2": "When receiving Quick Spike: +35% of [Receive] as extra power.",
          "3": "When receiving Quick Spike: +50% of [Receive] as extra power.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Consistent Reception",
        levels: {
          "1": "Receive x215%. On PERFECT: allies’ [Strength] +10% when Power Spiking for 1 turn.",
          "2": "Receive x230% (+same buff).",
          "3": "Receive x245% (+same buff).",
          "4": "Receive x260% (+same buff).",
          "5": "Receive x275% (+same buff).",
        },
      },
    ],
    bonds: [],
    resonances: [
      { level: "I", name: "Skill Resonance I", effect: "Main parameters +6%." },
      {
        level: "II",
        name: "Skill Resonance II",
        effect:
          "While on court: back-row allies’ Receive power +5% of their [Receive].",
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Main parameters +6%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect:
          "CONSISTENT RECEPTION: additional +10% [Strength] to allies’ Power Spikes (same duration).",
      },
      { level: "V", name: "Skill Resonance V", effect: "Main parameters +6%." },
    ],
    potentials: {
      recommended: {
        primaryType: "Receive",
        primaryCount: 4,
        secondaryType: "Save",
        secondaryCount: 2,
        reason: "Líbero puro: recepción + estabilidad en defensa.",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // ===== SHIGERU YAHABA (SR — GLOBAL) =====
  {
    id: "shigeru-yahaba-sr",
    name: "Shigeru Yahaba",
    shortName: "Yahaba",
    team: "AobaJohsai",
    rarity: "SR",
    roles: ["S"],
    typeTags: ["Serve", "Power Attack", "Setter"],
    image: "/characters/aoba-johsai/shigeru-yahaba-sr.jpg",
    server: "Global",
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
          "1": "Set x120%.",
          "2": "Set x135%.",
          "3": "Set x150%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Developing Setter",
        levels: {
          "1": "Yahaba’s [Serve] & [Set] +8%.",
          "2": "Yahaba’s [Serve] & [Set] +10%.",
          "3": "Yahaba’s [Serve] & [Set] +12%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Pride Defense",
        levels: {
          "1": "Yahaba’s [Set] +4%. While on court: allies’ [Awareness] & [Reflex] +8%.",
          "2": "Yahaba’s [Set] +6%. While on court: allies’ [Awareness] & [Reflex] +8%.",
          "3": "Yahaba’s [Set] +8%. While on court: allies’ [Awareness] & [Reflex] +8%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Will to Score",
        levels: {
          "1": "Jump Serve x220%.",
          "2": "Jump Serve x235%.",
          "3": "Jump Serve x250%.",
          "4": "Jump Serve x265%.",
          "5": "Jump Serve x280%.",
        },
      },
    ],
    bonds: [],
    resonances: [
      { level: "I", name: "Skill Resonance I", effect: "Main parameters +6%." },
      {
        level: "II",
        name: "Skill Resonance II",
        effect: "Yahaba’s first serve power +10% of [Serve].",
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Main parameters +6%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect:
          "While on court, first two ally Power Spikes: +8% extra of spiker’s [Power Attack] and increase spiker [Awareness].",
      },
      { level: "V", name: "Skill Resonance V", effect: "Main parameters +6%." },
    ],
    potentials: {
      recommended: {
        primaryType: "Setter",
        primaryCount: 4,
        secondaryType: "Serve",
        secondaryCount: 2,
        reason: "Apoya a Oikawa con sets sólidos y presión de saque.",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // ===== YUTARO KINDAICHI (SR — GLOBAL) =====
  {
    id: "yutaro-kindaichi-sr",
    name: "Yutaro Kindaichi",
    shortName: "Kindaichi",
    team: "AobaJohsai",
    rarity: "SR",
    roles: ["MB"],
    typeTags: ["Quick Attack", "Block"],
    image: "/characters/aoba-johsai/yutaro-kindaichi-sr.jpg",
    server: "Global",
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
          "1": "On Kindaichi’s Quick Spike: opposing blocker [Block] -10%.",
          "2": "On Kindaichi’s Quick Spike: opposing blocker [Block] -12%.",
          "3": "On Kindaichi’s Quick Spike: opposing blocker [Block] -14%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Decisive Hit",
        levels: {
          "1": "Kindaichi’s [Awareness] +8% & [Strength] +8%.",
          "2": "Kindaichi’s [Awareness] +10% & [Strength] +10%.",
          "3": "Kindaichi’s [Awareness] +12% & [Strength] +12%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Elevated Block",
        levels: {
          "1": "Block x105%.",
          "2": "Block x120%.",
          "3": "Block x135%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Power C-Quick",
        levels: {
          "1": "Quick Spike x220%.",
          "2": "Quick Spike x235%.",
          "3": "Quick Spike x250%.",
          "4": "Quick Spike x265%.",
          "5": "Quick Spike x280%.",
        },
      },
    ],
    bonds: [
      {
        to: "yutaro-kindaichi-sr",
        name: "Blunt and Composed",
        participants: ["yutaro-kindaichi-sr", "akira-kunimi-sr"],
        effect:
          "Boosts Kindaichi’s [Quick Attack] and Kunimi’s [Power Attack].",
      },
    ],
    resonances: [
      { level: "I", name: "Skill Resonance I", effect: "Main parameters +6%." },
      {
        level: "II",
        name: "Skill Resonance II",
        effect:
          "After POWER C-QUICK: +10% [Strength]; next ally Spike gains extra power.",
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Main parameters +6%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect:
          "On Critical Quick Spike: reduce opponent blocker’s power by 12% of their [Block].",
      },
      { level: "V", name: "Skill Resonance V", effect: "Main parameters +6%." },
    ],
    potentials: {
      recommended: {
        primaryType: "Quick Attack",
        primaryCount: 4,
        secondaryType: "Block",
        secondaryCount: 2,
        reason: "MB de combo rápido con utilidad en muro.",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // ===== AKIRA KUNIMI (SR — GLOBAL) =====
  {
    id: "akira-kunimi-sr",
    name: "Akira Kunimi",
    shortName: "Kunimi",
    team: "AobaJohsai",
    rarity: "SR",
    roles: ["OP"],
    typeTags: ["Receive", "Power Attack"],
    image: "/characters/aoba-johsai/akira-kunimi-sr.jpg",
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
        name: "Efficient Spike",
        levels: {
          "1": "Kunimi’s [Power Attack] +10%.",
          "2": "Kunimi’s [Power Attack] +12%.",
          "3": "Kunimi’s [Power Attack] +14%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Effortless Reception",
        levels: {
          "1": "Receive x120%.",
          "2": "Receive x135%.",
          "3": "Receive x150%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Power Saving Mode",
        levels: {
          "1": "Stamina consumption -15%.",
          "2": "Stamina consumption -20%.",
          "3": "Stamina consumption -25%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Focus Mode",
        levels: {
          "1": "Power Spike x220%.",
          "2": "Power Spike x235%.",
          "3": "Power Spike x250%.",
          "4": "Power Spike x265%.",
          "5": "Power Spike x280%.",
        },
      },
    ],
    bonds: [
      {
        to: "akira-kunimi-sr",
        name: "Blunt and Composed",
        participants: ["yutaro-kindaichi-sr", "akira-kunimi-sr"],
        effect:
          "Boosts Kindaichi’s [Quick Attack] and Kunimi’s [Power Attack].",
      },
    ],
    resonances: [
      { level: "I", name: "Skill Resonance I", effect: "Main parameters +6%." },
      {
        level: "II",
        name: "Skill Resonance II",
        effect: "If turn > 3: Kunimi’s spiking [Awareness] +12%.",
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Main parameters +6%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect:
          "FOCUS MODE: enables tip with +8% extra of [Power Attack] and increases [Strength].",
      },
      { level: "V", name: "Skill Resonance V", effect: "Main parameters +6%." },
    ],
    potentials: {
      recommended: {
        primaryType: "Power Attack",
        primaryCount: 4,
        secondaryType: "Receive",
        secondaryCount: 2,
        reason: "OP que aporta daño y estabilidad al pase.",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },
];
