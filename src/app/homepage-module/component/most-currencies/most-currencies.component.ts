import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { cuurencyInterface } from 'src/app/currencyExchanger-module/models/currencyExchanger.module';
import { MostCuurenciesService } from './services/most-cuurencies.service';

@Component({
  selector: 'app-most-currencies',
  templateUrl: './most-currencies.component.html',
  styleUrls: ['./most-currencies.component.scss']
})
export class MostCurrenciesComponent implements OnInit {
  mostCurrencies$!:Observable<cuurencyInterface[]>;
  constructor(private mostCuurenciesService:MostCuurenciesService) { 
    this.mostCurrencies$ = this.mostCuurenciesService.mostCurrencies$
  }

  ngOnInit(): void {

  }

}
