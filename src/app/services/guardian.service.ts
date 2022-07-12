import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GuardianService {

  private guardianUrl = "https://disneymirrorverse.com/wp-json/kabam/v1/";

  constructor(private httpClient: HttpClient) { }

  getAllGuardians(): Observable<any> {
    return this.httpClient.get(this.guardianUrl + 'guardians');
  }

  getGuardianById(guardian_id: string): Observable<any> {
    return this.httpClient.get(this.guardianUrl + 'guardian/?id=' + guardian_id);
  }
}

//https://disneymirrorverse.com/wp-json/kabam/v1/guardians/
//https://disneymirrorverse.com/wp-json/kabam/v1/guardian/?id=ariel
