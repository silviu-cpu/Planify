import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PricingComponent } from './components/pricing/pricing.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HowitworksComponent } from './components/howitworks/howitworks.component';
import { CardsComponent } from './components/cards/cards.component';
import { MediapostsComponent } from './components/mediaposts/mediaposts.component';
import { FreeComponent } from './components/free/free.component';

@NgModule({
  declarations: [
    AppComponent,

    PricingComponent,
    AboutComponent,
    ContactComponent,
    HowitworksComponent,
    CardsComponent,
    MediapostsComponent,
    FreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
