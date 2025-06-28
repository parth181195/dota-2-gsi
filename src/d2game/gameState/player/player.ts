import { Node } from '../node';
import { PlayerI } from './player.type';
import { PlayerDetails } from './playerDetails/playerDetails';
import { checkForTeamDataRegexp, checkPlayerDataRegexp } from '../../../constants/matchers';

export class Player extends Node implements PlayerI {

  /**
   * Local player details.
   */
  localPlayer: PlayerDetails;
  /**
   * Team players details.
   */
  teams: PlayerDetails[] = [];

  constructor(json: any) {
    super(json);
    this.localPlayer = new PlayerDetails(json);
    this.teams = [];
    const teamKeys = this.getMatchingKeys(this.data, checkForTeamDataRegexp);
    if (teamKeys) {
      for (const teamKey of teamKeys) {
        const teamData = this.getObject(teamKey);
        const playerKeys = this.getMatchingKeys(teamData, checkPlayerDataRegexp);
        if (playerKeys) {
          for (const playerKey of playerKeys) {
            this.teams.push(new PlayerDetails(teamData[playerKey]));
          }
        }
      }
    } else {
      this.localPlayer = new PlayerDetails(this.data);
    }
  }


}