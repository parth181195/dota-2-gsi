import { Node } from './Node';

export interface DraftDetails {
    isHomeTeam: boolean;
    pickIDs: Map<number, number>;
    pickHeroIDs: Map<number, string>;
}

/**
 * Class representing draft information.
 * This is a placeholder implementation.
 */
export class Draft extends Node {
    draft: DraftDetails = { isHomeTeam: false, pickIDs: new Map(), pickHeroIDs: new Map() };
    constructor(parsedData: any = null) {
        super(parsedData);
        if (parsedData) {
            this.draft.isHomeTeam = parsedData.home_team ?? false;
            for (const key in parsedData) {
                let match;
                if ((match = key.match(/^pick(\d+)_id$/))) {
                    this.draft.pickIDs.set(parseInt(match[1]), parsedData[key]);
                } else if ((match = key.match(/^pick(\d+)_class$/))) {
                    this.draft.pickHeroIDs.set(parseInt(match[1]), parsedData[key]);
                }
            }
        }
    }

    toString(): string {
        return `[Draft: ${JSON.stringify({ ...this.draft, pickIDs: [...this.draft.pickIDs], pickHeroIDs: [...this.draft.pickHeroIDs] })}]`;
    }
} 