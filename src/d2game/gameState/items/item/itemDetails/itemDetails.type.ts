
export type ItemDetailsI = {
  name: string;
  purchaser: number;
  itemLevel: number;
  containsRune: Rune;
  canCast: boolean;
  cooldown: number;
  isPassive: boolean;
  itemCharges: number;
  abilityCharges: number;
  maxCharges: number;
  chargeCooldown: number;
  charges: number;
};

export enum Rune {
  EMPTY = 'empty',
  DOUBLE_DAMAGE = 'double_damage',
  HASTE = 'haste',
  ILLUSION = 'illusion',
  INVIS = 'invis',
  REGEN = 'regen',
  ARCANE = 'arcane',
  WATER = 'water',
  BOUNTY = 'bounty',
  SHIELD = 'shield',
  XP = 'xp',
}











