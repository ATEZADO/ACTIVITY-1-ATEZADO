import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { Vehicle } from '../model/model';
import { ApiService } from '../api.service';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  vehicles: Vehicle[] = [];
  constructor(private router: Router, private authenticate: AuthenticationService, private api: ApiService, private modalController: ModalController) { }
  
  ngOnInit(): void {
    this.api.getVehicles().subscribe(item => {
      this.vehicles = item;
      console.log(item);
    });
  }
  async toggleModal() {
    const modal = await this.modalController.create({
      component: ModalComponent
    });
    return await modal.present();
  }


  logOut() {
    this.authenticate.canProceed = false;
    this.router.navigate(['login']);
  }

}