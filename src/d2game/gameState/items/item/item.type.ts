import { ItemDetails } from './itemDetails/itemDetails';
import { checkPreservedNeutralItemRegexp } from '../../../../constants/matchers';

export type ItemI = {
  inventory: ItemDetails[]
  stash: ItemDetails[]
  teleport: ItemDetails | null
  neutral: ItemDetails[],
  preservedNeutral: ItemDetails[]
}