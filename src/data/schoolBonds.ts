// src/data/schoolBonds.ts

export const schoolBonds: Record<string, { name: string; effect: string }> = {
  Karasuno: {
    name: "Karasuno Bond",
    effect:
      "Increases Power Attack and Quick Attack stats of all players present by 10%",
  },
  Shiratorizawa: {
    name: "Shiratorizawa Bond",
    effect: "Increases Awareness and Strength of all players present by 10%",
  },
  AobaJohsai: {
    name: "Aoba Johsai Bond",
    effect: "Increases Power Attack stat of all players present by 15%",
  },
  Nekoma: {
    name: "Nekoma Bond",
    effect: "Increases Receive stat of all players present by 15%",
  },
  Date: {
    name: "Date Bond",
    effect: "Increases Block stat of all players present by 15%",
  },
  Inarizaki: {
    name: "Inarizaki Bond",
    effect:
      "Increases Attack Technique and Defense Technique stats of all players present by 5%",
  },
  Fukurodani: {
    name: "Fukurodani Bond",
    effect: "Team Moral increases by 20",
  },
};
