import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AlbumsService, Album } from '../api';

@Component({
  selector: 'app-album-container',
  template: `
    <app-album [album]="album | async"></app-album>
  `,
})
export class AlbumContainerComponent implements OnInit {

  album: Observable<Album>;
  constructor(private albumsService: AlbumsService) { }

  ngOnInit() {
    this.album = this.albumsService.getAlbum();
  }
}
