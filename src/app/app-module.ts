import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Create } from './create/create';
import { List } from './list/list';
import { Ratings } from './rating/rating';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [App, Create, List, Ratings],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyDB1jQFOYSX-d4LLnPdx_-FOhjrEES4PyM",
      authDomain: "movie-rating-app-b3988.firebaseapp.com",
      databaseURL: "https://movie-rating-app-b3988-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "movie-rating-app-b3988",
      storageBucket: "movie-rating-app-b3988.firebasestorage.app",
      messagingSenderId: "11476837044",
      appId: "1:11476837044:web:07d369c57c6992a26dede1",
      measurementId: "G-QPFXDLK639"
    })),
    provideDatabase(() => getDatabase())
  ],
  bootstrap: [App],
})
export class AppModule {}