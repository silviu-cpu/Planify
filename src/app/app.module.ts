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
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginserviceService } from './services/loginservice.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { TextsvgComponent } from './components/textsvg/textsvg.component';
import { PerfectplanComponent } from './components/perfectplan/perfectplan.component';
import { PricecardsComponent } from './components/pricecards/pricecards.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { VideoComponent } from './components/video/video.component';
import { LogincardComponent } from './components/logincard/logincard.component';


@NgModule({
  declarations: [
    AppComponent,
    PricingComponent,
    AboutComponent,
    ContactComponent,
    HowitworksComponent,
    CardsComponent,
    MediapostsComponent,
    FreeComponent,
    HeaderComponent,
    FooterComponent,
    RegistrationComponent,
    DashboardComponent,
    LoginComponent,
    TextsvgComponent,
    PerfectplanComponent,
    PricecardsComponent,
    AboutusComponent,
    VideoComponent,
    LogincardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ LoginserviceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
