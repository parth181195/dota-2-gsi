import { Node } from '../node';
import { DotaGameState, MapI, RoshanState } from './map.type';

export class Map extends Node implements MapI {
  /**
   * The name of the map.
   */
  name: string;
  /**
   * The game time in seconds.
   */
  gameTime: number;
  /**
   * The clock time in seconds.
   */
  clockTime: number;
  /**
   * Is it daytime?
   */
  isDaytime: boolean;
  /**
   * Is it Nightstalker night?
   */
  isNightstalkerNight: boolean;
  /**
   * Radiant team score.
   */
  radiantScore: number;
  /**
   * Dire team score.
   */
  direScore: number;
  /**
   * Current game state.
   */
  gameState: DotaGameState | undefined;
  /**
   * Is the game paused?
   */
  isPaused: boolean;
  /**
   * Winning team.
   */
  winningTeam: number;
  /**
   * Custom game name.
   */
  customGameName: string;
  /**
   * Ward purchase cooldown.
   */
  wardPurchaseCooldown: number;
  /**
   * Radiant ward purchase cooldown.
   */
  radiantWardPurchaseCooldown: number;
  /**
   * Dire ward purchase cooldown.
   */
  direWardPurchaseCooldown: number;
  /**
   * Roshan state.
   */
  roshanState?: RoshanState;
  /**
   * Roshan state end time in seconds.
   */
  roshanStateEndTime: number;
  /**
   * Match ID.
   */
  matchId: string;
  constructor(json:any) {
    super(json);
    this.name = this.getString('name');
    this.matchId = this.getString('match_id');
    this.gameTime = this.getInt('game_time');
    this.clockTime = this.getInt('clock_time');
    this.isDaytime = this.getBool('is_daytime');
    this.isNightstalkerNight = this.getBool('is_nightstalker_night');
    this.radiantScore = this.getInt('radiant_score');
    this.direScore = this.getInt('dire_score');
    this.gameState = this.getString('game_state') as DotaGameState;
    this.isPaused = this.getBool('is_paused');
    this.winningTeam = this.getInt('winning_team');
    this.customGameName = this.getString('custom_game_name');
    this.wardPurchaseCooldown = this.getInt('ward_purchase_cooldown');
    this.radiantWardPurchaseCooldown = this.getInt('radiant_ward_purchase_cooldown');
    this.direWardPurchaseCooldown = this.getInt('dire_ward_purchase_cooldown');
    this.roshanState = this.getString('roshan_state') as RoshanState;
    this.roshanStateEndTime = this.getInt('roshan_state_end_time');

  }

}