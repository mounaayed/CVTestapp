import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CandidatureService {

  constructor(private http: HttpClient) { }
  getall() {
    return this.http.get(environment.url + 'candidature/listcandidature');
  }

  delete(id) {
    return this.http.delete(environment.url + 'candidature/delete/' + id);
  }
  push(candidature, idcandidat) {
    return this.http.put(environment.url + 'candidature/push/' + candidature, idcandidat);
  }
}
