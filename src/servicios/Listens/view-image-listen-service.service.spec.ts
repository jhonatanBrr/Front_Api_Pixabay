import { TestBed } from '@angular/core/testing';

import { ViewImageListenServiceService } from './view-image-listen-service.service';

describe('ViewImageListenServiceService', () => {
  let service: ViewImageListenServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewImageListenServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
