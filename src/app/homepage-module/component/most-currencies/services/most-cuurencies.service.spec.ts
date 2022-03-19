import { TestBed } from '@angular/core/testing';

import { MostCuurenciesService } from './most-cuurencies.service';

describe('MostCuurenciesService', () => {
  let service: MostCuurenciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MostCuurenciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
