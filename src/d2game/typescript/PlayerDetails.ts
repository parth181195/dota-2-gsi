import { Node, NodeList } from './Node';
import { PlayerTeam } from './Enums';

/**
 * Information about a player's details.
 */
export class PlayerDetails extends Node {
    /**
     * Steam ID.
     */
    steamID: string;

    /**
     * Account ID.
     */
    accountID: string;

    /**
     * Player name.
     */
    name: string;

    /**
     * Player activity.
     */
    activity: string;

    /**
     * Number of kills.
     */
    kills: number;

    /**
     * Number of deaths.
     */
    deaths: number;

    /**
     * Number of assists.
     */
    assists: number;

    /**
     * Number of last hits.
     */
    lastHits: number;

    /**
     * Number of denies.
     */
    denies: number;

    /**
     * Kill streak.
     */
    killStreak: number;

    /**
     * Commands issued.
     */
    commandsIssued: number;

    /**
     * Kill list.
     */
    killList: NodeList<string>;

    /**
     * Team.
     */
    team: PlayerTeam;

    /**
     * Player slot.
     */
    playerSlot: number;

    /**
     * Player team slot.
     */
    playerTeamSlot: number;

    /**
     * Gold.
     */
    gold: number;

    /**
     * Reliable gold.
     */
    goldReliable: number;

    /**
     * Unreliable gold.
     */
    goldUnreliable: number;

    /**
     * Gold from hero kills.
     */
    goldFromHeroKills: number;

    /**
     * Gold from creep kills.
     */
    goldFromCreepKills: number;

    /**
     * Gold from income.
     */
    goldFromIncome: number;

    /**
     * Gold from shared.
     */
    goldFromShared: number;

    /**
     * Gold per minute.
     */
    goldPerMinute: number;

    /**
     * Experience per minute.
     */
    experiencePerMinute: number;

    /**
     * Onstage seat.
     */
    onstageSeat: number;

    /**
     * Net worth.
     */
    netWorth: number;

    /**
     * Hero damage.
     */
    heroDamage: number;

    /**
     * Hero healing.
     */
    heroHealing: number;

    /**
     * Tower damage.
     */
    towerDamage: number;

    /**
     * Support gold spent.
     */
    supportGoldSpent: number;

    /**
     * Consumable gold spent.
     */
    consumableGoldSpent: number;

    /**
     * Item gold spent.
     */
    itemGoldSpent: number;

    /**
     * Gold lost to death.
     */
    goldLostToDeath: number;

    /**
     * Gold spent on buybacks.
     */
    goldSpentOnBuybacks: number;

    /**
     * Wards purchased.
     */
    wardsPurchased: number;

    /**
     * Wards placed.
     */
    wardsPlaced: number;

    /**
     * Wards destroyed.
     */
    wardsDestroyed: number;

    /**
     * Runes activated.
     */
    runesActivated: number;

    /**
     * Camps stacked.
     */
    campsStacked: number;

    constructor(parsedData: any = null) {
        super(parsedData);
        this.steamID = this.getString("steamid");
        this.accountID = this.getString("accountid");
        this.name = this.getString("name");
        this.activity = this.getString("activity");
        this.kills = this.getInt("kills");
        this.deaths = this.getInt("deaths");
        this.assists = this.getInt("assists");
        this.lastHits = this.getInt("last_hits");
        this.denies = this.getInt("denies");
        this.killStreak = this.getInt("kill_streak");
        this.commandsIssued = this.getInt("commands_issued");
        this.killList = new NodeList<string>();
        
        const killListData = this.getJArray("kill_list");
        if (killListData) {
            for (const killData of killListData) {
                this.killList.push(killData.toString());
            }
        }
        
        this.team = this.getInt("team");
        this.playerSlot = this.getInt("player_slot");
        this.playerTeamSlot = this.getInt("player_team_slot");
        this.gold = this.getInt("gold");
        this.goldReliable = this.getInt("gold_reliable");
        this.goldUnreliable = this.getInt("gold_unreliable");
        this.goldFromHeroKills = this.getInt("gold_from_hero_kills");
        this.goldFromCreepKills = this.getInt("gold_from_creep_kills");
        this.goldFromIncome = this.getInt("gold_from_income");
        this.goldFromShared = this.getInt("gold_from_shared");
        this.goldPerMinute = this.getInt("gold_per_min");
        this.experiencePerMinute = this.getInt("xp_per_min");
        this.onstageSeat = this.getInt("onstage_seat");
        this.netWorth = this.getInt("net_worth");
        this.heroDamage = this.getInt("hero_damage");
        this.heroHealing = this.getInt("hero_healing");
        this.towerDamage = this.getInt("tower_damage");
        this.supportGoldSpent = this.getInt("support_gold_spent");
        this.consumableGoldSpent = this.getInt("consumable_gold_spent");
        this.itemGoldSpent = this.getInt("item_gold_spent");
        this.goldLostToDeath = this.getInt("gold_lost_to_death");
        this.goldSpentOnBuybacks = this.getInt("gold_spent_on_buybacks");
        this.wardsPurchased = this.getInt("wards_purchased");
        this.wardsPlaced = this.getInt("wards_placed");
        this.wardsDestroyed = this.getInt("wards_destroyed");
        this.runesActivated = this.getInt("runes_activated");
        this.campsStacked = this.getInt("camps_stacked");
    }

    toString(): string {
        return `[PlayerDetails SteamID: ${this.steamID}, Name: ${this.name}, Team: ${this.team}]`;
    }
} 