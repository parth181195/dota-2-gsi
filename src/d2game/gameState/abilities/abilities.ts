import { Node } from '../node';
import { AbilitiesI } from './ability.type';
import { AbilityDetailsI } from './abilityDetails/abilityDetails.type';
import { PlayerTeam } from '../player/playerDetails/playerDetails.type';
import { checkAbilityRegexp, checkForTeamDataRegexp, checkPlayerDataRegexp } from '../../../constants/matchers';
import { AbilityDetails } from './abilityDetails/abilityDetails';


export class Abilities extends Node implements AbilitiesI {
  localPlayer: AbilityDetails[];
  teams: Map<PlayerTeam, Map<number, AbilityDetails[]>> = new Map();

  constructor(json: any) {
    super(json);
    if (this.data) {
      const teamKeys = this.getMatchingKeys(this.data, checkForTeamDataRegexp);
      if (teamKeys?.length) {
        for (const teamKey of teamKeys) {
          const teamData = this.getObject(teamKey);
          const teamId = parseInt(teamKey.replace('team', ''));
          const playerKeys = this.getMatchingKeys(teamData, checkPlayerDataRegexp);
          const teamAbilitiesMap = new Map<number, AbilityDetails[]>();
          if (playerKeys && playerKeys.length) {
            for (let i = 0; i < playerKeys.length; i++) {
              const playerKey = playerKeys[i];
              const playerData = teamData[playerKey];
              const playerId = parseInt(playerKey.replace('player', ''));
              teamAbilitiesMap.set(playerId, this.getAbilityArray(playerData));
            }
          }
          if (teamId === 2) {
            this.teams.set(PlayerTeam.RADIANT, teamAbilitiesMap);
          } else if (teamId === 3) {
            this.teams.set(PlayerTeam.DIRE, teamAbilitiesMap);
          }
        }
      } else {
        this.localPlayer = this.getAbilityArray(this.data);
      }

    }
  }

  protected getAbilityArray(data: any): AbilityDetails[] {
    const abilities: AbilityDetails[] = [];
    const keys = this.getMatchingKeys(data, checkAbilityRegexp);
    if (keys?.length) {
      for (const key of keys) {
        const abilityData = data[key];
        abilities.push(new AbilityDetails(abilityData));
      }
    }
    return abilities;
  }

}