import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {

  @Input() selectedGuardians: any;

  constructor() { }

  ngOnInit(): void {
  }

  removeSelectedGuardian(guardian: any){
    //console.log("removed:" + guardian);
    //console.log("guardian position:" + this.selectedGuardians.indexOf(guardian));
    this.selectedGuardians[this.selectedGuardians.indexOf(guardian)] = [];
    console.log("guardian changed");
    return false;
  }

  detailsSelectedGuardian(guardian: any){
    console.log("guardian info");
  }
}


