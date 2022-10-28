import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OffreService} from '../../services/offre.service';

@Component({
  selector: 'app-detailoffre',
  templateUrl: './detailoffre.component.html',
  styleUrls: ['./detailoffre.component.css']
})
export class DetailoffreComponent implements OnInit {
  idoffre;
  offre;

  constructor(private activateroute: ActivatedRoute, private offreservice: OffreService) {
    this.idoffre = this.activateroute.params['_value']['id'];
  }

  ngOnInit(): void {
    this.getoffre(this.idoffre);
  }

  getoffre(id) {
    this.offreservice.getofferbyid(id).subscribe(res => {
      console.log('offre', res);
      this.offre = res;
    });
  }
}
