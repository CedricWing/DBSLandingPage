import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { LinksPage } from '../pages/links/links';
import { ProfilePage } from '../pages/profile/profile';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { LoginPage } from '../pages/login/login';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpProvider } from '../providers/http/http';

//http
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    MyApp,
    DashboardPage,
    LinksPage,
    ProfilePage,
    TabsControllerPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DashboardPage,
    LinksPage,
    ProfilePage,
    TabsControllerPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpProvider
  ]
})
export class AppModule {}