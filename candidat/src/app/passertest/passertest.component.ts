import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EntrepriseService} from "../services/entreprise.service";
import {Entreprise} from "../model/entreprise";
import {TestService} from "../services/test.service";

@Component({
  selector: 'app-passertest',
  templateUrl: './passertest.component.html',
  styleUrls: ['./passertest.component.css']
})
export class PassertestComponent implements OnInit {


  comptence;
  listtest;

  constructor(private activaterout: ActivatedRoute, private testservice: TestService) {
    this.comptence = this.activaterout.params['_value']['comptence'];
  }

  ngOnInit(): void {
    this.gettestbycomptence(this.comptence);
  }

  gettestbycomptence(comptence) {
    this.testservice.recherchtest(comptence).subscribe(res => {
      console.log("teste", res);
      this.listtest = res;
    });
  }
}
