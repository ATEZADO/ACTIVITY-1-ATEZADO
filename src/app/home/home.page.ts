import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../model/model';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  vehicles: Vehicle[] = [];
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getVehicles().subscribe(item => {
      this.vehicles = item;
    })
  }

}