import { TestBed } from '@angular/core/testing';

import { AutenticService } from './autentic.service';

describe('AutenticService', () => {
  let service: AutenticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutenticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
