import {Component, OnInit} from '@angular/core';
import {OffreService} from '../services/offre.service';

@Component({
  selector: 'app-listfavorie',
  templateUrl: './listfavorie.component.html',
  styleUrls: ['./listfavorie.component.css']
})
export class ListfavorieComponent implements OnInit {
  user;
  listfavorie;
  listf = [];
  offre;


  constructor(private offreservice: OffreService) {
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('userconnectee'));
    this.listfavorie = this.user.offre;
    for (const i of this.listfavorie) {
      this.offreservice.getofferbyid(i).subscribe(res => {
        console.log("listfavorie", res);
        this.offre = res;

        this.listf.push(this.offre);

      });

    }
  }
  logout() {
    localStorage.setItem('conected', 'false');
    localStorage.clear();
  }
}
