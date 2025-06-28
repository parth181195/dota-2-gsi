import { Node } from './Node';
import { PlayerTeam } from './Enums';

export interface WearableItem {
    id: number;
    style: number;
}

export interface PlayerWearables {
    wearables: Map<number, WearableItem>;
}

/**
 * Class representing wearable items information.
 * This is a placeholder implementation.
 */
export class Wearables extends Node {
    localPlayer: PlayerWearables = { wearables: new Map() };
    teams: Map<PlayerTeam, Map<number, PlayerWearables>> = new Map();
    constructor(parsedData: any = null) {
        super(parsedData);
        if (parsedData) {
            this.localPlayer = Wearables.parsePlayerWearables(parsedData);
            for (const key in parsedData) {
                if (key.startsWith('team')) {
                    const teamId = parseInt(key.replace('team', ''));
                    const teamEnum = teamId as PlayerTeam;
                    const teamObj = parsedData[key];
                    const teamMap = new Map<number, PlayerWearables>();
                    for (const playerKey in teamObj) {
                        if (playerKey.startsWith('player')) {
                            const playerId = parseInt(playerKey.replace('player', ''));
                            teamMap.set(playerId, Wearables.parsePlayerWearables(teamObj[playerKey]));
                        }
                    }
                    this.teams.set(teamEnum, teamMap);
                }
            }
        }
    }
    static parsePlayerWearables(data: any): PlayerWearables {
        const wearables = new Map<number, WearableItem>();
        if (!data) return { wearables };
        for (const key in data) {
            let match;
            if ((match = key.match(/^wearable(\d+)$/))) {
                const idx = parseInt(match[1]);
                wearables.set(idx, { id: data[key], style: 0 });
            } else if ((match = key.match(/^style(\d+)$/))) {
                const idx = parseInt(match[1]);
                const existing = wearables.get(idx) || { id: 0, style: 0 };
                wearables.set(idx, { id: existing.id, style: data[key] });
            }
        }
        return { wearables };
    }
    getForTeam(team: PlayerTeam): Map<number, PlayerWearables> {
        return this.teams.get(team) ?? new Map();
    }
    getForPlayer(playerId: number): PlayerWearables {
        for (const team of this.teams.values()) {
            if (team.has(playerId)) return team.get(playerId)!;
        }
        return { wearables: new Map() };
    }
    toString(): string {
        return `[Wearables localPlayer: ${JSON.stringify([...this.localPlayer.wearables])}, teams: ${JSON.stringify([...this.teams])}]`;
    }
} 