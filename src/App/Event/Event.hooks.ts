import { useCallback } from 'react';
import type {
  ChangeEvent,
  MouseEventHandler,
  ChangeEventHandler,
} from 'react';

import { useEvents } from '@app/context/Events';

interface Hooks {
  updateDate: (
    id: string
  ) => ChangeEventHandler;
  updateTitle: (
    id: string
  ) => ChangeEventHandler;
  deleteEvent: (
    id: string
  ) => MouseEventHandler;
}

const useHooks = (): Hooks => {
  const { setEvents } = useEvents();

  const updateDate = useCallback(
    (id: string) => ({
      currentTarget,
    }: ChangeEvent) => {
      const {
        value,
      } = currentTarget as HTMLInputElement;
      const [
        year,
        month,
        day,
      ] = value
        .split('-')
        .map((value) =>
          parseInt(value)
        );
      const date = new Date(
        year,
        month,
        day
      );
      setEvents((prev) =>
        prev.map((event) => {
          if (event.id !== id) {
            return event;
          } else {
            return {
              ...event,
              date,
            };
          }
        })
      );
    },
    []
  );

  const updateTitle = useCallback(
    (id: string) => ({
      currentTarget,
    }: ChangeEvent) => {
      const {
        value,
      } = currentTarget as HTMLInputElement;
      setEvents((prev) =>
        prev.map((event) => {
          if (event.id !== id) {
            return event;
          } else {
            return {
              ...event,
              title: value,
            };
          }
        })
      );
    },
    []
  );

  const deleteEvent = useCallback(
    (id: string) => () => {
      setEvents((prev) =>
        prev.filter(
          (event) => event.id !== id
        )
      );
    },
    []
  );

  return {
    updateDate,
    updateTitle,
    deleteEvent,
  };
};

export default useHooks;
