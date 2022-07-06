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

  constructor(private httpClient: HttpClient) { }

  ngOnInit(){
    //load json
    this.httpClient.get("assets/data.json")
      .subscribe(data => {
        console.log(data);
        this.guardians = data;
      })
  }
}
