import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  constructor(private http: HttpClient) {
  }

  getall() {
    return this.http.get(environment.url + 'candidat/listcandidat');
  }

  delete(id) {
    return this.http.delete(environment.url + 'candidat/delete/' + id);
  }

  approuver(data, id) {
    return this.http.put(environment.url + 'candidat/update/' + id, data);
  }

  modif(Candidat, id) {


    return this.http.put(environment.url + 'candidat/update/' + id, Candidat);
  }

  registerdoctor(Candidat, fileToUpload) {

    console.log(fileToUpload);

    const formData = new FormData();
    formData.append('nom', '' + Candidat.nom);
    formData.append('prenom', '' + Candidat.prenom);
    formData.append('email', '' + Candidat.email);
    formData.append('password', '' + Candidat.password);
    formData.append('age', '' + Candidat.age);
    formData.append('numtel', '' + Candidat.numtel);
    formData.append('username', '' + Candidat.username);
    formData.append('adresse', '' + Candidat.adresse);
    formData.append('cin', '' + Candidat.cin);
    formData.append('sexe', '' + Candidat.sexe);
    formData.append('civilite', '' + Candidat.civilite);
    formData.append('codepostale', '' + Candidat.codepostale);

    formData.append('avatar', fileToUpload, fileToUpload.name);

    return this.http.post(environment.url + 'candidat/add', formData);

  }

  getbyid(id) {
    return this.http.get(environment.url + 'candidat/getbyid/' + id);
  }
  ajoutfavorie(offre, idcandidat) {
    return this.http.put(environment.url + 'candidat/push/' + idcandidat, offre);
  }
}
