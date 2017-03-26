import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ApiModule } from './api';
import { AlbumModule } from './album';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ApiModule,
    AlbumModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
