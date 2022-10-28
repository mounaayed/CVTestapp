import { TestBed } from '@angular/core/testing';

import { TempalteCVService } from './tempalte-cv.service';

describe('TempalteCVService', () => {
  let service: TempalteCVService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TempalteCVService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
