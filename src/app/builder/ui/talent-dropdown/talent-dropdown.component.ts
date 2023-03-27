import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-talent-dropdown',
  templateUrl: './talent-dropdown.component.html',
  styleUrls: ['./talent-dropdown.component.css']
})
export class TalentDropdownComponent implements OnInit {
  options = ['Option 1', 'Option 2', 'Option 3'];
  showDropdown = false;
  selectedOption: any;
  currentlySelectedOption: any;
  showTooltip = false;

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  selectOption(option: any) {
    if(this.currentlySelectedOption != undefined){
      this.currentlySelectedOption.selected = false;
    }
    this.selectedOption = option;
    this.toggleDropdown();
    this.optionSelected.emit(option);
    this.currentlySelectedOption = option;
  }

  @Output() optionSelected = new EventEmitter<string>();

  @Input() talents: any;

  constructor() { }

  ngOnInit(): void {
  }

}
