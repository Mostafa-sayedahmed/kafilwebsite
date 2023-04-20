import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Freelancer } from 'src/app/models/freelancer';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-freelancers',
  templateUrl: './freelancers.component.html',
  styleUrls: ['./freelancers.component.scss'],
})
export class FreelancersComponent implements OnInit {
  spinner:boolean=true;
  freelancers: Freelancer[] = [];
  test: any;
  constructor(private myService: CrudService, private router: Router) {}
  ngOnInit(): void {
    //to get the id we have to use snapshotchanges in service
    this.myService.getAllFreelancers().subscribe(data => {
      this.spinner=false;
      this.freelancers = data.map(ele => {
        return {
          id: ele.payload.doc.id,
          ...ele.payload.doc.data(),
        };
      });
    }
    );
    
  }

  getDetailsOfFreelancer(id:string){
   this.router.navigate(["freelancers",id]);
   
  }
  goToAddFreelancer(){
   this.router.navigate(['addFreelancer']);
  }

}
