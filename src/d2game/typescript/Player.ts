import { Node, NodeList } from './Node';
import { PlayerDetails } from './PlayerDetails';

/**
 * Information about the local player or team players when spectating.
 */
export class Player extends Node {
    /**
     * Local player details.
     */
    localPlayer: PlayerDetails;

    /**
     * Team players details.
     */
    teams: NodeList<PlayerDetails>;

    constructor(parsedData: any = null) {
        super(parsedData);
        this.localPlayer = new PlayerDetails(this.getJObject("localplayer"));
        this.teams = new NodeList<PlayerDetails>();
        
        const teamsData = this.getJArray("teams");
        if (teamsData) {
            for (const teamData of teamsData) {
                this.teams.push(new PlayerDetails(teamData));
            }
        }
    }

    toString(): string {
        return `[Player LocalPlayer: ${this.localPlayer}, Teams: ${this.teams}]`;
    }
} 