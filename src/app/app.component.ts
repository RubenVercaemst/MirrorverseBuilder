import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

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
      .pipe(
        map(res => {
          if(!!res){
            // @ts-ignore
            return res.map(obj => {
              return {
                ...obj,
                builderImage: `https://disneymirrorverse.com/wp-content/uploads/portraits/portrait-featured-${obj.altname}.png`,
                listImage: `https://disneymirrorverse.com/wp-content/uploads/portraits/portrait-${obj.altname}.png`
              }
            })
          }
        })
      )
      .subscribe(data => {
        console.log(data);
        this.guardians = data;
      })
  }

  sendToParent(guardian: any){
    //check for dupes
    if(!this.selectedGuardians.find((x: any) => x === guardian)){
      //fill first available empty spot
      for (var index in this.selectedGuardians) {
        if(this.selectedGuardians[index].length === 0){
          this.selectedGuardians[index] = guardian;
          break;
        }
      }
    }
  }
}
