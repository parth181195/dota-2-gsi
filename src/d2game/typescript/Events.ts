import { Node } from './Node';
import { PlayerTeam, EventType } from './Enums';

export interface Event {
    gameTime: number;
    eventType: EventType;
    team?: PlayerTeam;
    killerPlayerId?: number;
    playerId?: number;
    wasSnatched?: boolean;
    tipReceiverPlayerId?: number;
    tipAmount?: number;
    bountyValue?: number;
    teamGold?: number;
}

/**
 * Class representing game events information.
 * This is a placeholder implementation.
 */
export class Events extends Node {
    events: Event[] = [];

    constructor(parsedData: any = null) {
        super(parsedData);
        if (Array.isArray(parsedData)) {
            for (const evt of parsedData) {
                this.events.push(Events.parseEvent(evt));
            }
        }
    }

    static parseEvent(data: any): Event {
        const eventType: EventType = data?.event_type ?? EventType.Undefined;
        const event: Event = {
            gameTime: data?.game_time ?? 0,
            eventType,
        };
        switch (eventType) {
            case EventType.Courier_killed:
                event.team = data?.courier_team;
                event.killerPlayerId = data?.killer_player_id;
                break;
            case EventType.Roshan_killed:
                event.team = data?.killed_by_team;
                event.killerPlayerId = data?.killer_player_id;
                break;
            case EventType.Aegis_picked_up:
                event.playerId = data?.player_id;
                event.wasSnatched = data?.snatched;
                break;
            case EventType.Aegis_denied:
                event.playerId = data?.player_id;
                break;
            case EventType.Tip:
                event.playerId = data?.sender_player_id;
                event.tipReceiverPlayerId = data?.receiver_player_id;
                event.tipAmount = data?.tip_amount;
                break;
            case EventType.Bounty_rune_pickup:
                event.playerId = data?.player_id;
                event.team = data?.team;
                event.bountyValue = data?.bounty_value;
                event.teamGold = data?.team_gold;
                break;
        }
        return event;
    }

    getForTeam(team: PlayerTeam): Event[] {
        return this.events.filter(evt => evt.team === team);
    }

    getForPlayer(playerId: number): Event[] {
        return this.events.filter(evt => evt.playerId === playerId || evt.killerPlayerId === playerId || evt.tipReceiverPlayerId === playerId);
    }

    toString(): string {
        return `[Events: ${JSON.stringify(this.events)}]`;
    }
} 