'use client';
import React, { useState } from 'react';
import type { ReactNode } from 'react';

import { initialBasketState, BasketContext } from '@context/Basket';
import type { Item } from '@types';

type BasketContextProviderProps = {
  children: ReactNode;
};

const BasketContextProvider: React.FC<BasketContextProviderProps> = ({
  children,
}) => {
  const [basket, setBasket] = useState<Item[]>(initialBasketState.basket);

  const addToBasket = (product: string) => {
    const itemIndex = basket.findIndex((item) => item.name === product);
    const isAlreadyInCart = itemIndex > -1;

    if (isAlreadyInCart) {
      const nextItems = basket.map((item, index) => {
        const hasMatchedIndex = itemIndex === index;

        if (hasMatchedIndex) {
          return {
            name: item.name,
            quantity: item.quantity + 1,
          };
        }

        return item;
      });

      setBasket(nextItems);
    } else {
      setBasket([...basket, { name: product, quantity: 1 }]);
    }
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket }}>
      {children}
    </BasketContext.Provider>
  );
};

export default BasketContextProvider;
