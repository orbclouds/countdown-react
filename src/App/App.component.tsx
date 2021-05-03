import React from 'react';
import type { FC } from 'react';

import Button from '@app/Button';
import { useEvents } from '@app/context/Events';

import Orb from './Orb';
import Event from './Event';

import useHooks from './App.hooks';
import styles from './App.module.css';

const App: FC = () => {
  const { events } = useEvents();
  const { createEvent } = useHooks();

  const sortedEvents = [...events].sort(
    (a, b) =>
      a.date.getTime() -
      b.date.getTime()
  );

  return (
    <>
      <Orb />
      <header className={styles.Header}>
        <Button onClick={createEvent}>
          + New Event
        </Button>
      </header>
      <main className={styles.Main}>
        {sortedEvents.map((props) => (
          <Event
            key={props.id}
            {...props}
          />
        ))}
      </main>
    </>
  );
};

export default App;
