import { TestBed } from '@angular/core/testing';

import { GuestuserService } from './guestuser.service';

describe('GuestuserService', () => {
  let service: GuestuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuestuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
