import { Node } from './Node';
import { PlayerTeam } from './Enums';

export interface NeutralTierInfo {
    tier: number;
    maxCount: number;
    dropAfterTime: number;
}

export interface NeutralItem {
    name: string;
    tier: number;
    charges: number;
    state: number;
    playerId: number;
}

export interface TeamNeutralItems {
    itemsFound: number;
    teamItems: Map<number, Map<number, NeutralItem>>;
}

/**
 * Class representing neutral items information.
 * This is a placeholder implementation.
 */
export class NeutralItems extends Node {
    tierInfos: Map<number, NeutralTierInfo> = new Map();
    teamItems: Map<PlayerTeam, TeamNeutralItems> = new Map();
    constructor(parsedData: any = null) {
        super(parsedData);
        if (parsedData) {
            for (const key in parsedData) {
                let match;
                if ((match = key.match(/^tier(\d+)$/))) {
                    this.tierInfos.set(parseInt(match[1]), NeutralItems.parseNeutralTierInfo(parsedData[key]));
                } else if ((match = key.match(/^team(\d+)$/))) {
                    const teamId = parseInt(match[1]);
                    this.teamItems.set(teamId as PlayerTeam, NeutralItems.parseTeamNeutralItems(parsedData[key]));
                }
            }
        }
    }
    static parseNeutralTierInfo(data: any): NeutralTierInfo {
        return {
            tier: data?.tier ?? 0,
            maxCount: data?.max_count ?? 0,
            dropAfterTime: data?.drop_after_time ?? 0,
        };
    }
    static parseTeamNeutralItems(data: any): TeamNeutralItems {
        const itemsFound = data?.items_found ?? 0;
        const teamItems = new Map<number, Map<number, NeutralItem>>();
        for (const key in data) {
            const match = key.match(/^tier(\d+)$/);
            if (match) {
                const tierIndex = parseInt(match[1]);
                const tierObj = data[key];
                const itemMap = new Map<number, NeutralItem>();
                for (const itemKey in tierObj) {
                    const itemMatch = itemKey.match(/^item(\d+)$/);
                    if (itemMatch) {
                        itemMap.set(parseInt(itemMatch[1]), NeutralItems.parseNeutralItem(tierObj[itemKey]));
                    }
                }
                teamItems.set(tierIndex, itemMap);
            }
        }
        return { itemsFound, teamItems };
    }
    static parseNeutralItem(data: any): NeutralItem {
        return {
            name: data?.name ?? '',
            tier: data?.tier ?? 0,
            charges: data?.charges ?? 0,
            state: data?.state ?? 0,
            playerId: data?.player_id ?? 0,
        };
    }
    getForTeam(team: PlayerTeam): TeamNeutralItems | null {
        return this.teamItems.get(team) ?? null;
    }
    toString(): string {
        return `[NeutralItems: ${JSON.stringify([...this.tierInfos])}, ${JSON.stringify([...this.teamItems])}]`;
    }
} 