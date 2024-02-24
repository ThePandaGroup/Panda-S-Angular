import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { ShoepageComponent } from './shoepage/shoepage.component';
import { StorefrontpageComponent } from './storefrontpage/storefrontpage.component';


const routes: Routes = [
  {path: '', component: WelcomepageComponent},
  {path: 'storefront', component: StorefrontpageComponent},
  {path: 'storefront/shoe/:id', component: ShoepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
