import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HowitworksComponent } from './components/howitworks/howitworks.component';
import { LoginComponent } from './components/login/login.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  {path: '', component: AboutComponent},
  {path: 'pricing', component: PricingComponent},
  {path: 'aboutus', component: ContactComponent},
  {path: 'howitworks', component: HowitworksComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
