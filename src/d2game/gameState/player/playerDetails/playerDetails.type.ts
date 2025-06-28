export type PlayerDetailsI = {
  steamId: string;
  accountId: string;
  name: string;
  activity: PlayerActivity | undefined | null;
  kills: number;
  deaths: number;
  assists: number;
  lastHits: number;
  denies: number;
  killStreak: number;
  commandsIssued: number;
  // killList: string[];
  team: PlayerTeam | undefined | null;
  playerSlot: number;
  gold: number;
  goldReliable: number;
  goldUnreliable: number;
  goldFromHeroKills: number;
  goldFromCreepKills: number;
  goldFromIncome: number;
  goldFromShared: number;
  goldPerMinute: number;
  experiencePerMinute: number;
  onstageSeat: number;
  netWorth: number;
  heroDamage: number;
  heroHealing: number;
  towerDamage: number;
  supportGoldSpent: number;
  consumableGoldSpent: number;
  itemGoldSpent: number;
  goldLostToDeath: number;
  goldSpentOnBuybacks: number;
  wardsPurchased: number;
  wardsPlaced: number;
  wardsDestroyed: number;
  runesActivated: number;
  campsStacked: number;
  playerTeamSlot?: number; // Optional, as it may not be present in all data
};


export enum PlayerActivity {
  MENU = 'menu',
  PLAYING = 'playing',
}

export enum PlayerTeam {
  UNKNOWN = 'UNKNOWN',
  NONE = 'NONE',
  SPECTATOR = 'SPECTATOR',
  RADIANT = 'RADIANT',
  DIRE = 'DIRE',
  NEUTRALS = 'NEUTRALS',
}