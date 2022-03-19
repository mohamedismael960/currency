import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API_USERS_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class HttpDetailsService {


  constructor(private http: HttpClient) { }

  getLatestRates(date:any,from:string,to:string){
    return this.http.get(`${API_USERS_URL}`+date,{
      params:{
        base :'EUR',
        symbols:from +','+to,
      }
    });
  }
}
