import React, {
  StrictMode,
} from 'react';
import { render } from 'react-dom';
import ReactGA from 'react-ga';

import '@app/global.css';
import App from '@app/App';
import EventsProvider from '@app/context/Events';

const target = document.getElementById(
  'app'
);

render(
  <StrictMode>
    <EventsProvider>
      <App />
    </EventsProvider>
  </StrictMode>,
  target
);

ReactGA.initialize(
  import.meta.env
    .SNOWPACK_PUBLIC_GOOGLE_ANALYTICS_ID
);
ReactGA.pageview(
  window.location.pathname +
    window.location.search
);
