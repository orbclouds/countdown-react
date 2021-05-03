import {
  useContext,
  createContext,
} from 'react';
import type {
  Dispatch,
  SetStateAction,
} from 'react';

export interface Event {
  id: string;
  date: Date;
  title: string;
}

export interface EventContext {
  events: Event[];
  setEvents: Dispatch<
    SetStateAction<Event[]>
  >;
}

export const Events = createContext<EventContext>(
  {} as EventContext
);

export const useEvents = (): EventContext =>
  useContext(Events);
