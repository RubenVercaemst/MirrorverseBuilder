import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-guardians',
  templateUrl: './filter-guardians.component.html',
  styleUrls: ['./filter-guardians.component.css'],
})
export class FilterGuardiansComponent {
  @Output() filterGuardianByStringEvent = new EventEmitter<string>();
  @Output() filterGuardianByClassEvent = new EventEmitter<string[]>();

  filteredClasses: any;
  classes: any[] = [
      { id: 1, value: 'Melee', isSelected: true },
      { id: 2, value: 'Support', isSelected: true },
      { id: 3, value: 'Ranged', isSelected: true },
      { id: 4, value: 'Tank', isSelected: true },
    ];

  filterStringInput(event: Event) {
    const filterStringValue = (event.target as HTMLInputElement).value;
    this.filterGuardianByStringEvent.emit(filterStringValue.toLowerCase());
  }

  filterClassInput() {
    const filterClassesValue = this.classes.filter((c: any) => c.isSelected);
    this.filterGuardianByClassEvent.emit(
      filterClassesValue.map((f: any) => f.value.toLowerCase())
    );
  }
}
