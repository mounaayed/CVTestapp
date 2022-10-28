import {Component, OnInit} from '@angular/core';
import {Condidat} from "../model/condidat";
import {CandidatService} from "../services/candidat.service";
import {ActivatedRoute} from "@angular/router";
import {EntrepriseComponent} from "../entreprise/entreprise.component";
import {Entreprise} from "../model/entreprise";
import {EntrepriseService} from "../services/entreprise.service";

@Component({
  selector: 'app-profilentreprise',
  templateUrl: './profilentreprise.component.html',
  styleUrls: ['./profilentreprise.component.css']
})
export class ProfilentrepriseComponent implements OnInit {


  id;
  user;
  entreprise = new Entreprise();

  constructor(private activaterout: ActivatedRoute, private entrepriseservise: EntrepriseService) {
    this.id = this.activaterout.params['_value']['id'];
  }

  ngOnInit(): void {
    this.getbyidentreprise(this.id);
  }

  getbyidentreprise(id) {
    this.entrepriseservise.getbyid(id).subscribe(res => {
      console.log(res);
      this.user = res;
    });
  }

}
