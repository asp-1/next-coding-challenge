import styles from '@app/page.module.css';
import Basket from '@components/Basket';
import Products from '@components/Products';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Michael&apos;s Amazing Web Store</p>
        <Basket />
      </div>

      <div className={styles.grid}>
        <Products />
      </div>
    </main>
  );
}
