import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TempalteCVService {

  constructor(private http: HttpClient) { }
  getall() {
    return this.http.get(environment.url + 'templatecv/listtemplatecv/');
  }
  getone(id) {
    return this.http.get(environment.url + 'templatecv/getbyid/' + id);
  }
  delete(id) {
    return this.http.delete(environment.url + 'templatecv/delete/' + id);
  }
  registertemplate(Templatecv, fileToUpload) {

    console.log(fileToUpload);

    const formData = new FormData();
    formData.append('nomtemplate', '' + Templatecv.nomtemplate);


    formData.append('image', fileToUpload, fileToUpload.name);

    return this.http.post(environment.url + 'templatecv/add', formData);

  }
}
