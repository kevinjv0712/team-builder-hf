// src/data/teams/shiratorizawa.ts
import type { Player } from "@/types";

export const shiratorizawaPlayers: Player[] = [
  // ===================== WAKATOSHI USHIJIMA (UR — JAPAN) =====================
  {
    id: "wakatoshi-ushijima-ur",
    name: "Wakatoshi Ushijima",
    shortName: "Ushijima",
    team: "Shiratorizawa",
    rarity: "UR",
    roles: ["OP"],
    typeTags: ["Power Attack", "Serve"],
    image: "/characters/shiratorizawa/wakatoshi-ushijima-ur.jpg",
    server: "Global",
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
          "1": "Ushijima’s [Awareness] +8%. At the end of each turn while on court, gains additional +3% [Awareness] (stacks up to 4 times).",
          "2": "Ushijima’s [Awareness] +10%. End of turn: +3.5%.",
          "3": "Ushijima’s [Awareness] +12%. End of turn: +4%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Dominating Serve",
        levels: {
          "1": "Jump Serve [Serve] x125%. If Critical, the receivers cannot cast skills this rally. On score, this skill’s cooldown -4 net crossings.",
          "2": "Jump Serve [Serve] x140%. Same restrictions; on score cooldown -4.",
          "3": "Jump Serve [Serve] x155%. Same restrictions; on score cooldown -4.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Ace Style",
        levels: {
          "1": "When your side lands a Critical Spike, Ushijima gains +1.5% to all Basic stats (max 8 stacks). When he scores, cleanse all his debuffs.",
          "2": "Critical Spike -> +2% (max 8). Cleanse on score.",
          "3": "Critical Spike -> +2% (max 10). Cleanse on score.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Undisputed Ace",
        levels: {
          "1": "Power Spike [Power Attack] x250%. On Critical, cooldown -1 net crossing.",
          "2": "Power Spike x265%. On Critical, cooldown -1.",
          "3": "Power Spike x280%. On Critical, cooldown -1.",
          "4": "Power Spike x295%. On Critical, cooldown -1.",
          "5": "Power Spike x310%. On Critical, cooldown -1.",
        },
      },
    ],
    bonds: [
      {
        to: "wakatoshi-ushijima-ur",
        name: "Lifelong Best Friends",
        participants: ["wakatoshi-ushijima-ur", "satori-tendo-ssr"],
        effect:
          "Wakatoshi Ushijima's [attack technique] and Satoru Tendo's [defense technique] have been improved (Lv1: 3%, Lv2: 3.5%, Lv3: 4%, Lv4: 4.5%, Lv5: 5%)",
      },
      {
        to: "wakatoshi-ushijima-ur",
        name: "Ace and Conductor",
        participants: ["wakatoshi-ushijima-ur", "kenjiro-shirabu-ssr"],
        effect:
          "Kenjiro Shirafu throws a toss, and Wakatoshi Ushijima delivers a powerful [hard hit] ×(Lv1: 260%, Lv2: 275%, Lv3: 290%, Lv4: 305%, Lv5: 320%). Wakatoshi Ushijima's [power] has increased by 10% in this hard hit",
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
          "UNDISPUTED ACE base cooldown reduced by 1; when any ally performs a Critical play, -1 additional crossing (once per rally).",
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
          "On Critical Serve, recover 2 Stamina and gain +10% [Awareness] for 1 rally.",
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
        secondaryType: "Serve",
        secondaryCount: 2,
        reason: "DPS principal con presión de saque.",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // ===================== SATORI TENDŌ (SSR — JAPAN) =====================
  {
    id: "satori-tendo-ssr",
    name: "Satori Tendō",
    shortName: "Tendō",
    team: "Shiratorizawa",
    rarity: "SSR",
    roles: ["MB"],
    typeTags: ["Block"],
    image: "/characters/shiratorizawa/satori-tendo-ssr.jpg",
    server: "Global",
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
          "1": "Tendō’s [Reflex] +12%.",
          "2": "Tendō’s [Reflex] +17%.",
          "3": "Tendō’s [Reflex] +22%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Surprise Quick",
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
        name: "Mind Game Block",
        levels: {
          "1": "When Tendō performs a Critical Block, reduces WILD INSTINCT cooldown by 1 crossing.",
          "2": "When Tendō performs a Critical Block, reduces WILD INSTINCT cooldown by 2 crossing.",
          "3": "When Tendō performs a Critical Block, reduces WILD INSTINCT cooldown by 3 crossing.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Wild Instinct",
        levels: {
          "1": "Block [Block] x220%; when blocking a Critical Spike, +15% [Reflex] for this block.",
          "2": "Block x235%; Critical block grants +15% [Reflex].",
          "3": "Block x250%; Critical block grants +18% [Reflex].",
          "4": "Block x265%; Critical block grants +18% [Reflex].",
          "5": "Block x280%; Critical block grants +20% [Reflex].",
        },
      },
    ],
    bonds: [
      {
        to: "satori-tendo-ssr",
        name: "Lifelong Best Friends",
        participants: ["satori-tendo-ssr", "wakatoshi-ushijima-ur"],
        effect:
          "Wakatoshi Ushijima's [attack technique] and Satoru Tendo's [defense technique] have been improved (Lv1: 3%, Lv2: 3.5%, Lv3: 4%, Lv4: 4.5%, Lv5: 5%)",
      },
      {
        to: "satori-tendo-ssr",
        name: "Shiratorizawa’s Middle Block",
        participants: ["satori-tendo-ssr", "taichi-kawanishi-sr"],
        effect:
          "[Block] of friendly vanguard has been increased (Lv1: 5%, Lv2: 5.5%, Lv3: 6%, Lv4: 6.5%, Lv5: 7%)",
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
          "At match start, apply a small debuff to opponents’ [Power Attack] and [Quick Attack].",
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
          "When the opponent spiker has any debuff, Tendō’s [Reflex] +10% while blocking.",
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
        reason: "MB de lectura: bloqueo como prioridad con amenaza de quick.",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // ===================== TSUTOMU GOSHIKI (SSR — JAPAN) =====================
  {
    id: "tsutomu-goshiki-ssr",
    name: "Tsutomu Goshiki",
    shortName: "Goshiki",
    team: "Shiratorizawa",
    rarity: "SSR",
    roles: ["WS"],
    typeTags: ["Power Attack", "Serve"],
    image: "/characters/shiratorizawa/tsutomu-goshiki-ssr.jpg",
    server: "Global",
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
        name: "Meet expectations",
        levels: {
          "1": "When Goshikiko scores a goal, the morale of his teammates increases by 8",
          "2": "When Goshikiko scores a goal, the morale of his teammates increases by 10",
          "3": "When Goshikiko scores a goal, the morale of his teammates increases by 12",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Simple Reception",
        levels: {
          "1": "Receive [Receive] x120%.",
          "2": "Receive [Receive] x135%.",
          "3": "Receive [Receive] x150%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Future Ace",
        levels: {
          "1": "End of each turn: gain 1 stack of “Sharp” (Power Attack +2.5%, up to 5).",
          "2": "End of each turn: gain 1 stack (Power Attack +3.0%, up to 5).",
          "3": "End of each turn: gain 1 stack (Power Attack +3.5%, up to 5).",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Miracle Maker",
        levels: {
          "1": "Power Spike [Power Attack] x225%; for this spike, [Awareness] +10%.",
          "2": "Power Spike [Power Attack] x240%; for this spike, [Awareness] +10%.",
          "3": "Power Spike [Power Attack] x255%; for this spike, [Awareness] +10%.",
          "4": "Power Spike [Power Attack] x270%; for this spike, [Awareness] +10%.",
          "5": "Power Spike [Power Attack] x285%; for this spike, [Awareness] +10%.",
        },
      },
    ],
    bonds: [
      {
        to: "tsutomu-goshiki-ssr",
        name: "Shiratorizawa WS",
        participants: ["tsutomu-goshiki-ssr", "reon-ohira-ssr"],
        effect:
          "Ally members' [bangs] have increased (Lv1: 4%, Lv2: 4.5%, Lv3: 5%, Lv4: 5.5%, Lv5: 6%)",
      },
      {
        to: "From big ace to ace",
        name: "Shiratorizawa WS",
        participants: ["tsutomu-goshiki-ssr", "wakatoshi-ushijima-ur"],
        effect:
          "Wakatoshi Ushijima's [banging], Goshikiko's [receiving] (Lv1: +1%+5, Lv2: +2%+7, Lv3: +3%+9, Lv4: +4%+12, Lv5: +5%+15) up",
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
        effect: "Each “Sharp” stack also grants +2% [Awareness].",
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
          "On entering Team Morale Awakening, MIRACLE MAKER cooldown resets once.",
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
        reason: "WS ofensivo con utilidad de saque y recepción fiable.",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // ===================== REON ŌHIRA (SSR — JAPAN) =====================
  {
    id: "reon-ohira-ssr",
    name: "Reon Ohira",
    shortName: "Ohira",
    team: "Shiratorizawa",
    rarity: "SSR",
    roles: ["WS"],
    typeTags: ["Receive"],
    image: "/characters/shiratorizawa/reon-ohira-ssr.jpg",
    server: "Global",
    stats: {
      basic: {
        quickAttack: 75,
        powerAttack: 109,
        set: 102,
        serve: 114,
        receive: 121,
        block: 109,
        save: 101,
      },
      bonusAttack: { awareness: 0.05, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.0, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Strong defense",
        levels: {
          "1": "When Shion Ohira receives, if the opponent's quick attack becomes a nice play, the receiving power this time will be increased by [receiving]×40%",
          "2": "When Shion Ohira receives, if the opponent's quick attack becomes a nice play, the receiving power this time will be increased by [receiving]×55%",
          "3": "When Shion Ohira receives, if the opponent's quick attack becomes a nice play, the receiving power this time will be increased by [receiving]×70%",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Defending to change the tide ",
        levels: {
          "1": "Ohira receives [receiving]×120%",
          "2": "Ohira receives [receiving]×135%",
          "3": "Ohira receives [receiving]×150%",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Gentle ”Benkei”",
        levels: {
          "1": "Ohira's [consciousness] is up 5% and [response] is up 10%.",
          "2": "Ohira's [consciousness] is up 5% and [response] is up 15%.",
          "3": "Ohira's [consciousness] is up 8% and [response] is up 15%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Powerful spikes",
        levels: {
          "1": "Ohira makes a strong hit with the power of [strong hit] 240%",
          "2": "Ohira makes a strong hit with the power of [strong hit] 255%",
          "3": "Ohira makes a strong hit with the power of [strong hit] 270%",
          "4": "Ohira makes a strong hit with the power of [strong hit] 285%",
          "5": "Ohira makes a strong hit with the power of [strong hit] 300%",
        },
      },
    ],
    bonds: [
      {
        to: "reon-ohira-ssr",
        name: "Shiratorizawa WS",
        participants: ["tsutomu-goshiki-ssr", "reon-ohira-ssr"],
        effect:
          "Ally members' [bangs] have increased (Lv1: 4%, Lv2: 4.5%, Lv3: 5%, Lv4: 5.5%, Lv5: 6%)",
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
        effect: "On PERFECT receive, allies’ next Power Spike +8% power.",
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
          "ACCURATE RECEIVE also grants allies +8% [Reflex] for 2 crossings.",
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
        secondaryType: "Power Attack",
        secondaryCount: 2,
        reason: "WS equilibrado: primera línea constante y recepción estable.",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // ===================== KENJIRO SHIRABU (SSR — JAPAN) =====================
  {
    id: "kenjiro-shirabu-ssr",
    name: "Kenjiro Shirabu",
    shortName: "Shirabu",
    team: "Shiratorizawa",
    rarity: "SSR",
    roles: ["S"],
    typeTags: ["Setter", "Power Attack"],
    image: "/characters/shiratorizawa/kenjiro-shirabu-ssr.jpg",
    server: "Global",
    stats: {
      basic: {
        quickAttack: 75,
        powerAttack: 109,
        set: 121,
        serve: 114,
        receive: 97,
        block: 109,
        save: 95,
      },
      bonusAttack: { awareness: 0.05, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.0, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "As usual",
        levels: {
          "1": "Kenjiro Shirabu's [toss] has been increased 10%",
          "2": "Kenjiro Shirabu's [toss] has been increased 13%",
          "3": "Kenjiro Shirabu's [toss] has been increased 16%",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Simple Two Attack",
        levels: {
          "1": "Performs a Two-Attack with [Set] x120% (unblockable).",
          "2": "Two-Attack [Set] x135% (unblockable).",
          "3": "Two-Attack [Set] x150% (unblockable).",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Corrective ability",
        levels: {
          "1": "Kenjiro Shirabu's [consciousness] has increased 9%.",
          "2": "Kenjiro Shirabu's [consciousness] has increased 12%.",
          "3": "Kenjiro Shirabu's [consciousness] has increased 15%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Toss that makes use of Spiker",
        levels: {
          "1": "Kenjiro Shirafu performs a toss with the power of [toss]x210%. [Awareness] is 10% higher in this play",
          "2": "Kenjiro Shirafu performs a toss with the power of [toss]x225%. [Awareness] is 10% higher in this play",
          "3": "Kenjiro Shirafu performs a toss with the power of [toss]x240%. [Awareness] is 10% higher in this play",
          "4": "Kenjiro Shirafu performs a toss with the power of [toss]x255%. [Awareness] is 10% higher in this play",
          "5": "Kenjiro Shirafu performs a toss with the power of [toss]x270%. [Awareness] is 10% higher in this play",
        },
      },
    ],
    bonds: [
      {
        to: "kenjiro-shirabu-ssr",
        name: "Ace and Conductor",
        participants: ["kenjiro-shirabu-ssr", "wakatoshi-ushijima-ur"],
        effect:
          "Kenjiro Shirafu throws a toss, and Wakatoshi Ushijima delivers a powerful [hard hit] ×(Lv1: 260%, Lv2: 275%, Lv3: 290%, Lv4: 305%, Lv5: 320%). Wakatoshi Ushijima's [power] has increased by 10% in this hard hit",
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
        effect: "On PERFECT set, next ally spike +8% power.",
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Main parameters +10%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect: "SPIKE-CONNECTING SET also gives the spiker +8% [Awareness].",
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
        secondaryType: "Power Attack",
        secondaryCount: 2,
        reason: "Control del ritmo con amenaza de 2nd touch.",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // ===================== EITA SEMI (SSR — JAPAN) =====================
  {
    id: "eita-semi-ssr",
    name: "Eita Semi",
    shortName: "Semi",
    team: "Shiratorizawa",
    rarity: "SSR",
    roles: ["S"],
    typeTags: ["Setter", "Power Attack", "Serve"],
    image: "/characters/shiratorizawa/eita-semi-ssr.jpg",
    server: "Japan",
    stats: {
      basic: {
        quickAttack: 75,
        powerAttack: 109,
        set: 116,
        serve: 121,
        receive: 97,
        block: 109,
        save: 91,
      },
      bonusAttack: { awareness: 0.05, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.0, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Control",
        levels: {
          "1": "When Semi serves, the primary opposing receiver’s [Receive] -13% for up to 4 net crossings.",
          "2": "On serve: opposing primary receiver [Receive] -15.5% (4 crossings).",
          "3": "On serve: opposing primary receiver [Receive] -18% (4 crossings).",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Flexible Combinations",
        levels: {
          "1": "Eita Semi performs a toss with the power of [toss]x120%",
          "2": "Eita Semi performs a toss with the power of [toss]x135%",
          "3": "Eita Semi performs a toss with the power of [toss]x150%",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Power Unleashed",
        levels: {
          "1": "When Semi serves: his [Awareness] +5% and [Strength] +10% for that serve.",
          "2": "On serve: [Awareness] +5% and [Strength] +15%.",
          "3": "On serve: [Awareness] +8% and [Strength] +20%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Freedom—Just This Once",
        levels: {
          "1": "Jump Serve [Serve] x220%. If you score an ace on this serve, your ally members' [awareness] will increase by 3%, and their [reaction] will increase by 6%",
          "2": "Jump Serve [Serve] x235%. If you score an ace on this serve, your ally members' [awareness] will increase by 3%, and their [reaction] will increase by 6%",
          "3": "Jump Serve [Serve] x250%. If you score an ace on this serve, your ally members' [awareness] will increase by 3%, and their [reaction] will increase by 6%",
          "4": "Jump Serve [Serve] x265%. If you score an ace on this serve, your ally members' [awareness] will increase by 3%, and their [reaction] will increase by 6%",
          "5": "Jump Serve [Serve] x280%. If you score an ace on this serve, your ally members' [awareness] will increase by 3%, and their [reaction] will increase by 6%",
        },
      },
    ],
    bonds: [],
    resonances: [
      {
        level: "I",
        name: "Skill Resonance I",
        effect: "Main parameters +13%.",
      },
      {
        level: "II",
        name: "Skill Resonance II",
        effect: "First serve each set: extra +10% [Serve] power.",
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Main parameters +13%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect: "On scoring with serve, Semi’s next Set gains +10% power.",
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
        reason: "Setter agresivo con utilidad de saque.",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // ===================== HAYATO YAMAGATA (SSR — JAPAN) =====================
  {
    id: "hayato-yamagata-ssr",
    name: "Hayato Yamagata",
    shortName: "Yamagata",
    team: "Shiratorizawa",
    rarity: "SSR",
    roles: ["LI"],
    typeTags: ["Receive"],
    image: "/characters/shiratorizawa/hayato-yamagata-ssr.jpg",
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
      bonusDefense: { reflex: 0.05, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Steady Reaction",
        levels: {
          "1": "Yamagata’s [Reflex] +13%.",
          "2": "Yamagata’s [Reflex] +20%.",
          "3": "Yamagata’s [Reflex] +25%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Wide Coverage",
        levels: {
          "1": "Cover (Receive) [Receive] x120%.",
          "2": "Cover (Receive) [Receive] x135%.",
          "3": "Cover (Receive) [Receive] x150%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Reflex Read",
        levels: {
          "1": "If the opponent’s block result is PERFECT, Yamagata’s Cover gains +40% of his [Cover] as power.",
          "2": "On PERFECT block, Cover gains +50% of [Cover] as power.",
          "3": "On PERFECT block, Cover gains +60% of [Cover] as power.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Solid Receive",
        levels: {
          "1": "Receive [Receive] x235%.",
          "2": "Receive x250%.",
          "3": "Receive x265%.",
          "4": "Receive x280%.",
          "5": "Receive x295%.",
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
        effect: "While Yamagata is on court, back-row allies’ [Receive] +5%.",
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Main parameters +10%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect: "On PERFECT Receive, allies’ next Power Spike +10% power.",
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
        secondaryType: "Serve",
        secondaryCount: 2,
        reason: "Libero puro con gran lectura y estabilidad.",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // ===================== TAICHI KAWANISHI (SR — JAPAN) =====================
  {
    id: "taichi-kawanishi-sr",
    name: "Taichi Kawanishi",
    shortName: "Kawanishi",
    team: "Shiratorizawa",
    rarity: "SR",
    roles: ["MB"],
    typeTags: ["Block"],
    image: "/characters/shiratorizawa/taichi-kawanishi-sr.jpg",
    server: "Global",
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
          "1": "Kawanishi’s [Block] +8%.",
          "2": "Kawanishi’s [Block] +9.5%.",
          "3": "Kawanishi’s [Block] +11%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Speed Breakthrough!",
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
        name: "Perfect Timing",
        levels: {
          "1": "When blocking an opponent’s Quick Spike, Kawanishi’s [Reflex] +12% for that block.",
          "2": "…[Reflex] +14% for that block.",
          "3": "…[Reflex] +16% for that block.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Adaptive Move",
        levels: {
          "1": "Block [Block] x220%.",
          "2": "Block x235%.",
          "3": "Block x250%.",
          "4": "Block x265%.",
          "5": "Block x280%.",
        },
      },
    ],
    bonds: [
      {
        to: "taichi-kawanishi-sr",
        name: "Shiratorizawa’s Middle Block",
        participants: ["taichi-kawanishi-sr", "satori-tendo-ssr"],
        effect:
          "[Block] of friendly vanguard has been increased (Lv1: 5%, Lv2: 5.5%, Lv3: 6%, Lv4: 6.5%, Lv5: 7%)",
      },
    ],
    resonances: [
      { level: "I", name: "Skill Resonance I", effect: "Main parameters +6%." },
      {
        level: "II",
        name: "Skill Resonance II",
        effect: "ADAPTIVE MOVE cooldown -2 crossings.",
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Main parameters +6%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect: "When blocking, Kawanishi’s [Reflex] +10%.",
      },
      { level: "V", name: "Skill Resonance V", effect: "Main parameters +6%." },
    ],
    potentials: {
      recommended: {
        primaryType: "Block",
        primaryCount: 4,
        secondaryType: "Quick Attack",
        secondaryCount: 2,
        reason: "Bloqueador sólido con opción de quick.",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },
];
