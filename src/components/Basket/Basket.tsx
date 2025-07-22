import React from 'react';

import styles from './basket.module.css';
import BasketItem from '@components/BasketItem';
import type { Item } from '@types';

type BasketProps = {
  items: Item[];
  itemCount: number;
};

const Basket: React.FC<BasketProps> = ({ items, itemCount }) => {
  const ariaLabel = `Go to checkout, ${itemCount} items in basket`;

  return (
    <div>
      <button type="button" className={styles.basket} aria-label={ariaLabel}>
        Basket: {itemCount} items
      </button>
      {items.map((item: Item) => (
        <BasketItem
          key={item.name}
          name={item.name}
          count={item.quantity || 0}
        />
      ))}
    </div>
  );
};

export default React.memo(Basket);
