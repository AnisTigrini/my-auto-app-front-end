import { TestBed } from '@angular/core/testing';

import { ConnexionGuard } from './connexion.guard';

describe('ConnexionGuard', () => {
  let guard: ConnexionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ConnexionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
