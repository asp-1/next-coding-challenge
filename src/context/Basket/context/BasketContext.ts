'use client';
import { createContext } from 'react';

import type { Item } from '@types';

type BasketContextValue = {
  basket: Item[];
  addToBasket: (product: string) => void;
};

export const initialBasketState = {
  basket: [],
  addToBasket: () => {},
};

export const BasketContext =
  createContext<BasketContextValue>(initialBasketState);
