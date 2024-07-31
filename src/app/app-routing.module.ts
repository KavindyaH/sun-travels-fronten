import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './components/search/search.component';
import { AddContractComponent } from './pages/add-contract/add-contract.component';
import { AddHotelComponent } from './pages/add-hotel/add-hotel.component';
import { AllContractsComponent } from './pages/all-contracts/all-contracts.component';
import { AllHotelsComponent } from './pages/all-hotels/all-hotels.component';
import { HomeComponent } from './pages/home/home.component';
import { ViewContractComponent } from './pages/view-contract/view-contract.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-hotel', component: AddHotelComponent },
  { path: 'all-hotels', component: AllHotelsComponent },
  { path: 'add-contract', component: AddContractComponent },
  { path: 'all-contracts', component: AllContractsComponent },
  { path: 'view-contract/:id', component: ViewContractComponent },
  { path: 'search', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
