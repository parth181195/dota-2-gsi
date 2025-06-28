import { Item } from './item/item';
import { PlayerTeam } from '../player/playerDetails/playerDetails.type';

export type ItemsI = {
  localPlayer: Item
  teams: Map<PlayerTeam, Item>
};