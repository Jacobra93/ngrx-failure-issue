import { TestBed } from '@angular/core/testing';

import { CatsPageService } from './cats-page.service';

describe('CatsPageService', () => {
  let service: CatsPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatsPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
