// src/data/teams/nekoma.ts
import type { Player } from "@/types";

export const nekomaPlayers: Player[] = [
  // ===================== KENMA KOZUME (SP) =====================
  {
    id: "kenma-kozume-sp",
    name: "Kenma Kozume (Swimsuit)",
    shortName: "Kenma",
    team: "Nekoma",
    rarity: "SP",
    roles: ["S"],
    typeTags: ["Receive", "Setter"],
    image: "/characters/nekoma/kenma-kozume-sp.jpg",
    server: "Japan",
    stats: {
      basic: {
        quickAttack: 102,
        powerAttack: 90,
        set: 148,
        serve: 104,
        receive: 136,
        block: 88,
        save: 118,
      },
      bonusAttack: { awareness: 0.05, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.05, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      // Leadership
      {
        key: "passive",
        name: "Leadership",
        levels: {
          "1": "While KENMA (SP) is on the court, allies’ [Reflex] +10%. When an ally Receives or Covers, gain 1 stack of [Gapless Defense] (max 10). Each stack: allies’ [Reflex] +1.5%. If an ally’s Receive/Cover is not BAD, gain +1 additional stack.",
          "2": "While KENMA (SP) is on the court, allies’ [Reflex] +13%. When an ally Receives or Covers, gain 1 stack of [Gapless Defense] (max 10). Each stack: allies’ [Reflex] +1.5%. If an ally’s Receive/Cover is not BAD, gain +1 additional stack.",
          "3": "While KENMA (SP) is on the court, allies’ [Reflex] +16%. When an ally Receives or Covers, gain 1 stack of [Gapless Defense] (max 10). Each stack: allies’ [Reflex] +1.5%. If an ally’s Receive/Cover is not BAD, gain +1 additional stack.",
          "4": undefined,
          "5": undefined,
        },
      },
      // Tossing in tiny motion
      {
        key: "passive",
        name: "Tossing in Tiny Motion",
        levels: {
          "1": "KENMA (SP) performs a Set with [Set] ×140%. If the first ally after this play to spike (Power/Quick) is in the back row, that spike power increases by [Power/Quick] ×20% for that member.",
          "2": "KENMA (SP) performs a Set with [Set] ×160%. Same back-row spike bonus.",
          "3": "KENMA (SP) performs a Set with [Set] ×180%. Same back-row spike bonus.",
          "4": undefined,
          "5": undefined,
        },
      },
      // Explore weaknesses
      {
        key: "passive",
        name: "Explore Weaknesses",
        levels: {
          "1": "When KENMA (SP) Sets or Two-Attacks, his [Awareness] increases by 40% for that play. While he is on the court, when a teammate’s Block result is not BAD, the opponent’s current spike (Power/Quick) power is reduced by [Power/Quick] ×10% for the spiker.",
          "2": "When KENMA (SP) Sets or Two-Attacks, his [Awareness] increases by 60% for that play. Same Block trigger reduces opponent spike by ×13%.",
          "3": "When KENMA (SP) Sets or Two-Attacks, his [Awareness] increases by 80% for that play. Same Block trigger reduces opponent spike by ×16%.",
          "4": undefined,
          "5": undefined,
        },
      },
      // A play that puts the opponent at its mercy
      {
        key: "active",
        name: "A Play that Puts the Opponent at Its Mercy",
        levels: {
          "1": "KENMA (SP) performs an unblockable Two-Attack with [Set] ×255%. After this play, the first opposing spike (Power/Quick) suffers [Power] −40% for the spiker, lasting until the ball crosses the net twice.",
          "2": "Unblockable Two-Attack with [Set] ×270%. Same −40% opponent [Power] for 2 net crossings.",
          "3": "Unblockable Two-Attack with [Set] ×285%. Same −40% opponent [Power] for 2 net crossings.",
          "4": "Unblockable Two-Attack with [Set] ×300%. Same −40% opponent [Power] for 2 net crossings.",
          "5": "Unblockable Two-Attack with [Set] ×315%. Same −40% opponent [Power] for 2 net crossings.",
        },
      },
    ],
    bonds: [
      {
        to: "kenma-kozume-sp",
        name: "Cherry Blossom Viewing (Kizuna Skills)",
        participants: ["kenma-kozume-sp", "shoyo-hinata-sp"],
        effect:
          "At match start, KENMA (SP) gains 3 stacks of [Gapless Defense]. Max stacks of [Gapless Defense] become (Lv1: 13, Lv2: 13, Lv3: 14, Lv4: 14, Lv5: 15). For each stack: KENMA (SP)’s [Awareness] increases (Lv1: 0.8%, Lv2: 1%, Lv3: 1%, Lv4: 1%, Lv5: 1.2%), and when HINATA (SP)’s play becomes NICE, his [Quick Attack] increases (Lv1: 1%, Lv2: 1.25%, Lv3: 1.25%, Lv4: 1.5%, Lv5: 1.5%).",
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
          "When KENMA (SP) performs a Two-Attack, the first ally spike (Power/Quick) and the first ally Two-Attack after this play gain bonus power equal to KENMA (SP)’s [Reflex] ×100% (up to +100%). Lasts until the ball crosses the net twice.",
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
          "[Gapless Defense]: per stack, opposing members’ [Awareness] −1% and [Power] −2%. If stacks exceed 8, additional −5% [Awareness] and −10% [Power]. While KENMA (SP) is on the court, when a teammate concedes a point, gain 3 stacks of [Gapless Defense].",
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

  // ===================== MORISUKE YAKU (SSR) =====================
  {
    id: "morisuke-yaku-ssr",
    name: "Morisuke Yaku",
    shortName: "Yaku",
    team: "Nekoma",
    rarity: "SSR",
    roles: ["LI"],
    typeTags: ["Receive"],
    image: "/characters/nekoma/morisuke-yaku-ssr.jpg",
    server: "Japan",
    stats: {
      basic: {
        quickAttack: 62,
        powerAttack: 84,
        set: 94,
        serve: 102,
        receive: 132,
        block: 86,
        save: 124,
      },
      bonusAttack: { awareness: 0.05, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.06, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      // The key to defense
      {
        key: "passive",
        name: "The Key to Defense",
        levels: {
          "1": "While YAKU is on the court, if a teammate’s Receive result is not BAD, YAKU’s [Receive] and [Save] +3%. Stacks up to 5.",
          "2": "Same trigger: YAKU’s [Receive] and [Save] +4%. Stacks up to 5.",
          "3": "Same trigger: YAKU’s [Receive] and [Save] +5%. Stacks up to 5.",
          "4": undefined,
          "5": undefined,
        },
      },
      // Reliable defense
      {
        key: "passive",
        name: "Reliable Defense",
        levels: {
          "1": "While YAKU is on the court, Quick attackers on your side gain spike power equal to their [Quick Attack] ×8%.",
          "2": "While YAKU is on the court, Quick attackers gain [Quick Attack] ×10% spike power.",
          "3": "While YAKU is on the court, Quick attackers gain [Quick Attack] ×12% spike power.",
          "4": undefined,
          "5": undefined,
        },
      },
      // Super libero
      {
        key: "passive",
        name: "Super Libero",
        levels: {
          "1": "YAKU’s [Receive] +11%. If his Receive result is NORMAL, change it to PERFECT.",
          "2": "YAKU’s [Receive] +13%. NORMAL becomes PERFECT.",
          "3": "YAKU’s [Receive] +15%. NORMAL becomes PERFECT.",
          "4": undefined,
          "5": undefined,
        },
      },
      // Perfect reception
      {
        key: "active",
        name: "Perfect Reception",
        levels: {
          "1": "Receive with [Receive] ×240%.",
          "2": "Receive with [Receive] ×255%.",
          "3": "Receive with [Receive] ×270%.",
          "4": "Receive with [Receive] ×285%.",
          "5": "Receive with [Receive] ×300%.",
        },
      },
    ],
    bonds: [
      {
        to: "morisuke-yaku-ssr",
        name: "“Protection” Educational Guidance (Kizuna)",
        participants: ["morisuke-yaku-ssr", "lev-haiba-ssr"],
        effect:
          "YAKU’s [Receive] and LEV HAIBA’s [Quick Attack] increase (Lv1: +1%+5, Lv2: +2%+7, Lv3: +3%+9, Lv4: +4%+12, Lv5: +5%+15).",
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
          "PERFECT RECEPTION gains an additional [Receive] ×20% power this time.",
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
          "When the opponent is at match point, YAKU’s [Receive] and [Save] +10%.",
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

  // ===================== KENMA (SSR) =====================
  {
    id: "kenma-kozume-ssr",
    name: "Kenma Kozume",
    shortName: "Kenma",
    team: "Nekoma",
    rarity: "SSR",
    roles: ["S"],
    typeTags: ["Setter", "Receive"],
    image: "/characters/nekoma/kenma-kozume-ssr.jpg",
    server: "Global",
    stats: {
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
        name: "Sharp Eye for Observation",
        levels: {
          "1": "While KENMA is on the court, allies’ Receive +8%. On PERFECT Receive or PERFECT Set, gain 1 stack of [Connect] (all allies’ [Receive] +3% per stack, max 6).",
          "2": "Allies’ Receive +10%. Same [Connect] (max 6).",
          "3": "Allies’ Receive +13%. Same [Connect] (max 6).",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Excellent Toss",
        levels: {
          "1": "KENMA performs a Set with [Set] ×120%.",
          "2": "KENMA performs a Set with [Set] ×135%.",
          "3": "KENMA performs a Set with [Set] ×150%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Heart of Nekoma",
        levels: {
          "1": "While KENMA is on the court, allies’ [Receive] +6%. If [Connect] ≥ 6, allies’ [Receive] ×150% and [Cover] ×150%. On a failed Receive/Cover by a friendly member, consume 6 stacks of [Connect], do not concede the point, and change the result to PERFECT.",
          "2": "While on court, allies’ [Receive] +8%. Same [Connect] ≥ 6 effects.",
          "3": "While on court, allies’ [Receive] +10%. Same [Connect] ≥ 6 effects.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Tricky Play",
        levels: {
          "1": "Unblockable Two-Attack with [Set] ×220%.",
          "2": "Unblockable Two-Attack with [Set] ×235%.",
          "3": "Unblockable Two-Attack with [Set] ×250%.",
          "4": "Unblockable Two-Attack with [Set] ×265%.",
          "5": "Unblockable Two-Attack with [Set] ×280%.",
        },
      },
    ],
    bonds: [
      {
        to: "kenma-kozume-ssr",
        name: "“Brain” and ”Conning Tower” (Kizuna Skills)",
        participants: ["kenma-kozume-ssr", "tetsuro-kuroo-ur"],
        effect:
          "KENMA raises the toss and KUROO (UR) performs a Quick with [Quick Attack] ×(Lv1: 265%, Lv2: 280%, Lv3: 295%, Lv4: 310%, Lv5: 325%).",
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
        effect: "TRICKY PLAY grants +2 stacks of [Connect].",
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Increases Basic Stats by 10%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect: "At set start, gain 4 stacks of [Connect].",
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

  // ===================== KUROO (SP) =====================
  {
    id: "tetsuro-kuroo-sp",
    name: "Tetsurō Kuroo",
    shortName: "Kuroo",
    team: "Nekoma",
    rarity: "SP",
    roles: ["MB"],
    typeTags: ["Receive", "Block"],
    image: "/characters/nekoma/tetsuro-kuroo-sp.jpg",
    server: "Japan",
    stats: {
      basic: {
        quickAttack: 136,
        powerAttack: 93,
        set: 128,
        serve: 143,
        receive: 151,
        block: 159,
        save: 128,
      },
      bonusAttack: { awareness: 0.0, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.05, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "The command tower that cannot be eaten",
        levels: {
          "1": "While on the court, increases [Spirit] of allies in the same row (front/back) as KUROO by 20%. After KUROO touches the ball, the next play of the same type gains power equal to 40% × the corresponding stat of the performer. If KUROO’s play is NICE, give [Anger] to a random opponent.",
          "2": "Same effect but +25% [Spirit] to same-row allies.",
          "3": "Same effect but +30% [Spirit] to same-row allies.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Skillful receive",
        levels: {
          "1": "KUROO performs a Receive with [Receive] ×140%. If NICE, this Receive gains additional [Receive] ×20% power.",
          "2": "Receive [Receive] ×160%. If NICE, +[Receive] ×20% more power.",
          "3": "Receive [Receive] ×180%. If NICE, +[Receive] ×20% more power.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "A flawless, all-around player",
        levels: {
          "1": "Front row & touches ball: KUROO’s [Reflex]/[Spirit] increase by 50% of each other front-row ally (max +100% each). Also, allies’ [Attack Technique] +14% and KUROO’s [Block] +45%. Back row & touches ball: KUROO’s [Reflex]/[Spirit] increase by 50% of each other back-row ally (max +100% each). Also, allies’ [Defense Technique] +14% and KUROO’s [Receive] +45%.",
          "2": "Same but allies’ [Attack/Defense Technique] +17%.",
          "3": "Same but allies’ [Attack/Defense Technique] +20%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Unpleasant Block",
        levels: {
          "1": "Block with [Block] ×280%. If the ball does not rebound into opponent court, the first ally Receive after this play will not concede a point. If it does rebound into opponent court, allies’ main parameters +15% until the ball crosses the net 8 times.",
          "2": "Block with [Block] ×300%. Same effects.",
          "3": "Block with [Block] ×320%. Same effects.",
          "4": "Block with [Block] ×340%. Same effects.",
          "5": "Block with [Block] ×360%. Same effects.",
        },
      },
    ],
    bonds: [
      {
        to: "tetsuro-kuroo-sp",
        name: "Brain & Control Tower",
        participants: ["tetsuro-kuroo-sp", "kenma-kozume-sp"],
        effect:
          "KENMA (SP) sets; KUROO (SP) performs a Quick with [Quick Attack] ×(Lv1: 280%, Lv2: 300%, Lv3: 320%, Lv4: 340%, Lv5: 360%). Guaranteed NICE. Allies’ [Attack Technique] +10% for 1 set.",
      },
      {
        to: "tetsuro-kuroo-sp",
        name: "Fireworks Display",
        participants: ["tetsuro-kuroo-sp", "kei-tsukishima-sp"],
        effect:
          "Allies’ main parameters +(Lv1: 6%, Lv2: 7%, Lv3: 8%, Lv4: 9%, Lv5: 10%). At each rally end, inflict [Rage] on opponent front row (lasts 8 net crossings). If [Rage] is applied again, inflict [Distracted] instead (lasts 8 net crossings; cannot be removed).",
      },
    ],
    resonances: [
      {
        level: "I",
        name: "Skill Resonance I",
        effect: "Main parameters increase by 13%.",
      },
      {
        level: "II",
        name: "Skill Resonance II",
        effect:
          "After KUROO touches the ball, the next ally [Quick/Power Attack] gains +20% × KUROO’s [Block] (up to +1600). If the spiker is in the back row, that member’s [Attack Technique] +20% (2 net crossings).",
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Main parameters increase by 13%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect:
          "On serve: allies’ [Quick/Power Attack] +40% and back-row allies’ [Receive] +30% for 1 rally. KUROO’s [Defense Technique] +15%; if back row, an additional +15%.",
      },
      {
        level: "V",
        name: "Skill Resonance V",
        effect: "Main parameters increase by 13%.",
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
    typeTags: ["Quick Attack", "Block"],
    image: "/characters/nekoma/tetsuro-kuroo-ur.jpg",
    server: "Global",
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
      // All-rounder
      {
        key: "passive",
        name: "All-rounder",
        levels: {
          "1": "KUROO’s [Quick Attack] +10%. While on the court, each net crossing grants KUROO +5% [Block] and +5% [Quick Attack] (max 5 stacks).",
          "2": "KUROO’s [Quick Attack] +12%. Same stacking effect.",
          "3": "KUROO’s [Quick Attack] +14%. Same stacking effect.",
          "4": undefined,
          "5": undefined,
        },
      },
      // A quick
      {
        key: "active",
        name: "A Quick",
        levels: {
          "1": "Performs a Quick with [Quick Attack] ×125% and gains 1 stack of [Charge]. Each [Charge]: this skill’s power +[Quick Attack] ×5% (max 3).",
          "2": "Quick [Quick Attack] ×140%, gain 1 [Charge]. Same scaling.",
          "3": "Quick [Quick Attack] ×155%, gain 1 [Charge]. Same scaling.",
          "4": undefined,
          "5": undefined,
        },
      },
      // Leadership
      {
        key: "passive",
        name: "Leadership",
        levels: {
          "1": "KUROO’s [Block] +14%. If his Block result is PERFECT, inflict [Anger] on the opposing spiker (their [Power/Quick] −10%).",
          "2": "KUROO’s [Block] +16%. Same [Anger] effect on PERFECT Block.",
          "3": "KUROO’s [Block] +18%. Same [Anger] effect on PERFECT Block.",
          "4": undefined,
          "5": undefined,
        },
      },
      // Lead block
      {
        key: "active",
        name: "Lead Block",
        levels: {
          "1": "Block with [Block] ×235%. If the opposing spiker has a debuff, add +[Block] ×20% power.",
          "2": "Block with [Block] ×250%. If debuffed, +[Block] ×20%.",
          "3": "Block with [Block] ×265%. If debuffed, +[Block] ×20%.",
          "4": "Block with [Block] ×280%. If debuffed, +[Block] ×20%.",
          "5": "Block with [Block] ×295%. If debuffed, +[Block] ×20%.",
        },
      },
    ],
    bonds: [
      {
        to: "tetsuro-kuroo-ur",
        name: "“Brain” and ”Conning Tower” (Kizuna Skills)",
        participants: ["tetsuro-kuroo-ur", "kenma-kozume-ssr"],
        effect:
          "KENMA (SSR) raises the toss, and KUROO (UR) performs a Quick with [Quick Attack] ×(Lv1: 265%, Lv2: 280%, Lv3: 295%, Lv4: 310%, Lv5: 325%).",
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
        effect: "A QUICK cooldown becomes 0 net crossings.",
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
          "LEADERSHIP change: triggers on any Block (not only PERFECT) and this Block gains additional +[Block] ×25% power.",
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
    typeTags: ["Quick Attack", "Block"],
    image: "/characters/nekoma/tetsuro-kuroo-ssr.jpg",
    server: "Global",
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
        name: "Master's Aura",
        levels: {
          "1": "While KUROO (Practice) is on the court, Quick attackers’ [Power] +16%.",
          "2": "While on court, Quick attackers’ [Power] +20%.",
          "3": "While on court, Quick attackers’ [Power] +24%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Stable Attack",
        levels: {
          "1": "Quick with [Quick Attack] ×125% and gain 1 [Charge] stack. Each [Charge]: this skill +[Quick Attack] ×15% (max 2).",
          "2": "Quick ×145%, gain 1 [Charge]. Same scaling.",
          "3": "Quick ×165%, gain 1 [Charge]. Same scaling.",
          "4": "Quick ×185%, gain 1 [Charge]. Same scaling.",
          "5": "Quick ×205%, gain 1 [Charge]. Same scaling.",
        },
      },
      {
        key: "passive",
        name: "Block's Conning Tower",
        levels: {
          "1": "While KUROO (Practice) is present, allies’ [Block] +8%.",
          "2": "Allies’ [Block] +10%.",
          "3": "Allies’ [Block] +12%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Full Block",
        levels: {
          "1": "Block with [Block] ×170%. If other Block-type allies are in the vanguard, add +[Block] ×15% power.",
          "2": "Block ×185% (+15% if condition).",
          "3": "Block ×200% (+15% if condition).",
          "4": "Block ×215% (+15% if condition).",
          "5": "Block ×230% (+15% if condition).",
        },
      },
    ],
    bonds: [
      {
        to: "tetsuro-kuroo-ssr",
        name: "“Center” and ”Conning Tower” (Kizuna Skills)",
        participants: ["tetsuro-kuroo-ssr", "kenma-kozume-ur"],
        effect:
          "KENMA (UR) [Set] and KUROO (Practice) [Block] increase (Lv1: 6%, Lv2: 7%, Lv3: 8%, Lv4: 9%, Lv5: 10%).",
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
        effect: "STABLE ATTACK: [Charge] stack limit removed.",
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
          "After FULL BLOCK, inflict [Anger] on the opposing spiker and grant allies +10% [Power/Quick].",
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
    typeTags: ["Setter", "Receive"],
    image: "/characters/nekoma/kenma-kozume-sr.jpg",
    server: "Global",
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
          "1": "Back-row allies’ Receive +6% while KENMA (Practice) is present.",
          "2": "Back-row allies’ Receive +8% while present.",
          "3": "Back-row allies’ Receive +10% while present.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Setting Core",
        levels: {
          "1": "On PERFECT Receive, next spike power +6% of spiker’s [Power/Quick].",
          "2": "On PERFECT Receive, next spike power +7.5% of [Power/Quick].",
          "3": "On PERFECT Receive, next spike power +9% of [Power/Quick].",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Tactical Direction",
        levels: {
          "1": "KENMA’s [Set] +8%. On PERFECT Receive, gain 1 [Keep It Alive] (team [Receive] +1% per stack, max 6).",
          "2": "[Set] +10%. On PERFECT Receive, gain 1 [Keep It Alive] (team [Receive] +1.25% per stack, max 6).",
          "3": "[Set] +12%. On PERFECT Receive, gain 1 [Keep It Alive] (team [Receive] +1.5% per stack, max 6).",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Strategist of the Court",
        levels: {
          "1": "Set with [Set] ×220%.",
          "2": "Set with [Set] ×235%.",
          "3": "Set with [Set] ×250%.",
          "4": "Set with [Set] ×265%.",
          "5": "Set with [Set] ×280%.",
        },
      },
    ],
    bonds: [
      {
        to: "kenma-kozume-sr",
        name: "Pivot & Control Tower",
        participants: ["kenma-kozume-sr", "tetsuro-kuroo-ssr"],
        effect: "Improves set quality and block coordination when aligned.",
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
        effect: 'Max "Keep It Alive" stacks increased to 10.',
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Increases Basic Stats by 6%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect: "SETTING CORE also triggers when Receive result is not BAD.",
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
    typeTags: ["Receive"],
    image: "/characters/nekoma/morisuke-yaku-sr.jpg",
    server: "Global",
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
          "1": "YAKU (Practice) [Receive]/[Save] +8%.",
          "2": "YAKU (Practice) [Receive]/[Save] +10%.",
          "3": "YAKU (Practice) [Receive]/[Save] +12%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Defense Fortress",
        levels: {
          "1": "Back-row allies’ [Receive] +6% while present.",
          "2": "Back-row allies’ [Receive] +7.5% while present.",
          "3": "Back-row allies’ [Receive] +9% while present.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Absolute Defense",
        levels: {
          "1": "When receiving opponent Quick, YAKU’s [Receive] +10% (this touch).",
          "2": "When receiving opponent Quick, [Receive] +12.5% (this touch).",
          "3": "When receiving opponent Quick, [Receive] +15% (this touch).",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "High Precision Receive",
        levels: {
          "1": "Receive with [Receive] ×220%.",
          "2": "Receive with [Receive] ×235%.",
          "3": "Receive with [Receive] ×250%.",
          "4": "Receive with [Receive] ×265%.",
          "5": "Receive with [Receive] ×280%.",
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
        effect: "When losing, YAKU (Practice) [Receive] +12% and [Save] +12%.",
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
          "Once per turn, a failed Receive/Save becomes opponent free-ball.",
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
    typeTags: ["Quick Attack"],
    image: "/characters/nekoma/lev-haiba-sr.jpg",
    server: "Global",
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
          "1": "Quick Attack +8%; each net crossing grants 1 [Expectation] (1 turn), each stack +1% [Quick Attack] (max 4).",
          "2": "Quick Attack +9.5%; same [Expectation] (max 4).",
          "3": "Quick Attack +11%; same [Expectation] (max 4).",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Evolved Block",
        levels: {
          "1": "Block with [Block] ×105%; gain 1 [Growth] (+3% [Block] to this skill, up to 2).",
          "2": "Block with [Block] ×120%; gain 1 [Growth] (+3% up to 2).",
          "3": "Block with [Block] ×135%; gain 1 [Growth] (+3% up to 2).",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Free Spirit",
        levels: {
          "1": "While in front row, Lev’s [Quick Attack] +9.5%.",
          "2": "While in front row, Lev’s [Quick Attack] +11.5%.",
          "3": "While in front row, Lev’s [Quick Attack] +13.5%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Offensive Wing",
        levels: {
          "1": "Quick Spike with [Quick Attack] ×220%.",
          "2": "Quick Spike with [Quick Attack] ×235%.",
          "3": "Quick Spike with [Quick Attack] ×250%.",
          "4": "Quick Spike with [Quick Attack] ×265%.",
          "5": "Quick Spike with [Quick Attack] ×280%.",
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
          "When Lev blocks a debuffed spiker, Lev’s [Block] +5% (stacks up to 2 for this rally).",
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Increases Basic Stats by 6%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect: "Gain +1 extra [Expectation] each time it is granted.",
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
    typeTags: ["Quick Attack", "Block"],
    image: "/characters/nekoma/lev-haiba-ssr.jpg",
    server: "Global",
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
      // Tactical change
      {
        key: "passive",
        name: "Tactical Change",
        levels: {
          "1": "If your team achieves a PERFECT Receive, LEV’s next Quick gains [Quick Attack] ×15% power.",
          "2": "On team PERFECT Receive, next Quick +[Quick Attack] ×17%.",
          "3": "On team PERFECT Receive, next Quick +[Quick Attack] ×19%.",
          "4": undefined,
          "5": undefined,
        },
      },
      // A block full of spirit
      {
        key: "active",
        name: "A Block Full of Spirit",
        levels: {
          "1": "Block with [Block] ×105%.",
          "2": "Block with [Block] ×120%.",
          "3": "Block with [Block] ×135%.",
          "4": undefined,
          "5": undefined,
        },
      },
      // Blessed physique
      {
        key: "passive",
        name: "Blessed Physique",
        levels: {
          "1": "If the opposing blocker has a debuff when LEV Quick-attacks, that blocker’s [Block] −10% for this rally.",
          "2": "If debuffed, −12.5% [Block] for that blocker (this rally).",
          "3": "If debuffed, −15% [Block] for that blocker (this rally).",
          "4": undefined,
          "5": undefined,
        },
      },
      // High-RBI spikes
      {
        key: "active",
        name: "High-RBI Spikes",
        levels: {
          "1": "Quick with [Quick Attack] ×245%.",
          "2": "Quick with [Quick Attack] ×260%.",
          "3": "Quick with [Quick Attack] ×275%.",
          "4": "Quick with [Quick Attack] ×290%.",
          "5": "Quick with [Quick Attack] ×305%.",
        },
      },
    ],
    bonds: [
      {
        to: "lev-haiba-ssr",
        name: "“Protection” Educational Guidance (Kizuna Skills)",
        participants: ["lev-haiba-ssr", "morisuke-yaku-ssr"],
        effect:
          "YAKU’s [Receive] and LEV HAIBA’s [Quick Attack] increase (Lv1: +1%+5, Lv2: +2%+7, Lv3: +3%+9, Lv4: +4%+12, Lv5: +5%+15).",
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
          "When LEV blocks a debuffed spiker, LEV’s [Block] +5% (stacks up to 2 for this rally).",
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
          "If a teammate’s toss result is PERFECT, HIGH-RBI SPIKES gains an additional [Quick Attack] ×12% power.",
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
    typeTags: ["Power Attack"],
    image: "/characters/nekoma/taketora-yamamoto-sr.jpg",
    server: "Global",
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
          "1": "Yamamoto’s Power Spike +6% of [Power Attack]; when your side scores, Team Morale +5.",
          "2": "Power Spike +7.5% of [Power Attack]; when your side scores, Team Morale +5.",
          "3": "Power Spike +9% of [Power Attack]; when your side scores, Team Morale +5.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Perfect Defense",
        levels: {
          "1": "Performs a Receive with [Receive] ×120%.",
          "2": "Performs a Receive with [Receive] ×132%.",
          "3": "Performs a Receive with [Receive] ×145%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Gritty Spirit",
        levels: {
          "1": "When your side scores, restore 8 Stamina to the ally with the lowest Stamina.",
          "2": "When your side scores, restore 10 Stamina to the ally with the lowest Stamina.",
          "3": "When your side scores, restore 12 Stamina to the ally with the lowest Stamina.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Exhaust Spike",
        levels: {
          "1": "Power Spike with [Power Attack] ×220%; if it scores, Team Morale +5.",
          "2": "Power Spike with [Power Attack] ×235%; if it scores, Team Morale +5.",
          "3": "Power Spike with [Power Attack] ×250%; if it scores, Team Morale +5.",
          "4": "Power Spike with [Power Attack] ×265%; if it scores, Team Morale +5.",
          "5": "Power Spike with [Power Attack] ×280%; if it scores, Team Morale +5.",
        },
      },
    ],
    bonds: [
      {
        to: "taketora-yamamoto-sr",
        name: "Neighborhood Trio",
        participants: [
          "taketora-yamamoto-sr",
          "nobuyuki-kai-sr",
          "shohei-fukunaga-sr",
        ],
        effect:
          "When Yamamoto scores with a Power Spike, KAI gains +10% [Receive] for 1 rally.",
      },
      {
        to: "taketora-yamamoto-sr",
        name: "Neighborhood Trio",
        participants: [
          "taketora-yamamoto-sr",
          "nobuyuki-kai-sr",
          "shohei-fukunaga-sr",
        ],
        effect:
          "When Yamamoto scores with a Power Spike, FUKUNAGA gains +10% [Power Attack] for 1 rally.",
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
        effect: "On Yamamoto score, remove all debuffs from your back row.",
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Increases Basic Stats by 6%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect: "EXHAUST SPIKE power +10% of [Power Attack].",
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
    roles: ["OP"],
    typeTags: ["Receive"],
    image: "/characters/nekoma/nobuyuki-kai-sr.jpg",
    server: "Global",
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
          "1": "When receiving a Jump Serve, this Receive +15% of [Receive].",
          "2": "When receiving a Jump Serve, this Receive +20% of [Receive].",
          "3": "When receiving a Jump Serve, this Receive +25% of [Receive].",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Power Spike",
        levels: {
          "1": "Power Spike with [Power Attack] ×120%.",
          "2": "Power Spike with [Power Attack] ×132%.",
          "3": "Power Spike with [Power Attack] ×145%.",
          "4": "Power Spike with [Power Attack] ×160%.",
          "5": "Power Spike with [Power Attack] ×175%.",
        },
      },
      {
        key: "passive",
        name: "Stamina Match",
        levels: {
          "1": "KAI’s [Receive] +6%. On PERFECT Receive, Team Morale +3.",
          "2": "KAI’s [Receive] +8%. On PERFECT Receive, Team Morale +4.",
          "3": "KAI’s [Receive] +10%. On PERFECT Receive, Team Morale +5.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Perfect Reception",
        levels: {
          "1": "Receive with [Receive] ×215%; if NORMAL, change to PERFECT.",
          "2": "Receive with [Receive] ×230%; if NORMAL, change to PERFECT.",
          "3": "Receive with [Receive] ×245%; if NORMAL, change to PERFECT.",
          "4": "Receive with [Receive] ×260%; if NORMAL, change to PERFECT.",
          "5": "Receive with [Receive] ×275%; if NORMAL, change to PERFECT.",
        },
      },
    ],
    bonds: [
      {
        to: "nobuyuki-kai-sr",
        name: "Neighborhood Trio",
        participants: [
          "nobuyuki-kai-sr",
          "taketora-yamamoto-sr",
          "shohei-fukunaga-sr",
        ],
        effect:
          "On KAI PERFECT Receive, YAMAMOTO gains +10% [Power Attack] for 1 rally.",
      },
      {
        to: "nobuyuki-kai-sr",
        name: "Neighborhood Trio",
        participants: [
          "nobuyuki-kai-sr",
          "taketora-yamamoto-sr",
          "shohei-fukunaga-sr",
        ],
        effect:
          "On KAI PERFECT Receive, FUKUNAGA gains +8% [Power Attack] for 1 rally.",
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
          "PERFECT RECEPTION is always PERFECT vs tired Quick spikers (Stamina <30).",
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Increases Basic Stats by 6%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect: "When behind, back-row allies’ [Receive] +10%.",
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
    typeTags: ["Power Attack", "Receive"],
    image: "/characters/nekoma/shohei-fukunaga-sr.jpg",
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
        name: "Rally Point",
        levels: {
          "1": "Receive with [Receive] ×120%.",
          "2": "Receive with [Receive] ×132%.",
          "3": "Receive with [Receive] ×145%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Back Row Tactics",
        levels: {
          "1": "If all back-row allies are Receive-type: FUKUNAGA [Receive] +12%; NORMAL Receive becomes PERFECT.",
          "2": "If condition met: [Receive] +15%; NORMAL → PERFECT.",
          "3": "If condition met: [Receive] +18%; NORMAL → PERFECT.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Firm Reception",
        levels: {
          "1": "FUKUNAGA’s [Receive] +8%.",
          "2": "FUKUNAGA’s [Receive] +10%.",
          "3": "FUKUNAGA’s [Receive] +12%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Right-on-Line",
        levels: {
          "1": "Power Spike with [Power Attack] ×220%.",
          "2": "Power Spike with [Power Attack] ×235%.",
          "3": "Power Spike with [Power Attack] ×250%.",
          "4": "Power Spike with [Power Attack] ×265%.",
          "5": "Power Spike with [Power Attack] ×280%.",
        },
      },
    ],
    bonds: [
      {
        to: "shohei-fukunaga-sr",
        name: "Neighborhood Trio",
        participants: [
          "shohei-fukunaga-sr",
          "taketora-yamamoto-sr",
          "nobuyuki-kai-sr",
        ],
        effect:
          "On FUKUNAGA PERFECT Receive, YAMAMOTO gains +8% [Power Attack] for 1 rally.",
      },
      {
        to: "shohei-fukunaga-sr",
        name: "Neighborhood Trio",
        participants: [
          "shohei-fukunaga-sr",
          "taketora-yamamoto-sr",
          "nobuyuki-kai-sr",
        ],
        effect:
          "On FUKUNAGA PERFECT Receive, KAI gains +8% [Receive] for 1 rally.",
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
          "On FUKUNAGA Power Spike, reduce opponent [Receive] by 5% of their [Receive].",
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
          "On team PERFECT Receive, FUKUNAGA’s next Power Spike +15% of [Power Attack].",
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

  // ===================== TAMAHIKO TESHIRO (SR) =====================
  {
    id: "tamahiko-teshiro-sr",
    name: "Tamahiko Teshiro",
    shortName: "Teshiro",
    team: "Nekoma",
    rarity: "SR",
    roles: ["S"],
    typeTags: ["Receive", "Serve", "Setter"],
    image: "/characters/nekoma/tamahiko-teshiro-sr.jpg",
    server: "Global",
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
          "1": "TESHIRO performs a Set with [Set] ×120%.",
          "2": "TESHIRO performs a Set with [Set] ×132%.",
          "3": "TESHIRO performs a Set with [Set] ×145%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Focused Serve",
        levels: {
          "1": "TESHIRO’s [Serve] +8%.",
          "2": "TESHIRO’s [Serve] +10%.",
          "3": "TESHIRO’s [Serve] +12%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Precise Receive",
        levels: {
          "1": "While TESHIRO is present, back-row allies’ [Receive] +6%.",
          "2": "While TESHIRO is present, back-row allies’ [Receive] +7.5%.",
          "3": "While TESHIRO is present, back-row allies’ [Receive] +9%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Ceiling Serve",
        levels: {
          "1": "Ceiling Serve with [Serve] ×215%; for this Serve, TESHIRO’s [Awareness] +10%.",
          "2": "Ceiling Serve with [Serve] ×230%; [Awareness] +10% for this Serve.",
          "3": "Ceiling Serve with [Serve] ×245%; [Awareness] +10% for this Serve.",
          "4": "Ceiling Serve with [Serve] ×260%; [Awareness] +10% for this Serve.",
          "5": "Ceiling Serve with [Serve] ×275%; [Awareness] +10% for this Serve.",
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
          "When behind, TESHIRO’s Serve gains an additional +10% of [Serve] as power.",
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
          "While TESHIRO is present, each net crossing grants back-row allies +3% [Receive] (max 5 stacks).",
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

  // ===================== SO INUOKA (SR) =====================
  {
    id: "so-inuoka-sr",
    name: "Sō Inuoka",
    shortName: "Inuoka",
    team: "Nekoma",
    rarity: "SR",
    roles: ["MB"],
    typeTags: ["Block"],
    image: "/characters/nekoma/so-inuoka-sr.jpg",
    server: "Global",
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
        key: "passive",
        name: "Rising Wall",
        levels: {
          "1": "IN UOKA’s [Block] +8%.",
          "2": "IN UOKA’s [Block] +10%.",
          "3": "IN UOKA’s [Block] +12%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Shutdown Block",
        levels: {
          "1": "When INUOKA blocks, consume 3 extra Stamina to increase this Block’s power by [Block] ×14%.",
          "2": "When INUOKA blocks, consume 3 extra Stamina to increase this Block’s power by [Block] ×20%.",
          "3": "When INUOKA blocks, consume 3 extra Stamina to increase this Block’s power by [Block] ×25%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Unquenchable Spirit",
        levels: {
          "1": "While INUOKA is present and your side is behind, team Block power +3% of each player’s [Block].",
          "2": "Same condition: +4.5% of each player’s [Block].",
          "3": "Same condition: +6% of each player’s [Block].",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Cover Block",
        levels: {
          "1": "Block with [Block] ×180%.",
          "2": "Block with [Block] ×195%.",
          "3": "Block with [Block] ×210%.",
          "4": "Block with [Block] ×225%.",
          "5": "Block with [Block] ×240%.",
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
        effect: "At the start of each turn, remove all debuffs from INUOKA.",
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
          "On any team PERFECT touch, reduce COVER BLOCK cooldown by 1 net crossing.",
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
