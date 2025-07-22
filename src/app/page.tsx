'use client';
import { useState } from 'react';

import styles from '@app/page.module.css';
import Product from '@components/Product';
import Basket from '@components/Basket';

export default function Home() {
  const [items, setItems] = useState<{ name: string; quantity: number }[]>([]);
  const [itemCount, setItemCount] = useState<number>(0);

  const addToCart = (product: string) => {
    const alreadyInCart = items.find((item) => item.name === product);
    if (alreadyInCart) {
      // @TODO need to find out how to update cart items
    } else {
      setItems([...items, { name: product, quantity: 1 }]);
    }
    setItemCount((prevItemCount) => prevItemCount + 1);
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Michael&apos;s Amazing Web Store</p>
        <Basket items={items} itemCount={itemCount} />
      </div>

      <div className={styles.grid}>
        <Product
          name="Item 1"
          description="Foo"
          onClick={() => addToCart('Item 1')}
        />
        <Product
          name="Item 2"
          description="Bar"
          onClick={() => addToCart('Item 2')}
        />
        <Product
          name="Item 3"
          description="Baz"
          onClick={() => addToCart('Item 3')}
        />
        <Product
          name="Item 4"
          description="Qux"
          onClick={() => addToCart('Item 4')}
        />
      </div>
    </main>
  );
}
