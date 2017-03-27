import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlbumComponent } from './album.component';
import { AlbumContainerComponent } from './album.container';
import { PhotosContainerComponent, PhotosComponent, PhotoComponent } from './photos';
import { FilterComponent } from './photos/filter/filter.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [AlbumContainerComponent, AlbumComponent, PhotosContainerComponent, PhotosComponent, PhotoComponent, FilterComponent],
  exports: [AlbumContainerComponent]
})
export class AlbumModule { }
