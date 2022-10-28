import {Component, OnInit} from '@angular/core';
import {CandidatService} from '../services/candidat.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EntrepriseService} from "../services/entreprise.service";

@Component({
  selector: 'app-profils',
  templateUrl: './profils.component.html',
  styleUrls: ['./profils.component.css']
})
export class ProfilsComponent implements OnInit {
  updateCandidat: FormGroup;
  updateentreprise: FormGroup;
  user;
  role;
  fileToUpload: File = null;

  constructor(private formBuilder: FormBuilder, private condidatservice: CandidatService , private entrepriseservice: EntrepriseService) {
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('userconnectee'));
    this.role = localStorage.getItem('roleuserconnectee');
    this.updateCandidat = this.formBuilder.group({
      nom: [''],
      prenom: [''],
      sexe: [''],
      adresse: [''],
      cin: [''],
      age: [''],
      numtel: [''],
      codepostale: [''],
      email: [''],
      civilite: [''],

    });

    this.updateentreprise = this.formBuilder.group({
      nomentreprise: [''],
      numtel: [''],
      description: [''],
    matriculefiscale: [''],
      localisation: [''],
      secteuractivite: [''],
      anneefondation: [''],
      codepostale: [''],
      email: [''],

    });
  }

  get f() {
    return this.updateCandidat.controls;
  }
  get e() {
    return this.updateentreprise.controls;
  }
  modifcandidat() {

    console.log(this.updateCandidat.value);
    // stop here if form is invalid
    // if (this.formcandidat.invalid) {
    //   return;
    // }
    console.log("id", this.user._id)
    this.condidatservice.modif(this.updateCandidat.value, this.user._id).subscribe((res: any) => {
      console.log(res);
      this.user = res.data;
      localStorage.setItem('userconnectee', JSON.stringify(this.user));
      this.user = JSON.parse(localStorage.getItem('userconnectee'));
      console.log(this.user);

      // console.log(this.token);
      window.location.reload();

    });
  }
  modifentreprise() {

    console.log(this.updateentreprise.value);
    // stop here if form is invalid
    // if (this.formcandidat.invalid) {
    //   return;
    // }
    console.log("id", this.user._id)
    this.entrepriseservice.modif(this.updateentreprise.value, this.user._id).subscribe((res: any) => {
      console.log(res);
      this.user = res.data;
      localStorage.setItem('userconnectee', JSON.stringify(this.user));
      this.user = JSON.parse(localStorage.getItem('userconnectee'));
      console.log(this.user);

      // console.log(this.token);
      window.location.reload();

    });
  }
  logout() {
    localStorage.setItem('conected', 'false');
    localStorage.clear();
  }
}
