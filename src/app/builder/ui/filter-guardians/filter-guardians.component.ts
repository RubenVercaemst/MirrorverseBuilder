import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-guardians',
  templateUrl: './filter-guardians.component.html',
  styleUrls: ['./filter-guardians.component.css'],
})
export class FilterGuardiansComponent {
  @Output() filterGuardianEvent = new EventEmitter<string>();

  filterStringInput(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filterGuardianEvent.emit(filterValue.toLowerCase());
  }
}
