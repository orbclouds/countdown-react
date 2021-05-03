import { useCallback } from 'react';
import type { MouseEventHandler } from 'react';

import { useEvents } from '@app/context/Events';

interface Hooks {
  createEvent: MouseEventHandler;
}

const useHooks = (): Hooks => {
  const { setEvents } = useEvents();

  const createEvent = useCallback(async () => {
    const id = btoa(
      await crypto
        .getRandomValues(
          new Uint8Array(2)
        )
        .toString()
    );
    setEvents((prev) => [
      ...prev,
      {
        id,
        date: new Date(),
        title: 'New Event',
      },
    ]);
  }, []);

  return { createEvent };
};

export default useHooks;
