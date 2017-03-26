import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsService } from './albums.service';


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [AlbumsService]
})
export class ApiModule { }
