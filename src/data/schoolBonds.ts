// src/data/schoolBonds.ts

export const schoolBonds: Record<string, { name: string; effect: string }> = {
  Inarizaki: {
    name: "Inarizaki Bond",
    effect:
      "Team synergy +X%: setters receive Y, attackers gain Z for 1 rally.",
  },
  Karasuno: {
    name: "Karasuno Bond",
    effect: "Momentum boost +X% on quick/receive next rally.",
  },
};
