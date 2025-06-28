import { Node } from './Node';
import { Vector2D } from './Vector2D';

export interface RoshanDrop {
    items: Map<number, string>;
}

export interface RoshanDetails {
    health: number;
    maxHealth: number;
    isAlive: boolean;
    spawnPhase: number;
    phaseTimeRemaining: number;
    location: Vector2D;
    rotation: number;
    drops: RoshanDrop;
}

/**
 * Class representing Roshan information.
 * This is a placeholder implementation.
 */
export class Roshan extends Node {
    details: RoshanDetails | null = null;
    constructor(parsedData: any = null) {
        super(parsedData);
        if (parsedData) {
            this.details = {
                health: parsedData.health ?? 0,
                maxHealth: parsedData.max_health ?? 0,
                isAlive: parsedData.alive ?? false,
                spawnPhase: parsedData.spawn_phase ?? 0,
                phaseTimeRemaining: parsedData.phase_time_remaining ?? 0,
                location: new Vector2D(parsedData.xpos ?? 0, parsedData.ypos ?? 0),
                rotation: parsedData.yaw ?? 0,
                drops: Roshan.parseRoshanDrop(parsedData.items_drop),
            };
        }
    }
    static parseRoshanDrop(data: any): RoshanDrop {
        const items = new Map<number, string>();
        if (!data) return { items };
        for (const key in data) {
            const match = key.match(/^item(\d+)$/);
            if (match) {
                items.set(parseInt(match[1]), data[key]);
            }
        }
        return { items };
    }
    toString(): string {
        return `[Roshan: ${JSON.stringify(this.details)}]`;
    }
} 