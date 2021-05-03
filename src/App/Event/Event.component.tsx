import React from 'react';
import type { FC } from 'react';

import Button from '@app/Button';
import type { Event as EventType } from '@app/context/Events';

import useHooks from './Event.hooks';
import styles from './Event.module.css';
import {
  getDays,
  stringifyDate,
} from './Event.utils';

type Props = EventType;

const Event: FC<Props> = ({
  id,
  date,
  title,
}) => {
  const {
    updateDate,
    updateTitle,
    deleteEvent,
  } = useHooks();

  const days = getDays(date);

  return (
    <div className={styles.Container}>
      <div>
        {days > 0 ? (
          <>{days} days until:</>
        ) : (
          <>Event passed:</>
        )}
        <input
          type="text"
          value={title}
          className={styles.Title}
          onChange={updateTitle(id)}
        />
      </div>
      <input
        type="date"
        value={stringifyDate(date)}
        onChange={updateDate(id)}
      />
      <Button
        onClick={deleteEvent(id)}
        tabIndex={-1}
      >
        - Delete Event
      </Button>
    </div>
  );
};

export default Event;
