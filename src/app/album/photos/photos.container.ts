import { Component, OnInit, Input } from '@angular/core';
import { AlbumsService, Photo } from '../../api';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-photos-container',
  template: `
    <app-filter (filter)="getPhotos($event)"></app-filter>
    <app-photos [photos]="photos | async"></app-photos>
  `,
})
export class PhotosContainerComponent implements OnInit {
  @Input() albumId: number;

  photos: Observable<Photo[]>;

  constructor(private albumService: AlbumsService) { }

  ngOnInit() {
    this.getPhotos();
  }
  getPhotos(filter?: string) {
    this.photos = this.albumService.getAlbumPhotos(this.albumId, filter);
  }
}
