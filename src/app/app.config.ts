import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
  provideRouter,
  InMemoryScrollingFeature,
  withInMemoryScrolling
} from '@angular/router';

import { routes } from './app.routes';

const inMemoryScrollingFeature: InMemoryScrollingFeature = withInMemoryScrolling({
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, inMemoryScrollingFeature)
  ]
};
