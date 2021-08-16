import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HowitworksComponent } from './components/howitworks/howitworks.component';
import { PricingComponent } from './components/pricing/pricing.component';

const routes: Routes = [
  {path: '', component: AboutComponent},
  {path: 'pricing', component: PricingComponent},
  {path: 'aboutus', component: ContactComponent},
  {path: 'howitworks', component: HowitworksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
