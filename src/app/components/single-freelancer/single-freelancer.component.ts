import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import { Freelancer } from 'src/app/models/freelancer';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-single-freelancer',
  templateUrl: './single-freelancer.component.html',
  styleUrls: ['./single-freelancer.component.scss'],
})
export class SingleFreelancerComponent implements OnInit, OnChanges {
  spinner: boolean = true;
  // Freelancer:Freelancer |undefined|void =undefined;
  Freelancer: any = {};
  constructor(
    private service: CrudService,
    private activatedRoute: ActivatedRoute,
    private fs: AngularFirestore,
    private router: Router
  ) {}
  ngOnChanges(changes: SimpleChanges): void {}
  ngOnInit(): void {
    let freelancerID: string = this.activatedRoute.snapshot.paramMap.get('fid')
      ? String(this.activatedRoute.snapshot.paramMap.get('fid'))
      : '';

    this.fs
      .collection('Freelancers')
      .doc(freelancerID)
      .ref.get()
      .then((doc) => {
        if (doc.exists) {
          this.spinner = false;
          this.Freelancer = doc.data();
        } else {
          console.log('There is no document!');
        }
      });
  }

  backToFreelancers() {
    this.router.navigate(['/freelancers']);
  }
  backToHomepage() {
    this.router.navigate(['/home']);
  }
  goToAddFreelancer() {
    this.router.navigate(['addFreelancer']);
  }
}
