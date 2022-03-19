import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpDetailsService } from './http-details.service';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private httpDetailsService:HttpDetailsService) { }

  getLatestRates(date:any,from:string,to:string){
    return this.httpDetailsService.getLatestRates(date,from,to)
    .pipe(
      map((latestRate:any)=> {
        return latestRate;
      }),      
      catchError((err) => {
        return throwError(err);
      }),
    )
  }
}
