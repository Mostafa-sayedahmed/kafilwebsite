import { Component, OnInit } from '@angular/core';
import { GetservicesService } from 'src/app/services/getservices.service';

@Component({
  selector: 'app-services-category',
  templateUrl: './services-category.component.html',
  styleUrls: ['./services-category.component.scss'],
})
export class ServicesCategoryComponent implements OnInit {
  constructor(private services: GetservicesService) {}
  async ngOnInit(): Promise<void> {
    await this.services.getservicesbyCategory('خدمات مالية').then((results) => {
      results.forEach((element) => {
        // element.data.state == 'approved'
        //   ? (this.serviceslist = [...this.serviceslist, element])
        //   : null;
        console.log(element);
      });
    });
  }
}
