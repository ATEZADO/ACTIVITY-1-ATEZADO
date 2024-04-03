import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {

  userName: string = "";
  password: string = "";
  constructor(private alertController: AlertController, private authenticate: AuthenticationService, private toastController: ToastController, private router: Router) { }

  ngOnInit() {
  }

  async toLogin() {
    if (this.userName == "user1" && this.password == "pass" || this.userName == "admin" && this.password == "admin1"){
      const alert = await this.alertController.create ({
        header: 'Alert',
        subHeader: 'Status',
        message: 'LOG IN SUCCESSFULLY',
        buttons: ['OK']
      })
      await alert.present();
      this.authenticate.canProceed = true;
      this.router.navigate(['tabs/dashboard']);
    } else {
      const toast = await this.toastController.create({
        message: 'LOG IN FAILED',
        duration: 2000,
      });
      toast.present();
    }
  }

}
