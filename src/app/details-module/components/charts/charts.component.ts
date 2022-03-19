import { ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { DetailsService } from '../../services/details.service';


import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit , OnDestroy , OnChanges{
    //start charts

    @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

    public barChartOptions: ChartConfiguration['options'] = {
      responsive: true,
      // We use these empty structures as placeholders for dynamic theming.
      scales: {
        x: {},
        y: {}
      },
      plugins: {
        legend: {
          display: true,
        },
        datalabels: {
          anchor: 'end',
          align: 'end'
        }
      }
    };
    public barChartType: ChartType = 'bar';
    public barChartPlugins = [
      DataLabelsPlugin
    ];
  
    public barChartData: ChartData<'bar'> = {
      labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ,'August' , 'September' ,'October' ,'November' , 'December' ],
      datasets: [
        { data: [  ], label: '' },
        { data: [  ], label: '' }
      ]
    };

  //end chart

  private unsubscribe: Subscription[] = [];
  @Input() from!:string;
  @Input() to!:string;
  arrayOfCharts:any = [];

  
  
  constructor(private detailsService:DetailsService,private cdr:ChangeDetectorRef) { }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.barChartData.datasets[0].label = this.from;
    this.barChartData.datasets[1].label = this.to;
    this.barChartData.datasets[0].data = [];
    this.barChartData.datasets[1].data = [];
    for (let i = 0; i < 12; i++) {
      setTimeout(() => {
        this.caluculateLastDaysInAllMonthesPastYear(i);
      }, 1000);
    }
  }
  caluculateLastDaysInAllMonthesPastYear(m:any){
    let day = new Date((new Date().getFullYear() - 1), m +1, 0).getDate();
    this.getLatestRates((new Date().getFullYear() - 1) + '-' + ((m+1) < 10 ? '0'+(m+1) : (m+1)) + '-' + day , m);
  }
  getLatestRates(date:any , i:number){
    const ref =   this.detailsService.getLatestRates(date,this.from , this.to).subscribe(data =>{
      this.barChartData.datasets[0].data.push((data.rates[this.from]).toFixed(2));
      this.barChartData.datasets[1].data.push((data.rates[this.to]).toFixed(2));
      this.chart?.update();
    })    
    this.unsubscribe.push(ref);
  }
  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}