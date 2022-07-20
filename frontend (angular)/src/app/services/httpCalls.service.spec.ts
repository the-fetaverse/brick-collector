import { TestBed } from '@angular/core/testing';

import { HttpCalls } from './httpCalls.service';

describe('HttpCalls', () => {
  let service: HttpCalls;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpCalls);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
