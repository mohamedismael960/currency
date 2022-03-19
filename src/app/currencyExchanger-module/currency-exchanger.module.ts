import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyExchangerComponent } from './currency-exchanger.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CurrencyExchangerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    CurrencyExchangerComponent
  ]
})
export class CurrencyExchangerModule { }
