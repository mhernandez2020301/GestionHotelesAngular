import { TestBed } from '@angular/core/testing';

import { AdminhGuard } from './adminh.guard';

describe('AdminhGuard', () => {
  let guard: AdminhGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminhGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
