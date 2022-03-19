import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { cuurencyInterface } from '../currencyExchanger-module/models/currencyExchanger.module';
import { CurrencyExchangerService } from '../currencyExchanger-module/services/currency-exchanger.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  from!:string;
  to!:string
  allCurrencies$!:Observable<any>;
  cuurency!:cuurencyInterface;
  constructor(private route:ActivatedRoute,
    private currencyExchangerService:CurrencyExchangerService,
    ) { 
    this.allCurrencies$ = this.currencyExchangerService.AllCurrencies$;
  } 

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((param:any)=>{
      this.from = param.params.from;
      this.to = param.params.to;
    })
  }
}