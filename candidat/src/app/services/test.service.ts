import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) {
  }

  getall() {
    return this.http.get(environment.url + 'test/listetest');
  }

  getbyid(id) {
    return this.http.get(environment.url + 'test/getbyid/' + id);
  }

  getoneproposition(id) {
    return this.http.get(environment.url + 'proposition/getbyid/' + id);
  }

  getallquestion() {
    return this.http.get(environment.url + 'question/listquestion');
  }

  getallpropsition() {
    return this.http.get(environment.url + 'proposition/listproposition');
  }

  delete(id) {
    return this.http.delete(environment.url + 'test/delete/' + id);
  }

  pushproposition(idquestion, data) {
    return this.http.put(environment.url + 'question/push/' + idquestion, data);
  }

  pushquestion(idtest, data) {
    return this.http.put(environment.url + 'test/push/' + idtest, data);
  }

  addquestion(data) {
    return this.http.post(environment.url + 'question/add/', data);
  }

  addtest(data) {
    return this.http.post(environment.url + 'test/add/', data);
  }

  recherchtest(comptence) {
    return this.http.get('http://localhost:7000/test/recherchbycomptence/' + comptence);
  }

}
