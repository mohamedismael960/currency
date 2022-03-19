import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { convertData } from '../models/currencyExchanger.module';

const API_USERS_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class HttpCurrencyExchangerService {

  constructor(private http: HttpClient) { }

  getCurrencies(){
    return this.http.get(`${API_USERS_URL}symbols`);
  }
  convert(convertObj:convertData){
    const paramObj:any= convertObj;
    return this.http.get<any>(`${API_USERS_URL}convert`,{
      params:paramObj
    });
  }
}
