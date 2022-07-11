import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-guardian-list',
  templateUrl: './guardian-list.component.html',
  styleUrls: ['./guardian-list.component.css']
})
export class GuardianListComponent implements OnInit {

  @Input() guardians: any;
  @Output() sendToParent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  editSelectedGuardians(guardian: any){
    //send data to parent
    this.sendToParent.emit(guardian);
  }
}
