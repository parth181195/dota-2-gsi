import { PlayerDetails } from './playerDetails/playerDetails';

export type PlayerI = {
  localPlayer: PlayerDetails;
  teams: PlayerDetails[];
}