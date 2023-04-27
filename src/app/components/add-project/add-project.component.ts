import { Component, OnInit } from '@angular/core';
import { categoryprojects } from 'src/app/models/categoryProject';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit{
  LisTOfCat : categoryprojects [] = [];
  constructor(private proj:ProjectsService){}

    ngOnInit(): void {
       this.proj.getCategoryProject().subscribe(res=> this.LisTOfCat=res)
  }

    GetAddProjcet(){
      this.proj.AddProject()
    }




}
