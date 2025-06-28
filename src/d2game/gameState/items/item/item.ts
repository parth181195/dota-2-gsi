import { Node } from '../../node';
import { ItemI } from './item.type';
import { ItemDetails } from './itemDetails/itemDetails';
import {
  checkStashItemRegexp,
  checkSlotItemRegexp,
  checkTeleportItemRegexp,
  checkNeutralItemRegexp, checkPreservedNeutralItemRegexp,
} from '../../../../constants/matchers';

export class Item extends Node implements ItemI {
  inventory: ItemDetails[] = [];
  neutral: ItemDetails[] = [];
  stash: ItemDetails[] = [];
  teleport: ItemDetails | null;
  preservedNeutral: ItemDetails[] = [];

  constructor(json: any) {
    super(json);
    const slotItemKeys = this.getMatchingKeys(this.data, checkSlotItemRegexp);
    const stashItemKeys = this.getMatchingKeys(this.data, checkStashItemRegexp);
    const teleportItemKeys = this.getMatchingKeys(this.data, checkTeleportItemRegexp);
    const neutralItemKeys = this.getMatchingKeys(this.data, checkNeutralItemRegexp);
    const preservedNeutralItem = this.getMatchingKeys(this.data, checkPreservedNeutralItemRegexp);

    if (slotItemKeys?.length) {
      for (const key of slotItemKeys) {
        this.inventory.push(new ItemDetails(this.getObject(key)));
      }
    }
    if (stashItemKeys?.length) {
      for (const key of stashItemKeys) {
        this.stash.push(new ItemDetails(this.getObject(key)));
      }
    }
    if (neutralItemKeys?.length) {
      for (const key of neutralItemKeys) {
        this.neutral.push(new ItemDetails(this.getObject(key)));
      }
    }
    if (teleportItemKeys?.length) {
      for (const key of teleportItemKeys) {
        this.neutral.push(new ItemDetails(this.getObject(key)));
      }
    }
    if (preservedNeutralItem?.length) {
      for (const key of preservedNeutralItem) {
        this.neutral.push(new ItemDetails(this.getObject(key)));
      }
    }
    console.log('Item initialized with', teleportItemKeys);
  }

  getNaturalItem() {
    if (this.neutral.length === 0) {
      return null;
    }
    return {
      item: this.neutral[0],
      enchantment: this.neutral[1],
    };
  }
}