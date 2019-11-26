import { TestBed } from '@angular/core/testing';

import { MedialHistoryService } from './medial-history.service';

describe('MedialHistoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MedialHistoryService = TestBed.get(MedialHistoryService);
    expect(service).toBeTruthy();
  });
});
