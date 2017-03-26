import { Component, Input } from '@angular/core';
import { Photo } from '../../api';

@Component({
  selector: 'app-photos',
  template: `
    <app-photo *ngFor="let photo of photos" [photo]="photo"></app-photo>
  `,
})
export class PhotosComponent {
  @Input() photos: Photo[];
}
