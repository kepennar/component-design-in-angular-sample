import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>
  <app-album-container></app-album-container>
  `
})
export class AppComponent {
  title = 'Photos album manager';
}
