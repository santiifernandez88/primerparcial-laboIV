import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"primerparcialhosting","appId":"1:17973942078:web:10c3a7ea55561e1f80be6f","storageBucket":"primerparcialhosting.appspot.com","apiKey":"AIzaSyAWf5oaWl6I4QtRgoDeSYocwDsWwYm928k","authDomain":"primerparcialhosting.firebaseapp.com","messagingSenderId":"17973942078"})),
  provideAuth(() => getAuth()),
  provideFirestore(() => getFirestore()),
  provideHttpClient()]
};
