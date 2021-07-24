import { TestBed } from '@angular/core/testing';

import { ClickorderService } from './clickorder.service';

describe('ClickorderService', () => {
  let service: ClickorderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClickorderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
