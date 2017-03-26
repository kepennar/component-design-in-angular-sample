import { Component, Input } from '@angular/core';
import { Photo } from '../../../api';

@Component({
  selector: 'app-photo',
  template: `
    <h3>{{photo.title | titlecase }}</h3>
    <img [src]="photo.url" />
  `,
})
export class PhotoComponent {
  @Input() photo: Photo;

}
