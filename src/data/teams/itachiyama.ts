// src/data/teams/itachiyama.ts
import type { Player } from "@/types";

export const itachiyamaPlayers: Player[] = [
  // ===================== KIYOOMI SAKUSA (UR) =====================
  {
    id: "kiyoomi-sakusa-ur",
    name: "Kiyoomi Sakusa",
    shortName: "Sakusa",
    team: "Itachiyama",
    rarity: "UR",
    roles: ["WS"],
    typeTags: ["Power Attack", "Receive"],
    image: "/characters/itachiyama/kiyoomi-sakusa-ur.jpg",
    server: "Japan",
    stats: {
      basic: {
        quickAttack: 112,
        powerAttack: 163,
        set: 128,
        serve: 144,
        receive: 154,
        block: 136,
        save: 128,
      },
      bonusAttack: { awareness: 0.05, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.0, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Persistent attack",
        levels: {
          "1": "Sakusa's [banging] is up 10%, and his [receiving] is up 20%. Sakusa's [banging] is up 6% when receiving. Maximum 3 stacks. This effect lasts until  Sakusa's next blow.Sakuhaya's [receiving] increased by 15% when he hit hard. This effect lasts until Sakusa's next reception",
          "2": "Sakusa's [banging] is up 12.5%, and his [receiving] is up 22.5%. Sakusa's [banging] is up 6% when receiving. Maximum 3 stacks. This effect lasts until  Sakusa's next blow.Sakuhaya's [receiving] increased by 15% when he hit hard. This effect lasts until Sakusa's next reception",
          "3": "Sakusa's [banging] is up 15%, and his [receiving] is up 25%. Sakusa's [banging] is up 6% when receiving. Maximum 3 stacks. This effect lasts until  Sakusa's next blow.Sakuhaya's [receiving] increased by 15% when he hit hard. This effect lasts until Sakusa's next reception",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "I will do my best",
        levels: {
          "1": "Sakusa makes a [receiving] ×150% power reception. When receiving Sakusa, if the receiving power exceeds [receiving] ×170%, the [reaction] will increase by 10%, and the cooldown of <make sure everything is done'' will be reduced by two times the ball exceeds the net. This effect lasts until the end of the match. When receiving Sakusa, if the receiving power exceeds [receiving]×200%, [defensive technique] is increased by 15%. This effect lasts until the end of the match",
          "2": "Sakusa makes a [receiving] ×170% power reception. When receiving Sakusa, if the receiving power exceeds [receiving] ×170%, the [reaction] will increase by 10%, and the cooldown of <make sure everything is done'' will be reduced by two times the ball exceeds the net. This effect lasts until the end of the match. When receiving Sakusa, if the receiving power exceeds [receiving]×200%, [defensive technique] is increased by 15%. This effect lasts until the end of the match",
          "3": "Sakusa makes a [receiving] ×190% power reception. When receiving Sakusa, if the receiving power exceeds [receiving] ×170%, the [reaction] will increase by 10%, and the cooldown of <make sure everything is done'' will be reduced by two times the ball exceeds the net. This effect lasts until the end of the match. When receiving Sakusa, if the receiving power exceeds [receiving]×200%, [defensive technique] is increased by 15%. This effect lasts until the end of the match",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Top spiker",
        levels: {
          "1": "If Sakusa is on the court and his teammate's receiving, cover, or block makes a nice play, Sakusa gains one stack of the [perfectionism] effect.[ Perfectionism] per stack effect: Receiving power increased by [receiving] ×6%, slugging power increased by [slapping] ×6%. Up to 20 stacks. Sakusa's [perfectionism] effect increases [awareness] by 10% per stack when he hits hard. This effect lasts until the ball crosses the net twice. If Sakusa decides to hit hard, for every stack of [perfectionism] principle effects consumed, Sakusa's [reaction] increases by 2%. Up to 20 stacks. At the end of the rally, when Sakusa hits a hard hit, Sakusa gains 5 stacks of [perfectionist] effects",
          "2": "If Sakusa is on the court and his teammate's receiving, cover, or block makes a nice play, Sakusa gains one stack of the [perfectionism] effect.[ Perfectionism] per stack effect: Receiving power increased by [receiving] ×6%, slugging power increased by [slapping] ×6%. Up to 20 stacks. Sakusa's [perfectionism] effect increases [awareness] by 10% per stack when he hits hard. This effect lasts until the ball crosses the net twice. If Sakusa decides to hit hard, for every stack of [perfectionism] principle effects consumed, Sakusa's [reaction] increases by 2.2%. Up to 20 stacks. At the end of the rally, when Sakusa hits a hard hit, Sakusa gains 5 stacks of [perfectionist] effects",
          "3": "If Sakusa is on the court and his teammate's receiving, cover, or block makes a nice play, Sakusa gains one stack of the [perfectionism] effect.[ Perfectionism] per stack effect: Receiving power increased by [receiving] ×6%, slugging power increased by [slapping] ×6%. Up to 20 stacks. Sakusa's [perfectionism] effect increases [awareness] by 10% per stack when he hits hard. This effect lasts until the ball crosses the net twice. If Sakusa decides to hit hard, for every stack of [perfectionism] principle effects consumed, Sakusa's [reaction] increases by 2.4%. Up to 20 stacks. At the end of the rally, when Sakusa hits a hard hit, Sakusa gains 5 stacks of [perfectionist] effects",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Spikes that change their trajectory by rotation",
        levels: {
          "1": "Sakusa hits a [bang] ×260% powerful bang. If Sakusa is in the rear guard, the power of this hard hit will be increased by [hard hit] ×40%. If this play becomes a nice play, the first opponent's receiving power after this play is [receiving] × 15% down on the receiving member",
          "2": "Sakusa hits a [bang] ×280% powerful bang. If Sakusa is in the rear guard, the power of this hard hit will be increased by [hard hit] ×40%. If this play becomes a nice play, the first opponent's receiving power after this play is [receiving] × 15% down on the receiving member",
          "3": "Sakusa hits a [bang] ×300% powerful bang. If Sakusa is in the rear guard, the power of this hard hit will be increased by [hard hit] ×40%. If this play becomes a nice play, the first opponent's receiving power after this play is [receiving] × 15% down on the receiving member",
          "4": "Sakusa hits a [bang] ×320% powerful bang. If Sakusa is in the rear guard, the power of this hard hit will be increased by [hard hit] ×40%. If this play becomes a nice play, the first opponent's receiving power after this play is [receiving] × 15% down on the receiving member",
          "5": "Sakusa hits a [bang] ×340% powerful bang. If Sakusa is in the rear guard, the power of this hard hit will be increased by [hard hit] ×40%. If this play becomes a nice play, the first opponent's receiving power after this play is [receiving] × 15% down on the receiving member",
        },
      },
    ],
    bonds: [
      {
        to: "kiyoomi-sakusa-ur",
        name: "Top Spiker & Key Man",
        participants: ["kiyoomi-sakusa-ur", "motoya-komori-ur"],
        effect:
          "Sakusa's [banging] and Motoya Komori's [receiving] are up (Lv1:10%, Lv2:12.5%, Lv3:15%, Lv4:17.5%, Lv5:20%). The receiving power of friendly members is increased by [receiving] ×20%",
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
          "PERFECTIONIST upgraded: each stack also increases Awareness by 2%.",
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
          "While KIYOOMI SAKUSA is present, when an ally achieves a NICE Receive, grants 2 stacks of PERFECTIONIST instead of 1.",
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

  // ===================== MOTOYA KOMORI (UR) =====================
  {
    id: "motoya-komori-ur",
    name: "Motoya Komori",
    shortName: "Komori",
    team: "Itachiyama",
    rarity: "UR",
    roles: ["LI"],
    typeTags: ["Receive", "Setter"],
    image: "/characters/itachiyama/motoya-komori-ur.jpg",
    server: "Japan",
    stats: {
      basic: {
        quickAttack: 88,
        powerAttack: 128,
        set: 125,
        serve: 98,
        receive: 125,
        block: 105,
        save: 82,
      },
      bonusAttack: { awareness: 0.0, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.0, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Team’s Key Man",
        levels: {
          "1": "If Motoya Komori is on the court, the [defensive technique] of his teammate's rear guard will increase by 10%. If Motoya Komori is on the court, at the start of the rally, Motoya Komori gains 6 stacks of the [Next Connect] effect.[ Next Connect] effect 3% more [toss], 5% more [reaction] per stack. Maximum 10 stacks",
          "2": "If Motoya Komori is on the court, the [defensive technique] of his teammate's rear guard will increase by 13%. If Motoya Komori is on the court, at the start of the rally, Motoya Komori gains 6 stacks of the [Next Connect] effect.[ Next Connect] effect 3% more [toss], 5% more [reaction] per stack. Maximum 10 stacks",
          "3": "If Motoya Komori is on the court, the [defensive technique] of his teammate's rear guard will increase by 16%. If Motoya Komori is on the court, at the start of the rally, Motoya Komori gains 6 stacks of the [Next Connect] effect.[ Next Connect] effect 3% more [toss], 5% more [reaction] per stack. Maximum 10 stacks",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Skillful Toss",
        levels: {
          "1": "MOTOYA KOMORI performs a Set with 140% of his Set stat as power and increases your Team Morale by 10. After this play, the next ally’s Spike (Power/Quick/Speed) gains +15% power until the ball crosses the net twice.",
          "2": "MOTOYA KOMORI performs a Set with 160% of his Set stat as power and increases your Team Morale by 10. After this play, the next ally’s Spike (Power/Quick/Speed) gains +15% power until the ball crosses the net twice.",
          "3": "MOTOYA KOMORI performs a Set with 180% of his Set stat as power and increases your Team Morale by 10. After this play, the next ally’s Spike (Power/Quick/Speed) gains +15% power until the ball crosses the net twice.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Control the Flow",
        levels: {
          "1": "Motoya Komori's [receiving] is up 12%. When Motoya Komori is on the court and activates a reception that is not a special move of an ally member, or when Motoya Komori activates a reception special move, the [Next Connect] effect is consumed by 2 stacks, and the power of this reception is the same as that of the receiving member. [Receiving] ×30% increase in the number of players, and the first ally's spike (strong hit) after this play occurs [Banging/quick attack] of members who spike (banging/quick attack) when attacking quickly has increased by 20%. If the [Next Connect] effect is consumed by a teammate's reception and this play becomes a nice play, Motoya Komori will get 2 stacks of the [Next Connect] effect",
          "2": "Motoya Komori's [receiving] is up 16%. When Motoya Komori is on the court and activates a reception that is not a special move of an ally member, or when Motoya Komori activates a reception special move, the [Next Connect] effect is consumed by 2 stacks, and the power of this reception is the same as that of the receiving member. [Receiving] ×30% increase in the number of players, and the first ally's spike (strong hit) after this play occurs [Banging/quick attack] of members who spike (banging/quick attack) when attacking quickly has increased by 20%. If the [Next Connect] effect is consumed by a teammate's reception and this play becomes a nice play, Motoya Komori will get 2 stacks of the [Next Connect] effect",
          "3": "Motoya Komori's [receiving] is up 20%. When Motoya Komori is on the court and activates a reception that is not a special move of an ally member, or when Motoya Komori activates a reception special move, the [Next Connect] effect is consumed by 2 stacks, and the power of this reception is the same as that of the receiving member. [Receiving] ×30% increase in the number of players, and the first ally's spike (strong hit) after this play occurs [Banging/quick attack] of members who spike (banging/quick attack) when attacking quickly has increased by 20%. If the [Next Connect] effect is consumed by a teammate's reception and this play becomes a nice play, Motoya Komori will get 2 stacks of the [Next Connect] effect",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Flow-Shaping Receive",
        levels: {
          "1": "MOTOYA KOMORI performs a Receive with 260% of his Receive stat as power. After casting, the next ally’s Spike gains +20% Attack Technique until the ball crosses the net twice.",
          "2": "MOTOYA KOMORI performs a Receive with 275% of his Receive stat as power. After casting, the next ally’s Spike gains +20% Attack Technique until the ball crosses the net twice.",
          "3": "MOTOYA KOMORI performs a Receive with 290% of his Receive stat as power. After casting, the next ally’s Spike gains +20% Attack Technique until the ball crosses the net twice.",
          "4": "MOTOYA KOMORI performs a Receive with 305% of his Receive stat as power. After casting, the next ally’s Spike gains +20% Attack Technique until the ball crosses the net twice.",
          "5": "MOTOYA KOMORI performs a Receive with 320% of his Receive stat as power. After casting, the next ally’s Spike gains +20% Attack Technique until the ball crosses the net twice.",
        },
      },
    ],
    bonds: [
      {
        to: "motoya-komori-ur",
        name: "Top Spiker & Key Man",
        participants: ["kiyoomi-sakusa-ur", "motoya-komori-ur"],
        effect:
          "Sakusa's [banging] and Motoya Komori's [receiving] are up (Lv1:10%, Lv2:12.5%, Lv3:15%, Lv4:17.5%, Lv5:20%). The receiving power of friendly members is increased by [receiving] ×20%",
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
          "While KOMORI is on the court, each net crossing grants 1 stack of FOCUS (Reflex +5%), up to 10 stacks.",
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
          "After casting FLOW-SHAPING RECEIVE, for the next 2 net crossings your side’s Power/Quick Spikes gain +15% power.",
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
];
