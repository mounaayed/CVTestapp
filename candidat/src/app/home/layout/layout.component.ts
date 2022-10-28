import {Component, OnInit} from '@angular/core';
import {Offre} from "../../model/offre";
import {OffreService} from "../../services/offre.service";
import {CandidatService} from "../../services/candidat.service";
import {TempalteCVService} from "../../services/tempalte-cv.service";
import {EntrepriseService} from "../../services/entreprise.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  p = 1;
  listeoffre;
  localisation;
  titreposte;
  listetemplate;
  listeentreprise;
  constructor(private templatecvservice: TempalteCVService,
              private entrepriseservice: EntrepriseService,private offreservice: OffreService, private candidatservice: CandidatService) {
  }

  ngOnInit(): void {
    this.getalloffre();
    this.getallt();

  }

  getallt() {
    this.templatecvservice.getall().subscribe(res => {
      console.log(res);
      this.listetemplate = res;
    });
  }

  getalloffre() {
    this.offreservice.getall().subscribe(res => {
      console.log(res);
      this.listeoffre = res;

    });
  }
  getallentreprise() {
    this.entrepriseservice.getall().subscribe(res => {
      console.log(res);
      this.listeentreprise = res;
    });
  }
}
