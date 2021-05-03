import React from 'react';
import type { FC } from 'react';

import { Events } from './Events.context';

import useHooks from './Events.hooks';

const EventsProvider: FC = ({
  children,
}) => {
  const value = useHooks();

  return (
    <Events.Provider value={value}>
      {children}
    </Events.Provider>
  );
};

export default EventsProvider;
