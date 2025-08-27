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
      // Enthusiastic Influence
      {
        key: "passive",
        name: "Enthusiastic Influence",
        levels: {
          "1": "When Bokuto participates, allies’ Team Morale +20. While he is on the court, every time a friendly member touches the ball, Team Morale +4. Change during Team Morale Awakening: on-court allies’ main parameters +32% (lasts up to 4 friendly touches).",
          "2": "When Bokuto participates, allies’ Team Morale +25. While he is on the court, every time a friendly member touches the ball, Team Morale +4. Change during Team Morale Awakening: on-court allies’ main parameters +36% (lasts up to 4 friendly touches).",
          "3": "When Bokuto participates, allies’ Team Morale +30. While he is on the court, every time a friendly member touches the ball, Team Morale +4. Change during Team Morale Awakening: on-court allies’ main parameters +40% (lasts up to 4 friendly touches).",
          "4": undefined,
          "5": undefined,
        },
      },
      // Big Server
      {
        key: "passive",
        name: "Big Server",
        levels: {
          "1": "Performs a Jump Serve with [Serve]×125%.",
          "2": "Performs a Jump Serve with [Serve]×140%.",
          "3": "Performs a Jump Serve with [Serve]×155%.",
          "4": undefined,
          "5": undefined,
        },
      },
      // Up and Down the Tone
      {
        key: "passive",
        name: "Up and Down the Tone",
        levels: {
          "1": "If Bokuto has [Excellent]: [Power Attack] +12% and [Power] +18%. If he has [Shobokure Mode], he cannot activate the finisher. When an ally activates Team Morale Awakening, Bokuto gains [Excellent]. When allies’ Awakening ends, Bokuto gains [Shobokure Mode]; at each rally end, lose [Shobokure Mode].",
          "2": "If Bokuto has [Excellent]: [Power Attack] +15% and [Power] +22.5%. Same other effects.",
          "3": "If Bokuto has [Excellent]: [Power Attack] +18% and [Power] +27%. Same other effects.",
          "4": undefined,
          "5": undefined,
        },
      },
      // Ace Thanks to Everyone
      {
        key: "finisher",
        name: "Ace Thanks to Everyone",
        levels: {
          "1": "Performs a [Power Attack]×260%. If this finisher is not BAD: Bokuto’s [Power] +12% and allies’ Team Morale +16.",
          "2": "Performs a [Power Attack]×275%. If not BAD: [Power] +14% and Team Morale +16.",
          "3": "Performs a [Power Attack]×290%. If not BAD: [Power] +16% and Team Morale +16.",
          "4": "Performs a [Power Attack]×305%. If not BAD: [Power] +18% and Team Morale +16.",
          "5": "Performs a [Power Attack]×320%. If not BAD: [Power] +20% and Team Morale +16.",
        },
      },
    ],
    bonds: [
      {
        to: "kotaro-bokuto-ur",
        name: "Miracle Ace and Caring Setter",
        participants: ["kotaro-bokuto-ur", "keiji-akaashi-ur"],
        effect:
          "Akaashi tosses → Bokuto performs a [Power Attack]×(Lv1: 265%, Lv2: 280%, Lv3: 295%, Lv4: 310%, Lv5: 325%). With this hit, Bokuto’s [Power Attack] +20%, and allies’ Team Morale +15.",
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
          "While Bokuto has [Shobokure Mode], allies gain [Team Spirit] (main parameters +12%).",
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
          "Bokuto’s [Power Attack] +16%. If his finisher result is not BAD, reset the cooldown of “Ace Thanks to Everyone”.",
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
          "1": "If an ally’s Block & Receive results are PERFECT while Akaashi is on court: remove all that ally’s debuffs. Akaashi’s [Awareness] +8% and allies’ Team Morale +3.",
          "2": "Same trigger: cleanse that ally’s debuffs. Akaashi’s [Awareness] +10% and allies’ Team Morale +3.",
          "3": "Same trigger: cleanse that ally’s debuffs. Akaashi’s [Awareness] +12% and allies’ Team Morale +3.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Brains of Owl Valley",
        levels: {
          "1": "Performs a Dual Attack with [Set]×120% (unblockable). If it scores, the next ally after this play gets [Serve] +10%.",
          "2": "Dual Attack [Set]×135% (unblockable). Same bonus.",
          "3": "Dual Attack [Set]×150% (unblockable). Same bonus.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Devoted Toss",
        levels: {
          "1": "Akaashi’s [Set] +8%. While an ally’s Team Morale Awakening is active, every +4 Team Morale on that ally gives Akaashi [Awareness] +1.2%. If Akaashi’s toss is NICE, the first spike after is guaranteed NICE.",
          "2": "Akaashi’s [Set] +10%. Every +4 morale: [Awareness] +1.75%. NICE toss guarantees next spike NICE.",
          "3": "Akaashi’s [Set] +12%. Every +4 morale: [Awareness] +2.3%. NICE toss guarantees next spike NICE.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "finisher",
        name: "“As Usual” Set",
        levels: {
          "1": "Performs a Set with [Set]×240%.",
          "2": "Performs a Set with [Set]×255%.",
          "3": "Performs a Set with [Set]×270%.",
          "4": "Performs a Set with [Set]×285%.",
          "5": "Performs a Set with [Set]×300%.",
        },
      },
    ],
    bonds: [
      {
        to: "keiji-akaashi-ur",
        name: "Miracle Ace and Caring Setter",
        participants: ["keiji-akaashi-ur", "kotaro-bokuto-ur"],
        effect:
          "Akaashi tosses to Bokuto → Bokuto’s [Power Attack]×(Lv1: 265%, Lv2: 280%, Lv3: 295%, Lv4: 310%, Lv5: 325%). With this hit Bokuto’s [Power Attack] +20% and Team Morale +15.",
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
          "Reset the cooldown of “As Usual” Set when an ally activates Team Morale Awakening.",
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
          "If Akaashi’s set isn’t BAD: cleanse the first spiker’s debuffs and that spiker’s [Power/Quick] +4% (max 3 stacks, lasts 3 rallies).",
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
    name: "Kotaro Bokuto",
    shortName: "Bokuto",
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
      // Liven Up
      {
        key: "passive",
        name: "Liven Up",
        levels: {
          "1": "Bokuto (SP) [Power Attack] +13%. While he is on court, non-<Liven Up> Team Morale gains from allies are reduced by 100%, and for every +10 Team Morale gained convert 1 stack of [Unite]. Each [Unite] stack: allies’ main parameters +0.16% (max 199). At rally end while he is on court: Team Morale +40 and gain 4 stacks of [Unite]. During allies’ Team Morale Awakening: on-court allies’ main parameters +20% (lasts up to 10 friendly touches).",
          "2": "Bokuto (SP) [Power Attack] +16%. [Unite] stacks give +0.16% each. Same conversion/40 morale/4 stacks. Awakening buff +25% (10 touches).",
          "3": "Bokuto (SP) [Power Attack] +20%. [Unite] stacks give +0.16% each. Same conversion/40 morale/4 stacks. Awakening buff +30% (10 touches).",
          "4": undefined,
          "5": undefined,
        },
      },
      // Defensive Participation
      {
        key: "passive",
        name: "Defensive Participation",
        levels: {
          "1": "Performs a [Receive]×140% power receive. Gain 3 stacks of [Unite].",
          "2": "Performs a [Receive]×160% power receive. Gain 3 stacks of [Unite].",
          "3": "Performs a [Receive]×180% power receive. Gain 3 stacks of [Unite].",
          "4": undefined,
          "5": undefined,
        },
      },
      // Always Fine!
      {
        key: "passive",
        name: "Always Fine!",
        levels: {
          "1": "If Bokuto (SP) has [Great Condition], when his finisher activates his [Power Attack] is increased by +1% per [Unite] (cap +70%) until the ball crosses the net twice. Also, per [Unite], the power of [Power Attack] +1.5% (cap +120%) until the ball crosses the net twice. When his finisher activates, gain [Ups and Downs]. If he has [Ups and Downs], he cannot activate the strong finisher; instead his [Power Attack] power is increased by [Power Attack]×30%, and after a hit gain 3 stacks of [Unite]. At match start he gains [Ups and Downs]. If an ally’s Team Morale Awakening is activated, allies’ Team Morale +20; Bokuto (SP) gains [Excellent] and loses [Ups and Downs].",
          "2": "Same as Lv1, but the [Ups and Downs] bonus becomes [Power Attack]×50%.",
          "3": "Same as Lv1, but the [Ups and Downs] bonus becomes [Power Attack]×70%.",
          "4": undefined,
          "5": undefined,
        },
      },
      // Miracle Spike
      {
        key: "finisher",
        name: "Miracle Spike",
        levels: {
          "1": "Performs a [Power Attack]×260%. While [Unite] is active: Bokuto (SP) [Attack Technique] +0.75% per stack (cap +30%) until the ball crosses the net twice.",
          "2": "Performs a [Power Attack]×280%. Same [Unite] scaling.",
          "3": "Performs a [Power Attack]×300%. Same [Unite] scaling.",
          "4": "Performs a [Power Attack]×320%. Same [Unite] scaling.",
          "5": "Performs a [Power Attack]×340%. Same [Unite] scaling.",
        },
      },
    ],
    bonds: [
      {
        to: "kotaro-bokuto-sp",
        name: "Unbeatable Summer Duo",
        participants: ["kotaro-bokuto-sp", "keiji-akaashi-sp"],
        effect:
          "Akaashi (SP) [Toss] +(Lv1: 6%, Lv2: 7%, Lv3: 8%, Lv4: 9%, Lv5: 10%). While allies are in Team Morale Awakening: Bokuto (SP) [Power Attack] +18% and Akaashi (SP) [Toss] +5% additional.",
      },
      {
        to: "kotaro-bokuto-sp",
        name: "Iron Wall Challenge",
        participants: [
          "kotaro-bokuto-sp",
          "keiji-akaashi-sp",
          "takanobu-aone-ur",
        ],
        effect:
          "While an ally activates Team Morale Awakening, when a friendly 2/3-block is activated, the [Reflex] of all members participating in the block increases (Lv1: 6%, Lv2: 7%, Lv3: 8%, Lv4: 9%, Lv5: 10%) until the ball crosses the net twice. At the start of each rally, allies’ Team Morale +20.",
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
          "[Unite] effect: Bokuto (SP) [Awareness] +0.4% per stack (cap +15%). When his finisher activates: [Power] increases by Awareness×(85–100%) (caps accordingly).",
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
          "Gain 8 stacks of [Unite] when allies’ Team Morale Awakening ends. If Bokuto (SP) has [Excellent], each [Unite] stack also increases [Power] +3% (cap +150%).",
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
    shortName: "Akaashi",
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
      // Team Organizer
      {
        key: "passive",
        name: "Team Organizer",
        levels: {
          "1": "Akaashi (SP) [Toss] +13%. Each +10 Team Morale gained by allies gives 1 stack of [Calm Awareness] (each stack: [Toss] +1.5%, max 10). When Akaashi (SP) touches the ball while allies’ Team Morale Awakening is NOT active, consume all stacks: per stack, [Awareness] +3% (cap +30%) until the ball crosses the net twice.",
          "2": "Akaashi (SP) [Toss] +16%. [Calm Awareness]: +1.5% [Toss] per stack (max 10). Same consumption; per stack +3% [Awareness] (cap +30%).",
          "3": "Akaashi (SP) [Toss] +20%. [Calm Awareness]: +1.5% [Toss] per stack (max 10). Same consumption; per stack +3% [Awareness] (cap +30%).",
          "4": undefined,
          "5": undefined,
        },
      },
      // Bring out 100% of Practice
      {
        key: "passive",
        name: "Bring Out 100% of Practice",
        levels: {
          "1": "Akaashi (SP) performs a [Toss] with [Toss]×140% power. The first time his finisher activates after this play: [Toss] +15% until the ball crosses the net twice.",
          "2": "Performs [Toss]×160% power. Next finisher after this play: [Toss] +17% until ball crosses twice.",
          "3": "Performs [Toss]×180% power. Next finisher after this play: [Toss] +19% until ball crosses twice.",
          "4": undefined,
          "5": undefined,
        },
      },
      // Toss Launches an Attack
      {
        key: "passive",
        name: "Toss Launches an Attack",
        levels: {
          "1": "While allies’ Team Morale Awakening is active, when Akaashi (SP) touches the ball consume 5 stacks of [Calm Awareness]: [Awareness] +70% until the ball crosses the net twice. If his toss is NICE, the first allied spiker after this play gains [Awareness] equal to 50% of Akaashi’s [Awareness] (caps at 60%). If that spike is a Power Attack, the spiker gains an additional +50% of Akaashi’s [Awareness] (caps at 60%). When <Bring Out 100% of Practice> is activated, per [Calm Awareness] stack gained this set, allied spikers’ [Power Attack/Quick] +3% (cap +24%).",
          "2": "Same effects as Lv1.",
          "3": "Same effects as Lv1.",
          "4": undefined,
          "5": undefined,
        },
      },
      // A Decisive Blow
      {
        key: "finisher",
        name: "A Decisive Blow",
        levels: {
          "1": "Akaashi (SP) performs an unblockable two-attack with [Toss]×260%. If this play is NICE: reduce the cooldown of <Bring Out 100% of Practice> by 4 net crossings. Gain 1 stack of [Calm Awareness].",
          "2": "Unblockable two-attack with [Toss]×270%. Same extra effects.",
          "3": "Unblockable two-attack with [Toss]×280%. Same extra effects.",
          "4": "Unblockable two-attack with [Toss]×290%. Same extra effects.",
          "5": "Unblockable two-attack with [Toss]×300%. Same extra effects.",
        },
      },
    ],
    bonds: [
      {
        to: "keiji-akaashi-sp",
        name: "Unbeatable Summer Duo",
        participants: ["keiji-akaashi-sp", "kotaro-bokuto-sp"],
        effect:
          "Akaashi (SP) [Toss] +(Lv1: 6%, Lv2: 7%, Lv3: 8%, Lv4: 9%, Lv5: 10%). While allies are in Team Morale Awakening: Bokuto (SP) [Power Attack] +18% and Akaashi (SP) [Toss] +5% additional.",
      },
      {
        to: "keiji-akaashi-sp",
        name: "Iron Wall Challenge",
        participants: [
          "keiji-akaashi-sp",
          "kotaro-bokuto-sp",
          "takanobu-aone-ur",
        ],
        effect:
          "While an ally activates Team Morale Awakening, when a friendly 2/3-block is activated, the [Reflex] of all members participating in the block increases (Lv1: 6%, Lv2: 7%, Lv3: 8%, Lv4: 9%, Lv5: 10%) until the ball crosses the net twice. At the start of each rally, allies’ Team Morale +20.",
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
          "Akaashi (SP) [Power] +30%. While he is on the court: at rally end Team Morale +40; and when allies are NOT in Morale Awakening, allies’ [Receive] & [Block] +25%.",
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
          "When <Bring Out 100% of Practice> is activated, for each [Calm Awareness] stack gained this set: allied spikers’ [Power/Quick] +0.3% (cap +40%) until the ball crosses twice; if the spike is a Power Attack, +0.8% more (cap +80%). Also, per stack, <A Decisive Blow> power +[Toss]×0.6% (cap +100%). While allies’ Morale Awakening is active, for every +5 Team Morale, the corresponding member’s [Power] +1% on the first special after Awakening ends (cap +30%).",
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
        name: "Master of Defense",
        levels: {
          "1": "Komi’s [Receive] +8%. If Komi’s Receive result is not BAD, enemy Team Morale −12.",
          "2": "Komi’s [Receive] +10%. If not BAD, enemy Team Morale −12.",
          "3": "Komi’s [Receive] +12%. If not BAD, enemy Team Morale −12.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Lubricating Oils for Teams",
        levels: {
          "1": "Performs [Cover]×110%. If this play avoids BAD, allies’ main parameters +5% for 1 rally.",
          "2": "Performs [Cover]×125%. If avoids BAD, allies’ main parameters +6.5% for 1 rally.",
          "3": "Performs [Cover]×140%. If avoids BAD, allies’ main parameters +8% for 1 rally.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Well-Established Receiving",
        levels: {
          "1": "When Komi receives a hit and opponent uses Power Attack: [Receive] power +[Receive]×30%.",
          "2": "… +[Receive]×40%.",
          "3": "… +[Receive]×50%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "finisher",
        name: "Center of Defense",
        levels: {
          "1": "[Receive]×235%.",
          "2": "[Receive]×250%.",
          "3": "[Receive]×265%.",
          "4": "[Receive]×280%.",
          "5": "[Receive]×295%.",
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
          "The cooldown of <Center of Defense> is tracked by 6 net crossings. When <Center of Defense> is activated: allies’ [Power Attack/Quick] +3% (max 5 stacks).",
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
          "When a teammate concedes a point, the next back-row ally’s Receive power +[Receive]×30% for that member.",
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
        secondaryType: "Save",
        secondaryCount: 2,
        reason: "Libero puro: prioriza recepción y cobertura.",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },

  // SARUKUI YAMATO (SR) - Wing Spiker
  {
    id: "yamato-sarukui-sr",
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
          "1": "Performs [Cover]×120%.",
          "2": "[Cover]×135%.",
          "3": "[Cover]×150%.",
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
          "1": "[Receive]×225%. If this play avoids BAD: allies’ Team Morale +20.",
          "2": "[Receive]×240% (+Team Morale +20).",
          "3": "[Receive]×255% (+Team Morale +20).",
          "4": "[Receive]×270% (+Team Morale +20).",
          "5": "[Receive]×285% (+Team Morale +20).",
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
      { level: "II", name: "Skill Resonance II", effect: "—" },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Main parameters +10%.",
      },
      { level: "IV", name: "Skill Resonance IV", effect: "—" },
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
          "1": "Washio’s [Block] +8%. When he blocks, the ally with the highest [Receive] gets [Receive] +20% for this rally. If Washio’s block result is not BAD, his next personal block gets [Block] +20%.",
          "2": "Washio’s [Block] +10%. Same triggers, [Receive] +24%.",
          "3": "Washio’s [Block] +12%. Same triggers, [Receive] +28%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "High-RBI Quick",
        levels: {
          "1": "Performs [Quick Attack]×120%.",
          "2": "Performs [Quick Attack]×135%.",
          "3": "Performs [Quick Attack]×150%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Hidden Capability",
        levels: {
          "1": "If an ally makes a NICE play: Washio’s [Block] & [Quick Attack] +2% (max 5 stacks).",
          "2": "… +2.5% per stack (max 5).",
          "3": "… +3% per stack (max 5).",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "finisher",
        name: "Height-Advantage Block",
        levels: {
          "1": "[Block]×220%.",
          "2": "[Block]×235%.",
          "3": "[Block]×250%.",
          "4": "[Block]×265%.",
          "5": "[Block]×280%.",
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
          "If Washio is on the court, when your team scores: Team Morale +10. While allies’ Team Morale Awakening is active, when an ally scores: Washio’s [Block] +5% (max 3 stacks).",
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
          "If Washio’s block result is not BAD, the first allied blocker after this play gets [Block] +15%.",
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
      // Excellent Reception
      {
        key: "passive",
        name: "Excellent Reception",
        levels: {
          "1": "Konoha’s [Receive] +8%. While allies are in Team Morale Awakening, Konoha’s [Receive] and [Cover] +10%.",
          "2": "Konoha’s [Receive] +10%. While allies are in Team Morale Awakening, [Receive]/[Cover] +10%.",
          "3": "Konoha’s [Receive] +12%. While allies are in Team Morale Awakening, [Receive]/[Cover] +10%.",
          "4": undefined,
          "5": undefined,
        },
      },
      // Exquisite Combination
      {
        key: "passive",
        name: "Exquisite Combination",
        levels: {
          "1": "Performs [Cover]×120%.",
          "2": "Performs [Cover]×135%.",
          "3": "Performs [Cover]×150%.",
          "4": undefined,
          "5": undefined,
        },
      },
      // Block of All-Rounders
      {
        key: "passive",
        name: "Block of All-Rounders",
        levels: {
          "1": "If Konoha is in the vanguard: front-row allies’ [Block] +8% and [Power Attack/Quick] +8%. If in the back row: back-row allies’ [Receive] +8% and [Cover] +8%.",
          "2": "If vanguard: [Block] +10% & [Power/Quick] +10%. If rear guard: [Receive]/[Cover] +10%.",
          "3": "If vanguard: [Block] +12% & [Power/Quick] +12%. If rear guard: [Receive]/[Cover] +12%.",
          "4": undefined,
          "5": undefined,
        },
      },
      // Mr. Dexterity Poor
      {
        key: "finisher",
        name: "Mr. Dexterity Poor",
        levels: {
          "1": "Performs a Receive with [Receive]×225%. If this play avoids BAD: allies’ Team Morale +20.",
          "2": "[Receive]×240% (+Team Morale +20).",
          "3": "[Receive]×255% (+Team Morale +20).",
          "4": "[Receive]×270% (+Team Morale +20).",
          "5": "[Receive]×285% (+Team Morale +20).",
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
          "If Konoha’s Receive result is not BAD, the next allied setter gains [Set] +10% and [Awareness] +8%.",
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
          "While Konoha is on the court and allies are in Team Morale Awakening: if his Receive is not BAD, this play does not consume Awakening duration.",
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
        reason: "OP de soporte: primera línea segura + contraataque.",
      },
      equipped: [],
    },
    memory: { name: "", effect: "" },
  },
];
