import { Component, OnInit } from '@angular/core';
import {TestService} from '../../services/test.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.css']
})
export class ResultatComponent implements OnInit {
resultat;
  listeproposition;
  result = 0;
  nbrQ;
  constructor(private activaterout: ActivatedRoute ,  private testservice: TestService) {
    this.resultat = this.activaterout.params['_value']['resultat'] ;

  }

  ngOnInit(): void {

  }

getresult(): number {
  this.testservice.getallpropsition().subscribe(res => {
    console.log(res);
    this.listeproposition = res;

  });
  for (const prop of this.listeproposition) {
    if ( prop.etat === true ) {
      this.listeproposition = this.listeproposition + 1;
    }
  }

  this.result = this.resultat * 100 / this.listeproposition ;
  return this.result;
}
}
