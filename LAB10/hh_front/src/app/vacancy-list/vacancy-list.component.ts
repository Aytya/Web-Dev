import {Component, OnInit} from '@angular/core';
import {VacancyService} from "../vacancy.service";
import {Vacancy} from "../vacancy";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css']
})
export class VacancyListComponent implements OnInit{
  vacancies!:Vacancy[];
  idOfCompany!:number;
  constructor(private vacancyService: VacancyService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('id'));
    this.idOfCompany = productIdFromRoute;

    this.vacancyService.getVacanciesByCompany(this.idOfCompany).subscribe((data) =>{
      this.vacancies = data;
    })
  }


}
