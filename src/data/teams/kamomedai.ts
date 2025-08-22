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
          "1": "When Hirugami serves, Awareness +12%. While on court, each time the ball crosses the net gain 1 stack of “System”. Each stack increases allies’ main parameters +8% and Hirugami’s +10% (max 5). Lasts until your team scores.",
          "2": "When Hirugami serves, Awareness +16%. While on court, each time the ball crosses the net gain 1 stack of “System”. Each stack increases allies’ main parameters +8% and Hirugami’s +10% (max 5). Lasts until your team scores.",
          "3": "When Hirugami serves, Awareness +20%. While on court, each time the ball crosses the net gain 1 stack of “System”. Each stack increases allies’ main parameters +8% and Hirugami’s +10% (max 5). Lasts until your team scores.",
          "4": undefined,
          "5": undefined,
        },
      },
      // Passive B
      {
        key: "passive",
        name: "Psych-Pressure Float Serve",
        levels: {
          "1": "Hirugami performs a Jump Float Serve with 140% of his Serve stat. If NICE, opponent cannot gain Team Morale for 1 rally.",
          "2": "Hirugami performs a Jump Float Serve with 160% of his Serve stat. If NICE, opponent cannot gain Team Morale for 1 rally.",
          "3": "Hirugami performs a Jump Float Serve with 180% of his Serve stat. If NICE, opponent cannot gain Team Morale for 1 rally.",
          "4": undefined,
          "5": undefined,
        },
      },
      // Passive C (stacking defense -> offense)
      {
        key: "passive",
        name: "Defense Is the Best Offense",
        levels: {
          "1": "While on court, each time the ball crosses the net gain 1 stack of “Stubborn Block”. 2 stacks → Block +15% for blockers. 3 stacks → Receive +15% for receivers. 4 stacks → Spike Power/Quick/Speed +15% for spikers. Lasts until ball crosses net twice. At rally end, consumes stacks: per stack, allies’ Attack/Defense Techniques +5% for 1 rally.",
          "2": "While on court, each time the ball crosses the net gain 1 stack of “Stubborn Block”. 2 stacks → Block +20% for blockers. 3 stacks → Receive +20% for receivers. 4 stacks → Spike Power/Quick/Speed +20% for spikers. Lasts until ball crosses net twice. At rally end, consumes stacks: per stack, allies’ Attack/Defense Techniques +5% for 1 rally.",
          "3": "While on court, each time the ball crosses the net gain 1 stack of “Stubborn Block”. 2 stacks → Block +25% for blockers. 3 stacks → Receive +25% for receivers. 4 stacks → Spike Power/Quick/Speed +25% for spikers. Lasts until ball crosses net twice. At rally end, consumes stacks: per stack, allies’ Attack/Defense Techniques +5% for 1 rally.",
          "4": undefined,
          "5": undefined,
        },
      },
      // Active / Ultimate
      {
        key: "active",
        name: "Unmoving Hirugami",
        levels: {
          "1": "Hirugami performs a Block with 260% of his Block stat. If blocking an opponent’s Power Spike, block power +40%.",
          "2": "Hirugami performs a Block with 275% of his Block stat. If blocking an opponent’s Power Spike, block power +45%.",
          "3": "Hirugami performs a Block with 290% of his Block stat. If blocking an opponent’s Power Spike, block power +50%.",
          "4": "Hirugami performs a Block with 305% of his Block stat. If blocking an opponent’s Power Spike, block power +55%.",
          "5": "Hirugami performs a Block with 320% of his Block stat. If blocking an opponent’s Power Spike, block power +60%.",
        },
      },
    ],
    bonds: [
      {
        to: "sachiro-hirugami-ur",
        name: "Close Friends Since Middle & High School",
        participants: ["kourai-hoshiumi-ur", "sachiro-hirugami-ur"],
        effect:
          "The main parameters of Hoshiumi Kourai are (Lv1: 6%, Lv2: 7%, Lv3: 8%, Lv4: 9%, Lv5: 10%), and the [blocks] of friendly vanguards are (Lv1: 6%, Lv2: 7%, Lv3: 8%, Lv4: 9%, Lv5: 10%) up. At the start of the match, Mitsurai Hoshiumi gains one stack of the [All-Rounder] effect, and Yukio Hirugami gains one stack of the [Strong Block] effect",
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
          "1": "If Mitsurai Hoshiumi is on the court, when blocking an ally, for every [block] 50 of the blocking members, the power of the opponent's spikes (hard hits and quick attacks) will be [hard hits/fast attacks] of the spiking members ×(Lv1: 0.3% down. For every 1% down on an opponent's spikes (hard hits, fast attacks), the power of the next skill by Mitsurai Hoshiumi increases by 1%",
          "2": "If Mitsurai Hoshiumi is on the court, when blocking an ally, for every [block] 50 of the blocking members, the power of the opponent's spikes (hard hits and quick attacks) will be [hard hits/fast attacks] of the spiking members ×(Lv1: 0.4% down. For every 1% down on an opponent's spikes (hard hits, fast attacks), the power of the next skill by Mitsurai Hoshiumi increases by 1%",
          "3": "If Mitsurai Hoshiumi is on the court, when blocking an ally, for every [block] 50 of the blocking members, the power of the opponent's spikes (hard hits and quick attacks) will be [hard hits/fast attacks] of the spiking members ×(Lv1: 0.5% down. For every 1% down on an opponent's spikes (hard hits, fast attacks), the power of the next skill by Mitsurai Hoshiumi increases by 1%",
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
          "2": "Activates an all-rounder play: performs a Block/Serve/Receive, each with 160% of the corresponding stat as power. These actions share cooldown for this play.",
          "3": "Activates an all-rounder play: performs a Block/Serve/Receive, each with 180% of the corresponding stat as power. These actions share cooldown for this play.",
          "4": undefined,
          "5": undefined,
        },
      },
      // Passive C (point-getter)
      {
        key: "passive",
        name: "No.1 Point Getter",
        levels: {
          "1": "Increases Hoshiumi’s Power Attack by 16%. When ALL-ROUND GREAT PERFORMANCE is triggered, gains 1 stack of “All-Rounder”. While active: Bang → Awareness +14%; Serve → Opponent’s back row Receive -14%; Receive → Reflex +14%; Block → Opponent’s Spike Power -0.3%. Effects last until the ball crosses the net twice.",
          "2": "Increases Hoshiumi’s Power Attack by 16%. When ALL-ROUND GREAT PERFORMANCE is triggered, gains 1 stack of “All-Rounder”. While active: Bang → Awareness +17%; Serve → Opponent’s back row Receive -17%; Receive → Reflex +17%; Block → Opponent’s Spike Power -0.4%. Effects last until the ball crosses the net twice.",
          "3": "Increases Hoshiumi’s Power Attack by 16%. When ALL-ROUND GREAT PERFORMANCE is triggered, gains 1 stack of “All-Rounder”. While active: Bang → Awareness +20%; Serve → Opponent’s back row Receive -20%; Receive → Reflex +20%; Block → Opponent’s Spike Power -0.5%. Effects last until the ball crosses the net twice.",
          "4": undefined,
          "5": undefined,
        },
      },
      // Active / Ultimate
      {
        key: "active",
        name: "Gleaming Fangs",
        levels: {
          "1": "Hoshiumi performs a Power Spike with 265% of his Power Attack stat. If in the front row, Spike power is increased by an additional 40% of Power Attack.",
          "2": "Hoshiumi performs a Power Spike with 280% of his Power Attack stat. If in the front row, Spike power is increased by an additional 45% of Power Attack.",
          "3": "Hoshiumi performs a Power Spike with 295% of his Power Attack stat. If in the front row, Spike power is increased by an additional 50% of Power Attack.",
          "4": "Hoshiumi performs a Power Spike with 310% of his Power Attack stat. If in the front row, Spike power is increased by an additional 55% of Power Attack.",
          "5": "Hoshiumi performs a Power Spike with 325% of his Power Attack stat. If in the front row, Spike power is increased by an additional 60% of Power Attack.",
        },
      },
    ],
    bonds: [
      {
        to: "kourai-hoshiumi-ur",
        name: "Close Friends Since Middle & High School",
        participants: ["kourai-hoshiumi-ur", "sachiro-hirugami-ur"],
        effect:
          "The main parameters of Hoshiumi Kourai are (Lv1: 6%, Lv2: 7%, Lv3: 8%, Lv4: 9%, Lv5: 10%), and the [blocks] of friendly vanguards are (Lv1: 6%, Lv2: 7%, Lv3: 8%, Lv4: 9%, Lv5: 10%) up. At the start of the match, Mitsurai Hoshiumi gains one stack of the [All-Rounder] effect, and Yukio Hirugami gains one stack of the [Strong Block] effect",
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
