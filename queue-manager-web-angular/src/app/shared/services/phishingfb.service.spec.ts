import { TestBed } from '@angular/core/testing';

import { PhishingfbService } from './phishingfb.service';

describe('PhishingfbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhishingfbService = TestBed.get(PhishingfbService);
    expect(service).toBeTruthy();
  });
});
