// src/teams/fukurodani.ts
import type { Player } from "@/types";

export const fukurodaniPlayers: Player[] = [
  // BOKUTO KOTARO (UR)
  {
    id: "kotaro-bokuto-ur",
    name: "Kotaro Bokuto",
    shortName: "Bokuto",
    team: "Fukurodani",
    rarity: "UR",
    roles: ["WS"],
    typeTags: ["Power Attack", "Serve"],
    image: "/characters/fukurodani/kotaro-bokuto-ur.jpg",
    server: "Japan",
    stats: {
      basic: {
        quickAttack: 96,
        powerAttack: 144,
        set: 112,
        serve: 126,
        receive: 126,
        block: 120,
        save: 113,
      },
      bonusAttack: { awareness: 0.05, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.0, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Big Server",
        levels: {
          "1": "Performs a Jump Serve with [Serve] x125%.",
          "2": "Performs a Jump Serve with [Serve] x135%.",
          "3": "Performs a Jump Serve with [Serve] x145%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Predator’s Instinct",
        levels: {
          "1": "If an ally has the [Excellent] effect: Bokuto’s [Power Attack] +12% and [Power] +7%.",
          "2": "If an ally has the [Excellent] effect: Bokuto’s [Power Attack] +14% and [Power] +9%.",
          "3": "If an ally has the [Excellent] effect: Bokuto’s [Power Attack] +16% and [Power] +11%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Crowd-Fired Ace",
        levels: {
          "1": "When team morale increases on court, Bokuto’s main parameters +2% (stacks up to 5).",
          "2": "When team morale increases on court, Bokuto’s main parameters +3% (stacks up to 5).",
          "3": "When team morale increases on court, Bokuto’s main parameters +4% (stacks up to 5).",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "finisher",
        name: "Ace Thanks to Everyone",
        levels: {
          "1": "[Power Attack] x260%. If this play becomes a Nice Serve chain, Bokuto’s [Power] +12% and allies’ team morale +16.",
          "2": "[Power Attack] x275%. If Nice Serve chain, [Power] +14%, team morale +16.",
          "3": "[Power Attack] x290%. If Nice Serve chain, [Power] +16%, team morale +16.",
          "4": "[Power Attack] x305%. If Nice Serve chain, [Power] +18%, team morale +16.",
          "5": "[Power Attack] x320%. If Nice Serve chain, [Power] +20%, team morale +16.",
        },
      },
    ],
    bonds: [
      {
        to: "kotaro-bokuto-ur",
        name: "Ace & Setter Core",
        participants: ["kotaro-bokuto-ur", "keiji-akaashi-ur"],
        effect:
          "If Akaashi sets to Bokuto this rally: Bokuto [Power Attack] x(Lv1: 250%, Lv2: 265%, Lv3: 280%, Lv4: 295%, Lv5: 310%).",
      },
    ],
    resonances: [
      { level: "I", name: "", effect: "Main parameters +13%." },
      { level: "II", name: "", effect: "" },
      { level: "III", name: "", effect: "Main parameters +13%." },
      { level: "IV", name: "", effect: "" },
      { level: "V", name: "", effect: "Main parameters +13%." },
    ],
    potentials: {
      recommended: {
        primaryType: "Power Attack",
        primaryCount: 4,
        secondaryType: "Serve",
        secondaryCount: 2,
        reason: "Maximiza daño principal y presión con saque.",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // AKAASHI KEIJI (UR)
  {
    id: "keiji-akaashi-ur",
    name: "Keiji Akaashi",
    shortName: "Akaashi",
    team: "Fukurodani",
    rarity: "UR",
    roles: ["S"],
    typeTags: ["Setter", "Power Attack"],
    image: "/characters/fukurodani/keiji-akaashi-ur.jpg",
    server: "Japan",
    stats: {
      basic: {
        quickAttack: 71,
        powerAttack: 94,
        set: 151,
        serve: 112,
        receive: 115,
        block: 113,
        save: 92,
      },
      bonusAttack: { awareness: 0.05, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.0, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Instant Read",
        levels: {
          "1": "If an ally’s Block & Receive results are PERFECT while Akaashi is on court: remove all that ally’s debuffs. Akaashi’s [Awareness] +8% and allies’ team morale +3.",
          "2": "Same trigger: cleanse that ally’s debuffs. Akaashi’s [Awareness] +10% and allies’ team morale +3.",
          "3": "Same trigger: cleanse that ally’s debuffs. Akaashi’s [Awareness] +12% and allies’ team morale +3.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Brains of Owl Valley",
        levels: {
          "1": "Performs a Dual Attack with [Set] x120%. The two hits cannot be blocked. If it scores, next ally after this play gets [Serve] +10%.",
          "2": "Dual Attack [Set] x135% (unblockable). If it scores, next ally [Serve] +10%.",
          "3": "Dual Attack [Set] x150% (unblockable). If it scores, next ally [Serve] +10%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Devoted Toss",
        levels: {
          "1": "Akaashi’s [Set] +8%. While an ally’s Team Morale Awakening is active, every +4 team morale on that ally gives Akaashi [Awareness] +1.2%. If Akaashi’s toss is Good, the first spike after is guaranteed Good.",
          "2": "Akaashi’s [Set] +10%. Every +4 morale: [Awareness] +1.75%. Good toss guarantees next spike Good.",
          "3": "Akaashi’s [Set] +12%. Every +4 morale: [Awareness] +2.3%. Good toss guarantees next spike Good.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "finisher",
        name: "“As Usual” Set",
        levels: {
          "1": "Performs a Set with [Set] x240%.",
          "2": "Performs a Set with [Set] x255%.",
          "3": "Performs a Set with [Set] x270%.",
          "4": "Performs a Set with [Set] x285%.",
          "5": "Performs a Set with [Set] x300%.",
        },
      },
    ],
    bonds: [
      {
        to: "keiji-akaashi-ur",
        name: "Ace & Setter Core",
        participants: ["keiji-akaashi-ur", "kotaro-bokuto-ur"],
      },
    ],
    resonances: [
      { level: "I", name: "", effect: "Main parameters +10%." },
      {
        level: "II",
        name: "",
        effect:
          "Special resets ‘As Usual’ Set CD when ally triggers Morale Awakening.",
      },
      { level: "III", name: "", effect: "Main parameters +10%." },
      {
        level: "IV",
        name: "",
        effect:
          "If Akaashi’s set isn’t BAD: cleanse first spiker’s debuffs and that spiker’s [Power/Quick] +4% (max 3 stacks, 3 rallies).",
      },
      { level: "V", name: "", effect: "Main parameters +10%." },
    ],
    potentials: {
      recommended: {
        primaryType: "Setter",
        primaryCount: 4,
        secondaryType: "Receive",
        secondaryCount: 2,
        reason: "Mejora consistencia del set y estabilidad defensiva.",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // BOKUTO KOTARO (SP - Beach)
  {
    id: "kotaro-bokuto-sp",
    name: "Kotaro Bokuto (Beach)",
    shortName: "Bokuto (SP)",
    team: "Fukurodani",
    rarity: "UR",
    roles: ["WS"],
    typeTags: ["Power Attack", "Receive"],
    image: "/characters/fukurodani/kotaro-bokuto-sp.jpg",
    server: "Japan",
    stats: {
      basic: {
        quickAttack: 109,
        powerAttack: 158,
        set: 128,
        serve: 136,
        receive: 151,
        block: 143,
        save: 127,
      },
      bonusAttack: { awareness: 0.0, strength: 0.05, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.0, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Hype Up (盛り上げる)",
        levels: {
          "1": "Bokuto (SP) [Power Attack] +13%. While he is on court, non-<Hype Up> team morale gains from allies are reduced by 100%, and every -10 morale gained converts to 1 stack of [Unite]. Each [Unite] stack: allies’ main parameters +0.16% (max 199 stacks).",
          "2": "Same effect; allies’ main parameters +0.18% per stack.",
          "3": "Same effect; allies’ main parameters +0.20% per stack.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Keep the Energy",
        levels: {
          "1": "If an ally holds [Excellent], Bokuto (SP) [Power Attack] +12% and [Power] +7%; when team morale finishes Awakening, gain 8 stacks of [Unite].",
          "2": "Same but [Power Attack] +14%, [Power] +9%.",
          "3": "Same but [Power Attack] +16%, [Power] +11%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Summer Rhythm",
        levels: {
          "1": "While on court, each rally end: allies’ team morale +10.",
          "2": "While on court, each rally end: allies’ team morale +12.",
          "3": "While on court, each rally end: allies’ team morale +14.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "finisher",
        name: "Miracle Ace",
        levels: {
          "1": "[Power Attack] x260%. If the play becomes a Nice Serve chain: Bokuto’s [Power] +12% and allies’ team morale +16.",
          "2": "[Power Attack] x275% (+same bonus).",
          "3": "[Power Attack] x290% (+same bonus).",
          "4": "[Power Attack] x305% (+same bonus).",
          "5": "[Power Attack] x320% (+same bonus).",
        },
      },
    ],
    bonds: [
      {
        to: "kotaro-bokuto-sp",
        name: "Unbeatable Summer Duo",
        participants: ["kotaro-bokuto-sp", "keiji-akaashi-sp"],
      },
      {
        to: "kotaro-bokuto-sp",
        name: "Iron Wall Challenge",
        participants: [
          "kotaro-bokuto-sp",
          "keiji-akaashi-sp",
          "takanobu-aone-ur",
        ],
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
        primaryType: "Power Attack",
        primaryCount: 4,
        secondaryType: "Receive",
        secondaryCount: 2,
        reason: "SP Bokuto alterna daño con estabilidad en recepción.",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // AKAASHI KEIJI (SP - Beach)
  {
    id: "keiji-akaashi-sp",
    name: "Keiji Akaashi (Beach)",
    shortName: "Akaashi (SP)",
    team: "Fukurodani",
    rarity: "UR",
    roles: ["S"],
    typeTags: ["Setter", "Power Attack"],
    image: "/characters/fukurodani/keiji-akaashi-sp.jpg",
    server: "Japan",
    stats: {
      basic: {
        quickAttack: 90,
        powerAttack: 142,
        set: 158,
        serve: 150,
        receive: 148,
        block: 143,
        save: 150,
      },
      bonusAttack: { awareness: 0.05, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.0, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "100% Practice Extraction",
        levels: {
          "1": "When Akaashi (SP) sets: [Set] +14%, first spike after this play gets +15% set bonus. Lasts until ball crosses net twice.",
          "2": "[Set] +16%, next spike +17%.",
          "3": "[Set] +18%, next spike +19%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Team Organizer",
        levels: {
          "1": "If no ally is in Morale Awakening: allies’ [Receive] & [Block] +25%; while on court, each net-cross: allies’ team morale +10.",
          "2": "Allies’ [Receive] & [Block] +27%; same morale effect.",
          "3": "Allies’ [Receive] & [Block] +30%; same morale effect.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Cerebral Set",
        levels: {
          "1": "Performs a Tour-Attack with [Set] x120% (unblockable). If this scores, next ally’s [Serve] +10%.",
          "2": "Tour-Attack [Set] x135% (unblockable). Same bonus.",
          "3": "Tour-Attack [Set] x150% (unblockable). Same bonus.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "finisher",
        name: "Decisive Shot",
        levels: {
          "1": "[Set] x260%. If triggered during ‘100% Practice Extraction’: extra [Set] bonus scales with [Calm Awareness] stacks gained in this set (up to +40%). On Power spike: extra +0.8% per stack (up to +80%).",
          "2": "[Set] x270% (same scaling caps).",
          "3": "[Set] x280% (same scaling caps).",
          "4": "[Set] x290% (same scaling caps).",
          "5": "[Set] x300% (same scaling caps).",
        },
      },
    ],
    bonds: [
      {
        to: "keiji-akaashi-sp",
        name: "Unbeatable Summer Duo",
        participants: ["keiji-akaashi-sp", "kotaro-bokuto-sp"],
      },
      {
        to: "keiji-akaashi-sp",
        name: "Iron Wall Challenge",
        participants: [
          "keiji-akaashi-sp",
          "kotaro-bokuto-sp",
          "takanobu-aone-ur",
        ],
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
        primaryType: "Setter",
        primaryCount: 4,
        secondaryType: "Power Attack",
        secondaryCount: 2,
        reason: "Set más fuerte y sinergia con golpes potentes del equipo.",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // KOMI HARUKI (SSR) - Libero
  {
    id: "haruki-komi-ssr",
    name: "Haruki Komi",
    shortName: "Komi",
    team: "Fukurodani",
    rarity: "SSR",
    roles: ["LI"],
    typeTags: ["Receive"],
    image: "/characters/fukurodani/haruki-komi-ssr.jpg",
    server: "Japan",
    stats: {
      basic: {
        quickAttack: 68,
        powerAttack: 99,
        set: 109,
        serve: 99,
        receive: 121,
        block: 96,
        save: 116,
      },
      bonusAttack: { awareness: 0.0, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.05, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Defense Master",
        levels: {
          "1": "Komi’s [Receive] +8%. If Komi’s receive does not become Bad, enemy team morale -12.",
          "2": "Komi’s [Receive] +10%. If not Bad, enemy team morale -12.",
          "3": "Komi’s [Receive] +12%. If not Bad, enemy team morale -12.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Team Lubricant",
        levels: {
          "1": "Performs [Cover] x110%. If this play avoids AD result, allies’ main parameters +5% for 1 rally.",
          "2": "Performs [Cover] x125%. If avoids AD, allies’ main parameters +6% for 1 rally.",
          "3": "Performs [Cover] x140%. If avoids AD, allies’ main parameters +7% for 1 rally.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Resilient Receive",
        levels: {
          "1": "When opponent uses Power Attack: Komi’s [Receive] +20%.",
          "2": "When opponent uses Power Attack: Komi’s [Receive] +25%.",
          "3": "When opponent uses Power Attack: Komi’s [Receive] +30%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "finisher",
        name: "Center of Defense",
        levels: {
          "1": "[Receive] x235%.",
          "2": "[Receive] x250%.",
          "3": "[Receive] x265%.",
          "4": "[Receive] x280%.",
          "5": "[Receive] x295%.",
        },
      },
    ],
    bonds: [],
    resonances: [
      { level: "I", name: "", effect: "Main parameters +10%." },
      {
        level: "II",
        name: "",
        effect:
          "Cooldown resets of ‘As Usual’ for Akaashi when Komi prevents AD.",
      },
      { level: "III", name: "", effect: "Main parameters +10%." },
      { level: "IV", name: "", effect: "" },
      { level: "V", name: "", effect: "Main parameters +10%." },
    ],
    potentials: {
      recommended: {
        primaryType: "Receive",
        primaryCount: 4,
        secondaryType: "Save",
        secondaryCount: 2,
        reason: "Libero puro: prioriza recepción y cobertura.",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // SARUKUI YAMATO (SSR) - Wing Spiker
  {
    id: "yamato-sarukui-ssr",
    name: "Yamato Sarukui",
    shortName: "Yamato",
    team: "Fukurodani",
    rarity: "SR",
    roles: ["WS"],
    typeTags: ["Power Attack"],
    image: "/characters/fukurodani/yamato-sarukui-sr.jpg",
    server: "Japan",
    stats: {
      basic: {
        quickAttack: 82,
        powerAttack: 120,
        set: 98,
        serve: 103,
        receive: 105,
        block: 109,
        save: 110,
      },
      bonusAttack: { awareness: 0.0, strength: 0.05, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.0, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Excellent Receiver",
        levels: {
          "1": "While on court and no ally is in Morale Awakening: Yamato’s [Receive] +8% and [Cover] +10%.",
          "2": "Receive +10% and Cover +12%.",
          "3": "Receive +12% and Cover +14%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Exquisite Combination",
        levels: {
          "1": "Performs [Cover] x120%.",
          "2": "[Cover] x135%.",
          "3": "[Cover] x150%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "All-Rounder’s Block",
        levels: {
          "1": "If front row: allies’ [Block] +8% and [Power Attack] +8%. If back row: allies’ [Receive] +8% and [Cover] +8%.",
          "2": "If front row: allies’ [Block] +10% and [Power Attack] +10%. If back row: allies’ [Receive] +10% and [Cover] +10%.",
          "3": "If front row: allies’ [Block] +12% and [Power Attack] +12%. If back row: allies’ [Receive] +12% and [Cover] +12%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "finisher",
        name: "Mr. Versatile",
        levels: {
          "1": "[Receive] x225%. If the play avoids AD result: allies’ team morale +20.",
          "2": "[Receive] x240% (+team morale +20).",
          "3": "[Receive] x255% (+team morale +20).",
          "4": "[Receive] x270% (+team morale +20).",
          "5": "[Receive] x285% (+team morale +20).",
        },
      },
    ],
    bonds: [],
    resonances: [
      { level: "I", name: "", effect: "Main parameters +10%." },
      { level: "II", name: "", effect: "" },
      { level: "III", name: "", effect: "Main parameters +10%." },
      { level: "IV", name: "", effect: "" },
      { level: "V", name: "", effect: "Main parameters +10%." },
    ],
    potentials: {
      recommended: {
        primaryType: "Power Attack",
        primaryCount: 4,
        secondaryType: "Block",
        secondaryCount: 2,
        reason: "WS equilibrado: daño en primera línea y utilidad defensiva.",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // WASHIO TATSUKI (SSR) - Middle Blocker
  {
    id: "tatsuki-washio-ssr",
    name: "Tatsuki Washio",
    shortName: "Washio",
    team: "Fukurodani",
    rarity: "SSR",
    roles: ["MB"],
    typeTags: ["Block", "Quick Attack"],
    image: "/characters/fukurodani/tatsuki-washio-ssr.jpg",
    server: "Japan",
    stats: {
      basic: {
        quickAttack: 115,
        powerAttack: 79,
        set: 100,
        serve: 107,
        receive: 103,
        block: 121,
        save: 97,
      },
      bonusAttack: { awareness: 0.05, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.0, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Intimidating Block",
        levels: {
          "1": "Washio’s [Block] +8%. When he blocks, the ally with the highest [Receive] gets [Receive] +20% for this rally.",
          "2": "Washio’s [Block] +10%. Same trigger grants [Receive] +24%.",
          "3": "Washio’s [Block] +12%. Same trigger grants [Receive] +28%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "High-Point Quick",
        levels: {
          "1": "Performs [Quick Attack] x120%.",
          "2": "Performs [Quick Attack] x135%.",
          "3": "Performs [Quick Attack] x150%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Hidden Capability",
        levels: {
          "1": "If ally makes a Nice Play: Washio’s [Block] & [Quick Attack] +2% (stacks to 5).",
          "2": "Stacks grant +3% per stack.",
          "3": "Stacks grant +4% per stack.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "finisher",
        name: "Terrifying Block",
        levels: {
          "1": "[Block] x220%.",
          "2": "[Block] x235%.",
          "3": "[Block] x250%.",
          "4": "[Block] x265%.",
          "5": "[Block] x280%.",
        },
      },
    ],
    bonds: [],
    resonances: [
      { level: "I", name: "", effect: "Main parameters +10%." },
      { level: "II", name: "", effect: "" },
      { level: "III", name: "", effect: "Main parameters +10%." },
      { level: "IV", name: "", effect: "" },
      { level: "V", name: "", effect: "Main parameters +10%." },
    ],
    potentials: {
      recommended: {
        primaryType: "Block",
        primaryCount: 4,
        secondaryType: "Quick Attack",
        secondaryCount: 2,
        reason: "MB puro enfocado en muro y cierre de rallies.",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // KONOHA AKINORI (SSR) - Opposite (Receive type)
  {
    id: "akinori-konoha-ssr",
    name: "Akinori Konoha",
    shortName: "Konoha",
    team: "Fukurodani",
    rarity: "SSR",
    roles: ["OP"],
    typeTags: ["Receive"],
    image: "/characters/fukurodani/akinori-konoha-ssr.jpg",
    server: "Japan",
    stats: {
      basic: {
        quickAttack: 68,
        powerAttack: 98,
        set: 80,
        serve: 80,
        receive: 94,
        block: 89,
        save: 80,
      },
      bonusAttack: { awareness: 0.0, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.05, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Absolute Receiver",
        levels: {
          "1": "Konoha’s [Receive] +8%. If opponent damages this rally, Konoha’s [Receive] power +4%.",
          "2": "Konoha’s [Receive] +10%. If damaged, +6%.",
          "3": "Konoha’s [Receive] +12%. If damaged, +8%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Team Player’s Receive",
        levels: {
          "1": "Performs [Receive] x120% for the team.",
          "2": "[Receive] x135%.",
          "3": "[Receive] x150%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Calm Crisis Response",
        levels: {
          "1": "If team is behind: Konoha’s [Receive] and [Power Attack] +8%.",
          "2": "If team is behind: [Receive] and [Power Attack] +10%.",
          "3": "If team is behind: [Receive] and [Power Attack] +12%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "finisher",
        name: "Hidden Weapon",
        levels: {
          "1": "[Power Attack] x220%.",
          "2": "[Power Attack] x235%.",
          "3": "[Power Attack] x250%.",
          "4": "[Power Attack] x265%.",
          "5": "[Power Attack] x280%.",
        },
      },
    ],
    bonds: [],
    resonances: [
      { level: "I", name: "", effect: "Main parameters +10%." },
      { level: "II", name: "", effect: "" },
      { level: "III", name: "", effect: "Main parameters +10%." },
      { level: "IV", name: "", effect: "" },
      { level: "V", name: "", effect: "Main parameters +10%." },
    ],
    potentials: {
      recommended: {
        primaryType: "Receive",
        primaryCount: 4,
        secondaryType: "Power Attack",
        secondaryCount: 2,
        reason: "OP de soporte: primera línea segura + contraataque.",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },
];
