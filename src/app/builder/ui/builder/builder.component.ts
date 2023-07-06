import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent {
  @Input() teamBuild: any;
  @Output() deSelectedGuardianEvent = new EventEmitter<number>();

  deSelectedGuardian(valueArrayIndex: number){
    this.deSelectedGuardianEvent.emit(valueArrayIndex);
  }

  handleOptionSelected(any: any){
    any.selected = true;
  }
}


