import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-guardian-list',
  templateUrl: './guardian-list.component.html',
  styleUrls: ['./guardian-list.component.css']
})
export class GuardianListComponent implements OnInit {

  @Input() guardians: any;

  constructor() { }

  ngOnInit(): void {
  }

}
