import { Node } from '../node';
import { checkForTeamDataRegexp, checkPlayerDataRegexp } from '../../../constants/matchers';
import { ItemsI } from './items.type';
import { PlayerTeam } from '../player/playerDetails/playerDetails.type';
import { Item } from './item/item';

export class Items extends Node implements ItemsI{
  localPlayer: Item;
  teams: Map<PlayerTeam, Item>;

  constructor(json: any) {
    super(json);
    const teamKeys = this.getMatchingKeys(this.data, checkForTeamDataRegexp);

    if(teamKeys?.length){
      for(const teamKey of teamKeys){
        const teamId = teamKey.replace('team', '');
        const teamData = this.getObject(teamKey);
        const playerKeys = this.getMatchingKeys(teamData, checkPlayerDataRegexp);
        const teamMap = new Map<number, Item>();
        if(playerKeys && playerKeys.length){
          for(let i = 0; i < playerKeys.length; i++){
            const playerKey = playerKeys[i];
            const playerId = parseInt(playerKey.replace('player', ''));
            const itemData = teamData[playerKey];
            teamMap.set(playerId, new Item(itemData));
          }
        }
      }
    }

  }


}