import { TestBed } from '@angular/core/testing';

import { EigenAPIService } from './eigen-api.service';

describe('EigenAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EigenAPIService = TestBed.get(EigenAPIService);
    expect(service).toBeTruthy();
  });
});
