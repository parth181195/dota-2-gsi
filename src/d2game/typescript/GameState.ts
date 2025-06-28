import { Node } from './Node';
import { PlayerTeam } from './Enums';
import { Auth } from './Auth';
import { Provider } from './Provider';
import { Map } from './Map';
import { Player } from './Player';
import { Hero } from './Hero';
import { Abilities } from './Abilities';
import { Items } from './Items';
import { Events } from './Events';
import { Buildings } from './Buildings';
import { League } from './League';
import { Draft } from './Draft';
import { Wearables } from './Wearables';
import { Minimap } from './Minimap';
import { Roshan } from './Roshan';
import { Couriers } from './Couriers';
import { NeutralItems } from './NeutralItems';
import { FullPlayerDetails } from './FullPlayerDetails';

/**
 * A class representing various information pertaining to Game State Integration of Dota 2.
 */
export class GameState extends Node {
    /**
     * Information about GSI authentication.
     * Enabled by including "auth" "1" in the game state cfg file.
     */
    auth: Auth;

    /**
     * Information about the provider of this GameState.
     * Enabled by including "provider" "1" in the game state cfg file.
     */
    provider: Provider;

    /**
     * Information about the current map.
     * Enabled by including "map" "1" in the game state cfg file.
     */
    map: Map;

    /**
     * Information about the local player or team players when spectating.
     * Enabled by including "player" "1" in the game state cfg file.
     */
    player: Player;

    /**
     * Information about the local player's hero or team players heroes when spectating.
     * Enabled by including "hero" "1" in the game state cfg file.
     */
    hero: Hero;

    /**
     * Information about the local player's hero abilities or team players abilities when spectating.
     * Enabled by including "abilities" "1" in the game state cfg file.
     */
    abilities: Abilities;

    /**
     * Information about the local player's hero items or team players items when spectating.
     * Enabled by including "items" "1" in the game state cfg file.
     */
    items: Items;

    /**
     * Information about game events.
     * Enabled by including "events" "1" in the game state cfg file.
     */
    events: Events;

    /**
     * Information about the buildings on the map.
     * Enabled by including "buildings" "1" in the game state cfg file.
     */
    buildings: Buildings;

    /**
     * Information about the current league (or game configuration).
     * Enabled by including "league" "1" in the game state cfg file.
     */
    league: League;

    /**
     * Information about the draft. (TOURNAMENT ONLY)
     * Enabled by including "draft" "1" in the game state cfg file.
     */
    draft: Draft;

    /**
     * Information about the local player's wearable items or team players wearable items when spectating.
     * Enabled by including "wearables" "1" in the game state cfg file.
     */
    wearables: Wearables;

    /**
     * Information about the minimap.
     * Enabled by including "minimap" "1" in the game state cfg file.
     */
    minimap: Minimap;

    /**
     * Information about Roshan. (SPECTATOR ONLY)
     * Enabled by including "roshan" "1" in the game state cfg file.
     */
    roshan: Roshan;

    /**
     * Information about couriers. (SPECTATOR ONLY)
     * Enabled by including "couriers" "1" in the game state cfg file.
     */
    couriers: Couriers;

    /**
     * Information about neutral items. (SPECTATOR ONLY)
     * Enabled by including "neutralitems" "1" in the game state cfg file.
     */
    neutralItems: NeutralItems;

    /**
     * A previous GameState.
     */
    private _previousGameState: GameState | null = null;
    get previously(): GameState {
        if (this._previousGameState === null) {
            this._previousGameState = new GameState(this.getJObject("previously"));
        }
        return this._previousGameState;
    }

    /**
     * Helper variable,
     * Local player details derived from this game state.
     */
    private _localPlayerDetails: FullPlayerDetails | null = null;
    get localPlayer(): FullPlayerDetails {
        if (this._localPlayerDetails === null) {
            this._localPlayerDetails = new FullPlayerDetails(this);
        }
        return this._localPlayerDetails;
    }

    /**
     * Helper variable,
     * Radiant team details derived from this game state.
     */
    private _radiantTeamDetails: any | null = null;
    get radiantTeamDetails(): any {
        if (this._radiantTeamDetails === null) {
            // TODO: Implement FullTeamDetails
            this._radiantTeamDetails = {};
        }
        return this._radiantTeamDetails;
    }

    /**
     * Helper variable,
     * Dire team details derived from this game state.
     */
    private _direTeamDetails: any | null = null;
    get direTeamDetails(): any {
        if (this._direTeamDetails === null) {
            // TODO: Implement FullTeamDetails
            this._direTeamDetails = {};
        }
        return this._direTeamDetails;
    }

    /**
     * Helper variable,
     * Neutral team details derived from this game state.
     */
    private _neutralTeamDetails: any | null = null;
    get neutralTeamDetails(): any {
        if (this._neutralTeamDetails === null) {
            // TODO: Implement FullTeamDetails
            this._neutralTeamDetails = {};
        }
        return this._neutralTeamDetails;
    }

    /**
     * Helper variable,
     * Is the game client spectating a game?
     * True if spectating, false otherwise.
     */
    get isSpectating(): boolean {
        return this.player.isValid() && !this.player.localPlayer.isValid() && (this.player.teams.length > 0);
    }

    /**
     * Helper variable,
     * Is the game client playing a game?
     * True if local player is playing a game, false otherwise.
     */
    get isLocalPlayer(): boolean {
        return this.player.isValid() && this.player.localPlayer.isValid() && (this.player.teams.length === 0);
    }

    /**
     * Creates a GameState instance based on the given json data.
     */
    constructor(parsedData: any = null) {
        super(parsedData);
        this.auth = new Auth(this.getJObject("auth"));
        this.provider = new Provider(this.getJObject("provider"));
        this.map = new Map(this.getJObject("map"));
        this.player = new Player(this.getJObject("player"));
        this.hero = new Hero(this.getJObject("hero"));
        this.abilities = new Abilities(this.getJObject("abilities"));
        this.items = new Items(this.getJObject("items"));
        this.events = new Events(this.getJArray("events"));
        this.buildings = new Buildings(this.getJObject("buildings"));
        this.league = new League(this.getJObject("league"));
        this.draft = new Draft(this.getJObject("draft"));
        this.wearables = new Wearables(this.getJObject("wearables"));
        this.minimap = new Minimap(this.getJObject("minimap"));
        this.roshan = new Roshan(this.getJObject("roshan"));
        this.couriers = new Couriers(this.getJObject("couriers"));
        this.neutralItems = new NeutralItems(this.getJObject("neutralitems"));
    }

    toString(): string {
        return `[GameState Map: ${this.map.name}, Player: ${this.player.localPlayer.name}]`;
    }
} 