import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

const firebaseConfig = {
  apiKey: "AIzaSyB78A-H2EnE1wA6IG5PxPEiB9BTXWhmnDY",
  authDomain: "ring-of-fire-fc681.firebaseapp.com",
  projectId: "ring-of-fire-fc681",
  storageBucket: "ring-of-fire-fc681.firebasestorage.app",
  messagingSenderId: "274686784990",
  appId: "1:274686784990:web:e0184aec4ed2f0bbfb594f"
};


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ]
};
