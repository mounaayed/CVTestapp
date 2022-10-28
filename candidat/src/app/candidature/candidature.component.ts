import { Component, OnInit } from '@angular/core';
import {CandidatureService} from '../services/candidature.service';
import {Candidature} from '../model/candidature';
import Swal from 'sweetalert2';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-candidature',
  templateUrl: './candidature.component.html',
  styleUrls: ['./candidature.component.css']
})
export class CandidatureComponent implements OnInit {
  listecandidature;
  idcandidat;
  candidature = new Candidature();
     formcandidature: FormGroup;
  constructor(private  candidatureservice: CandidatureService, private formbuider: FormBuilder) {
  }

  ngOnInit(): void {
    this.getallcandidature();
    this.formcandidature = this.formbuider.group({

      dateenvoicandidature: ['', [Validators.required]],
      etats: ['', [Validators.required]],
      candidat: ['', [Validators.required]],
    });
  }

  getallcandidature() {
    this.candidatureservice.getall().subscribe(res => {
      console.log(res);
      this.listecandidature = res;

    });
  }

  ajoutcandidat(idcandidature) {
    this.candidatureservice.push({candidature: idcandidature}, this.idcandidat).subscribe(res => {
      console.log(res);
    });

  }

  deletecandidature(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!' + this.candidature.dateenvoicandidature,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.candidatureservice.delete(id).subscribe(res => {
          console.log(res);
          this.getallcandidature();
        });
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      }
    });

  }
  logout() {
    localStorage.setItem('conected', 'false');
    localStorage.clear();
  }
  recuper(candidat,
          etats, dateenvoicandidature) {
    console.log(candidat,
      etats, dateenvoicandidature);
    this.candidature.candidat = candidat;
    this.candidature.etats = etats;

    this.candidature.dateenvoicandidature = dateenvoicandidature;
  }
  get c() {
    return this.formcandidature.controls;
  }
}
