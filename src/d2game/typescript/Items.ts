import { Node } from './Node';
import { PlayerTeam, Rune } from './Enums';

export interface Item {
    name: string;
    purchaser: number;
    itemLevel: number;
    containsRune: Rune;
    canCast: boolean;
    cooldown: number;
    isPassive: boolean;
    itemCharges: number;
    abilityCharges: number;
    maxCharges: number;
    chargeCooldown: number;
    charges: number;
}

export interface ItemDetails {
    inventory: Item[];
    stash: Item[];
    teleport: Item | null;
    neutral: Item | null;
}

/**
 * Class representing hero items information.
 * This is a placeholder implementation.
 */
export class Items extends Node {
    localPlayer: ItemDetails = { inventory: [], stash: [], teleport: null, neutral: null };
    teams: Map<PlayerTeam, Map<number, ItemDetails>> = new Map();

    constructor(parsedData: any = null) {
        super(parsedData);
        if (parsedData) {
            this.localPlayer = Items.parseItemDetails(parsedData);
            for (const key in parsedData) {
                if (key.startsWith('team')) {
                    const teamId = parseInt(key.replace('team', ''));
                    const teamEnum = teamId as PlayerTeam;
                    const teamObj = parsedData[key];
                    const teamMap = new Map<number, ItemDetails>();
                    for (const playerKey in teamObj) {
                        if (playerKey.startsWith('player')) {
                            const playerId = parseInt(playerKey.replace('player', ''));
                            teamMap.set(playerId, Items.parseItemDetails(teamObj[playerKey]));
                        }
                    }
                    this.teams.set(teamEnum, teamMap);
                }
            }
        }
    }

    static parseItemDetails(data: any): ItemDetails {
        const inventory: Item[] = [];
        const stash: Item[] = [];
        let teleport: Item | null = null;
        let neutral: Item | null = null;
        if (!data) return { inventory, stash, teleport, neutral };
        for (const key in data) {
            if (key.startsWith('slot')) {
                inventory.push(Items.parseItem(data[key]));
            } else if (key.startsWith('stash')) {
                stash.push(Items.parseItem(data[key]));
            } else if (key.startsWith('teleport')) {
                teleport = Items.parseItem(data[key]);
            } else if (key.startsWith('neutral')) {
                neutral = Items.parseItem(data[key]);
            }
        }
        return { inventory, stash, teleport, neutral };
    }

    static parseItem(data: any): Item {
        return {
            name: data?.name ?? '',
            purchaser: data?.purchaser ?? 0,
            itemLevel: data?.item_level ?? 0,
            containsRune: data?.contains_rune ?? Rune.Undefined,
            canCast: data?.can_cast ?? false,
            cooldown: data?.cooldown ?? 0,
            isPassive: data?.passive ?? false,
            itemCharges: data?.item_charges ?? 0,
            abilityCharges: data?.ability_charges ?? 0,
            maxCharges: data?.max_charges ?? 0,
            chargeCooldown: data?.charge_cooldown ?? 0,
            charges: data?.charges ?? 0,
        };
    }

    getForTeam(team: PlayerTeam): Map<number, ItemDetails> {
        return this.teams.get(team) ?? new Map();
    }

    getForPlayer(playerId: number): ItemDetails {
        for (const team of this.teams.values()) {
            if (team.has(playerId)) return team.get(playerId)!;
        }
        return { inventory: [], stash: [], teleport: null, neutral: null };
    }

    toString(): string {
        return `[Items localPlayer: ${JSON.stringify(this.localPlayer)}, teams: ${JSON.stringify([...this.teams])}]`;
    }
} 