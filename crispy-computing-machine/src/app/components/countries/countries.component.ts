import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  displayedColumns: string[] = [
    'name',
    'capital',
    'currency',
    'emoji',
    'phone',
    'continent',
  ];

  dataSource$ = this.countriesService.getCountries();

  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
  }

}
