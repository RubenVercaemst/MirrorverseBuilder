import { Component } from '@angular/core';
import {GuardianService} from "./services/guardian.service";
import {map} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MirrorverseBuilder';
  guardianList: any;
  selectedGuardians: any = [[],[],[]];

  constructor(private guardianService: GuardianService) { }

  ngOnInit(){
    this.guardianService.getAllGuardians()
      .pipe(
        map(res => {
          return res.guardians.map((obj: any) => {
            return {
              ...obj,
              id: !!obj.id.includes('_') ? obj.id.replace('_','-') : obj.id,
              url: obj.url.slice(11,-1)
            }
          })
        })
      )
      .subscribe(data => {
      console.log(data);
      this.guardianList = data;
    })

    //load json
    /*this.httpClient.get("assets/data.json")
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
      })*/
  }

  /*sendToParent(guardian: any){
    //check for dupes
    if(!this.selectedGuardians.find((x: any) => x === guardian)){
      //fill first available empty spot
      for (var index in this.selectedGuardians) {
        if(this.selectedGuardians[index].length === 0){
          //this.getGuardianById(guardian);
          console.log(this.testGuardian);
          //this.selectedGuardians[index] = data;
          break;
        }
      }
    }
  }*/

  //getGuardianById(id: string){
  sendToParent(guardian: any){
    this.guardianService.getGuardianById(guardian)
      .subscribe(data => {
        console.log(data)
      })
  }
}
