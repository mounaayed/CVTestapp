import {Component, OnInit, TemplateRef} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CandidatService} from '../services/candidat.service';
import {TestService} from '../services/test.service';

import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {Observable} from 'rxjs';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {startWith, map} from 'rxjs/internal/operators';

@Component({
  selector: 'app-detailtest',
  templateUrl: './detailtest.component.html',
  styleUrls: ['./detailtest.component.css']
})
export class DetailtestComponent implements OnInit {
  id;
  test;
  formquestion: FormGroup;
  formproposition: FormGroup;
  isCollapsed = true;
  listquestion;
  idquestion;

  proposition;
  list = [];
  affiche = false;
  listpropsition;
  listquetionbase;
  modalRef: BsModalRef;
  libelle: string;
  submitted = false;

  constructor(private formbuider: FormBuilder, private activaterout: ActivatedRoute, private testservice: TestService, private modalService: BsModalService) {
    this.id = this.activaterout.params['_value']['id'];
  }

  ngOnInit(): void {
    this.getbyid(this.id);
    this.getallpropsition();
    this.getallquestion();
    console.log(this.id);
    this.formquestion = this.formbuider.group({

      question: ['', [Validators.required]],

    });
    this.formproposition = this.formbuider.group({
      proposition: ['', [Validators.required]],


    });

  }

  get q() {
    return this.formquestion.controls;
  }

  get p() {
    return this.formproposition.controls;
  }

  getallquestion() {
    this.testservice.getallquestion().subscribe(res => {
      this.listquetionbase = res;
      console.log('listquestionbase', res);

    })
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  getallpropsition() {
    this.testservice.getallpropsition().subscribe(res => {
      console.log('listpropsition', res);
      this.listpropsition = res;

    })
  };

  getbyid(id) {
    this.testservice.getbyid(id).subscribe((res: any) => {
        console.log('test', res);
        this.test = res;
        this.listquestion = res.question;

        console.log('list question', this.listquestion);


        /* for (let i = 0; i < someArray.length ; i++) {
          let item = someArray[i];
        } */


      }
    );

  }

  ajoutqq() {
    console.log(this.id);
    console.log(this.formquestion.value.question)
    this.submitted = true;
    if (this.formquestion.invalid) {
      return;
    }
    const data = {
      question: this.formquestion.value.question
    };
    this.testservice.pushquestion(this.id, {question: this.formquestion.value.question}).subscribe(res => {
      console.log(res);
      this.getallquestion();
      this.modalRef.hide();
    });
  }

  affichajoutprposition() {
    this.affiche = true;
  }

  recuper(propostion1, id) {
    this.idquestion = id;
    console.log(this.idquestion)

    console.log(propostion1)
    for (const i of propostion1) {
      this.testservice.getoneproposition(i).subscribe(res1 => {

        this.list.push(res1);
      })
    }
    console.log('list', this.list);
    this.list = []
  }

  pushpropotion() {
    console.log(this.id);
    console.log(this.formproposition.value.proposition)
    this.submitted = true;
    if (this.formproposition.invalid) {
      return;
    }
    const data = {
      proposition: this.formproposition.value.proposition
    };
    this.testservice.pushproposition(this.idquestion, {proposition: this.formproposition.value.proposition}).subscribe(res => {
      console.log(res);
      this.modalRef.hide();
      window.location.reload();
    });
  }

}
