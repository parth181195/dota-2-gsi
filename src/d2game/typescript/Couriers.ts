import { Node } from './Node';
import { Vector2D } from './Vector2D';

export interface CourierItem {
    ownerId: number;
    name: string;
}

export interface CourierDetails {
    health: number;
    maxHealth: number;
    isAlive: boolean;
    remainingRespawnTime: number;
    location: Vector2D;
    rotation: number;
    ownerId: number;
    hasFlyingUpgrade: boolean;
    isShielded: boolean;
    isBoosted: boolean;
    items: Map<number, CourierItem>;
}

/**
 * Class representing courier information.
 * This is a placeholder implementation.
 */
export class Couriers extends Node {
    details: CourierDetails | null = null;
    constructor(parsedData: any = null) {
        super(parsedData);
        if (parsedData) {
            this.details = {
                health: parsedData.health ?? 0,
                maxHealth: parsedData.max_health ?? 0,
                isAlive: parsedData.alive ?? false,
                remainingRespawnTime: parsedData.remaining_respawn_time ?? 0,
                location: new Vector2D(parsedData.xpos ?? 0, parsedData.ypos ?? 0),
                rotation: parsedData.yaw ?? 0,
                ownerId: parsedData.owner_id ?? 0,
                hasFlyingUpgrade: parsedData.has_flying_upgrade ?? false,
                isShielded: parsedData.is_shielded ?? false,
                isBoosted: parsedData.is_boosted ?? false,
                items: Couriers.parseCourierItems(parsedData.items),
            };
        }
    }

    static parseCourierItems(data: any): Map<number, CourierItem> {
        const items = new Map<number, CourierItem>();
        if (!data) return items;
        for (const key in data) {
            const match = key.match(/^item(\d+)$/);
            if (match) {
                items.set(parseInt(match[1]), {
                    ownerId: data[key]?.owner ?? 0,
                    name: data[key]?.name ?? '',
                });
            }
        }
        return items;
    }

    toString(): string {
        return `[Couriers: ${JSON.stringify(this.details)}]`;
    }
} 