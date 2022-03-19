import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-currency-exchanger',
  templateUrl: './currency-exchanger.component.html',
  styleUrls: ['./currency-exchanger.component.scss']
})
export class CurrencyExchangerComponent implements OnInit {
  form!:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.intiForm();
    this.getCurrencies();
  }
  intiForm(){
    this.form = this.fb.group({
      amount:['1',Validators.required],
      from:['',Validators.required],
      to:['',Validators.required],
    });
  }

  getCurrencies(){
    
  }
}
