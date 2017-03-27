import { Component, Input } from '@angular/core';

import { Album } from '../api';

@Component({
  selector: 'app-album',
  template: `
    <h2>{{album?.title  | titlecase}}</h2>
    <app-photos-container *ngIf="!!album" [albumId]="album.id"></app-photos-container>
  `
})
export class AlbumComponent {
  @Input() album: Album;
}
