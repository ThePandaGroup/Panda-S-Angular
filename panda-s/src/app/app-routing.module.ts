import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { ShoepageComponent } from './shoepage/shoepage.component';
import { StorefrontpageComponent } from './storefrontpage/storefrontpage.component';


const routes: Routes = [
  {path: '', component: WelcomepageComponent},
  {path: 'storefront/:storefrontId', component: StorefrontpageComponent},
  {path: 'storefront/shoe/:shoeId', component: ShoepageComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
