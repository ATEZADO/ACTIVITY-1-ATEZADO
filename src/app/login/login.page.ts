import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  arrayUserName: string[] = ['user1','admin'];
  arrayPassword: string[] = ['pass1','admin1'];

  userName: string = "";
  password: string = "";

  constructor(private alertController: AlertController, private router: Router, private authenticationService: AuthenticationService, private toastController: ToastController) { }

  ngOnInit() {
  }

  async logIn(){
    const index = this.arrayUserName.indexOf(this.userName);
  
  if (index !== -1 && this.arrayPassword[index] === this.password) {
      localStorage.setItem('username', this.userName);
      localStorage.setItem('password', this.password);
      const alert = await this.alertController.create({
        header: 'Alert',
        subHeader: 'Status',
        message: 'LOG IN SUCCESSFULLY',
        buttons: ['OK']
      });
      await alert.present();
      this.authenticationService.canProceed = true;
      this.router.navigate(['tabs/dashboard']);
    } else {
      const toast = await this.toastController.create({
        message: 'LOG IN FAILED',
        duration: 5000
      });
      toast.present();
    }
  }

}