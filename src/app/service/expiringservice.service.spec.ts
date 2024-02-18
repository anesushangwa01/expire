import { TestBed } from '@angular/core/testing';

import { ExpiringserviceService } from './expiringservice.service';

describe('ExpiringserviceService', () => {
  let service: ExpiringserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpiringserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
