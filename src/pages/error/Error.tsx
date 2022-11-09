import { useRouteError } from 'react-router-dom';
import styles from './error.module.css';
import { ErrorResponse } from './types';

export default function Error() {
  const error = useRouteError() as ErrorResponse;

  return (
    <div className={styles['container']}>
      <div className={styles['error']}>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p className={styles['message']}>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
