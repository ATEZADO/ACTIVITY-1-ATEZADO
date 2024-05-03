import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { AlertController } from '@ionic/angular';
import { User, iUser } from './home.model';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user: User = new User();
  userList: iUser[]=[];
  isLoading: boolean = false;
  

  constructor(private authentication:AuthenticationService, private router:Router, 
              private alertController: AlertController, private homeService: HomeService) {}

  signOut() {
    this.router.navigate(['login']);
    this.authentication.setAuthentication(false);
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present(); 
    
  }

  save(){
    if (this.user.id) {
      this.homeService.tryUpdate(this.user);
      this.presentAlert('Update', 'User Updated');
    } else {
      this.homeService.tryAdd(this.user);
      this.presentAlert('Success', 'User Added');
    }
    this.user = new User();
    this.users();
  }

  async users() {
    this.isLoading = true;
    this.userList = await this.homeService.getUsers();
    this.isLoading = false;
  }
  edit(user: iUser) {
    this.user = user;
  }

  async delete(user: User) {
    this.isLoading = true;
    await this.homeService.tryDelete(user);
    this.presentAlert('Delete', 'User Deleted');
    this.users();
    this.user = new User();
    this.isLoading = false;
  }
}
