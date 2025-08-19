// src/data/teams/itachiyama.ts
import type { Player } from "../types";

export const itachiyamaPlayers: Player[] = [
  // ===================== KIYOOMI SAKUSA (UR) =====================
  {
    id: "kiyoomi-sakusa-ur",
    name: "Kiyoomi Sakusa",
    shortName: "Sakusa",
    team: "Itachiyama",
    rarity: "UR",
    roles: ["WS"],
    typeTags: ["Power Attack", "Receive", "Awareness Up", "Team Morale"],
    image: "/characters/itachiyama/kiyoomi-sakusa-ur.png",
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
        name: "Leave Nothing to Chance",
        levels: {
          "1": "KIYOOMI SAKUSA performs a Receive with 150% of his Receive stat as power. If his Receive power reaches 170% of Receive stat, gains “All Set” (+10% Awareness) until the ball crosses the net. If his Receive power reaches 200%, the Receive result upgrades to PERFECT and forces a free-ball.",
          "2": "KIYOOMI SAKUSA performs a Receive with 150% of his Receive stat as power. If his Receive power reaches 170% of Receive stat, gains “All Set” (+10% Awareness) until the ball crosses the net. If his Receive power reaches 200%, the Receive result upgrades to PERFECT and forces a free-ball.",
          "3": "KIYOOMI SAKUSA performs a Receive with 150% of his Receive stat as power. If his Receive power reaches 170% of Receive stat, gains “All Set” (+10% Awareness) until the ball crosses the net. If his Receive power reaches 200%, the Receive result upgrades to PERFECT and forces a free-ball.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Top Spiker",
        levels: {
          "1": "While KIYOOMI SAKUSA is on the court, whenever an ally gets a NICE result (Receive/Cover/Block), Sakusa gains 1 stack of “Perfectionist” (lasts 20s). Each stack increases his Receive power by 6% of his Receive stat; at rally start, he gains 1 stack. When he casts a Power Spike, consumes 1 stack to increase its power by 10% of Power Attack stat.",
          "2": "While KIYOOMI SAKUSA is on the court, whenever an ally gets a NICE result (Receive/Cover/Block), Sakusa gains 1 stack of “Perfectionist” (lasts 20s). Each stack increases his Receive power by 6% of his Receive stat; at rally start, he gains 1 stack. When he casts a Power Spike, consumes 1 stack to increase its power by 10% of Power Attack stat.",
          "3": "While KIYOOMI SAKUSA is on the court, whenever an ally gets a NICE result (Receive/Cover/Block), Sakusa gains 1 stack of “Perfectionist” (lasts 20s). Each stack increases his Receive power by 6% of his Receive stat; at rally start, he gains 1 stack. When he casts a Power Spike, consumes 1 stack to increase its power by 10% of Power Attack stat.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Prepared Finisher",
        levels: {
          "1": "While KIYOOMI SAKUSA is present, when your side achieves a PERFECT Receive, increases the next allied Spike’s power by 6% of the spiker’s Power/Quick Attack stat.",
          "2": "While KIYOOMI SAKUSA is present, when your side achieves a PERFECT Receive, increases the next allied Spike’s power by 6% of the spiker’s Power/Quick Attack stat.",
          "3": "While KIYOOMI SAKUSA is present, when your side achieves a PERFECT Receive, increases the next allied Spike’s power by 6% of the spiker’s Power/Quick Attack stat.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Relentless Strike",
        levels: {
          "1": "KIYOOMI SAKUSA performs a Power Spike with 260% of his Power Attack stat. If this Spike is Critical, his Power Attack increases by 40% for this play. After casting, increases allies’ Receive power by 15%.",
          "2": "KIYOOMI SAKUSA performs a Power Spike with 260% of his Power Attack stat. If this Spike is Critical, his Power Attack increases by 40% for this play. After casting, increases allies’ Receive power by 15%.",
          "3": "KIYOOMI SAKUSA performs a Power Spike with 260% of his Power Attack stat. If this Spike is Critical, his Power Attack increases by 40% for this play. After casting, increases allies’ Receive power by 15%.",
          "4": "KIYOOMI SAKUSA performs a Power Spike with 260% of his Power Attack stat. If this Spike is Critical, his Power Attack increases by 40% for this play. After casting, increases allies’ Receive power by 15%.",
          "5": "KIYOOMI SAKUSA performs a Power Spike with 260% of his Power Attack stat. If this Spike is Critical, his Power Attack increases by 40% for this play. After casting, increases allies’ Receive power by 15%.",
        },
      },
    ],
    bonds: [
      {
        to: "motoya-komori-ur",
        name: "Top Spiker & Key Man",
        participants: ["kiyoomi-sakusa-ur", "motoya-komori-ur"],
        effect:
          "Strengthens team receive rhythm; increases allies’ Receive power while both are on the court.",
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
    typeTags: ["Receive", "Set", "Enhance Team", "Team Morale"],
    image: "/characters/itachiyama/motoya-komori-ur.png",
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
          "1": "While MOTOYA KOMORI is on the court, increases allies’ Defense Technique by 10%. Each time the ball crosses the net, KOMORI gains 1 stack of “Focus”; each stack increases his Reflex by 5%, up to 10 stacks.",
          "2": "While MOTOYA KOMORI is on the court, increases allies’ Defense Technique by 10%. Each time the ball crosses the net, KOMORI gains 1 stack of “Focus”; each stack increases his Reflex by 5%, up to 10 stacks.",
          "3": "While MOTOYA KOMORI is on the court, increases allies’ Defense Technique by 10%. Each time the ball crosses the net, KOMORI gains 1 stack of “Focus”; each stack increases his Reflex by 5%, up to 10 stacks.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Skillful Toss",
        levels: {
          "1": "MOTOYA KOMORI performs a Set with 140% of his Set stat as power and increases your Team Morale by 10. After this play, the next ally’s Spike (Power/Quick/Speed) gains +15% power until the ball crosses the net twice.",
          "2": "MOTOYA KOMORI performs a Set with 140% of his Set stat as power and increases your Team Morale by 10. After this play, the next ally’s Spike (Power/Quick/Speed) gains +15% power until the ball crosses the net twice.",
          "3": "MOTOYA KOMORI performs a Set with 140% of his Set stat as power and increases your Team Morale by 10. After this play, the next ally’s Spike (Power/Quick/Speed) gains +15% power until the ball crosses the net twice.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Control the Flow",
        levels: {
          "1": "Increases MOTOYA KOMORI’s Receive stat by 12%. While he is on the court, when your side achieves a PERFECT Receive, gains 1 stack of “Flow” (lasts 20s): per stack, KOMORI’s Receive power increases by 30% of his Receive stat; additionally, the next ally’s Spike (Power/Quick) gains +20% power.",
          "2": "Increases MOTOYA KOMORI’s Receive stat by 12%. While he is on the court, when your side achieves a PERFECT Receive, gains 1 stack of “Flow” (lasts 20s): per stack, KOMORI’s Receive power increases by 30% of his Receive stat; additionally, the next ally’s Spike (Power/Quick) gains +20% power.",
          "3": "Increases MOTOYA KOMORI’s Receive stat by 12%. While he is on the court, when your side achieves a PERFECT Receive, gains 1 stack of “Flow” (lasts 20s): per stack, KOMORI’s Receive power increases by 30% of his Receive stat; additionally, the next ally’s Spike (Power/Quick) gains +20% power.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Flow-Shaping Receive",
        levels: {
          "1": "MOTOYA KOMORI performs a Receive with 260% of his Receive stat as power. After casting, the next ally’s Spike gains +20% Attack Technique until the ball crosses the net twice.",
          "2": "MOTOYA KOMORI performs a Receive with 260% of his Receive stat as power. After casting, the next ally’s Spike gains +20% Attack Technique until the ball crosses the net twice.",
          "3": "MOTOYA KOMORI performs a Receive with 260% of his Receive stat as power. After casting, the next ally’s Spike gains +20% Attack Technique until the ball crosses the net twice.",
          "4": "MOTOYA KOMORI performs a Receive with 260% of his Receive stat as power. After casting, the next ally’s Spike gains +20% Attack Technique until the ball crosses the net twice.",
          "5": "MOTOYA KOMORI performs a Receive with 260% of his Receive stat as power. After casting, the next ally’s Spike gains +20% Attack Technique until the ball crosses the net twice.",
        },
      },
    ],
    bonds: [
      {
        to: "kiyoomi-sakusa-ur",
        name: "Top Spiker & Key Man",
        participants: ["motoya-komori-ur", "kiyoomi-sakusa-ur"],
        effect:
          "Boosts the team’s receive strength and attack tempo when both are deployed.",
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
