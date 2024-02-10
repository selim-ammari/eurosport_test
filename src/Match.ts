import { Player } from "./Player";

export type Match = {
    id: string;
    players: [Player];
    winner: Player;
    startTime: string;
    endTime: string;
  };
  