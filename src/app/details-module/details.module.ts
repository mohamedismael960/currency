import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';
import { CurrencyExchangerModule } from '../currencyExchanger-module/currency-exchanger.module';
import { ChartsComponent } from './components/charts/charts.component';


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
