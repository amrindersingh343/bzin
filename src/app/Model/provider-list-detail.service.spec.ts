import { TestBed } from '@angular/core/testing';

import { ProviderListDetailService } from './provider-list-detail.service';

describe('ProviderListDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProviderListDetailService = TestBed.get(ProviderListDetailService);
    expect(service).toBeTruthy();
  });
});
