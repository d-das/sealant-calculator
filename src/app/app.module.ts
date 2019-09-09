import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ContactPage } from './contact/contact.page';
import { InstructionsPage } from './instructions/instructions.page';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ContactPage,
    InstructionsPage
  ],
  entryComponents: [
    ContactPage,
    InstructionsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    ContactPage,
    InstructionsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
