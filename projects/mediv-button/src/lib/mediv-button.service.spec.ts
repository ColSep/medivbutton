import { TestBed } from '@angular/core/testing';

import { MedivButtonService } from './mediv-button.service';

describe('MedivButtonService', () => {
  let service: MedivButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedivButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
