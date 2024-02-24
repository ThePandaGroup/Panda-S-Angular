import { TestBed } from '@angular/core/testing';

import { PandaproxyService } from './pandaproxy.service';

describe('PandaproxyService', () => {
  let service: PandaproxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PandaproxyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
