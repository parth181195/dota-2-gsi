import { AbilityDetailsI } from './abilityDetails/abilityDetails.type';
import { PlayerTeam } from '../player/playerDetails/playerDetails.type';
import { AbilityDetails } from './abilityDetails/abilityDetails';

export type AbilitiesI = {
  localPlayer: AbilityDetails[];
  teams: Map<PlayerTeam, Map<number, AbilityDetails[]>>
}