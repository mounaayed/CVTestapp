import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  constructor(private http: HttpClient) { }
  getall() {
    return this.http.get(environment.url + 'entreprise/listentreprise');
  }
  addoffre(data) {
    return this.http.post(environment.url + 'offre/add/', data);
  }
  delete(id) {
    return this.http.delete(environment.url + 'entreprise/delete/' + id);
  }

  approuverr(data, id) {
    return this.http.put(environment.url + 'entreprise/update/' + id, data);
  }

  modif(entreprise, id) {
    return this.http.put(environment.url + 'entreprise/update/' + id, entreprise);
  }

  getbyid(id) {
    return this.http.get(environment.url + 'entreprise/getbyid/' + id);
  }
  registerentre(Entreprise, fileToUpload) {

    console.log(fileToUpload);

    const formData = new FormData();
    formData.append('nomentreprise', '' + Entreprise.nomentreprise);
    formData.append('matriculefiscale', '' + Entreprise.matriculefiscale);
    formData.append('email', '' + Entreprise.email);
    formData.append('password', '' + Entreprise.password);
    formData.append('localisation', '' + Entreprise.localisation);
    formData.append('numtel', '' + Entreprise.numtel);
    formData.append('username', '' + Entreprise.username);
    formData.append('secteuractivite', '' + Entreprise.secteuractivite);
    formData.append('anneefondation', '' + Entreprise.anneefondation);
    formData.append('description', '' + Entreprise.description);
    formData.append('codepostale', '' + Entreprise.codepostale);
    formData.append('avatar', fileToUpload, fileToUpload.name);

    return this.http.post(environment.url + 'entreprise/add', formData);

  }
}

