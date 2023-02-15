import {Component, EventEmitter, Input, Output} from '@angular/core';
import {GuardianDisplay} from "../../data-access/interfaces/GuardianDisplay";

@Component({
  selector: 'app-guardian-list',
  templateUrl: './guardian-list.component.html',
  styleUrls: ['./guardian-list.component.css']
})
export class GuardianListComponent{
  @Input() guardianList: any;
  @Output() selectedGuardianEvent = new EventEmitter<GuardianDisplay>();

  selectedGuardian(valueGuardianDisplay: GuardianDisplay){
    this.selectedGuardianEvent.emit(valueGuardianDisplay);
  }
}
