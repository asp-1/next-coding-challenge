'use client';
import styles from '@app/page.module.css';
import Product from '@components/Product';
import Basket from '@components/Basket';

import { useBasketContext } from '@context/Basket';

export default function Home() {
  const { addToBasket } = useBasketContext();

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Michael&apos;s Amazing Web Store</p>
        <Basket />
      </div>

      <div className={styles.grid}>
        <Product
          name="Item 1"
          description="Foo"
          onClick={() => addToBasket('Item 1')}
        />
        <Product
          name="Item 2"
          description="Bar"
          onClick={() => addToBasket('Item 2')}
        />
        <Product
          name="Item 3"
          description="Baz"
          onClick={() => addToBasket('Item 3')}
        />
        <Product
          name="Item 4"
          description="Qux"
          onClick={() => addToBasket('Item 4')}
        />
      </div>
    </main>
  );
}
