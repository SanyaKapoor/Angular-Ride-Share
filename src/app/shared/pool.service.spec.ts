import { TestBed } from '@angular/core/testing';

import { PoolService } from './pool.service';

describe('CountryService', () => {
  let service: PoolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});