import { Node } from '../../node';
import { PlayerDetailsI, PlayerTeam, PlayerActivity } from './playerDetails.type';

export class PlayerDetails extends Node implements PlayerDetailsI {
  accountId: string;
  activity: PlayerActivity | undefined | null;
  assists: number;
  campsStacked: number;
  commandsIssued: number;
  consumableGoldSpent: number;
  deaths: number;
  denies: number;
  experiencePerMinute: number;
  gold: number;
  goldFromCreepKills: number;
  goldFromHeroKills: number;
  goldFromIncome: number;
  goldFromShared: number;
  goldLostToDeath: number;
  goldPerMinute: number;
  goldReliable: number;
  goldSpentOnBuybacks: number;
  goldUnreliable: number;
  heroDamage: number;
  heroHealing: number;
  itemGoldSpent: number;
  killStreak: number;
  kills: number;
  lastHits: number;
  netWorth: number;
  onstageSeat: number;
  playerSlot: number;
  runesActivated: number;
  steamId: string;
  supportGoldSpent: number;
  team: PlayerTeam | undefined | null;
  towerDamage: number;
  wardsDestroyed: number;
  wardsPlaced: number;
  wardsPurchased: number;
  name: string;
  playerTeamSlot: number;
  constructor(json:any) {
    super(json);
    this.steamId = this.getString('steamid');
    this.accountId = this.getString("accountid");
    this.name = this.getString("name");
    this.activity = this.getString("activity") as PlayerActivity;
    this.kills = this.getInt("kills");
    this.deaths = this.getInt("deaths");
    this.assists = this.getInt("assists");
    this.lastHits = this.getInt("last_hits");
    this.denies = this.getInt("denies");
    this.killStreak = this.getInt("kill_streak");
    this.commandsIssued = this.getInt("commands_issued");
    this.team = this.getString("team") as PlayerTeam;
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
}