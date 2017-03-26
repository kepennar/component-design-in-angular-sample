import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album.component';
import { AlbumContainerComponent } from './album.container';
import { PhotosContainerComponent, PhotosComponent, PhotoComponent } from './photos';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AlbumContainerComponent, AlbumComponent, PhotosContainerComponent, PhotosComponent, PhotoComponent],
  exports: [AlbumContainerComponent]
})
export class AlbumModule { }
