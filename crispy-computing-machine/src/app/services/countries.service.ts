import { Apollo, gql } from 'apollo-angular';
import { Observable, map } from 'rxjs';
import { Country } from '../models/country';
import { Injectable } from '@angular/core';

const COUNTRIES = gql`{
  countries {
    name
    capital
    currency
    emoji
    phone
    continent {
      name
    }
  }
}`;

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private apollo: Apollo) { }

  getCountries(): Observable<Country[]> {
    return this.apollo.watchQuery<any>({
      query: COUNTRIES,
    }).valueChanges.pipe(map((result) => result.data.countries));
  }
}
