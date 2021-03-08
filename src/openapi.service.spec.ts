import { TestBed } from '@angular/core/testing';

import { OpenapiService } from './openapi.service';

describe('OpenapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpenapiService = TestBed.get(OpenapiService);
    expect(service).toBeTruthy();
  });
});
