import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EntrepriseService} from "../services/entreprise.service";
import {AuthentificationService} from "../services/authentification.service";
import {Router} from "@angular/router";
import {OffreService} from "../services/offre.service";
import {CandidatService} from "../services/candidat.service";

@Component({
  selector: 'app-publieroffre',
  templateUrl: './publieroffre.component.html',
  styleUrls: ['./publieroffre.component.css']
})
export class PublieroffreComponent implements OnInit {
  listeoffre;
  formoffre: FormGroup;
  submitted = false;
  offre;
  constructor(private offreservice: OffreService,
              private entrepriseservice: EntrepriseService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getalloffre()
    this.formoffre = this.formBuilder.group({

      titreposte: ['', Validators.required],
      typecontrat: ['', Validators.required],
      experienceexige: ['', Validators.required],
      niveauetudeexige: ['', Validators.required],
      datedebutpublication: ['', Validators.required],
      datefinpublication: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  get te() {
    return this.formoffre.controls;
  }

  getalloffre() {
    this.offreservice.getall().subscribe(res => {
      console.log(res);
      this.listeoffre = res;

    });
  }
  addoffre() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.formoffre.invalid) {
      return;
    }
    this.entrepriseservice.addoffre(this.formoffre.value).subscribe((res: any) => {
      console.log(res);
      this.getalloffre();
    });
  }
  logout() {
    localStorage.setItem('conected', 'false');
    localStorage.clear();
  }
}
