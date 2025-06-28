export type AbilityDetailsI = {
  name: string;
  level: number;
  canCast: boolean;
  isPassive: boolean;
  isActive: boolean;
  cooldown: number;
  isUltimate: boolean;
  charges: number;
  maxCharges: number;
  chargeCooldown: number;
};
