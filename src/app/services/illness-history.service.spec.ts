import { TestBed } from '@angular/core/testing';

import { IllnessHistoryService } from './illness-history.service';

describe('IllnessHistoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IllnessHistoryService = TestBed.get(IllnessHistoryService);
    expect(service).toBeTruthy();
  });
});
