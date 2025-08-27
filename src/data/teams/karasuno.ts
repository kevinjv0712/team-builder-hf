// src/data/teams/karasuno.ts
import type { Player } from "@/types";

export const karasunoPlayers: Player[] = [
  // =========================================================
  // =========================  SP  ==========================
  // ======== ORDER: S -> OP -> LI -> WS -> MB ===============
  // =========================================================

  // KOSHI SUGAWARA SP
  {
    id: "koshi-sugawara-sp",
    name: "Koshi Sugawara",
    shortName: "Sugawara",
    team: "Karasuno",
    rarity: "SP",
    roles: ["S"],
    typeTags: ["Setter", "Serve"],
    image: "/characters/karasuno/koshi-sugawara-sp.jpg",
    server: "Japan",
    stats: {
      basic: {
        quickAttack: 111,
        powerAttack: 104,
        set: 143,
        serve: 131,
        receive: 130,
        block: 126,
        save: 121,
      },
      bonusAttack: { awareness: 0.05, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.05, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Support Attacks",
        levels: {
          "1": "While KOSHI SUGAWARA (After School) is on the court: when an allied vanguard uses a Block skill, that blocker’s Block increases by +5% of the other allied vanguard’s total Block (cap +1000%). When a back-row ally performs a Receive, that receiver’s Receive increases by +5% of the other allied back-row’s total Receive (cap +1000%). Both effects last 2 net crossings.",
          "2": "While KOSHI SUGAWARA (After School) is on the court: when an allied vanguard uses a Block skill, that blocker’s Block increases by +6.25% of the other allied vanguard’s total Block (cap +1250%). When a back-row ally performs a Receive, that receiver’s Receive increases by +6.25% of the other allied back-row’s total Receive (cap +1250%). Both effects last 2 net crossings.",
          "3": "While KOSHI SUGAWARA (After School) is on the court: when an allied vanguard uses a Block skill, that blocker’s Block increases by +7.5% of the other allied vanguard’s total Block (cap +1500%). When a back-row ally performs a Receive, that receiver’s Receive increases by +7.5% of the other allied back-row’s total Receive (cap +1500%). Both effects last 2 net crossings.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Exploit the Gap Serve",
        levels: {
          "1": "Performs a Serve with 140% of Serve. Then all allies’ Main Parameters +12% for 1 rally.",
          "2": "Performs a Serve with 160% of Serve. Then all allies’ Main Parameters +14% for 1 rally.",
          "3": "Performs a Serve with 180% of Serve. Then all allies’ Main Parameters +16% for 1 rally.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Careful Setup",
        levels: {
          "1": "SUGAWARA’s Set +13%. The first time he enters the court: consume 50% of each ally’s current Stamina; for every 6 Stamina consumed, that ally’s Main Parameters +1%. For the first 4 rallies after he enters, teammates recover +15 Stamina at the end of each rally.",
          "2": "Set +16%. The first time he enters: for every 6 Stamina consumed, that ally’s Main Parameters +1.3%. Teammates recover +15 Stamina for 4 rallies.",
          "3": "Set +20%. The first time he enters: for every 6 Stamina consumed, that ally’s Main Parameters +1.6%. Teammates recover +15 Stamina for 4 rallies.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Sign Play",
        levels: {
          "1": "Consumes +15 Stamina and performs a Set with 260% of Set. After this play, the first Spike (Power/Quick) gains +20% Attack Technique for 2 net crossings.",
          "2": "Performs a Set with 280% of Set; same additional effect.",
          "3": "Performs a Set with 300% of Set; same additional effect.",
          "4": "Performs a Set with 320% of Set; same additional effect.",
          "5": "Performs a Set with 340% of Set; same additional effect.",
        },
      },
    ],
    bonds: [
      {
        to: "koshi-sugawara-sp",
        name: "Karasuno's Geniuses",
        participants: ["koshi-sugawara-sp", "yu-nishinoya-sp"],
        effect:
          "YU NISHINOYA (After School) +Reaction (Lv1: 5%, Lv2: 7.5%, Lv3: 7.5%, Lv4: 7.5%, Lv5: 10%). If SUGAWARA is on court and NISHINOYA has <80 Stamina, NISHINOYA’s Reaction increases further (Lv1: 5%, Lv2: 5%, Lv3: 7.5%, Lv4: 10%, Lv5: 10%).",
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
          "If SUGAWARA’s Stamina < 80, he recovers 5 Stamina whenever he touches the ball. If SUGAWARA is on court, when an ally scores, the scorer recovers 10 Stamina and gains +8% Awareness and +8% Reflex (max 2 stacks).",
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
          "While on court: allies’ Main Parameters +10%. When an ally scores: allies gain +4% Attack Technique (max 3 stacks, lasts 8 net crossings). When an ally concedes: allies gain +4% Defense Technique (max 3 stacks, lasts 8 net crossings). If a conceded rally ends in ≤5 net crossings, the Defense Technique bonus is an additional +4%.",
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

  // (no SP Opposite on Karasuno)

  // YU NISHINOYA SP
  {
    id: "yu-nishinoya-sp",
    name: "Yu Nishinoya",
    shortName: "Nishinoya",
    team: "Karasuno",
    rarity: "SP",
    roles: ["LI"],
    typeTags: ["Receive"],
    image: "/characters/karasuno/yu-nishinoya-sp.jpg",
    server: "Japan",
    stats: {
      basic: {
        quickAttack: 90,
        powerAttack: 131,
        set: 143,
        serve: 131,
        receive: 158,
        block: 127,
        save: 151,
      },
      bonusAttack: { awareness: 0.0, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.05, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Top-Class Explosive Power",
        levels: {
          "1": "NISHINOYA (After School) gains +10% Reflex; when any other member makes a Nice Play, he gains +1.5% Reflex (max 4 stacks, lasts 6 net crossings).",
          "2": "Reflex +13%; same stacking.",
          "3": "Reflex +16%; same stacking.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "A Pass",
        levels: {
          "1": "Performs a Set with 140% of Set; NISHINOYA’s Awareness increases to Reaction ×100% for 2 net crossings.",
          "2": "Performs a Set with 160% of Set; Awareness = Reaction ×100% for 2 net crossings.",
          "3": "Performs a Set with 180% of Set; Awareness = Reaction ×100% for 2 net crossings.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Save the Team from Danger",
        levels: {
          "1": "Spirit +20%. When an ally makes a Nice Play, reduces FOOT RECEIVE cooldown by 1 net crossing.",
          "2": "Spirit +25%. When an ally or opponent makes a Nice Play, reduces FOOT RECEIVE cooldown by 1 net crossing.",
          "3": "Spirit +30%. When an ally or opponent makes a Nice Play, reduces FOOT RECEIVE cooldown by 1 net crossing.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Foot Receive",
        levels: {
          "1": "Performs a Receive with 260% of Receive; then Receive +20% for 2 net crossings.",
          "2": "Receives with 275% of Receive; then Receive +20% for 2 net crossings.",
          "3": "Receives with 290% of Receive; then Receive +20% for 2 net crossings.",
          "4": "Receives with 305% of Receive; then Receive +20% for 2 net crossings.",
          "5": "Receives with 320% of Receive; then Receive +20% for 2 net crossings.",
        },
      },
    ],
    bonds: [
      {
        to: "yu-nishinoya-sp",
        name: "Karasuno's Geniuses",
        participants: ["yu-nishinoya-sp", "tobio-kageyama-ur"],
        effect:
          "NISHINOYA (After School) +Receive (Lv1: 5%, Lv2: 7%, Lv3: 9%, Lv4: 11%, Lv5: 13%) and +5% Reflex. When NISHINOYA’s special is activated, KAGEYAMA (UR) gains 1 [Losing Hate] stack. If that play is a Nice Play, the first allied Spike afterward gains +20% of the spiker’s (Power/Quick) as bonus power.",
      },
      {
        to: "yu-nishinoya-sp",
        name: "Karasuno's Geniuses",
        participants: ["yu-nishinoya-sp", "koshi-sugawara-sp"],
        effect:
          "NISHINOYA (After School) +Reaction (Lv1: 5%, Lv2: 7.5%, Lv3: 7.5%, Lv4: 7.5%, Lv5: 10%). If SUGAWARA is on court and NISHINOYA has <80 Stamina, NISHINOYA gains additional Reaction (Lv1: 5%, Lv2: 5%, Lv3: 7.5%, Lv4: 10%, Lv5: 10%).",
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
          "SAVE THE TEAM FROM DANGER change: trigger on any side’s Nice Play. If A PASS is a Nice Play, reduce FOOT RECEIVE cooldown by 1 net crossing and increase allies’ Main Parameters by 12% for 3 net crossings.",
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
          "While NISHINOYA (After School) is on the court, allies’ Reflex +10%. When the opponent’s Spike (Power/Quick) is a Nice Play, your back row allies gain +15% Reflex for 4 net crossings.",
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

  // (no SP WS on Karasuno)

  // SHOYO HINATA SP
  {
    id: "shoyo-hinata-sp",
    name: "Shoyo Hinata",
    shortName: "Hinata",
    team: "Karasuno",
    rarity: "SP",
    roles: ["MB"],
    typeTags: ["Quick Attack"],
    image: "/characters/karasuno/shoyo-hinata-sp.jpg",
    server: "Japan",
    stats: {
      basic: {
        quickAttack: 118,
        powerAttack: 108,
        set: 128,
        serve: 113,
        receive: 131,
        block: 141,
        save: 128,
      },
      bonusAttack: { awareness: 0.01, strength: 0.04, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.0, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Manipulate the Moment",
        levels: {
          "1": "While SHOYO HINATA (Hanami) is on court, allied vanguard Defense Technique +10%. When HINATA (Hanami) makes a Nice Play, his Attack Technique +3% (max 4 stacks).",
          "2": "While on court, vanguard Defense Technique +13%. When he makes a Nice Play, Attack Technique +3.5% (max 4).",
          "3": "While on court, vanguard Defense Technique +16%. When he makes a Nice Play, Attack Technique +4% (max 4).",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "A Stepping Stone",
        levels: {
          "1": "Performs a Receive with 140% of Receive; all allies’ Main Parameters +12% until the ball crosses the net six times.",
          "2": "Performs a Receive with 160% of Receive; same team buff/duration.",
          "3": "Performs a Receive with 180% of Receive; same team buff/duration.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "A Counterattack",
        levels: {
          "1": "If HINATA (Hanami) is in the back row, allied back-row Defense Technique +10%. While on court and a teammate’s Receive result is not BAD, HINATA’s Quick Attack +12% for 2 net crossings. If a teammate’s Receive is a Nice Play, HINATA’s first Quick after that gains +100% Awareness during that Quick.",
          "2": "Back-row Defense Technique +13%. Quick Attack +16% on teammate’s non-BAD Receive. Same Awareness effect.",
          "3": "Back-row Defense Technique +16%. Quick Attack +20% on teammate’s non-BAD Receive. Same Awareness effect.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Jump High",
        levels: {
          "1": "Performs a Quick Spike with 260% of Quick Attack. If Nice, additional +40% of Quick Attack as power.",
          "2": "Performs a Quick Spike with 275% of Quick. If Nice, +45% Quick.",
          "3": "Performs a Quick Spike with 290% of Quick. If Nice, +50% Quick.",
          "4": "Performs a Quick Spike with 305% of Quick. If Nice, +55% Quick.",
          "5": "Performs a Quick Spike with 320% of Quick. If Nice, +60% Quick.",
        },
      },
    ],
    bonds: [
      {
        to: "shoyo-hinata-sp",
        name: "Weird Duo",
        participants: ["shoyo-hinata-sp", "tobio-kageyama-ur"],
        effect:
          "When an ally activates a Receive skill, consume 1 stack of [Losing Hate] and the receiving ally gains +6% Reflex. If HINATA (Hanami) activates a Receive and [Losing Hate] is consumed, HINATA gains an additional +9% Reflex and KAGEYAMA gains 1 [Losing Hate] stack. When HINATA (Hanami) activates his special, KAGEYAMA gains 1 [Losing Hate] stack.",
      },
      {
        to: "shoyo-hinata-sp",
        name: "Cats & Crows in Summer",
        participants: ["kenma-kozume-sp", "shoyo-hinata-sp"],
        effect:
          "After Kenma (SP) casts SNEAK DUMP, Hinata (SP) gains +12% Quick Attack for 1 rally.",
      },
    ],
    resonances: [
      {
        level: "I",
        name: "Skill Resonance I",
        effect: "Main Parameters +13%.",
      },
      {
        level: "II",
        name: "Skill Resonance II",
        effect:
          "HINATA (Hanami) Attack Technique +20%. If his Quick is a Nice Play, it cannot be blocked and reduces the opponents’ Awareness and Reflex by 10% for 3 net crossings. If the team scores on that Quick, reduce those stats by an additional 10% for 3 net crossings.",
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Main Parameters +13%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect:
          "HINATA (Hanami) Strength +30%. At match start, his Awareness is set to 0%; for every 1% reduced, his Strength increases by 2.5%. When his Quick becomes a Nice Play, Strength increases by Awareness ×40% (up to +60%).",
      },
      {
        level: "V",
        name: "Skill Resonance V",
        effect: "Main Parameters +13%.",
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

  // KEI TSUKISHIMA SP
  {
    id: "kei-tsukishima-sp",
    name: "Kei Tsukishima",
    shortName: "Tsukishima",
    team: "Karasuno",
    rarity: "SP",
    roles: ["MB"],
    typeTags: ["Block", "Quick Attack"],
    image: "/characters/karasuno/kei-tsukishima-sp.jpg",
    server: "Japan",
    stats: {
      basic: {
        quickAttack: 121,
        powerAttack: 83,
        set: 102,
        serve: 114,
        receive: 120,
        block: 146,
        save: 125,
      },
      bonusAttack: { awareness: 0.0, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.05, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Excellent Brain",
        levels: {
          "1": "If any opponent has a debuff: TSUKISHIMA (Fireworks) gains +15% Awareness and +15% Reflex; your allies gain +10% Attack Technique and +10% Defense Technique for 1 rally. When an ally activates a Block skill, TSUKISHIMA’s Quick Attack +3% (max 10 stacks). When an ally activates a Quick skill, TSUKISHIMA’s Block +3% (max 10 stacks).",
          "2": "Same effects (values unchanged).",
          "3": "Same effects (values unchanged).",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "“Block is a System”",
        levels: {
          "1": "Performs a Block with 300% of Block. Your back row gains +10% Reflex and +20% Spirit for 2 net crossings.",
          "2": "Performs a Block with 300% of Block. Same team buffs.",
          "3": "Performs a Block with 300% of Block. Same team buffs.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Calm View of Battle",
        levels: {
          "1": "At match start: if Attack Technique ≥ Defense Technique, gains [Attack I]; otherwise gains [Defense I]. [Attack I]: reduce “Block is a System” cooldown by 4 net crossings; during Quick, Awareness increases by Reflex (up to +50%) for 2 net crossings; Quick +20%. [Defense I]: reduce “Spikes that Take Advantage of Height” cooldown by 2 net crossings; when Blocking, Reflex increases by Awareness (up to +50%) for 2 net crossings; Block +20%.",
          "2": "Same as L1.",
          "3": "Same as L1.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Spikes that Take Advantage of Height",
        levels: {
          "1": "Performs a Quick Spike with 260% of Quick Attack. If any opponent has a debuff, additional +60% of Quick Attack as power.",
          "2": "260% base; same conditional bonus.",
          "3": "260% base; same conditional bonus.",
          "4": "260% base; same conditional bonus.",
          "5": "260% base; same conditional bonus.",
        },
      },
    ],
    bonds: [
      {
        to: "kei-tsukishima-sp",
        name: "Sun & Moon",
        participants: ["kei-tsukishima-sp", "shoyo-hinata-sp"],
        effect:
          "When TSUKISHIMA tosses to an ally, that ally’s Awareness +10/15/20/25/30% for 2 net crossings. If HINATA (Hanami) lands a Nice Quick, reduce JUMP HIGH cooldown by 2 net crossings and TSUKISHIMA (Fireworks) gains Awareness equal to 50% of HINATA’s Awareness (up to +50%) for 4 net crossings.",
      },
      {
        to: "kei-tsukishima-sp",
        name: "Fireworks Display",
        participants: ["tetsuro-kuroo-sp", "kei-tsukishima-sp"],
        effect:
          "Main parameters of allied members increase by +(Lv1: 6%, Lv2: 7%,Lv3: 8%,Lv4: 9%,Lv5: 10%). At the end of each rally, the opponent's front line will be inflicted with [Rage]. This lasts untils the ball crosses the net 8 times. If you inflict [Rage] on an enemy who already has [Rage], you will instead inflict [Distracted]. This lasts untils the ball crosses the net 8 times. The [Distracted] debuff cannot be removed.",
      },
    ],
    resonances: [
      {
        level: "I",
        name: "Skill Resonance I",
        effect: "Main Parameters +13%.",
      },
      {
        level: "II",
        name: "Skill Resonance II",
        effect:
          "If [Attack I]: Attack Technique +15% and Defense Technique +20%. If [Defense I]: Defense Technique +15% and Attack Technique +20%. EXCELLENT BRAIN broadened: his Quick/Block stack conditions also trigger when he touches the ball or when an opponent with a debuff touches the ball.",
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Main Parameters +13%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect:
          "Spirit and Strength +40%. If his Block is a Nice Play, that Block’s power +40% and gives the opposing vanguard [Enrage] (−10% Power/Quick). If his Quick is a Nice Play, that Quick’s power +40% and cannot be blocked.",
      },
      {
        level: "V",
        name: "Skill Resonance V",
        effect: "Main Parameters +13%.",
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

  // =========================================================
  // =========================  UR  ==========================
  // ======== ORDER: S -> OP -> LI -> WS -> MB ===============
  // =========================================================

  // TOBIO KAGEYAMA UR
  {
    id: "tobio-kageyama-ur",
    name: "Tobio Kageyama",
    shortName: "Kageyama",
    team: "Karasuno",
    rarity: "UR",
    roles: ["S"],
    typeTags: ["Serve", "Setter", "Quick Attack"],
    image: "/characters/karasuno/tobio-kageyama-ur.jpg",
    server: "Japan",
    stats: {
      basic: {
        quickAttack: 137,
        powerAttack: 94,
        set: 152,
        serve: 145,
        receive: 123,
        block: 137,
        save: 115,
      },
      bonusAttack: { awareness: 0.05, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.0, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Genius Setter",
        levels: {
          "1": "Performs a Set with 120% of Set. When KAGEYAMA tosses, the spiker’s Quick Attack increases by KAGEYAMA’s Set ×15% for 2 net crossings.",
          "2": "Performs a Set with 135% of Set. Same Quick bonus.",
          "3": "Performs a Set with 150% of Set. Same Quick bonus.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Murder Serve",
        levels: {
          "1": "Performs a Power Jump Serve with 130% of Serve. If Nice, allies’ Attack Technique +10% for 6 net crossings.",
          "2": "Performs a Power Jump Serve with 145% of Serve. If Nice, allies’ Attack Technique +10% for 6 net crossings.",
          "3": "Performs a Power Jump Serve with 160% of Serve. If Nice, allies’ Attack Technique +10% for 6 net crossings.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "The Quiet King",
        levels: {
          "1": "Attack Technique +8%. While on court, if an opponent’s serve-to-attack Spike (Power/Quick) is a Nice Play, KAGEYAMA gains 1 stack of [Losing Hate] (max 5). At rally start, gains 1 stack. When an ally serves/attacks/spikes, consume 1 stack: that player gains +Awareness (20%) for 2 net crossings.",
          "2": "Attack Technique +10%. …consume 1 stack: +25% Awareness for 2 net crossings.",
          "3": "Attack Technique +12%. …consume 1 stack: +30% Awareness for 2 net crossings.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Dominate the Game",
        levels: {
          "1": "Performs an unblockable Setter Dump (Two) with 240% of Set. While the opponent vanguard is on cooldown, increase cooldown progress counted for Block skills by +4 net crossings.",
          "2": "Performs a Setter Dump with 255% of Set; same extra effect.",
          "3": "Performs a Setter Dump with 270% of Set; same extra effect.",
          "4": "Performs a Setter Dump with 285% of Set; same extra effect.",
          "5": "Performs a Setter Dump with 300% of Set; same extra effect.",
        },
      },
    ],
    bonds: [
      {
        to: "tobio-kageyama-ur",
        name: "Weird Duo",
        participants: ["tobio-kageyama-ur", "shoyo-hinata-ssr"],
        effect:
          "KAGEYAMA tosses → HINATA performs a weird Quick with power [Quick]×(Lv1: 280%, Lv2: 295%, Lv3: 310%, Lv4: 325%, Lv5: 340%), unblocked. During this play, HINATA Awareness +30% and Strength + Awareness×(Lv1: 30%, Lv2: 35%, Lv3: 40%, Lv4: 45%, Lv5: 50%) (cap 60/70/80/90/100%). Reset when an ally scores. If [Losing Hate] is consumed on activation, KAGEYAMA gains 1 stack.",
      },
      {
        to: "tobio-kageyama-ur",
        name: "Karasuno's Geniuses",
        participants: ["tobio-kageyama-ur", "yu-nishinoya-sp"],
        effect:
          "When YU NISHINOYA (After School) uses his special, KAGEYAMA gains 1 [Losing Hate] stack. If that play is a Nice Play, the first allied Spike afterward gains +20% of the spiker’s (Power/Quick) as bonus power.",
      },
    ],
    resonances: [
      {
        level: "I",
        name: "Skill Resonance I",
        effect: "Main Parameters +13%.",
      },
      {
        level: "II",
        name: "Skill Resonance II",
        effect:
          "Strength +20%. When [Losing Hate] is consumed on a serve-to-attack Spike, that player gains an additional +15% Awareness for 2 net crossings. If KAGEYAMA’s own play consumes [Losing Hate], he gains 1 stack and the play’s power increases by the relevant parameter ×15%; allies’ Awareness +20% for 2 net crossings. If a player has ≥3 stacks of [Losing Hate], their Attack Technique +10% on this serve-to-attack Spike.",
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Main Parameters +13%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect:
          "Set +15%. While on court, when a teammate performs a Quick or Two, that player’s Strength increases by (KAGEYAMA Set / 500)×6% (up to +60%). When KAGEYAMA activates a skill, reduce his other skills’ cooldowns by 1 net crossing.",
      },
      {
        level: "V",
        name: "Skill Resonance V",
        effect: "Main Parameters +13%.",
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

  // =========================================================
  // ========================  SSR  ==========================
  // ======== ORDER: S -> OP -> LI -> WS -> MB ===============
  // =========================================================

  // TOBIO KAGEYAMA SSR (S)
  {
    id: "tobio-kageyama-ssr",
    name: "Tobio Kageyama",
    shortName: "Kageyama",
    team: "Karasuno",
    rarity: "SSR",
    roles: ["S"],
    typeTags: ["Serve", "Setter", "Quick Attack"],
    image: "/characters/karasuno/tobio-kageyama-ssr.jpg",
    server: "Global",
    stats: {
      basic: {
        quickAttack: 109,
        powerAttack: 75,
        set: 121,
        serve: 115,
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
        name: "Tricky Serve",
        levels: {
          "1": "TOBIO KAGEYAMA (Practice) performs a Jump Serve with 120% of Serve stat as power",
          "2": "TOBIO KAGEYAMA (Practice) performs a Jump Serve with 135% of Serve stat as power",
          "3": "TOBIO KAGEYAMA (Practice) performs a Jump Serve with 150% of Serve stat as power",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Sharp Observer",
        levels: {
          "1": "TOBIO KAGEYAMA (Practice) performs a Set with 115% of Set stat as power; for this play, your side's spikers' Strength increases by 10%",
          "2": "TOBIO KAGEYAMA (Practice) performs a Set with 130% of Set stat as power; for this play, your side's spikers' Strength increases by 10%",
          "3": "TOBIO KAGEYAMA (Practice) performs a Set with 145% of Set stat as power; for this play, your side's spikers' Strength increases by 10%",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "The King Awakens",
        levels: {
          "1": "While TOBIO KAGEYAMA (Practice) is present, increases your side's players' Awareness by 10% and increases Spike power by 6% of the player's Power/Quick Attack stat.",
          "2": "While TOBIO KAGEYAMA (Practice) is present, increases your side's players' Awareness by 10% and increases Spike power by 8% of the player's Power/Quick Attack stat.",
          "3": "While TOBIO KAGEYAMA (Practice) is present, increases your side's players' Awareness by 10% and increases Spike power by 10% of the player's Power/Quick Attack stat.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Surprise Dump",
        levels: {
          "1": "TOBIO KAGEYAMA (Practice) performs an unblockable Setter Dump with 225% of Set stat as power",
          "2": "TOBIO KAGEYAMA (Practice) performs an unblockable Setter Dump with 240% of Set stat as power",
          "3": "TOBIO KAGEYAMA (Practice) performs an unblockable Setter Dump with 255% of Set stat as power",
          "4": "TOBIO KAGEYAMA (Practice) performs an unblockable Setter Dump with 270% of Set stat as power",
          "5": "TOBIO KAGEYAMA (Practice) performs an unblockable Setter Dump with 285% of Set stat as power",
        },
      },
    ],
    bonds: [
      {
        to: "tobio-kageyama-ssr",
        name: "Teammates on the Court",
        participants: ["tobio-kageyama-ssr", "shoyo-hinata-sr"],
        effect:
          "When casting Quick Spike skills increases this player's Awareness",
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
          "SURPRISE DUMP modified: during this Setter Dump, increases TOBIO KAGEYAMA (Practice)'s Awareness and Strength by 10%. and increases your side's Awareness and Strength by 5% for 2 turns",
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
          "When your side performs a Critical Spike, reduces SURPRISE DUMP cooldown by 8 net crossings.",
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

  // DAICHI SAWAMURA SSR (OP)
  {
    id: "daichi-sawamura-ssr",
    name: "Daichi Sawamura",
    shortName: "Daichi",
    team: "Karasuno",
    rarity: "SSR",
    roles: ["OP"],
    typeTags: ["Receive"],
    image: "/characters/karasuno/daichi-sawamura-ssr.jpg",
    server: "Global",
    stats: {
      basic: {
        quickAttack: 75,
        powerAttack: 109,
        set: 98,
        serve: 103,
        receive: 121,
        block: 109,
        save: 104,
      },
      bonusAttack: { awareness: 0.0, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.05, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Steady Reception",
        levels: {
          "1": "When DAICHI SAWAMURA performs a Receive, restores 3 Stamina to the teammate with the lowest Stamina",
          "2": "When DAICHI SAWAMURA performs a Receive, restores 5 Stamina to the teammate with the lowest Stamina",
          "3": "When DAICHI SAWAMURA performs a Receive, restores 7 Stamina to the teammate with the lowest Stamina",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Sledgehammer Spike",
        levels: {
          "1": "DAICHI SAWAMURA performs a Power Spike with 120% of his Power Attack stat",
          "2": "DAICHI SAWAMURA performs a Power Spike with 135% of his Power Attack stat",
          "3": "DAICHI SAWAMURA performs a Power Spike with 150% of his Power Attack stat",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Team Backbone",
        levels: {
          "1": "While DAICHI SAWAMURA is present, increases receive power of your side's back row players by 10% of their Receive stat",
          "2": "While DAICHI SAWAMURA is present, increases receive power of your side's back row players by 12% of their Receive stat",
          "3": "While DAICHI SAWAMURA is present, increases receive power of your side's back row players by 14% of their Receive stat",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Reliable Defense",
        levels: {
          "1": "DAICHI SAWAMURA performs a Receive with 220% of his Receive stat. If your side's next Spike is a Power Spike, increases that spike's power by 15% of the spiker's Power Attack stat.",
          "2": "DAICHI SAWAMURA performs a Receive with 235% of his Receive stat. If your side's next Spike is a Power Spike, increases that spike's power by 15% of the spiker's Power Attack stat.",
          "3": "DAICHI SAWAMURA performs a Receive with 250% of his Receive stat. If your side's next Spike is a Power Spike, increases that spike's power by 15% of the spiker's Power Attack stat.",
          "4": "DAICHI SAWAMURA performs a Receive with 265% of his Receive stat. If your side's next Spike is a Power Spike, increases that spike's power by 15% of the spiker's Power Attack stat.",
          "5": "DAICHI SAWAMURA performs a Receive with 280% of his Receive stat. If your side's next Spike is a Power Spike, increases that spike's power by 15% of the spiker's Power Attack stat.",
        },
      },
    ],
    bonds: [
      {
        to: "daichi-sawamura-ssr",
        name: "Karasuno Senior Year",
        participants: [
          "daichi-sawamura-ssr",
          "asahi-azumane-ssr",
          "koshi-sugawara-sr",
        ],
        effect:
          "Reduces Stamina consumption for your side's Spike skills; Increases Attack Technique when performing Power Spikes",
      },
      {
        to: "daichi-sawamura-ssr",
        name: "Karasuno's Pillar",
        participants: ["daichi-sawamura-ssr", "chikara-ennoshita-sr"],
        effect: "When achieving a PERFECT receive, increases Team Morale",
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
          "When your side is behind, reduces RELIABLE DEFENSE cooldown to 4 net crossings.",
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
          "RELIABLE DEFENSE new effect: your side's next Power Spike additionally gains power equal to 25% of the spiker's Power Attack stat.",
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

  // YU NISHINOYA SSR (LI)
  {
    id: "yu-nishinoya-ssr",
    name: "Yu Nishinoya",
    shortName: "Nishinoya",
    team: "Karasuno",
    rarity: "SSR",
    roles: ["LI"],
    typeTags: ["Receive"],
    image: "/characters/karasuno/yu-nishinoya-ssr.jpg",
    server: "Global",
    stats: {
      basic: {
        quickAttack: 68,
        powerAttack: 99,
        set: 110,
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
        name: "Guardian Deity",
        levels: {
          "1": "When YU NISHINOYA's Save result is not BAD, increases the power of the next Power Spike skill used by your Power-type player by 15% of his Power Attack stat",
          "2": "When YU NISHINOYA's Save result is not BAD, increases the power of the next Power Spike skill used by your Power-type player by 17.5% of his Power Attack stat",
          "3": "When YU NISHINOYA's Save result is not BAD, increases the power of the next Power Spike skill used by your Power-type player by 20% of his Power Attack stat",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Libero Supreme",
        levels: {
          "1": "YU NISHINOYA performs a Save with 120% of Save stat as power",
          "2": "YU NISHINOYA performs a Save with 140% of Save stat as power",
          "3": "YU NISHINOYA performs a Save with 160% of Save stat as power",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Inspire Morale",
        levels: {
          "1": "When YU NISHINOYA is on the court, increases your Team Morale by 18",
          "2": "When YU NISHINOYA is on the court, increases your Team Morale by 20",
          "3": "When YU NISHINOYA is on the court, increases your Team Morale by 25",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Rolling Thunder",
        levels: {
          "1": "YU NISHINOYA consumes 20 additional Stamina to perform a Receive with 220% of Receive stat power; if the Receive result is not BAD, reduces the cooldown of your side's next Power Spike skill by 6 net crossings",
          "2": "YU NISHINOYA consumes 20 additional Stamina to perform a Receive with 235% of Receive stat power; if the Receive result is not BAD, reduces the cooldown of your side's next Power Spike skill by 6 net crossings",
          "3": "YU NISHINOYA consumes 20 additional Stamina to perform a Receive with 250% of Receive stat power; if the Receive result is not BAD, reduces the cooldown of your side's next Power Spike skill by 6 net crossings",
          "4": "YU NISHINOYA consumes 20 additional Stamina to perform a Receive with 265% of Receive stat power; if the Receive result is not BAD, reduces the cooldown of your side's next Power Spike skill by 6 net crossings",
          "5": "YU NISHINOYA consumes 20 additional Stamina to perform a Receive with 280% of Receive stat power; if the Receive result is not BAD, reduces the cooldown of your side's next Power Spike skill by 6 net crossings",
        },
      },
    ],
    bonds: [
      {
        to: "yu-nishinoya-ssr",
        name: "Kiyoko's Knights",
        participants: ["yu-nishinoya-ssr", "ryunosuke-tanaka-ssr"],
        effect: "When scoring, increases Team Morale",
      },
      {
        to: "yu-nishinoya-ssr",
        name: "Guardian Deity and Wing Spiker",
        participants: ["yu-nishinoya-ssr", "asahi-azumane-ssr"],
        effect:
          "When YU NISHINOYA or ASAHI AZUMANE casts a skill, increases their Attack Technique and Defense Technique",
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
          "ROLLING THUNDER modified: additional Stamina consumption reduced to 10.",
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
          "YU NISHINOYA's first Receive/Save in each match gains increased power: Receive power increases by 30% of Receive stat.",
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

  // ASAHI AZUMANE SSR (WS)
  {
    id: "asahi-azumane-ssr",
    name: "Asahi Azumane",
    shortName: "Asahi",
    team: "Karasuno",
    rarity: "SSR",
    roles: ["WS"],
    typeTags: ["Serve", "Power Attack"],
    image: "/characters/karasuno/asahi-azumane-ssr.jpg",
    server: "Global",
    stats: {
      basic: {
        quickAttack: 83,
        powerAttack: 121,
        set: 98,
        serve: 116,
        receive: 110,
        block: 104,
        save: 98,
      },
      bonusAttack: { awareness: 0.05, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.0, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Proficient Defense",
        levels: {
          "1": "ASAHI AZUMANE performs a Receive with 120% of Receive stat as power",
          "2": "ASAHI AZUMANE performs a Receive with 135% of Receive stat as power",
          "3": "ASAHI AZUMANE performs a Receive with 150% of Receive stat as power",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Bullet Serve",
        levels: {
          "1": "ASAHI AZUMANE performs a Jump Serve with 120% of Serve stat as power",
          "2": "ASAHI AZUMANE performs a Jump Serve with 135% of Serve stat as power",
          "3": "ASAHI AZUMANE performs a Jump Serve with 150% of Serve stat as power",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Ace's Aura",
        levels: {
          "1": "When ASAHI AZUMANE's Stamina is above 70, increases his Power Spike's power by 15% of Power Attack stat",
          "2": "When ASAHI AZUMANE's Stamina is above 70, increases his Power Spike's power by 17.5% of Power Attack stat",
          "3": "When ASAHI AZUMANE's Stamina is above 70, increases his Power Spike's power by 20% of Power Attack stat",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Charged Spike",
        levels: {
          "1": 'ASAHI AZUMANE consumes 30 additional Stamina to perform a Power Spike with 235% of Power Attack stat as power, receives 1 stacks of "Power Charge"; when casting [CHARGED SPIKE] skill each stack of "Power Charge" increases Power Spike power by 50% of Power Attack stat',
          "2": 'ASAHI AZUMANE consumes 30 additional Stamina to perform a Power Spike with 250% of Power Attack stat as power, receives 1 stacks of "Power Charge"; when casting [CHARGED SPIKE] skill each stack of "Power Charge" increases Power Spike power by 50% of Power Attack stat',
          "3": 'ASAHI AZUMANE consumes 30 additional Stamina to perform a Power Spike with 265% of Power Attack stat as power, receives 1 stacks of "Power Charge"; when casting [CHARGED SPIKE] skill each stack of "Power Charge" increases Power Spike power by 50% of Power Attack stat',
          "4": 'ASAHI AZUMANE consumes 30 additional Stamina to perform a Power Spike with 280% of Power Attack stat as power, receives 1 stacks of "Power Charge"; when casting [CHARGED SPIKE] skill each stack of "Power Charge" increases Power Spike power by 50% of Power Attack stat',
          "5": 'ASAHI AZUMANE consumes 30 additional Stamina to perform a Power Spike with 295% of Power Attack stat as power, receives 1 stacks of "Power Charge"; when casting [CHARGED SPIKE] skill each stack of "Power Charge" increases Power Spike power by 50% of Power Attack stat',
        },
      },
    ],
    bonds: [
      {
        to: "asahi-azumane-ssr",
        name: "Karasuno Senior Year",
        participants: [
          "daichi-sawamura-ssr",
          "asahi-azumane-ssr",
          "koshi-sugawara-sr",
        ],
        effect:
          "Reduces Stamina consumption for your side's Spike skills; Increases Attack Technique when performing Power Spikes",
      },
      {
        to: "asahi-azumane-ssr",
        name: "Guardian Deity and Wing Spiker",
        participants: ["yu-nishinoya-ssr", "asahi-azumane-ssr"],
        effect:
          "When YU NISHINOYA or ASAHI AZUMANE casts a skill, increases their Attack Technique and Defense Technique",
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
          "PROFICIENT DEFENSE Stamina consumption reduced to 0; CHARGED SPIKE additional Stamina consumption reduced to 20.",
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
          'CHARGED SPIKE new effect: Each stack of "Power Charge" increases this Power Spike\'s power by an additional 60% of Power Attack stat.',
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

  // RYUNOSUKE TANAKA SSR (WS)
  {
    id: "ryunosuke-tanaka-ssr",
    name: "Ryunosuke Tanaka",
    shortName: "Tanaka",
    team: "Karasuno",
    rarity: "SSR",
    roles: ["WS"],
    typeTags: ["Power Attack"],
    image: "/characters/karasuno/ryunosuke-tanaka-ssr.jpg",
    server: "Global",
    stats: {
      basic: {
        quickAttack: 83,
        powerAttack: 121,
        set: 98,
        serve: 104,
        receive: 115,
        block: 109,
        save: 99,
      },
      bonusAttack: { awareness: 0.05, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.0, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "The Ace Arrives",
        levels: {
          "1": "Increases the power of RYUNOSUKE TANAKA's 1st Power Spike in each match by 25% of Power Attack stat",
          "2": "Increases the power of RYUNOSUKE TANAKA's 1st Power Spike in each match by 40% of Power Attack stat",
          "3": "Increases the power of RYUNOSUKE TANAKA's 1st Power Spike in each match by 55% of Power Attack stat",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Tenacious Spirit",
        levels: {
          "1": "RYUNOSUKE TANAKA performs a Receive with 115% of Receive stat as power; for this Receive, TANAKA's Reflex increases by 10%",
          "2": "RYUNOSUKE TANAKA performs a Receive with 130% of Receive stat as power; for this Receive, TANAKA's Reflex increases by 10%",
          "3": "RYUNOSUKE TANAKA performs a Receive with 145% of Receive stat as power; for this Receive, TANAKA's Reflex increases by 10%",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Burning Passion",
        levels: {
          "1": "Increases RYUNOSUKE TANAKA's Power Spike power by 10% of Power Attack stat; his Power Spike reduces opponent's blocking and receiving players' Stamina by 5",
          "2": "Increases RYUNOSUKE TANAKA's Power Spike power by 12% of Power Attack stat; his Power Spike reduces opponent's blocking and receiving players' Stamina by 5",
          "3": "Increases RYUNOSUKE TANAKA's Power Spike power by 14% of Power Attack stat; his Power Spike reduces opponent's blocking and receiving players' Stamina by 5",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Super Inner Cross",
        levels: {
          "1": "RYUNOSUKE TANAKA consumes 5 extra Stamina to perform a Short Diagonal Spike with 250% of Power Attack stat as power; when this is TANAKA's first spike in this set, increases spike power by an additional 30% of TANAKA's Power Attack stat",
          "2": "Consumes 5 extra Stamina to perform a Short Diagonal Spike with 260% of Power Attack as power; if it is TANAKA's first spike this set, +30% Power Attack.",
          "3": "Consumes 5 extra Stamina to perform a Short Diagonal Spike with 275% of Power Attack as power; if it is TANAKA's first spike this set, +30% Power Attack.",
          "4": "Consumes 5 extra Stamina to perform a Short Diagonal Spike with 290% of Power Attack as power; if it is TANAKA's first spike this set, +30% Power Attack.",
          "5": "Consumes 5 extra Stamina to perform a Short Diagonal Spike with 305% of Power Attack as power; if it is TANAKA's first spike this set, +30% Power Attack.",
        },
      },
    ],
    bonds: [
      {
        to: "ryunosuke-tanaka-ssr",
        name: "Kiyoko's Knights",
        participants: ["ryunosuke-tanaka-ssr", "yu-nishinoya-ssr"],
        effect: "When scoring, increases Team Morale",
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
          "THE ACE ARRIVES effect change: applies to the first 2 Power Spikes per match.",
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
          "When scoring with SUPER INNER CROSS, players on your side gain +40% Power Attack stat (1 time per set).",
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

  // KEI TSUKISHIMA SSR (MB)
  {
    id: "kei-tsukishima-ssr",
    name: "Kei Tsukishima",
    shortName: "Tsukishima",
    team: "Karasuno",
    rarity: "SSR",
    roles: ["MB"],
    typeTags: ["Quick Attack", "Block"],
    image: "/characters/karasuno/kei-tsukishima-ssr.jpg",
    server: "Global",
    stats: {
      basic: {
        quickAttack: 115,
        powerAttack: 79,
        set: 101,
        serve: 106,
        receive: 103,
        block: 122,
        save: 97,
      },
      bonusAttack: { awareness: 0.0, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.05, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Karasuno's Composure",
        levels: {
          "1": "While KEI TSUKISHIMA is on the court, increases the Strength of your Quick Attack-type players by 10%.",
          "2": "While KEI TSUKISHIMA is on the court, increases the Strength of your Quick Attack-type players by 12.5%.",
          "3": "While KEI TSUKISHIMA is on the court, increases the Strength of your Quick Attack-type players by 15%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Tactical Quick Attack",
        levels: {
          "1": "KEI TSUKISHIMA performs a Quick Spike with 115% of his Quick Attack stat. The next time a teammate casts a Spike skill their Awareness is increased by 5%.",
          "2": "KEI TSUKISHIMA performs a Quick Spike with 130% of his Quick Attack stat. The next time a teammate casts a Spike skill their Awareness is increased by 5%.",
          "3": "KEI TSUKISHIMA performs a Quick Spike with 145% of his Quick Attack stat. The next time a teammate casts a Spike skill their Awareness is increased by 5%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Moonrise",
        levels: {
          "1": "While KEI TSUKISHIMA is present, increases Block power of your side's front row players by 8% of their Block stat",
          "2": "While KEI TSUKISHIMA is present, increases Block power of your side's front row players by 10% of their Block stat",
          "3": "While KEI TSUKISHIMA is present, increases Block power of your side's front row players by 12% of their Block stat",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Kei's Retort",
        levels: {
          "1": 'KEI TSUKISHIMA performs a Block with 195% of his Block stat as power. Applies the "Enrage" debuff to the opposing spiker (reducing their Power/Quick Attack stats by 10%).',
          "2": 'KEI TSUKISHIMA performs a Block with 210% of his Block stat as power. Applies the "Enrage" debuff to the opposing spiker (reducing their Power/Quick Attack stats by 10%).',
          "3": 'KEI TSUKISHIMA performs a Block with 225% of his Block stat as power. Applies the "Enrage" debuff to the opposing spiker (reducing their Power/Quick Attack stats by 10%).',
          "4": 'KEI TSUKISHIMA performs a Block with 240% of his Block stat as power. Applies the "Enrage" debuff to the opposing spiker (reducing their Power/Quick Attack stats by 10%).',
          "5": 'KEI TSUKISHIMA performs a Block with 255% of his Block stat as power. Applies the "Enrage" debuff to the opposing spiker (reducing their Power/Quick Attack stats by 10%).',
        },
      },
    ],
    bonds: [
      {
        to: "kei-tsukishima-ssr",
        name: "Shield and Spear",
        participants: ["kei-tsukishima-ssr", "tadashi-yamaguchi-sr"],
        effect:
          "Increases Kei Tsukishima's Block stat and Tadashi Yamaguchi's Serve stat",
      },
    ],
    resonances: [
      {
        level: "I",
        name: "Skill Resonance I",
        effect:
          "When KEI TSUKISHIMA blocks, increases your side's receivers' Receive stat by 3%, stacking up to 3 times.",
      },
      {
        level: "II",
        name: "Skill Resonance II",
        effect: "Increases Basic Stats by 10%.",
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
          "When casting KEI'S RETORT, applies \"Enrage\" to opponent's front row players (reduces Power/Quick Attack stats by 10%).",
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

  // SHOYO HINATA SSR (MB)
  {
    id: "shoyo-hinata-ssr",
    name: "Shoyo Hinata",
    shortName: "Hinata",
    team: "Karasuno",
    rarity: "SSR",
    roles: ["MB"],
    typeTags: ["Quick Attack"],
    image: "/characters/karasuno/shoyo-hinata-ssr.jpg",
    server: "Global",
    stats: {
      basic: {
        quickAttack: 121,
        powerAttack: 83,
        set: 98,
        serve: 103,
        receive: 105,
        block: 109,
        save: 110,
      },
      bonusAttack: { awareness: 0.05, strength: 0, attackTechnique: 0 },
      bonusDefense: { reflex: 0, spirit: 0, defenseTechnique: 0 },
    },
    skills: [
      {
        key: "passive",
        name: "The Greatest Decoy",
        levels: {
          "1": "While SHOYO HINATA is present increases Power/Quick Attack stat of players on your side by 7%",
          "2": "While SHOYO HINATA is present increases Power/Quick Attack stat of players on your side by 10%",
          "3": "While SHOYO HINATA is present increases Power/Quick Attack stat of players on your side by 13%",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Quick Duo",
        levels: {
          "1": "When SHOYO HINATA performs a Quick Spike and the setter is a Quick Attack-type player, increases this spike's power by 15% of that setter's Quick Attack stat",
          "2": "When SHOYO HINATA performs a Quick Spike and the setter is a Quick Attack-type player, increases this spike's power by 17% of that setter's Quick Attack stat",
          "3": "When SHOYO HINATA performs a Quick Spike and the setter is a Quick Attack-type player, increases this spike's power by 19% of that setter's Quick Attack stat",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "On the Ball",
        levels: {
          "1": "Increases SHOYO HINATA's Awareness by 6%. When Hinata lands a Critical hit, additionally increases Awareness by 4%, stacking up to 1 times.",
          "2": "Increases SHOYO HINATA's Awareness by 7%. When Hinata lands a Critical hit, additionally increases Awareness by 4%, stacking up to 1 times.",
          "3": "Increases SHOYO HINATA's Awareness by 7%. When Hinata lands a Critical hit, additionally increases Awareness by 5%, stacking up to 1 times.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Soaring Teen",
        levels: {
          "1": "SHOYO HINATA performs a Quick Spike with 235% of his Quick Attack stat as power. If this spike is a Critical hit, increases its power by an additional 20% of his Quick Attack stat.",
          "2": "SHOYO HINATA performs a Quick Spike with 250% of his Quick Attack stat as power. If this spike is a Critical hit, increases its power by an additional 20% of his Quick Attack stat.",
          "3": "SHOYO HINATA performs a Quick Spike with 265% of his Quick Attack stat as power. If this spike is a Critical hit, increases its power by an additional 20% of his Quick Attack stat.",
          "4": "SHOYO HINATA performs a Quick Spike with 280% of his Quick Attack stat as power. If this spike is a Critical hit, increases its power by an additional 20% of his Quick Attack stat.",
          "5": "SHOYO HINATA performs a Quick Spike with 295% of his Quick Attack stat as power. If this spike is a Critical hit, increases its power by an additional 20% of his Quick Attack stat.",
        },
      },
    ],
    bonds: [
      {
        to: "shoyo-hinata-ssr",
        name: "Weird Duo",
        participants: ["tobio-kageyama-ur", "shoyo-hinata-ssr"],
        effect:
          "KAGEYAMA tosses → HINATA performs a weird Quick with [Quick]×(280/295/310/325/340%), unblocked. HINATA Awareness +30%; Strength + Awareness×(30–50%) (caps 60–100%). Reset when an ally scores. If [Losing Hate] is consumed on activation, KAGEYAMA gains 1 stack.",
      },
      {
        to: "shoyo-hinata-ssr",
        name: "Weird Duo",
        participants: ["tobio-kageyama-ur", "shoyo-hinata-ssr"],
        effect:
          "Same weird Quick as above tied to KAGEYAMA (UR) toss; same Awareness/Strength scaling, unblocked, reset on allied score, and [Losing Hate] interaction.",
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
        effect: "ON THE BALL modified: maximum stacks increased from 1 to 3.",
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
          "When SHOYO HINATA performs a Critical Quick Spike, reset SOARING TEEN cooldown.",
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

  // =========================================================
  // =========================  SR  ==========================
  // ======== ORDER: S -> OP -> LI -> WS -> MB ===============
  // =========================================================

  // KOSHI SUGAWARA SR (S)
  {
    id: "koshi-sugawara-sr",
    name: "Koshi Sugawara",
    shortName: "Sugawara",
    team: "Karasuno",
    rarity: "SR",
    roles: ["S"],
    typeTags: ["Serve", "Power Attack", "Setter"],
    image: "/characters/karasuno/koshi-sugawara-sr.jpg",
    server: "Global",
    stats: {
      basic: {
        quickAttack: 61,
        powerAttack: 89,
        set: 94,
        serve: 99,
        receive: 79,
        block: 88,
        save: 75,
      },
      bonusAttack: { awareness: 0.05, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.09, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Senpai's Prowess",
        levels: {
          "1": "KOSHI SUGAWARA performs an Overhand Serve with 120% of Serve stat as power",
          "2": "KOSHI SUGAWARA performs an Overhand Serve with 135% of Serve stat as power",
          "3": "KOSHI SUGAWARA performs an Overhand Serve with 150% of Serve stat as power",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Offensive Tactics",
        levels: {
          "1": "KOSHI SUGAWARA performs a Set with 115% of Set stat as power; while KOSHI SUGAWARA is present, increases the power of Power Spike skills of your Power-type players by 5% of their Power Attack stat",
          "2": "KOSHI SUGAWARA performs a Set with 130% of Set stat as power; while KOSHI SUGAWARA is present, increases the power of Power Spike skills of your Power-type players by 5% of their Power Attack stat",
          "3": "KOSHI SUGAWARA performs a Set with 145% of Set stat as power; while KOSHI SUGAWARA is present, increases the power of Power Spike skills of your Power-type players by 5% of their Power Attack stat",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Rallying Spirit",
        levels: {
          "1": "While KOSHI SUGAWARA is present, reduces your side's Power Spike skills Stamina consumption by 20%",
          "2": "While KOSHI SUGAWARA is present, reduces your side's Power Spike skills Stamina consumption by 30%",
          "3": "While KOSHI SUGAWARA is present, reduces your side's Power Spike skills Stamina consumption by 40%",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Senpai's Worth",
        levels: {
          "1": "KOSHI SUGAWARA performs a Set that increases your side's next spike power by 100% of his Power/Quick Attack stat; when performing a Power Spike, additionally increases this spike's power by 10% of his Power Attack stat",
          "2": "KOSHI SUGAWARA performs a Set that increases your side's next spike power by 115% of his Power/Quick Attack stat; when performing a Power Spike, additionally increases this spike's power by 10% of his Power Attack stat",
          "3": "KOSHI SUGAWARA performs a Set that increases your side's next spike power by 130% of his Power/Quick Attack stat; when performing a Power Spike, additionally increases this spike's power by 15% of his Power Attack stat",
          "4": "KOSHI SUGAWARA performs a Set that increases your side's next spike power by 145% of his Power/Quick Attack stat; when performing a Power Spike, additionally increases this spike's power by 15% of his Power Attack stat",
          "5": "KOSHI SUGAWARA performs a Set that increases your side's next spike power by 160% of his Power/Quick Attack stat; when performing a Power Spike, additionally increases this spike's power by 15% of his Power Attack stat",
        },
      },
    ],
    bonds: [
      {
        to: "koshi-sugawara-sr",
        name: "Karasuno Senior Year",
        participants: [
          "daichi-sawamura-ssr",
          "asahi-azumane-ssr",
          "koshi-sugawara-sr",
        ],
        effect:
          "Reduces Stamina consumption for your side's Spike skills; Increases Attack Technique when performing Power Spikes",
      },
    ],
    resonances: [
      {
        level: "I",
        name: "Skill Resonance I",
        effect:
          "Increases KOSHI SUGAWARA's Setting power by an additional 6% of Set stat.",
      },
      {
        level: "II",
        name: "Skill Resonance II",
        effect: "Increases Basic Stats by 6%.",
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
          "Can be used 1 time per match. When KOSHI SUGAWARA is present and any player on your side has less than 30 Stamina, restore 20 Stamina to that player.",
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

  // DAICHI SAWAMURA SR (OP)
  {
    id: "daichi-sawamura-sr",
    name: "Daichi Sawamura",
    shortName: "Daichi",
    team: "Karasuno",
    rarity: "SR",
    roles: ["OP"],
    typeTags: ["Receive"],
    image: "/characters/karasuno/daichi-sawamura-sr.jpg",
    server: "Global",
    stats: {
      basic: {
        quickAttack: 61,
        powerAttack: 89,
        set: 80,
        serve: 84,
        receive: 99,
        block: 89,
        save: 85,
      },
      bonusAttack: { awareness: 0.0, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.05, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Solid Defense",
        levels: {
          "1": "Increases DAICHI SAWAMURA (Practice)'s Save and Receive stats by 10%",
          "2": "Increases DAICHI SAWAMURA (Practice)'s Save and Receive stats by 12%",
          "3": "Increases DAICHI SAWAMURA (Practice)'s Save and Receive stats by 14%",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Captain's Strength",
        levels: {
          "1": "DAICHI SAWAMURA (Practice) performs a Power Spike with 120% of Power Attack stat as power",
          "2": "DAICHI SAWAMURA (Practice) performs a Power Spike with 135% of Power Attack stat as power",
          "3": "DAICHI SAWAMURA (Practice) performs a Power Spike with 150% of Power Attack stat as power",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Captain's Coverage",
        levels: {
          "1": "DAICHI SAWAMURA (Practice) consumes 1 additional Stamina whenever he touches the ball. When your side scores, that player recovers 3 Stamina. While SAWAMURA is on the court, increases Receive power by 8% of the receiving player's Receive stat.",
          "2": "Consumes 1 additional Stamina on touch; when your side scores, that player recovers 3 Stamina. While SAWAMURA is on court, Receive power +10% of receiver’s Receive.",
          "3": "Consumes 1 additional Stamina on touch; when your side scores, that player recovers 3 Stamina. While SAWAMURA is on court, Receive power +12% of receiver’s Receive.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Precision Receptor",
        levels: {
          "1": "DAICHI SAWAMURA (Practice) performs a Receive with 215% of Receive stat as power, when your side's player next casts an attack skill, increases the power of his touch by 10% of the player's corresponding stat.",
          "2": "Performs a Receive with 230% of Receive; next allied attack gains +10% of the attacker’s corresponding stat.",
          "3": "Performs a Receive with 245% of Receive; next allied attack gains +10% of the attacker’s corresponding stat.",
          "4": "Performs a Receive with 260% of Receive; next allied attack gains +10% of the attacker’s corresponding stat.",
          "5": "Performs a Receive with 275% of Receive; next allied attack gains +10% of the attacker’s corresponding stat.",
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
          "While DAICHI SAWAMURA (Practice) is present, reduces Stamina consumption by 2 when players on your side cast skills.",
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
          "When casting PRECISION RECEPTION, restores 10 Stamina to the player with lowest Stamina on your side.",
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

  // YU NISHINOYA SR (LI)
  {
    id: "yu-nishinoya-sr",
    name: "Yu Nishinoya",
    shortName: "Nishinoya",
    team: "Karasuno",
    rarity: "SR",
    roles: ["LI"],
    typeTags: ["Receive"],
    image: "/characters/karasuno/yu-nishinoya-sr.jpg",
    server: "Global",
    stats: {
      basic: {
        quickAttack: 55,
        powerAttack: 81,
        set: 90,
        serve: 81,
        receive: 100,
        block: 79,
        save: 95,
      },
      bonusAttack: { awareness: 0.0, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.05, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Primal Instinct",
        levels: {
          "1": "When YU NISHINOYA (Practice)'s Save result is not BAD, increases your side's Spike power by 7% of the player's Power/Quick Attack stat",
          "2": "When YU NISHINOYA (Practice)'s Save result is not BAD, increases your side's Spike power by 9.5% of the player's Power/Quick Attack stat",
          "3": "When YU NISHINOYA (Practice)'s Save result is not BAD, increases your side's Spike power by 12% of the player's Power/Quick Attack stat",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Elite Libero",
        levels: {
          "1": "YU NISHINOYA (Practice) performs a Save with 120% of Save stat as power",
          "2": "YU NISHINOYA (Practice) performs a Save with 135% of Save stat as power",
          "3": "YU NISHINOYA (Practice) performs a Save with 150% of Save stat as power",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Team's Lifeblood",
        levels: {
          "1": "YU NISHINOYA (Practice)'s Receive stat increases by 7%; When YU NISHINOYA (Practice)'s Receive result is not BAD, increases your Team Morale by 5",
          "2": "YU NISHINOYA (Practice)'s Receive stat increases by 9.5%; When YU NISHINOYA (Practice)'s Receive result is not BAD, increases your Team Morale by 5",
          "3": "YU NISHINOYA (Practice)'s Receive stat increases by 12%; When YU NISHINOYA (Practice)'s Receive result is not BAD, increases your Team Morale by 5",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Genius Defense",
        levels: {
          "1": "YU NISHINOYA (Practice) performs a Receive with 215% of Receive stat as power; when receiving an opponent's Quick Spike, increases this receive's power by 8% of Receive stat",
          "2": "YU NISHINOYA (Practice) performs a Receive with 230% of Receive stat as power; when receiving an opponent's Quick Spike, increases this receive's power by 8% of Receive stat",
          "3": "YU NISHINOYA (Practice) performs a Receive with 245% of Receive stat as power; when receiving an opponent's Quick Spike, increases this receive's power by 8% of Receive stat",
          "4": "YU NISHINOYA (Practice) performs a Receive with 260% of Receive stat as power; when receiving an opponent's Quick Spike, increases this receive's power by 8% of Receive stat",
          "5": "YU NISHINOYA (Practice) performs a Receive with 275% of Receive stat as power; when receiving an opponent's Quick Spike, increases this receive's power by 8% of Receive stat",
        },
      },
    ],
    bonds: [
      {
        to: "yu-nishinoya-sr",
        name: "Guardian Deity and Ace",
        participants: ["yu-nishinoya-sr", "asahi-azumane-sr"],
        effect:
          "When YU NISHINOYA (Practice) or ASAHI AZUMANE (Practice) casts a skill, increases their Attack Technique and Defense Technique",
      },
      {
        to: "yu-nishinoya-sr",
        name: "Karasuno's Sophomore",
        participants: [
          "ryunosuke-tanaka-sr",
          "yu-nishinoya-sr",
          "chikara-ennoshita-sr",
        ],
        effect: "Increases Receive stat of back row players",
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
          "When YU NISHINOYA (Practice) casts a Receive skill, increases your Team Morale by 5.",
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
          "GENIUS DEFENSE new effect: When receiving an opponent's Quick Spike, increases this receive's power by an additional 20% of Receive stat.",
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

  // RYUNOSUKE TANAKA SR (WS)
  {
    id: "ryunosuke-tanaka-sr",
    name: "Ryunosuke Tanaka",
    shortName: "Tanaka",
    team: "Karasuno",
    rarity: "SR",
    roles: ["WS"],
    typeTags: ["Power Attack"],
    image: "/characters/karasuno/ryunosuke-tanaka-sr.jpg",
    server: "Global",
    stats: {
      basic: {
        quickAttack: 67,
        powerAttack: 98,
        set: 79,
        serve: 84,
        receive: 94,
        block: 89,
        save: 80,
      },
      bonusAttack: { awareness: 0.05, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.0, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Saving Spirit",
        levels: {
          "1": "Increases RYUNOSUKE TANAKA (Practice)'s Save stat by 7%",
          "2": "Increases RYUNOSUKE TANAKA (Practice)'s Save stat by 9.5%",
          "3": "Increases RYUNOSUKE TANAKA (Practice)'s Save stat by 12%",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Provocative Nature",
        levels: {
          "1": "RYUNOSUKE TANAKA (Practice) performs a Power Spike with 115% of Power Attack stat as power; applies [Taunt] Debuff to opponent's receiving player (lasts 2 net crossings), reducing their receive power by 3% of their Receive stat",
          "2": "Performs a Power Spike with 130% of Power Attack as power; applies [Taunt] (2 crossings), reducing receiver’s power by 4% of their Receive stat.",
          "3": "Performs a Power Spike with 145% of Power Attack as power; applies [Taunt] (2 crossings), reducing receiver’s power by 5% of their Receive stat.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Continuous Growth",
        levels: {
          "1": 'After a Receive, TANAKA gains 1 stack of "Progress" (Receive +4% per stack, max 3 stacks).',
          "2": 'After a Receive, TANAKA gains 1 stack of "Progress" (Receive +4% per stack, max 3 stacks).',
          "3": 'After a Receive, TANAKA gains 1 stack of "Progress" (Receive +4% per stack, max 3 stacks).',
          "4": undefined,
          "5": undefined,
        },
      },
    ],
    bonds: [
      {
        to: "ryunosuke-tanaka-sr",
        name: "Karasuno's Sophomore",
        participants: [
          "ryunosuke-tanaka-sr",
          "yu-nishinoya-sr",
          "chikara-ennoshita-sr",
        ],
        effect: "Increases Receive stat of back row players",
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
        effect: "Increases Basic Stats by 6%.",
      },
      {
        level: "III",
        name: "Skill Resonance III",
        effect: "Increases Basic Stats by 6%.",
      },
      {
        level: "IV",
        name: "Skill Resonance IV",
        effect: "Increases Basic Stats by 6%.",
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
  // SHOYO HINATA SR (MB)
  {
    id: "shoyo-hinata-sr",
    name: "Shoyo Hinata",
    shortName: "Hinata",
    team: "Karasuno",
    rarity: "SR",
    roles: ["MB"],
    typeTags: ["Quick Attack"],
    image: "/characters/karasuno/shoyo-hinata-sr.jpg",
    server: "Global",
    stats: {
      basic: {
        quickAttack: 92,
        powerAttack: 66,
        set: 78,
        serve: 84,
        receive: 90,
        block: 96,
        save: 88,
      },
      bonusAttack: { awareness: 0.05, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.05, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Quick Learner",
        levels: {
          "1": "Quick Attack +6%. If the setter is Quick-type, Hinata’s Quick +6% for 1 rally.",
          "2": "Quick Attack +7.5%. If the setter is Quick-type, Hinata’s Quick +7.5% for 1 rally.",
          "3": "Quick Attack +9%. If the setter is Quick-type, Hinata’s Quick +9% for 1 rally.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Mini-Quick",
        levels: {
          "1": "Performs a Quick Spike with 115% of Quick Attack.",
          "2": "Performs a Quick Spike with 130% of Quick Attack.",
          "3": "Performs a Quick Spike with 145% of Quick Attack.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Decoy Instinct (SR)",
        levels: {
          "1": "While on court, allies’ Awareness +4%.",
          "2": "While on court, allies’ Awareness +5.5%.",
          "3": "While on court, allies’ Awareness +7%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "First Step",
        levels: {
          "1": "At rally start, Hinata Awareness +4% for 2 net crossings (max 1 stack).",
          "2": "At rally start, Awareness +5% for 2 net crossings (max 1).",
          "3": "At rally start, Awareness +6% for 2 net crossings (max 1).",
          "4": undefined,
          "5": undefined,
        },
      },
    ],
    bonds: [
      {
        to: "shoyo-hinata-sr",
        name: "Teammates on the Court",
        participants: ["tobio-kageyama-ssr", "shoyo-hinata-sr"],
        effect:
          "If KAGEYAMA (SSR) is on court, when HINATA (SR) casts a Quick Spike, HINATA’s Awareness increases during that play.",
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
        effect: "MINI-QUICK power +10%.",
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
          "When Hinata’s Quick is a Nice Play, allies’ Awareness +6% for 2 net crossings.",
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

  // KEI TSUKISHIMA SR (MB)
  {
    id: "kei-tsukishima-sr",
    name: "Kei Tsukishima",
    shortName: "Tsukishima",
    team: "Karasuno",
    rarity: "SR",
    roles: ["MB"],
    typeTags: ["Block", "Quick Attack"],
    image: "/characters/karasuno/kei-tsukishima-sr.jpg",
    server: "Global",
    stats: {
      basic: {
        quickAttack: 90,
        powerAttack: 62,
        set: 80,
        serve: 86,
        receive: 88,
        block: 102,
        save: 86,
      },
      bonusAttack: { awareness: 0.05, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.05, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Long Reach",
        levels: {
          "1": "Block +6%.",
          "2": "Block +7.5%.",
          "3": "Block +9%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Timing Block",
        levels: {
          "1": "Performs a Block with 115% of Block; if Nice, opposing spiker’s Power/Quick −5% for 2 net crossings.",
          "2": "Performs a Block with 130% of Block; same debuff.",
          "3": "Performs a Block with 145% of Block; same debuff.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Calm Analysis (SR)",
        levels: {
          "1": "Attack Technique +3%; Defense Technique +3%.",
          "2": "Attack Technique +4%; Defense Technique +4%.",
          "3": "Attack Technique +5%; Defense Technique +5%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Quiet Retort",
        levels: {
          "1": "When an opponent Spike is a Nice Play, reduce TIMING BLOCK cooldown by 2 net crossings.",
          "2": "When an opponent Spike is a Nice Play, reduce TIMING BLOCK cooldown by 3 net crossings.",
          "3": "When an opponent Spike is a Nice Play, reduce TIMING BLOCK cooldown by 4 net crossings.",
          "4": undefined,
          "5": undefined,
        },
      },
    ],
    bonds: [
      {
        to: "kei-tsukishima-sr",
        name: "Reliable Upperclassman",
        participants: ["kei-tsukishima-sr", "chikara-ennoshita-sr"],
        effect:
          "When ENNOSHITA (SR) casts a Receive, TSUKISHIMA (SR) gains +8% Block for 2 net crossings. When TSUKISHIMA blocks, ENNOSHITA’s next Receive +8%.",
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
        effect: "LONG REACH additionally gives +3% Awareness.",
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
          "If TIMING BLOCK is a Nice Play, the debuff also reduces opponent Reflex −6% for 2 net crossings.",
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

  // TADASHI YAMAGUCHI SR (MB)
  {
    id: "tadashi-yamaguchi-sr",
    name: "Tadashi Yamaguchi",
    shortName: "Yamaguchi",
    team: "Karasuno",
    rarity: "SR",
    roles: ["MB"],
    typeTags: ["Serve", "Block"],
    image: "/characters/karasuno/tadashi-yamaguchi-sr.jpg",
    server: "Global",
    stats: {
      basic: {
        quickAttack: 78,
        powerAttack: 85,
        set: 78,
        serve: 98,
        receive: 84,
        block: 90,
        save: 84,
      },
      bonusAttack: { awareness: 0.05, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.05, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Float Serve Trainee",
        levels: {
          "1": "Serve +8%; if his Serve is a Nice Play, next allied Spike +6% power.",
          "2": "Serve +10%; if Nice, next allied Spike +8% power.",
          "3": "Serve +12%; if Nice, next allied Spike +10% power.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Jump Float Serve",
        levels: {
          "1": "Performs a Serve with 130% of Serve; opposing receiver’s Receive −5% for 2 net crossings.",
          "2": "Performs a Serve with 145% of Serve; opposing receiver’s Receive −6% for 2 net crossings.",
          "3": "Performs a Serve with 160% of Serve; opposing receiver’s Receive −7% for 2 net crossings.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Guts",
        levels: {
          "1": "When entering the court, recovers 10 Stamina and Serve +6% for 3 rallies.",
          "2": "When entering the court, recovers 12 Stamina and Serve +8% for 3 rallies.",
          "3": "When entering the court, recovers 14 Stamina and Serve +10% for 3 rallies.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Pinch Server",
        levels: {
          "1": "If an ally is below 50 Stamina at rally start, YAMAGUCHI’s Serve +8% for this rally.",
          "2": "…Serve +10% for this rally.",
          "3": "…Serve +12% for this rally.",
          "4": undefined,
          "5": undefined,
        },
      },
    ],
    bonds: [
      {
        to: "tadashi-yamaguchi-sr",
        name: "Reliable Upperclassman",
        participants: ["tadashi-yamaguchi-sr", "chikara-ennoshita-sr"],
        effect:
          "When YAMAGUCHI (SR) serves, ENNOSHITA (SR) recovers 6 Stamina; if the serve is a Nice Play, ENNOSHITA’s next Receive +10%. When ENNOSHITA receives, YAMAGUCHI’s next Serve +10%.",
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
          "JUMP FLOAT SERVE also reduces the target’s Reflex −5% for 2 net crossings.",
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
          "When a serve by YAMAGUCHI is a Nice Play, next allied Spike cooldown −4 net crossings.",
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

  // CHIKARA ENNOSHITA SR (WS)
  {
    id: "chikara-ennoshita-sr",
    name: "Chikara Ennoshita",
    shortName: "Ennoshita",
    team: "Karasuno",
    rarity: "SR",
    roles: ["WS"],
    typeTags: ["Receive", "Power Attack"],
    image: "/characters/karasuno/chikara-ennoshita-sr.jpg",
    server: "Global",
    stats: {
      basic: {
        quickAttack: 70,
        powerAttack: 94,
        set: 82,
        serve: 88,
        receive: 96,
        block: 86,
        save: 90,
      },
      bonusAttack: { awareness: 0.05, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.05, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Acting Captain",
        levels: {
          "1": "While on court, allies recover +2 Stamina at rally end.",
          "2": "While on court, allies recover +3 Stamina at rally end.",
          "3": "While on court, allies recover +4 Stamina at rally end.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Steady Receive",
        levels: {
          "1": "Receive +8%.",
          "2": "Receive +10%.",
          "3": "Receive +12%.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Calm Direction",
        levels: {
          "1": "When a teammate scores, that scorer gains +4% Attack Technique for 2 net crossings.",
          "2": "When a teammate scores, that scorer gains +5% Attack Technique for 2 net crossings.",
          "3": "When a teammate scores, that scorer gains +6% Attack Technique for 2 net crossings.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Reliable Cover",
        levels: {
          "1": "Performs a Receive with 120% of Receive; the next allied Spike +8% power.",
          "2": "Performs a Receive with 135% of Receive; next allied Spike +10% power.",
          "3": "Performs a Receive with 150% of Receive; next allied Spike +12% power.",
          "4": undefined,
          "5": undefined,
        },
      },
    ],
    bonds: [
      {
        to: "chikara-ennoshita-sr",
        name: "Reliable Upperclassman",
        participants: ["chikara-ennoshita-sr", "kei-tsukishima-sr"],
        effect:
          "When ENNOSHITA (SR) receives, TSUKISHIMA (SR) Block +8% for 2 net crossings. When TSUKISHIMA blocks, ENNOSHITA’s next Receive +8%.",
      },
      {
        to: "chikara-ennoshita-sr",
        name: "Reliable Upperclassman",
        participants: ["chikara-ennoshita-sr", "tadashi-yamaguchi-sr"],
        effect:
          "When ENNOSHITA (SR) receives, YAMAGUCHI’s next Serve +10%. When YAMAGUCHI serves a Nice Play, ENNOSHITA recovers 6 Stamina.",
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
        effect: "RELIABLE COVER also grants +5% Awareness to the next spiker.",
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
          "When a back-row ally performs a Receive (not BAD), that ally recovers +3 Stamina.",
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

  // ASAHI AZUMANE SR (WS)
  {
    id: "asahi-azumane-sr",
    name: "Asahi Azumane",
    shortName: "Asahi",
    team: "Karasuno",
    rarity: "SR",
    roles: ["WS"],
    typeTags: ["Power Attack", "Serve"],
    image: "/characters/karasuno/asahi-azumane-sr.jpg",
    server: "Global",
    stats: {
      basic: {
        quickAttack: 72,
        powerAttack: 98,
        set: 80,
        serve: 92,
        receive: 90,
        block: 86,
        save: 84,
      },
      bonusAttack: { awareness: 0.05, strength: 0.0, attackTechnique: 0.0 },
      bonusDefense: { reflex: 0.05, spirit: 0.0, defenseTechnique: 0.0 },
    },
    skills: [
      {
        key: "passive",
        name: "Aspirant Ace",
        levels: {
          "1": "Power Attack +6%. If Stamina > 70, Power Spike power +6% of Power Attack.",
          "2": "Power Attack +7.5%. If Stamina > 70, Power Spike power +8% of Power Attack.",
          "3": "Power Attack +9%. If Stamina > 70, Power Spike power +10% of Power Attack.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Solid First Touch",
        levels: {
          "1": "Receive +6%; first Receive in each set +15% power.",
          "2": "Receive +7.5%; first Receive in each set +20% power.",
          "3": "Receive +9%; first Receive in each set +25% power.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "passive",
        name: "Bullet Serve (SR)",
        levels: {
          "1": "Performs a Jump Serve with 120% of Serve.",
          "2": "Performs a Jump Serve with 135% of Serve.",
          "3": "Performs a Jump Serve with 150% of Serve.",
          "4": undefined,
          "5": undefined,
        },
      },
      {
        key: "active",
        name: "Firm Strike",
        levels: {
          "1": "Performs a Power Spike with 115% of Power Attack; if Nice, +15% additional power of Power Attack.",
          "2": "Performs a Power Spike with 130% of Power Attack; if Nice, +15% additional power.",
          "3": "Performs a Power Spike with 145% of Power Attack; if Nice, +15% additional power.",
          "4": undefined,
          "5": undefined,
        },
      },
    ],
    bonds: [
      {
        to: "asahi-azumane-sr",
        name: "Guardian Deity and Ace",
        participants: ["asahi-azumane-sr", "yu-nishinoya-sr"],
        effect:
          "When ASAHI (SR) or NISHINOYA (SR) casts a skill, both gain a small boost to Attack Technique and Defense Technique.",
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
          "FIRM STRIKE additional power on Nice increased by +5% of Power Attack.",
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
          "When ASAHI scores with a Power Spike, next allied Receive +8% for 2 net crossings.",
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
