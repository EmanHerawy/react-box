import { TestBed } from '@angular/core/testing';

import { SimpleStorageService } from './simple-storage.service';

describe('SimpleStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SimpleStorageService = TestBed.get(SimpleStorageService);
    expect(service).toBeTruthy();
  });
});
