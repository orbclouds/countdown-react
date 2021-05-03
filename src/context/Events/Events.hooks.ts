import {
  useRef,
  useState,
  useEffect,
} from 'react';

import type {
  Event,
  EventContext,
} from './Events.context';

type Hooks = EventContext;

const useHooks = (): Hooks => {
  const isFirstLoad = useRef(true);
  const [events, setEvents] = useState<
    Event[]
  >([] as Event[]);

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      const persistedEvents = localStorage.getItem(
        'events'
      );
      if (!persistedEvents) {
        localStorage.setItem(
          'events',
          JSON.stringify(events)
        );
        return;
      }
      try {
        const events = JSON.parse(
          persistedEvents
        ).map((event: Event) => ({
          ...event,
          date: new Date(event.date),
        }));
        setEvents(events);
      } catch {
        // no-op
      }
    } else {
      localStorage.setItem(
        'events',
        JSON.stringify(events)
      );
    }
  }, [events]);

  return { events, setEvents };
};

export default useHooks;
