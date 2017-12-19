import { HttpModule } from '@angular/http';
import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { AgmCoreModule } from '@agm/core';
import { Geolocation } from "@ionic-native/geolocation";

import { MyApp } from "./app.component";
import {
  HomePage,
  LocationSetPage,
  PlacePage,
  PlaceAddPage
} from "../pages/pages";

@NgModule({
  declarations: [MyApp, HomePage, LocationSetPage, PlacePage, PlaceAddPage],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBln9gB9i-_IfBTXuka0Lb6Vh7l7ZhKihU"
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, LocationSetPage, PlacePage, PlaceAddPage],
  providers: [
    Geolocation,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ]
})
export class AppModule {}
