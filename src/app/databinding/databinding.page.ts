import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.page.html',
  styleUrls: ['./databinding.page.scss'],
})
export class DatabindingPage implements OnInit {

  username : string =''
  password : string = ''

  constructor(private alertCtrl: AlertController, 
              private router: Router, 
              private authenticate: AuthenticationService) { }

  ngOnInit() {
  }

  async proceedLogin(){
      const alert = await this.alertCtrl.create({
        header: 'Login',
        subHeader: 'Status',
        message: 'Login success!',
        buttons: ['OK']
      }); 
    await alert.present();
    this.router.navigate(['dashboard/home'])
    this.authenticate.authenticated = true;
  }
}
