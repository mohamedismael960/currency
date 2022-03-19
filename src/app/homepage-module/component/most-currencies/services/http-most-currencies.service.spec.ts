import { TestBed } from '@angular/core/testing';

import { HttpMostCurrenciesService } from './http-most-currencies.service';

describe('HttpMostCurrenciesService', () => {
  let service: HttpMostCurrenciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpMostCurrenciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
