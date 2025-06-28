import { AbilityDetailsI } from './abilityDetails.type';
import { Node } from '../../node';

export class AbilityDetails extends Node implements AbilityDetailsI{
  canCast: boolean;
  chargeCooldown: number;
  charges: number;
  cooldown: number;
  isActive: boolean;
  isPassive: boolean;
  isUltimate: boolean;
  level: number;
  maxCharges: number;
  name: string;
  constructor(json: any) {
    super(json);
    if(json){
      this.canCast = this.getBool('can_cast');
      this.chargeCooldown = this.getInt('cooldown');
      this.charges = this.getInt('charges');
      this.cooldown = this.getInt('cooldown');
      this.isActive = this.getBool('ability_active');
      this.isPassive = this.getBool('passive');
      this.isUltimate = this.getBool('ultimate');
      this.level = this.getInt('level');
      this.maxCharges = this.getInt('max_charges');
      this.name = this.getString('name');
    }
  }
}