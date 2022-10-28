import {Component, Input, OnInit} from '@angular/core';
import {TestService} from "../../services/test.service";

@Component({
  selector: 'app-proposition',
  templateUrl: './proposition.component.html',
  styleUrls: ['./proposition.component.css']
})
export class PropositionComponent implements OnInit {
  @Input()
  private id;
  propsition;
  ennonce;
  etat;
  constructor(private propsitionservic: TestService) {
  }

  ngOnInit(): void {
    this.getone(this.id);
  }

  getone(id) {
    this.propsitionservic.getoneproposition(id).subscribe(res => {
      console.log(res);
      this.propsition = res;
    })
  }
}
