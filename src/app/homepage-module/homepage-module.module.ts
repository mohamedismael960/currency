import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageModuleRoutingModule } from './homepage-module-routing.module';
import { MostCurrenciesComponent } from './component/most-currencies/most-currencies.component';
import { HomepageComponent } from './homepage.component';
import { CurrencyExchangerModule } from '../currencyExchanger-module/currency-exchanger.module';


@NgModule({
  declarations: [
    HomepageComponent,
    MostCurrenciesComponent
  ],
  imports: [
    CommonModule,
    HomepageModuleRoutingModule,
    CurrencyExchangerModule
  ]
})
export class HomepageModuleModule { }
