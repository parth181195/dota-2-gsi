/**
 * Enum list for each player team.
 */
export enum PlayerTeam {
    /**
     * Unknown team.
     */
    UNKNOWN = -2,

    /**
     * Undefined.
     */
    UNDEFINED = -1,

    /**
     * No team.
     */
    NONE = 0,

    /**
     * Spectator.
     */
    SPECTATOR = 1,

    /**
     * Radiant team.
     */
    RADIANT = 2,

    /**
     * Dire team.
     */
    DIRE = 3,

    /**
     * Neutral team.
     */
    NEUTRALS = 4
}

/**
 * Enum list for each Roshan state.
 */
export enum RoshanState {
    /**
     * Undefined.
     */
    UNDEFINED = -1,

    /**
     * Alive.
     */
    ALIVE = 0,

    /**
     * Waiting for respawn at base respawn rate.
     */
    RESPAWN_BASE = 1,

    /**
     * Waiting for respawn at varied respawn rate.
     */
    RESPAWN_VARIABLE = 2
}

/**
 * Enum for DOTA game states.
 */
export enum DOTA_GameState {
    /**
     * Undefined.
     */
    UNDEFINED = 0,

    /**
     * Disconnected.
     */
    DOTA_GAMERULES_STATE_DISCONNECT = 1,

    /**
     * Game is in progress.
     */
    DOTA_GAMERULES_STATE_GAME_IN_PROGRESS = 2,

    /**
     * Players are currently selecting heroes.
     */
    DOTA_GAMERULES_STATE_HERO_SELECTION = 3,

    /**
     * Game is starting.
     */
    DOTA_GAMERULES_STATE_INIT = 4,

    /**
     * Game is ending.
     */
    DOTA_GAMERULES_STATE_LAST = 5,

    /**
     * Game has ended, post game scoreboard.
     */
    DOTA_GAMERULES_STATE_POST_GAME = 6,

    /**
     * Game has started, pre game preparations.
     */
    DOTA_GAMERULES_STATE_PRE_GAME = 7,

    /**
     * Players are selecting/banning heroes.
     */
    DOTA_GAMERULES_STATE_STRATEGY_TIME = 8,

    /**
     * Waiting for everyone to connect and load.
     */
    DOTA_GAMERULES_STATE_WAIT_FOR_PLAYERS_TO_LOAD = 9,

    /**
     * Game is a custom game.
     */
    DOTA_GAMERULES_STATE_CUSTOM_GAME_SETUP = 10,

    /**
     * Waiting for the map to load.
     */
    DOTA_GAMERULES_STATE_WAIT_FOR_MAP_TO_LOAD = 11,

    /**
     * Game is in the team showcase state.
     */
    DOTA_GAMERULES_STATE_TEAM_SHOWCASE = 12
}

/**
 * Enum for various player activities.
 */
export enum PlayerActivity {
    /**
     * Undefined.
     */
    UNDEFINED = 0,

    /**
     * In a menu.
     */
    MENU = 1,

    /**
     * In a game.
     */
    PLAYING = 2
}

// Talent tree selection
export enum TalentTreeSpec {
    None = 0,
    Left = 1,
    Right = 2,
    Both = 3
}

// Hero state
export enum HeroState {
    None = 0,
    Silenced = 1,
    Stunned = 2,
    Disarmed = 3,
    MagicImmune = 4,
    Hexed = 5,
    Broken = 6,
    Smoked = 7,
    Debuffed = 8
}

// Rune types
export enum Rune {
    Undefined = 0,
    Empty = 1,
    Double_damage = 2,
    Haste = 3,
    Illusion = 4,
    Invis = 5,
    Regen = 6,
    Arcane = 7,
    Water = 8,
    Bounty = 9,
    Shield = 10,
    XP = 11
}

// Event types
export enum EventType {
    Undefined = -1,
    Courier_killed = 0,
    Roshan_killed = 1,
    Aegis_picked_up = 2,
    Aegis_denied = 3,
    Tip = 4,
    Bounty_rune_pickup = 5
} 