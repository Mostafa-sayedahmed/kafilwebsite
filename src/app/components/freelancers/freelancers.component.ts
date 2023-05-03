import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Freelancer } from 'src/app/models/freelancer';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';

import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-freelancers',
  templateUrl: './freelancers.component.html',
  styleUrls: ['./freelancers.component.scss'],
})
export class FreelancersComponent implements OnInit {
  alertForRaring: boolean = false;
  starRating = 0;
  // spinner:boolean=true;

  dataspinner: boolean = true;

  freelancers: Freelancer[] = [];
  test: any;
  constructor(
    private myService: CrudService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}
  ngOnInit(): void {
    //handeling the rating
    let stars = document.querySelectorAll('.stars');
    console.log(stars);

    this.spinner.show();

    //to get the id we have to use snapshotchanges in service
    this.myService.getAllFreelancers().subscribe((data) => {
      this.dataspinner = false;
      this.freelancers = data.map((ele) => {
        return {
          id: ele.payload.doc.id,
          ...ele.payload.doc.data(),
        };
      });
      this.spinner.hide();
    });
  }

  getDetailsOfFreelancer(id: string) {
    this.router.navigate(['freelancers', id]);
  }
  goToAddFreelancer() {
    this.router.navigate(['addFreelancer']);
  }

  handelTheRating() {
    this.alertForRaring = !this.alertForRaring;
    console.log(this.alertForRaring);
  }
}
