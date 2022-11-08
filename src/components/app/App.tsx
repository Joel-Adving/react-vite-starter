import Card from '@/components/common/card';
import styles from './app.module.css';

export default function App() {
  return (
    <div className={styles['container']}>
      <Card>
        <h1 className={styles['title']}>
          Joel&apos;s <span>reac</span> template
        </h1>
      </Card>
    </div>
  );
}
