import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {

  @Input() selectedGuardians: any;

  selected: any;

  constructor() { }

  ngOnInit(): void {
  }

  removeSelectedGuardian(guardian: any){
    this.selectedGuardians[this.selectedGuardians.indexOf(guardian)] = [];
    return false;
  }

  detailsSelectedGuardian(guardian: any){
  }
}


