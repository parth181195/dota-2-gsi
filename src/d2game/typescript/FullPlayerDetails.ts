import { PlayerDetails } from './PlayerDetails';
import { Hero } from './Hero';
import { Abilities } from './Abilities';
import { Items } from './Items';
import { Wearables } from './Wearables';
import { Couriers } from './Couriers';
import { Minimap } from './Minimap';

/**
 * Helper class containing full player details derived from GameState.
 */
export class FullPlayerDetails {
    /**
     * Player details.
     */
    details: PlayerDetails;

    /**
     * Hero information.
     */
    hero: Hero;

    /**
     * Abilities information.
     */
    abilities: Abilities;

    /**
     * Items information.
     */
    items: Items;

    /**
     * Wearables information.
     */
    wearables: Wearables;

    /**
     * Courier information.
     */
    courier: Couriers;

    /**
     * Minimap elements.
     */
    minimapElements: Minimap;

    constructor(gameState: any) {
        this.details = gameState.Player?.LocalPlayer || new PlayerDetails();
        this.hero = gameState.Hero || new Hero();
        this.abilities = gameState.Abilities || new Abilities();
        this.items = gameState.Items || new Items();
        this.wearables = gameState.Wearables || new Wearables();
        this.courier = gameState.Couriers || new Couriers();
        this.minimapElements = gameState.Minimap || new Minimap();
    }

    toString(): string {
        return `[FullPlayerDetails Details: ${this.details}, Hero: ${this.hero}, Abilities: ${this.abilities}, Items: ${this.items}, Wearables: ${this.wearables}, Courier: ${this.courier}, MinimapElements: ${this.minimapElements}]`;
    }
} 