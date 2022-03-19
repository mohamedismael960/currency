import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { cuurencyInterface } from 'src/app/currencyExchanger-module/models/currencyExchanger.module';
@Injectable({
  providedIn: 'root'
})
export class MostCuurenciesService {

  mostCurrencies$!:Observable<cuurencyInterface[]>;
  mostCurrenciesBehaviorSubject!: BehaviorSubject<cuurencyInterface[]>;

  get mostCurrencies() {
    return this.mostCurrenciesBehaviorSubject.value;
  }
  set mostCurrencies(cuurency: any) {
    this.mostCurrenciesBehaviorSubject.next(cuurency);
  }

  constructor() {
    this.mostCurrenciesBehaviorSubject = new BehaviorSubject<cuurencyInterface[]>([]);
    this.mostCurrencies$ = this.mostCurrenciesBehaviorSubject.asObservable();
  }

}
