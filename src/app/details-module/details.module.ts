import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';
import { ChartsComponent } from './components/charts/charts.component';
import { CurrencyExchangerModule } from '../currencyExchanger-module/currency-exchanger.module';


@NgModule({
  declarations: [
    DetailsComponent,
    ChartsComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    CurrencyExchangerModule
  ]
})
export class DetailsModule { }
