import type { Player } from "./types";
import {
  karasunoPlayers,
  inarizakiPlayers,
  nekomaPlayers,
  aobaJohsaiPlayers,
  shiratorizawaPlayers,
  dateTechPlayers,
  fukurodaniPlayers,
  itachiyamaPlayers,
  kamomedaiPlayers,
  kitagawaDaiichiPlayers,
} from "./teams";

export const playersByTeam = {
  Karasuno: karasunoPlayers,
  Inarizaki: inarizakiPlayers,
  Nekoma: nekomaPlayers,
  "Aoba Johsai": aobaJohsaiPlayers,
  Shiratorizawa: shiratorizawaPlayers,
  "Date Tech": dateTechPlayers,
  Fukurodani: fukurodaniPlayers,
  Itachiyama: itachiyamaPlayers,
  Kamomedai: kamomedaiPlayers,
  "Kitagawa Daiichi": kitagawaDaiichiPlayers,
} as const;

export const players: Player[] = Object.values(playersByTeam).flat();

export const getPlayersByTeam = (team: keyof typeof playersByTeam): Player[] =>
  playersByTeam[team];

export const getPlayerById = (id: string): Player | undefined =>
  players.find((p) => p.id === id);
