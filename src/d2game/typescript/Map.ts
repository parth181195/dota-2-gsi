import { Node } from './Node';

/**
 * Information about the current map.
 */
export class Map extends Node {
    /**
     * Map name.
     */
    name: string;

    /**
     * Match ID.
     */
    matchID: string;

    /**
     * Game time in seconds.
     */
    gameTime: number;

    /**
     * Clock time in seconds.
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
    gameState: number;

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
    roshanState: number;

    /**
     * Roshan state end time.
     */
    roshanStateEndTime: number;

    constructor(parsedData: any = null) {
        super(parsedData);
        this.name = this.getString("name");
        this.matchID = this.getString("matchid");
        this.gameTime = this.getInt("game_time");
        this.clockTime = this.getInt("clock_time");
        this.isDaytime = this.getBool("is_daytime");
        this.isNightstalkerNight = this.getBool("is_nightstalker_night");
        this.radiantScore = this.getInt("radiant_score");
        this.direScore = this.getInt("dire_score");
        this.gameState = this.getInt("game_state");
        this.isPaused = this.getBool("is_paused");
        this.winningTeam = this.getInt("winning_team");
        this.customGameName = this.getString("customgamename");
        this.wardPurchaseCooldown = this.getInt("ward_purchase_cooldown");
        this.radiantWardPurchaseCooldown = this.getInt("radiant_ward_purchase_cooldown");
        this.direWardPurchaseCooldown = this.getInt("dire_ward_purchase_cooldown");
        this.roshanState = this.getInt("roshan_state");
        this.roshanStateEndTime = this.getInt("roshan_state_end_time");
    }

    toString(): string {
        return `[Map Name: ${this.name}, MatchID: ${this.matchID}, GameTime: ${this.gameTime}, ClockTime: ${this.clockTime}, IsDaytime: ${this.isDaytime}, IsNightstalkerNight: ${this.isNightstalkerNight}, RadiantScore: ${this.radiantScore}, DireScore: ${this.direScore}, GameState: ${this.gameState}, IsPaused: ${this.isPaused}, WinningTeam: ${this.winningTeam}, CustomGameName: ${this.customGameName}, WardPurchaseCooldown: ${this.wardPurchaseCooldown}, RadiantWardPurchaseCooldown: ${this.radiantWardPurchaseCooldown}, DireWardPurchaseCooldown: ${this.direWardPurchaseCooldown}, RoshanState: ${this.roshanState}, RoshanStateEndTime: ${this.roshanStateEndTime}]`;
    }
} 