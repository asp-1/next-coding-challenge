import { Item } from '@typings/basket';

export const getTotalQuantity = (basket: Item[]) =>
  basket.reduce((sum, { quantity }) => sum + quantity, 0);
