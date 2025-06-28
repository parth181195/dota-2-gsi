import { Node } from './Node';
import { PlayerTeam } from './Enums';
import { Vector2D } from './Vector2D';

export interface MinimapElement {
    location: Vector2D;
    remainingTime: number;
    eventDuration: number;
    image: string;
    team: PlayerTeam;
    name: string;
    rotation: number;
    unitName: string;
    visionRange: number;
}

/**
 * Class representing minimap information.
 * This is a placeholder implementation.
 */
export class Minimap extends Node {
    elements: Map<number, MinimapElement> = new Map();
    constructor(parsedData: any = null) {
        super(parsedData);
        if (parsedData) {
            for (const key in parsedData) {
                const match = key.match(/^o(\d+)$/);
                if (match) {
                    const idx = parseInt(match[1]);
                    this.elements.set(idx, Minimap.parseMinimapElement(parsedData[key]));
                }
            }
        }
    }
    static parseMinimapElement(data: any): MinimapElement {
        return {
            location: new Vector2D(data?.xpos ?? 0, data?.ypos ?? 0),
            remainingTime: data?.remainingtime ?? 0,
            eventDuration: data?.eventduration ?? 0,
            image: data?.image ?? '',
            team: data?.team ?? PlayerTeam.UNDEFINED,
            name: data?.name ?? '',
            rotation: data?.yaw ?? 0,
            unitName: data?.unitname ?? '',
            visionRange: data?.visionrange ?? 0,
        };
    }
    getForTeam(team: PlayerTeam): Map<number, MinimapElement> {
        const found = new Map<number, MinimapElement>();
        for (const [id, elem] of this.elements) {
            if (elem.team === team) found.set(id, elem);
        }
        return found;
    }
    getByUnitName(unitName: string): Map<number, MinimapElement> {
        const found = new Map<number, MinimapElement>();
        for (const [id, elem] of this.elements) {
            if (elem.unitName === unitName) found.set(id, elem);
        }
        return found;
    }
    toString(): string {
        return `[Minimap: ${JSON.stringify([...this.elements])}]`;
    }
} 