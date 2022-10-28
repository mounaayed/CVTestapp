import {Component, OnInit, TemplateRef} from '@angular/core';
import {OffreService} from '../services/offre.service';
import {Offre} from '../model/offre';
import {TestService} from '../services/test.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DomaineService} from '../services/domaine.service';
import {Competence} from '../model/competence';
import {Test} from '../model/test';
import Swal from "sweetalert2";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  listtest;
  formtest: FormGroup;

  submitted = false;

  test = new Test();

  constructor(private testservice: TestService,
              private formbuider: FormBuilder) {
  }

  ngOnInit(): void {
    this.getalltest();
    this.formtest = this.formbuider.group({

      titre: ['', [Validators.required]],
      dateajout: ['', [Validators.required]],
      duree: ['', [Validators.required]],
      niveau: ['', [Validators.required]],
    });
  }
  getalltest(){
    this.testservice.getall().subscribe(res => {
      console.log(res);
      this.listtest = res;

    });
  }
  addtest() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.formtest.invalid) {
      return;
    }
    this.testservice.addtest(this.formtest.value).subscribe((res: any) => {
      console.log(res);
      this.getalltest();
    });

  }

  get te() {
    return this.formtest.controls;
  }
  deletetest(id) {
    Swal.fire({
      title: 'Etes vous sur?',
      text: 'Vous ne pouvez pas revenir à ca\'!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'OK, Effacer le!'
    }).then((result) => {
      if (result.value) {
        this.testservice.delete(id).subscribe(res => {
          console.log(res);
          this.getalltest();
        });
        Swal.fire(
          'Supprimer!',
          'Votre fichier est supprimer.',
          'success'
        );
      }
    });

  }
  logout() {
    localStorage.setItem('conected', 'false');
    localStorage.clear();
  }
}
