import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DetailsService } from '../../services/details.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit , OnDestroy{
  private unsubscribe: Subscription[] = [];
  @Input() from!:string;
  @Input() to!:string;

  arrayOfCharts:any = [];
  constructor(private detailsService:DetailsService) { }

  ngOnInit(): void {
    for (let i = 0; i < 11; i++) {
      this.caluculateLastDaysInAllMonthesPastYear(i);
    }
  }
  caluculateLastDaysInAllMonthesPastYear(m:any){
    let day = new Date((new Date().getFullYear() - 1), m +1, 0).getDate();
    this.getLatestRates((new Date().getFullYear() - 1) + '-' + ((m+1) < 10 ? '0'+(m+1) : (m+1)) + '-' + day);
  }
  getLatestRates(date:any){
    const ref =   this.detailsService.getLatestRates(date,this.from , this.to).subscribe(data =>{
      console.log(data);
    })
    this.unsubscribe.push(ref);
  }
  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}