import { Injectable } from '@angular/core';
import { HttpCurrencyExchangerService } from './http-currency-exchanger.service';
import { catchError, finalize, map } from 'rxjs/operators';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { convertData } from '../models/currencyExchanger.module';

@Injectable({
  providedIn: 'root'
})
export class CurrencyExchangerService {

  AllCurrencies$!:Observable<any>;
  AllCurrenciesBehaviorSubject!: BehaviorSubject<any>;

  get AllCurrencies() {
    return this.AllCurrenciesBehaviorSubject.value;
  }
  set AllCurrencies(cuurency: any) {
    this.AllCurrenciesBehaviorSubject.next(cuurency);
  }

  constructor(private httpCurrencyExchangerService:HttpCurrencyExchangerService) {
    this.AllCurrenciesBehaviorSubject = new BehaviorSubject<any>({});
    this.AllCurrencies$ = this.AllCurrenciesBehaviorSubject.asObservable();
   }

  getCurrencies(){
    return this.httpCurrencyExchangerService.getCurrencies()
    .pipe(
      map((currencies:any)=> {
        this.AllCurrencies = currencies?.symbols;
        return currencies;
      }),      
      catchError((err) => {
        return throwError(err);
      }),
    )
  }
  convert(convertObj:convertData){
    return this.httpCurrencyExchangerService.convert(convertObj)
    .pipe(
      map((data:any)=> {
        return data;
      }),      
      catchError((err) => {
        return throwError(err);
      }),
    )
  }
}
