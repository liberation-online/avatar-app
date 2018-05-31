import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { SettingsPage} from "../pages/settings/settings";
import { ScannerPage} from "../pages/scanner/scanner";
import { AvatarsPage} from "../pages/avatars/avatars";
import { PassportPage} from "../pages/passport/passport";
import { TabsPage } from '../pages/tabs/tabs';

import { NgxQRCodeModule} from "ngx-qrcode2";
import { BarcodeScanner} from "@ionic-native/barcode-scanner";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SettingsPage,
    ScannerPage,
    AvatarsPage,
    PassportPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    NgxQRCodeModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SettingsPage,
    ScannerPage,
    AvatarsPage,
    PassportPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
