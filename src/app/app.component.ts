import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AlbumsService, Album } from './api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Photos album manager';

  album: Observable<Album>;
  constructor(private albumsService: AlbumsService) { }

  ngOnInit() {
    this.album = this.albumsService.getAlbums();
  }
}
