import { Component } from '@angular/core';
import { Project } from 'src/app/models/projects';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  ListOfProject: Project[] = [];

  constructor(private projects: ProjectsService) {}
  ngOnInit(): void {
    this.projects.getallprojects().subscribe((res) => {
      this.ListOfProject = res;
      console.log(res);
    });
  }
}
