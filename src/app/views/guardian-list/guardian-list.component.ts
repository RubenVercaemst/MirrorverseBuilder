import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-guardian-list',
  templateUrl: './guardian-list.component.html',
  styleUrls: ['./guardian-list.component.css']
})
export class GuardianListComponent implements OnInit {

  //selectedGuardians: any = [];

  @Input() guardians: any;
  @Output() sendToParent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    //this.selectedGuardians = this.guardians.slice(0,3);
    //this.selectedGuardians = [this.guardians[0],[0],this.guardians[0]];
    //console.log(this.selectedGuardians);
    //this.selectedGuardians = [this.guardians[0],this.guardians[0],this.guardians[0]]
  }

  editSelectedGuardians(guardian: any){
    this.sendToParent.emit(guardian);
    //console.log(guardian)
  }
}
