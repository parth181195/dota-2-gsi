import { Node } from './Node';
import { PlayerTeam } from './Enums';

export interface Ability {
    name: string;
    level: number;
    canCast: boolean;
    isPassive: boolean;
    isActive: boolean;
    cooldown: number;
    isUltimate: boolean;
    charges: number;
    maxCharges: number;
    chargeCooldown: number;
}

export type AbilityDetails = Ability[];

/**
 * Class representing hero abilities information.
 * This is a placeholder implementation.
 */
export class Abilities extends Node {
    localPlayer: AbilityDetails = [];
    teams: Map<PlayerTeam, Map<number, AbilityDetails>> = new Map();

    constructor(parsedData: any = null) {
        super(parsedData);
        if (parsedData) {
            this.localPlayer = Abilities.parseAbilityDetails(parsedData);
            for (const key in parsedData) {
                if (key.startsWith('team')) {
                    const teamId = parseInt(key.replace('team', ''));
                    const teamEnum = teamId as PlayerTeam;
                    const teamObj = parsedData[key];
                    const teamMap = new Map<number, AbilityDetails>();
                    for (const playerKey in teamObj) {
                        if (playerKey.startsWith('player')) {
                            const playerId = parseInt(playerKey.replace('player', ''));
                            teamMap.set(playerId, Abilities.parseAbilityDetails(teamObj[playerKey]));
                        }
                    }
                    this.teams.set(teamEnum, teamMap);
                }
            }
        }
    }

    static parseAbilityDetails(data: any): AbilityDetails {
        const abilities: Ability[] = [];
        if (!data) return abilities;
        for (const key in data) {
            if (key.startsWith('ability')) {
                const ab = data[key];
                abilities.push({
                    name: ab?.name ?? '',
                    level: ab?.level ?? 0,
                    canCast: ab?.can_cast ?? false,
                    isPassive: ab?.passive ?? false,
                    isActive: ab?.ability_active ?? false,
                    cooldown: ab?.cooldown ?? 0,
                    isUltimate: ab?.ultimate ?? false,
                    charges: ab?.charges ?? 0,
                    maxCharges: ab?.max_charges ?? 0,
                    chargeCooldown: ab?.charge_cooldown ?? 0,
                });
            }
        }
        return abilities;
    }

    getForTeam(team: PlayerTeam): Map<number, AbilityDetails> {
        return this.teams.get(team) ?? new Map();
    }

    getForPlayer(playerId: number): AbilityDetails {
        for (const team of this.teams.values()) {
            if (team.has(playerId)) return team.get(playerId)!;
        }
        return [];
    }

    toString(): string {
        return `[Abilities localPlayer: ${JSON.stringify(this.localPlayer)}, teams: ${JSON.stringify([...this.teams])}]`;
    }
} 