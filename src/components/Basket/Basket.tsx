'use client';
import React, { useMemo } from 'react';

import styles from './basket.module.css';
import BasketItem from '@components/BasketItem';
import { useBasketContext } from '@context/Basket';
import type { Item } from '@types';

const Basket: React.FC = () => {
  const { basket } = useBasketContext();

  const totalQuantity = useMemo(
    () => basket.reduce((sum, item) => sum + item.quantity, 0),
    [basket],
  );

  const ariaLabel = `Go to checkout, ${totalQuantity} items in basket`;

  return (
    <div>
      <button type="button" className={styles.basket} aria-label={ariaLabel}>
        Basket: {totalQuantity} items
      </button>
      <ul className={styles.basketList} aria-label="Basket items">
        {basket.map((item: Item) => (
          <BasketItem
            key={item.name}
            name={item.name}
            count={item.quantity || 0}
          />
        ))}
      </ul>
    </div>
  );
};

export default React.memo(Basket);
