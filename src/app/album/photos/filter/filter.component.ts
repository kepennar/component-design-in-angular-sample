import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter',
  template: `
    <input type="text" [formControl]="filterControl" />
  `,
  styles: []
})
export class FilterComponent implements OnInit {
  public filterControl = new FormControl();
  @Output() filter = new EventEmitter();

  ngOnInit() {
    this.filterControl.valueChanges.debounceTime(400)
    .subscribe(filter => {
      this.filter.next(filter);
    });
  }

}
