import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { authReducer } from './State/Reducers/auth.reducers';
import { AuthEffects } from './State/Effects/auth.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: 
  [provideRouter(routes),
    provideHttpClient(),
    provideStore({ auth: authReducer }),
    provideEffects([AuthEffects]), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
};
