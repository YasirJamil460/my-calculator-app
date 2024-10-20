import { TestBed } from '@angular/core/testing';

import { CalcServicesService } from './calc-services.service';

describe('CalcServicesService', () => {
  let service: CalcServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
