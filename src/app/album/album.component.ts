import { Component, Input } from '@angular/core';

import { AlbumsService, Album } from '../api';

@Component({
  selector: 'app-album',
  template: `
    <h2>{{album?.title  | titlecase}}</h2>
    <app-photos-container *ngIf="!!album" [albumId]="album.id"></app-photos-container>
  `,
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {
  @Input() album: Album;
}
