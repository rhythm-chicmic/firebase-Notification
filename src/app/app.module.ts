import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { initializeApp } from "firebase/app";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';

const firebase =  {
  apiKey: "AIzaSyCxxlu97GKLWzu9sLOAPiEDbe_3aj7g2fs",
  authDomain: "serviceworker-8de42.firebaseapp.com",
  projectId: "serviceworker-8de42",
  storageBucket: "serviceworker-8de42.appspot.com",
  messagingSenderId: "550352409178",
  appId: "1:550352409178:web:78a8c72ce4c8e6e051be63",
  measurementId: "G-753B08KJR2",
  vapidKey:"BKS75fF0cLZFmN-eZNWJNOR3Dcyoj6lkP04Blu7KMZtnUHWgwhHciUMtZoGrnPXyhMZSS6HQAdZn4bdcxFs3GjM"
}

initializeApp(firebase);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
