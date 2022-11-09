import Card from '@/components/card';
import styles from './home.module.css';

export default function Home() {
  return (
    <div className={styles['container']}>
      <Card>
        <h1 className={styles['title']}>
          Joel&apos;s <span>react</span> template
        </h1>
      </Card>
    </div>
  );
}
