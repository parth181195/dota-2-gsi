import { Node } from './Node';
import { PlayerTeam, TalentTreeSpec, HeroState } from './Enums';
import { Vector2D } from './Vector2D';

export interface HeroDetails {
    location: Vector2D;
    id: number;
    name: string;
    level: number;
    experience: number;
    isAlive: boolean;
    secondsToRespawn: number;
    buybackCost: number;
    buybackCooldown: number;
    health: number;
    maxHealth: number;
    healthPercent: number;
    mana: number;
    maxMana: number;
    manaPercent: number;
    heroState: HeroState[];
    isMuted: boolean;
    hasAghanimsScepterUpgrade: boolean;
    hasAghanimsShardUpgrade: boolean;
    selectedUnit: boolean;
    talentTree: TalentTreeSpec[];
    attributesLevel: number;
}

/**
 * Class representing hero information.
 * This is a placeholder implementation that can be expanded with full HeroDetails.
 */
export class Hero extends Node {
    localPlayer: HeroDetails | null = null;
    teams: Map<PlayerTeam, Map<number, HeroDetails>> = new Map();

    constructor(parsedData: any = null) {
        super(parsedData);
        if (parsedData) {
            this.localPlayer = Hero.parseHeroDetails(parsedData);
            // Parse teams
            for (const key in parsedData) {
                if (key.startsWith('team')) {
                    const teamId = parseInt(key.replace('team', ''));
                    const teamEnum = teamId as PlayerTeam;
                    const teamObj = parsedData[key];
                    const teamMap = new Map<number, HeroDetails>();
                    for (const playerKey in teamObj) {
                        if (playerKey.startsWith('player')) {
                            const playerId = parseInt(playerKey.replace('player', ''));
                            teamMap.set(playerId, Hero.parseHeroDetails(teamObj[playerKey]));
                        }
                    }
                    this.teams.set(teamEnum, teamMap);
                }
            }
        }
    }

    static parseHeroDetails(data: any): HeroDetails {
        return {
            location: new Vector2D(data?.xpos ?? 0, data?.ypos ?? 0),
            id: data?.id ?? 0,
            name: data?.name ?? '',
            level: data?.level ?? 0,
            experience: data?.xp ?? 0,
            isAlive: data?.alive ?? false,
            secondsToRespawn: data?.respawn_seconds ?? 0,
            buybackCost: data?.buyback_cost ?? 0,
            buybackCooldown: data?.buyback_cooldown ?? 0,
            health: data?.health ?? 0,
            maxHealth: data?.max_health ?? 0,
            healthPercent: data?.health_percent ?? 0,
            mana: data?.mana ?? 0,
            maxMana: data?.max_mana ?? 0,
            manaPercent: data?.mana_percent ?? 0,
            heroState: Hero.parseHeroState(data),
            isMuted: data?.muted ?? false,
            hasAghanimsScepterUpgrade: data?.aghanims_scepter ?? false,
            hasAghanimsShardUpgrade: data?.aghanims_shard ?? false,
            selectedUnit: data?.selected_unit ?? false,
            talentTree: Hero.parseTalentTree(data),
            attributesLevel: data?.attributes_level ?? 0,
        };
    }

    static parseHeroState(data: any): HeroState[] {
        const states: HeroState[] = [];
        if (data?.silenced) states.push(HeroState.Silenced);
        if (data?.stunned) states.push(HeroState.Stunned);
        if (data?.disarmed) states.push(HeroState.Disarmed);
        if (data?.magicimmune) states.push(HeroState.MagicImmune);
        if (data?.hexed) states.push(HeroState.Hexed);
        if (data?.break) states.push(HeroState.Broken);
        if (data?.smoked) states.push(HeroState.Smoked);
        if (data?.has_debuff) states.push(HeroState.Debuffed);
        return states;
    }

    static parseTalentTree(data: any): TalentTreeSpec[] {
        const tree: TalentTreeSpec[] = [TalentTreeSpec.None, TalentTreeSpec.None, TalentTreeSpec.None, TalentTreeSpec.None];
        for (let i = 1; i <= 4; i++) {
            const left = data?.[`talent_${i * 2}`] ?? false;
            const right = data?.[`talent_${i * 2 - 1}`] ?? false;
            if (left && !right) tree[i - 1] = TalentTreeSpec.Left;
            else if (!left && right) tree[i - 1] = TalentTreeSpec.Right;
            else if (left && right) tree[i - 1] = TalentTreeSpec.Both;
        }
        return tree;
    }

    getForTeam(team: PlayerTeam): Map<number, HeroDetails> {
        return this.teams.get(team) ?? new Map();
    }

    getForPlayer(playerId: number): HeroDetails | null {
        for (const team of this.teams.values()) {
            if (team.has(playerId)) return team.get(playerId)!;
        }
        return null;
    }

    toString(): string {
        return `[Hero localPlayer: ${JSON.stringify(this.localPlayer)}, teams: ${JSON.stringify([...this.teams])}]`;
    }
} 