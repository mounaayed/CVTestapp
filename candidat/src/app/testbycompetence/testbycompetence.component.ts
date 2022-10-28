import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TestService} from '../services/test.service';
import {of} from "rxjs/index";

@Component({
  selector: 'app-testbycompetence',
  templateUrl: './testbycompetence.component.html',
  styleUrls: ['./testbycompetence.component.css']
})
export class TestbycompetenceComponent implements OnInit {

  idtest;
test;
  listeproposition;
  listQ: number[];
  nbprotrue = 0;
  result = 0;

ch;
s = 0;
  propsition;
  constructor(private activaterout: ActivatedRoute,  private propsitionservic: TestService ,
              private testservice: TestService) {
    this.idtest = this.activaterout.params['_value']['idtest'];
  }

  ngOnInit(): void {
    this.gettestbycomptence(this.idtest);

  }

  gettestbycomptence(idtest) {
    this.testservice.getbyid(idtest).subscribe(res => {
      console.log("teste", res);
      this.test = res;
    });
  }

  selectedItem(id) {

    this.propsitionservic.getoneproposition(id).subscribe(res => {
      console.log(res);
      this.propsition = res;
    })
    if ( this.propsition.etat === true ) {
       if (id !== 0 ) {
         this.s = this.s + 1;
         this.testservice.getallpropsition().subscribe(res => {
           console.log('hello');
           this.listeproposition = res;

         });
         for (const prop of this.listeproposition) {
           if ( prop.etat === true ) {
             this.listeproposition = this.listeproposition + 1;
           }
         }

         this.result = this.s * 100 / this.listeproposition.length ;
         console.log('resultat = ' , this.s) ;
       }
     }


  }


}
