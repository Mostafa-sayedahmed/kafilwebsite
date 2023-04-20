import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Iportfolois } from 'src/app/models/iportfolois';
import { PortfoliosService } from 'src/app/services/portfolios.service';

@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.scss'],
})
export class PortfoliosComponent {
  portfolois: Iportfolois[] = [];
  constructor(private PS: PortfoliosService, private rout: Router) {}

  ngOnInit() {
    this.PS.getallportfolois().subscribe((data) => {
      // console.log("Contests",data);
      this.portfolois = data;
      console.log(data);
    });
  }

  goToDetails(id: any) {
    this.rout.navigate(['detailsPortfolois', id]);
  }
}
