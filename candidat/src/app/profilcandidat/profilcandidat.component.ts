import {Component, OnInit} from '@angular/core';
import {CandidatService} from '../services/candidat.service';
import {ActivatedRoute} from '@angular/router';
import {Condidat} from '../model/condidat';
import {EntrepriseService} from "../services/entreprise.service";
import {Entreprise} from "../model/entreprise";

@Component({
  selector: 'app-profilcandidat',
  templateUrl: './profilcandidat.component.html',
  styleUrls: ['./profilcandidat.component.css']
})
export class ProfilcandidatComponent implements OnInit {
  id;
  candidat;


  constructor(private activaterout: ActivatedRoute, private candidatservice: CandidatService) {
    this.id = this.activaterout.params['_value']['id'];
  }

  ngOnInit(): void {
    this.getbyid(this.id);
  }

  getbyid(id) {
    this.candidatservice.getbyid(id).subscribe(res => {
      console.log(res);
      this.candidat = res;
    });
  }
  logout() {
    localStorage.setItem('conected', 'false');
    localStorage.clear();
  }
}

