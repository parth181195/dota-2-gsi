import { AuthI } from './game-state/auth.type';
import { ProviderI } from './game-state/provider.type';
import { PlayerI } from './game-state/player.type';
import { HeroI } from './game-state/hero.type';
import { AbilitiesI } from './game-state/abilities.type';
import { ItemsI } from './game-state/items.type';
import { BuildingsI } from './game-state/buildings.type';
import { GameEventI } from './game-state/events.type';
import { LeagueI } from './game-state/league.type';
import { DraftI } from './game-state/draft.type';
import { WearablesI } from './game-state/wearables.type';
import { RoshanI } from './game-state/roshan.type';
import { CouriersI } from './game-state/couriers.type';
import { NeutralItemsI } from './game-state/neutralItems.type';
import { MinimapI } from './game-state/minimap.type';
import { DotaMapI } from './game-state/map.type';

export type  GameStateI = {
  auth: AuthI;
  provider: ProviderI;
  map: DotaMapI;
  player: PlayerI;
  hero: HeroI;
  abilities: AbilitiesI;
  items: ItemsI;
  events: GameEventI[];
  buildings: BuildingsI;
  league: LeagueI;
  draft: DraftI;
  wearables: WearablesI;
  minimap: MinimapI;
  roshan: RoshanI;
  couriers: CouriersI;
  neutralItems: NeutralItemsI;
  previously?: GameStateI;
}
