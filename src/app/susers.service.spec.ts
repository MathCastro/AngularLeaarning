import { TestBed } from '@angular/core/testing';

import { SusersService } from './susers.service';

describe('SusersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SusersService = TestBed.get(SusersService);
    expect(service).toBeTruthy();
  });
});
