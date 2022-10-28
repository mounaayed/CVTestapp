import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CvService {

  constructor(private http: HttpClient) {
  }

  getbyid(id) {
    return this.http.get(environment.url + 'cv/getbyid/' + id);
  }
  pushcompetence(competence, idcv) {
    return this.http.put(environment.url + 'cv/push/' + competence, idcv);
  }
  pushpresentation(presentation, idcv) {
    return this.http.put(environment.url + 'cv/push/' + presentation, idcv);
  }
  pushformation(formation, idcv) {
    return this.http.put(environment.url + 'cv/push/' + formation, idcv);
  }
  pushexperinecepro(experiencepro, idcv) {
    return this.http.put(environment.url + 'cv/push/' + idcv, experiencepro);
  }
  deletecompetence(id) {
    return this.http.delete(environment.url + 'competence/delete/' + id);
  }

  getonecompetence(id) {
    return this.http.get(environment.url + 'competence/getbyid/' + id);
  }
  deleteformation(id) {
    return this.http.delete(environment.url + 'formation/delete/' + id);
  }

  getoneformation(id) {
    return this.http.get(environment.url + 'formation/getbyid/' + id);
  }
  deletepresentation(id) {
    return this.http.delete(environment.url + 'presentation/delete/' + id);
  }

  getonepresentation(id) {
    return this.http.get(environment.url + 'presentation/getbyid/' + id);
  }
  deleteexperince(id) {
    return this.http.delete(environment.url + 'experince/delete/' + id);
  }

  getoneexperince(id) {
    return this.http.get(environment.url + 'experince/getbyid/' + id);
  }
  modifcompetence(data, id) {
    return this.http.put(environment.url + 'competence/update/' + id, data);
  }
  modifformation(data, id) {
    return this.http.put(environment.url + 'formation/update/' + id, data);
  }
  modifpresentation(data, id) {
    return this.http.put(environment.url + 'presentation/update/' + id, data);
  }
  modifexperince(data, id) {
    return this.http.put(environment.url + 'experince/update/' + id, data);
  }
}

