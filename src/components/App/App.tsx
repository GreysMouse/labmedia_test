import React from 'react';
import { UsersSection } from '../UsersSection/UsersSection';
import styles from './app.module.scss';

export const App = (): JSX.Element => {
  return (
    <div className={ styles.app }>
      <div className={ styles.container }>
        <UsersSection />
      </div>
    </div>
  );
};
