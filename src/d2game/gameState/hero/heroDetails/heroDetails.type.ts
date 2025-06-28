export interface HeroDetailsI {
  location: Vector2D;
  facet: number;
  id: number;
  name: string;
  level: number;
  experience: number;
  isAlive: boolean;
  secondsToRespawn: number;
  buybackCost: number;
  buybackCooldown: number;
  health: number;
  maxHealth: number;
  healthPercent: number;
  mana: number;
  maxMana: number;
  manaPercent: number;
  heroState: HeroState[];
  isMuted: boolean;
  hasAghanimsScepterUpgrade: boolean;
  hasAghanimsShardUpgrade: boolean;
  selectedUnit: boolean;
  talentTree: TalentTreeSpec[];
  attributesLevel: number;
}

export interface Vector2D {
  x: number;
  y: number;
}

export enum HeroState {
  SILENCED = 'silenced',
  STUNNED = 'stunned',
  DISARMED = 'disarmed',
  MAGIC_IMMUNE = 'magic_immune',
  HEXED = 'hexed',
  BROKEN = 'broken',
  SMOKED = 'smoked',
  MUTED = 'muted',
  DEBUFFED = 'debuffed'
}

export enum TalentTreeSpec {
  NONE = 'none',
  LEFT = 'left',
  RIGHT = 'right',
  BOTH = 'both',
}