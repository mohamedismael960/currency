import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { MostCuurenciesService } from '../homepage-module/component/most-currencies/services/most-cuurencies.service';
import { convertData } from './models/currencyExchanger.module';
import { CurrencyExchangerService } from './services/currency-exchanger.service';

@Component({
  selector: 'app-currency-exchanger',
  templateUrl: './currency-exchanger.component.html',
  styleUrls: ['./currency-exchanger.component.scss']
})
export class CurrencyExchangerComponent implements OnInit , OnDestroy , OnChanges{
  form!:FormGroup;
  private unsubscribe: Subscription[] = [];
  currencies:string[] = [];

  @Input() from!:string;
  @Input() to!:string;

  @Output() to_Changes = new EventEmitter();
  constructor(private fb:FormBuilder,
    private currencyExchangerService:CurrencyExchangerService,
    private mostCuurenciesService:MostCuurenciesService,
    public router:Router
    ) { }

  ngOnInit(): void {
    this.intiForm();
    this.getCurrencies();
  }
  ngOnChanges(): void {
    if(this.form){
      this.form.get('from')?.setValue(this.from);
      this.form.get('to')?.setValue(this.to);
      this.form.get('from')?.disable();
      this.form.get('from')?.updateValueAndValidity();
    }
  }
  intiForm(){
    this.form = this.fb.group({
      amount:['1',Validators.required],
      from:[{value:(this.from ? this.from : 'EUR'), disabled:this.from ? true : false},Validators.required],
      to:[(this.to ? this.to : 'USD'),Validators.required],
    });
    const sub:any = this.form.get('to')?.valueChanges.subscribe(x => {
      this.to_Changes.next(x);
    })
    this.unsubscribe.push(sub);
  }
  get f() {
    return this.form.controls;
  }

  getCurrencies(){
    const Sub1ref =  this.currencyExchangerService.getCurrencies().pipe(first())
    .subscribe((data:any)=>{
      this.currencies = data?.symbols;
    });
    this.unsubscribe.push(Sub1ref);
  }

  convert(){
    const result: {
      [key: string]: string;
    } = {};
    Object.keys(this.f).forEach((key) => {
      result[key] = this.f[key].value;
    });
    const convertObj = new convertData();
    convertObj.setConvertData(result);
    const Sub1ref =  this.currencyExchangerService.convert(convertObj).pipe(first())
    .subscribe((data:any)=>{
      alert(data.error.info);      
    let arr:any = this.mostCuurenciesService.mostCurrencies 
     arr.push(convertObj)
     this.mostCuurenciesService.mostCurrencies = arr;
    });
    this.unsubscribe.push(Sub1ref);
  }

  swap(){
    const from = this.f.from.value;
    const to = this.f.to.value;
    this.form.get('from')?.setValue(to);
    this.form.get('to')?.setValue(from);
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
