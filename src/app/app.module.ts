import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth, AuthModule } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    AuthModule,
    provideFirebaseApp(() => initializeApp({"projectId":"car-inspection-portal","appId":"1:128370555043:web:8d246b3324ab0b7628a716","databaseURL":"https://car-inspection-portal-default-rtdb.asia-southeast1.firebasedatabase.app","storageBucket":"car-inspection-portal.appspot.com","apiKey":"AIzaSyBsLK5umOujc5DfzLzKUcJvotnrIDJr8eA","authDomain":"car-inspection-portal.firebaseapp.com","messagingSenderId":"128370555043"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
