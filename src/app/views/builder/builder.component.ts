import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {

  @Input() selectedGuardians: any;

  selected: any;
  selectedTeam: any;

  selectedTalents: [any?, any?][] = [[],[],[]];

  //selectedGuardians: any = [[],[],[]];

  //{ name: 'John', age: 30 }

  mapGuardians = new Map([

  ])

  myarray: any[] = [];
  priceListMap : Map<string, any[]> = new Map<string, any[]>();

  constructor() { }

  ngOnInit(): void {

  }

  removeSelectedGuardian(guardian: any){
    this.selectedGuardians[this.selectedGuardians.indexOf(guardian)] = [];
    return false;
  }

  detailsSelectedGuardian(guardian: any){
  }

  testclick(talent: any, guardian: any){
    console.log(guardian)
    console.log(talent)
    //this.selectedTalents.push(talent)
    //this.selectedTalents.push([guardian.id, talent.title])
    //this.mapGuardians.set(guardian.id, talent)
    //console.log(this.mapGuardians)

    //this.myarray.push(talent)
    if(this.priceListMap.has(guardian.id)){
      //key already exists
      for (let entry of this.priceListMap.entries()) {
        //console.log(entry[0], entry[1]);
        if(entry[0]===guardian.id){
          entry[1].push(talent)
        }
      }
    } else {
      this.priceListMap.set(guardian.id, talent)
    }

    console.log(this.priceListMap)
  }
}


