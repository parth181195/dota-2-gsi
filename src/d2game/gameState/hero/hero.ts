import { Node } from '../node';
import { HeroI } from './hero.type';
import { HeroDetails } from './heroDetails/heroDetails';
import { checkForTeamDataRegexp, checkPlayerDataRegexp } from '../../../constants/matchers';

export class Hero extends Node implements HeroI {
  localPlayer: HeroDetails;
  teams: HeroDetails[];

  constructor(json: any = null) {
    super(json);
    const teamKeys = this.getMatchingKeys(this.data, checkForTeamDataRegexp);
    if (teamKeys && teamKeys.length) {
      teamKeys.forEach((key) => {
        const teamData = this.getObject(key);
        const playerKeys = this.getMatchingKeys(teamData, checkPlayerDataRegexp);
        if (playerKeys && playerKeys.length) {
          playerKeys.forEach((playerKey) => {
            const playerData = teamData[playerKey];
            if (playerData) {
              const heroDetails = new HeroDetails(playerData);
              if (!this.teams) {
                this.teams = [];
              }
              this.teams.push(heroDetails);
            }
          });
        }
      });
    } else {
      this.localPlayer = new HeroDetails(this.data);
    }

  }
}