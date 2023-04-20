import { Injectable } from '@angular/core';
import { collection, Firestore } from '@angular/fire/firestore';
import { collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Project } from 'src/app/models/projects';
import { Iproject } from '../models/iproject';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private firestore: Firestore) {}
  // getdataofprojects

  getallprojects() {
    let project = collection(this.firestore, 'projects');
    return collectionData(project, { idField: 'id' }) as Observable<Project[]>;
  }

  getprojecetById() {}

  // // addprojec
  // AddProjects(Projects:Projectss){
  //   let projects = collection(this.firestore, 'projects');
  //   addDoc(projects, proj)
  //   .then( (res) =>{
  //       return res;
  //   }).catch(err =>{console.log(err.message)});
  // }
  projects: Iproject[] = [];

  getProjects() {
    let project = collection(this.firestore, 'projects');
    return collectionData(project, { idField: 'id' }) as Observable<Iproject[]>;
  }
}
