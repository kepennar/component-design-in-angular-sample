import { TestBed, inject } from '@angular/core/testing';

import { AlbumsService } from './albums.service';

describe('PhotosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlbumsService]
    });
  });

  it('should ...', inject([AlbumsService], (service: AlbumsService) => {
    expect(service).toBeTruthy();
  }));
});
