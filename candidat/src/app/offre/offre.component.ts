import {Component, OnInit} from '@angular/core';
import {Entreprise} from '../model/entreprise';
import {Offre} from '../model/offre';
import {EntrepriseService} from '../services/entreprise.service';
import {OffreService} from '../services/offre.service';
import Swal from 'sweetalert2';
import {CandidatService} from '../services/candidat.service';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {
  listeoffre;
  user;
  offre = new Offre();
  idcandidat;
  isfavorie = false;
  userafterupdate;

  constructor(private offreservice: OffreService, private candidatservice: CandidatService) {
  }

  ngOnInit(): void {
    this.getalloffre();
    this.user = JSON.parse(localStorage.getItem('userconnectee'));
    this.idcandidat = this.user._id;
    console.log('idcandidat', this.idcandidat);
  }

  getalloffre() {
    this.offreservice.getall().subscribe(res => {
      console.log(res);
      this.listeoffre = res;

    });
  }

  ajoutfavorie(idoffre) {
    this.isfavorie = true;
    this.candidatservice.ajoutfavorie({offre: idoffre}, this.idcandidat).subscribe((res: any) => {
      console.log(res);
      this.userafterupdate = res.data;
      console.log(this.userafterupdate);
      localStorage.setItem('userconnectee', JSON.stringify(this.userafterupdate));
    });

  }

  deleteoffre(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!   ' + this.offre.titreposte,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.offreservice.delete(id).subscribe(res => {
          console.log(res);
          this.getalloffre();
        });
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      }
    });

  }

  recuper(entreprise,
          titreposte, description, typecontrat,
          experienceexige, niveauetudeexige, datedebutpublication, datefinpublication) {
    console.log(entreprise,
      titreposte, description, typecontrat,
      experienceexige, niveauetudeexige, datedebutpublication, datefinpublication);
    this.offre.entreprise = entreprise;
    this.offre.titreposte = titreposte;

    this.offre.description = description;
    this.offre.typecontrat = typecontrat;
    this.offre.experienceexige = experienceexige;
    this.offre.niveauetudeexige = niveauetudeexige;
    this.offre.datedebutpublication = datedebutpublication;
    this.offre.datefinpublication = datefinpublication;


  }

  logout() {
    localStorage.setItem('conected', 'false');
    localStorage.clear();
  }
}
