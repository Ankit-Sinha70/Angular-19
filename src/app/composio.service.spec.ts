import { TestBed } from '@angular/core/testing';

// import { ComposioServiceService } from './composio.service';
import { ComposioService } from './composio.service';

describe('ComposioServiceService', () => {
  let service: ComposioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComposioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
