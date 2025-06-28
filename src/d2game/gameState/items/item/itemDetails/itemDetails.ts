import { Node } from '../../../node';
import { ItemDetailsI, Rune } from './itemDetails.type';

export class ItemDetails extends Node implements ItemDetailsI {
  abilityCharges: number;
  canCast: boolean;
  chargeCooldown: number;
  charges: number;
  containsRune: Rune;
  cooldown: number;
  isPassive: boolean;
  itemCharges: number;
  itemLevel: number;
  maxCharges: number;
  name: string;
  purchaser: number;

  constructor(json: any) {
    super(json);
    this.abilityCharges = this.getInt('ability_charges');
    this.canCast = this.getBool('can_cast');
    this.chargeCooldown = this.getInt('charge_cooldown');
    this.charges = this.getInt('charges');
    this.containsRune = this.getString('contains_rune') as Rune;
    this.cooldown = this.getInt('cooldown');
    this.isPassive = this.getBool('passive');
    this.itemCharges = this.getInt('item_charges');
    this.itemLevel = this.getInt('item_level');
    this.maxCharges = this.getInt('max_charges');
    this.name = this.getString('name');
  }

  isEmpty(): boolean {
    return this.name === 'empty';

  }
}