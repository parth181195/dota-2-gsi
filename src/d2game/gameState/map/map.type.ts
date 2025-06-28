export type MapI = {
  name: string;
  matchId: string;
  gameTime: number;
  clockTime: number;
  isDaytime: boolean;
  isNightstalkerNight: boolean;
  radiantScore: number;
  direScore: number;
  gameState: DotaGameState | undefined;
  isPaused: boolean;
  winningTeam: number;
  customGameName: string;
  wardPurchaseCooldown: number;
  radiantWardPurchaseCooldown: number;
  direWardPurchaseCooldown: number;
  roshanState?: RoshanState;
  roshanStateEndTime: number;
}

export enum DotaGameState {
  DOTA_GAMERULES_STATE_DISCONNECT = 'DOTA_GAMERULES_STATE_DISCONNECT',
  DOTA_GAMERULES_STATE_GAME_IN_PROGRESS = 'DOTA_GAMERULES_STATE_GAME_IN_PROGRESS',
  DOTA_GAMERULES_STATE_HERO_SELECTION = 'DOTA_GAMERULES_STATE_HERO_SELECTION',
  DOTA_GAMERULES_STATE_INIT = 'DOTA_GAMERULES_STATE_INIT',
  DOTA_GAMERULES_STATE_LAST = 'DOTA_GAMERULES_STATE_LAST',
  DOTA_GAMERULES_STATE_POST_GAME = 'DOTA_GAMERULES_STATE_POST_GAME',
  DOTA_GAMERULES_STATE_PRE_GAME = 'DOTA_GAMERULES_STATE_PRE_GAME',
  DOTA_GAMERULES_STATE_STRATEGY_TIME = 'DOTA_GAMERULES_STATE_STRATEGY_TIME',
  DOTA_GAMERULES_STATE_WAIT_FOR_PLAYERS_TO_LOAD = 'DOTA_GAMERULES_STATE_WAIT_FOR_PLAYERS_TO_LOAD',
  DOTA_GAMERULES_STATE_CUSTOM_GAME_SETUP = 'DOTA_GAMERULES_STATE_CUSTOM_GAME_SETUP',
  DOTA_GAMERULES_STATE_WAIT_FOR_MAP_TO_LOAD = 'DOTA_GAMERULES_STATE_WAIT_FOR_MAP_TO_LOAD',
  DOTA_GAMERULES_STATE_TEAM_SHOWCASE = 'DOTA_GAMERULES_STATE_TEAM_SHOWCASE'
}

export enum RoshanState {
  ALIVE = 'alive',
  RESPAWN_BASE = 'respawn_base',
  RESPAWN_VARIABLE = 'respawn_variable',
}
