import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostCurrenciesComponent } from './most-currencies.component';

describe('MostCurrenciesComponent', () => {
  let component: MostCurrenciesComponent;
  let fixture: ComponentFixture<MostCurrenciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostCurrenciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostCurrenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
