import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {GuardianList} from "./interfaces/GuardianList";
import {Guardian} from "./interfaces/Guardian";

@Injectable({
  providedIn: 'root'
})
export class GuardianService {

  private guardianUrl = "https://disneymirrorverse.com/wp-json/kabam/v1/";

  constructor(private httpClient: HttpClient) { }

  getAllGuardians(): Observable<GuardianList> {
    return this.httpClient.get<GuardianList>(this.guardianUrl + 'guardians');
  }

  getGuardianById(guardian_id: string): Observable<Guardian> {
    return this.httpClient.get<Guardian>(this.guardianUrl + 'guardian/?id=' + guardian_id);
  }
}

//https://disneymirrorverse.com/wp-json/kabam/v1/guardians/
//https://disneymirrorverse.com/wp-json/kabam/v1/guardian/?id=ariel
