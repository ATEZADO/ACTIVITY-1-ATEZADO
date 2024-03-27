import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

 
  constructor(private authenticate : AuthenticationService, 
              private modalController : ModalController,
              private toastController : ToastController) { }

  async presentToast(){
    const toast = await this.toastController.create({
      message: 'Your toast message here',
      duration: 2000
    });
    toast.present();
  }

  async dismissToast(){
    const toast = await this.toastController.getTop();
      if(toast) {
        toast.dismiss();
      }
  }

  async closeModal(){
    await this.modalController.dismiss();
  }

  volume=100;
  ngOnInit() {
    this.authenticate.authenticated = false;
  }
  

}

