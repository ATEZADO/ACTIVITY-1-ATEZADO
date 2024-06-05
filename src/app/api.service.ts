import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicle } from './model/model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<any>('https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json').pipe(
      map(response => {
        return response.Results as Vehicle[];
      })
    );
  }
}