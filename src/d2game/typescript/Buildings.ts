import { Node } from './Node';
import { PlayerTeam } from './Enums';

export interface Building {
    health: number;
    maxHealth: number;
}

export interface BuildingLayout {
    topTowers: Map<number, Building>;
    middleTowers: Map<number, Building>;
    bottomTowers: Map<number, Building>;
    topRacks: Map<string, Building>;
    middleRacks: Map<string, Building>;
    bottomRacks: Map<string, Building>;
    ancient: Building | null;
    otherBuildings: Map<string, Building>;
}

/**
 * Class representing building information.
 * This is a placeholder implementation.
 */
export class Buildings extends Node {
    allBuildings: Map<PlayerTeam, BuildingLayout> = new Map();

    constructor(parsedData: any = null) {
        super(parsedData);
        if (parsedData) {
            this.allBuildings.set(PlayerTeam.RADIANT, Buildings.parseBuildingLayout(parsedData['radiant']));
            this.allBuildings.set(PlayerTeam.DIRE, Buildings.parseBuildingLayout(parsedData['dire']));
        }
    }

    static parseBuildingLayout(data: any): BuildingLayout {
        const topTowers = new Map<number, Building>();
        const middleTowers = new Map<number, Building>();
        const bottomTowers = new Map<number, Building>();
        const topRacks = new Map<string, Building>();
        const middleRacks = new Map<string, Building>();
        const bottomRacks = new Map<string, Building>();
        let ancient: Building | null = null;
        const otherBuildings = new Map<string, Building>();
        if (!data) return { topTowers, middleTowers, bottomTowers, topRacks, middleRacks, bottomRacks, ancient, otherBuildings };
        for (const key in data) {
            const b = Buildings.parseBuilding(data[key]);
            if (/tower(\d+)_top/.test(key)) {
                const idx = parseInt(key.match(/tower(\d+)_top/)[1]);
                topTowers.set(idx, b);
            } else if (/tower(\d+)_mid/.test(key)) {
                const idx = parseInt(key.match(/tower(\d+)_mid/)[1]);
                middleTowers.set(idx, b);
            } else if (/tower(\d+)_bot/.test(key)) {
                const idx = parseInt(key.match(/tower(\d+)_bot/)[1]);
                bottomTowers.set(idx, b);
            } else if (/rax_(melee|range)_top/.test(key)) {
                const type = key.match(/rax_(melee|range)_top/)[1];
                topRacks.set(type, b);
            } else if (/rax_(melee|range)_mid/.test(key)) {
                const type = key.match(/rax_(melee|range)_mid/)[1];
                middleRacks.set(type, b);
            } else if (/rax_(melee|range)_bot/.test(key)) {
                const type = key.match(/rax_(melee|range)_bot/)[1];
                bottomRacks.set(type, b);
            } else if (/_fort/.test(key)) {
                ancient = b;
            } else {
                otherBuildings.set(key, b);
            }
        }
        return { topTowers, middleTowers, bottomTowers, topRacks, middleRacks, bottomRacks, ancient, otherBuildings };
    }

    static parseBuilding(data: any): Building {
        return {
            health: data?.health ?? 0,
            maxHealth: data?.max_health ?? 0,
        };
    }

    getForTeam(team: PlayerTeam): BuildingLayout | null {
        return this.allBuildings.get(team) ?? null;
    }

    toString(): string {
        return `[Buildings: ${JSON.stringify([...this.allBuildings])}]`;
    }
} 