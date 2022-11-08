import Card from '@/components/card';
import style from './app.module.css';

export default function App() {
  return (
    <div className={style['container']}>
      <Card>
        <h1 className={style['title']}>
          Joel&apos;s <span>react</span> template
        </h1>
      </Card>
    </div>
  );
}
