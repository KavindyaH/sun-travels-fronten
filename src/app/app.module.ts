import { HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { AddContractComponent } from './pages/add-contract/add-contract.component';
import { AddHotelComponent } from './pages/add-hotel/add-hotel.component';
import { AllContractsComponent } from './pages/all-contracts/all-contracts.component';
import { AllHotelsComponent } from './pages/all-hotels/all-hotels.component';
import { HomeComponent } from './pages/home/home.component';
import { ViewContractComponent } from './pages/view-contract/view-contract.component';
import { HotelService } from './services/hotel.service';
import { SearchResultsComponent } from './components/search-results/search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    HomeComponent,
    AddHotelComponent,
    AllHotelsComponent,
    AddContractComponent,
    AllContractsComponent,
    ViewContractComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HotelService, provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent]
})
export class AppModule { }
