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
      <div className={styles.Name}>
        <div className={styles.Prompt}>
          {days > 0 ? (
            <>{days} days until:</>
          ) : (
            <>Event passed:</>
          )}
        </div>
        <input
          type="text"
          value={title}
          onChange={updateTitle(id)}
        />
      </div>
      <div className={styles.Actions}>
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
    </div>
  );
};

export default Event;
