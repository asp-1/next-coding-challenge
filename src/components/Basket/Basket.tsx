'use client';
import React, { useMemo } from 'react';

import styles from './basket.module.css';
import BasketItem from '@components/BasketItem';
import { useBasketContext } from '@context/Basket';
import type { Item } from '@typings/basket';

const Basket: React.FC = () => {
  const { basket } = useBasketContext();

  const totalQuantity = useMemo(
    () => basket.reduce((sum, { quantity }) => sum + quantity, 0),
    [basket],
  );

  const ariaLabel = `Go to checkout, ${totalQuantity} items in basket`;

  return (
    <div>
      <button type="button" className={styles.basket} aria-label={ariaLabel}>
        Basket: {totalQuantity} items
      </button>
      <ul className={styles.basketList} aria-label="Basket items">
        {basket.map(({ name, quantity }: Item) => (
          <BasketItem key={name} name={name} count={quantity || 0} />
        ))}
      </ul>
    </div>
  );
};

export default React.memo(Basket);
