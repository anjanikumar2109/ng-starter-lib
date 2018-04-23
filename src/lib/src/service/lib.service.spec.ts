import { TestBed, inject } from '@angular/core/testing';

import { LibService } from './lib.service';
import { LibConfig } from '../type/lib-config';

describe('LibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LibService]
    });
  });

  it('should create service', inject([LibService], (service: LibService) => {
    expect(service).toBeTruthy();
  }));

  it('should return 42 from getMeaning', inject([LibService, LibConfig], (service: LibService) => {
    expect(service.getRandomQuote()).toBeDefined();
  }));
});
