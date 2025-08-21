// src/data/teams/kamomedai.ts
import type { Player } from "@/types";

export const kamomedaiPlayers: Player[] = [
  // ===================== SACHIRO HIRUGAMI (UR) =====================
  {
    id: "sachiro-hirugami-ur",
    name: "Sachiro Hirugami",
    shortName: "Hirugami",
    team: "Kamomedai",
    rarity: "UR",
    roles: ["MB"],
    typeTags: ["Block"],
    image: "/characters/kamomedai/sachiro-hirugami-ur.jpg",
    server: "Japan",
    stats: {
      basic: {
        quickAttack: 126,
        powerAttack: 87,
        set: 126,
        serve: 133,
        receive: 113,
        block: 140,
        save: 107,
      },
      bonusAttack: { awareness: 0.0, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.05, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      // Passive A
      {
        key: "passive",
        name: "Core of the Kamomedai System",
        levels: {
          "1": "When SACHIRO HIRUGAMI serves, his Awareness increases by 12%. While he is on the court, each time the ball crosses the net, gain 1 stack of “System”. For each stack (up to 5), increases your side’s block-related effects and ramps up the next allied play.",
          "2": "When SACHIRO HIRUGAMI serves, his Awareness increases by 12%. While he is on the court, each time the ball crosses the net, gain 1 stack of “System”. For each stack (up to 5), increases your side’s block-related effects and ramps up the next allied play.",
          "3": "When SACHIRO HIRUGAMI serves, his Awareness increases by 12%. While he is on the court, each time the ball crosses the net, gain 1 stack of “System”. For each stack (up to 5), increases your side’s block-related effects and ramps up the next allied play.",
          "4": undefined,
          "5": undefined,
        },
      },
      // Passive B
      {
        key: "passive",
        name: "Psych-Pressure Float Serve",
        levels: {
          "1": "SACHIRO HIRUGAMI performs a Jump Float Serve with 140% of his Serve stat as power. If this Serve results in NICE, for 1 rally the opponent cannot gain Team Morale.",
          "2": "SACHIRO HIRUGAMI performs a Jump Float Serve with 140% of his Serve stat as power. If this Serve results in NICE, for 1 rally the opponent cannot gain Team Morale.",
          "3": "SACHIRO HIRUGAMI performs a Jump Float Serve with 140% of his Serve stat as power. If this Serve results in NICE, for 1 rally the opponent cannot gain Team Morale.",
          "4": undefined,
          "5": undefined,
        },
      },
      // Passive C (stacking defense -> offense)
      {
        key: "passive",
        name: "Defense Is the Best Offense",
        levels: {
          "1": "While SACHIRO HIRUGAMI is on the court, each time the ball crosses the net gain 1 stack of “Fortified Block”. At 1–2 stacks: increases his Block power. At 3 stacks: additionally increases your side’s next Receive power. At 4 stacks: additionally increases your side’s next Spike (Power/Quick/Speed) power. These bonuses last until the ball crosses the net twice.",
          "2": "While SACHIRO HIRUGAMI is on the court, each time the ball crosses the net gain 1 stack of “Fortified Block”. At 1–2 stacks: increases his Block power. At 3 stacks: additionally increases your side’s next Receive power. At 4 stacks: additionally increases your side’s next Spike (Power/Quick/Speed) power. These bonuses last until the ball crosses the net twice.",
          "3": "While SACHIRO HIRUGAMI is on the court, each time the ball crosses the net gain 1 stack of “Fortified Block”. At 1–2 stacks: increases his Block power. At 3 stacks: additionally increases your side’s next Receive power. At 4 stacks: additionally increases your side’s next Spike (Power/Quick/Speed) power. These bonuses last until the ball crosses the net twice.",
          "4": undefined,
          "5": undefined,
        },
      },
      // Active / Ultimate
      {
        key: "active",
        name: "Unmoving Hirugami",
        levels: {
          "1": "SACHIRO HIRUGAMI performs a Block with 260% of his Block stat as power. When blocking an opponent’s Power Spike, increases this block’s power by an additional 40% of Block stat.",
          "2": "SACHIRO HIRUGAMI performs a Block with 260% of his Block stat as power. When blocking an opponent’s Power Spike, increases this block’s power by an additional 40% of Block stat.",
          "3": "SACHIRO HIRUGAMI performs a Block with 260% of his Block stat as power. When blocking an opponent’s Power Spike, increases this block’s power by an additional 40% of Block stat.",
          "4": "SACHIRO HIRUGAMI performs a Block with 260% of his Block stat as power. When blocking an opponent’s Power Spike, increases this block’s power by an additional 40% of Block stat.",
          "5": "SACHIRO HIRUGAMI performs a Block with 260% of his Block stat as power. When blocking an opponent’s Power Spike, increases this block’s power by an additional 40% of Block stat.",
        },
      },
    ],
    bonds: [
      {
        to: "kourai-hoshiumi-ur",
        name: "Close Friends Since Middle & High School",
        participants: ["sachiro-hirugami-ur", "kourai-hoshiumi-ur"],
        effect:
          "Team link that strengthens Kamomedai’s rhythm; HIRUGAMI gains the “Fortified Block” effect more easily while both are deployed.",
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
          "While the opponent’s side is in Team Morale Awakening, during HIRUGAMI’s serve his Awareness increases by 20%, and “Fortified Block” effects persist for 2 rallies.",
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
          "HIRUGAMI’s Defense Technique increases by 20%. While he is on the court, allies’ Power/Quick/Speed Spikes gain improved support from “Fortified Block”.",
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

  // ===================== KOURAI HOSHIUMI (UR) =====================
  {
    id: "kourai-hoshiumi-ur",
    name: "Kourai Hoshiumi",
    shortName: "Hoshiumi",
    team: "Kamomedai",
    rarity: "UR",
    roles: ["WS"],
    typeTags: ["Power Attack", "Serve", "Receive", "Block"],
    image: "/characters/kamomedai/kourai-hoshiumi-ur.jpg",
    server: "Japan",
    stats: {
      basic: {
        quickAttack: 101,
        powerAttack: 140,
        set: 110,
        serve: 133,
        receive: 127,
        block: 130,
        save: 107,
      },
      bonusAttack: { awareness: 0.05, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.0, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      // Passive A
      {
        key: "passive",
        name: "Cut the Chain",
        levels: {
          "1": "While KOURAI HOSHIUMI is on the court, when your side blocks, reduces the opponent spiker’s Power/Quick Spike power by 0.3% (up to 30%). When your side lands a PERFECT block, further reduces that spiker’s power for the next play.",
          "2": "While KOURAI HOSHIUMI is on the court, when your side blocks, reduces the opponent spiker’s Power/Quick Spike power by 0.3% (up to 30%). When your side lands a PERFECT block, further reduces that spiker’s power for the next play.",
          "3": "While KOURAI HOSHIUMI is on the court, when your side blocks, reduces the opponent spiker’s Power/Quick Spike power by 0.3% (up to 30%). When your side lands a PERFECT block, further reduces that spiker’s power for the next play.",
          "4": undefined,
          "5": undefined,
        },
      },
      // Passive B (multi-skill enabler)
      {
        key: "passive",
        name: "All-Round Great Performance",
        levels: {
          "1": "Activates an all-rounder play: performs a Block/Serve/Receive, each with 140% of the corresponding stat as power. These actions share cooldown for this play.",
          "2": "Activates an all-rounder play: performs a Block/Serve/Receive, each with 140% of the corresponding stat as power. These actions share cooldown for this play.",
          "3": "Activates an all-rounder play: performs a Block/Serve/Receive, each with 140% of the corresponding stat as power. These actions share cooldown for this play.",
          "4": undefined,
          "5": undefined,
        },
      },
      // Passive C (point-getter)
      {
        key: "passive",
        name: "No.1 Point Getter",
        levels: {
          "1": "Increases KOURAI HOSHIUMI’s Power Attack by 16%. When ALL-ROUND GREAT PERFORMANCE is triggered, gains 1 stack of “All-Rounder”. While this is active, HOSHIUMI’s skills grant small team buffs and his Awareness/Reflex rise; effects last until the ball crosses the net twice.",
          "2": "Increases KOURAI HOSHIUMI’s Power Attack by 16%. When ALL-ROUND GREAT PERFORMANCE is triggered, gains 1 stack of “All-Rounder”. While this is active, HOSHIUMI’s skills grant small team buffs and his Awareness/Reflex rise; effects last until the ball crosses the net twice.",
          "3": "Increases KOURAI HOSHIUMI’s Power Attack by 16%. When ALL-ROUND GREAT PERFORMANCE is triggered, gains 1 stack of “All-Rounder”. While this is active, HOSHIUMI’s skills grant small team buffs and his Awareness/Reflex rise; effects last until the ball crosses the net twice.",
          "4": undefined,
          "5": undefined,
        },
      },
      // Active / Ultimate
      {
        key: "active",
        name: "Gleaming Fangs",
        levels: {
          "1": "KOURAI HOSHIUMI performs a Power Spike with 265% of his Power Attack stat as power. If HOSHIUMI is in the front row, increases this Spike’s power by an additional 40% of Power Attack stat.",
          "2": "KOURAI HOSHIUMI performs a Power Spike with 265% of his Power Attack stat as power. If HOSHIUMI is in the front row, increases this Spike’s power by an additional 40% of Power Attack stat.",
          "3": "KOURAI HOSHIUMI performs a Power Spike with 265% of his Power Attack stat as power. If HOSHIUMI is in the front row, increases this Spike’s power by an additional 40% of Power Attack stat.",
          "4": "KOURAI HOSHIUMI performs a Power Spike with 265% of his Power Attack stat as power. If HOSHIUMI is in the front row, increases this Spike’s power by an additional 40% of Power Attack stat.",
          "5": "KOURAI HOSHIUMI performs a Power Spike with 265% of his Power Attack stat as power. If HOSHIUMI is in the front row, increases this Spike’s power by an additional 40% of Power Attack stat.",
        },
      },
    ],
    bonds: [
      {
        to: "sachiro-hirugami-ur",
        name: "Close Friends Since Middle & High School",
        participants: ["kourai-hoshiumi-ur", "sachiro-hirugami-ur"],
        effect:
          "Team link that strengthens Kamomedai’s rhythm; HIRUGAMI gains the “Fortified Block” effect more easily while both are deployed.",
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
          "When KOURAI HOSHIUMI performs a Power Spike, increases his Quick Attack by 10%. While he is on the court, allies gain small boosts when using Serve or Block.",
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
          "At match start, improves HOSHIUMI’s Awareness and Reflex and empowers ALL-ROUND GREAT PERFORMANCE with stronger bonuses.",
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
