import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MirrorverseBuilder';
  guardians: any = [];
  selectedGuardians: any = [[],[],[]];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(){
    //load json
    this.httpClient.get("assets/data.json")
      .subscribe(data => {
        console.log(data);
        this.guardians = data;
      })
  }

  sendToParent(guardian: any){

    //check for dupes
    if(!this.selectedGuardians.find((x: any) => x === guardian)){
      for (var index in this.selectedGuardians) {
        if(this.selectedGuardians[index].length === 0){
          console.log("null");
          this.selectedGuardians[index] = guardian;
          break;
        }
      }
    } else {
      console.log("dupe")
    }


  }
}
