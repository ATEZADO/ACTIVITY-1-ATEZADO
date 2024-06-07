import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { iUser, User } from './home.model';
import { LoadingController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userList: iUser[] = [];
  users: User = new User();
  constructor(private auth: AuthenticationService, private router: Router, private loadController: LoadingController) {
  }

  ionViewWillEnter() {
    this.user();
  }

  logOut() {
    this.router.navigate(['login']);
    this.auth.setAuthentication(false);
  }

  update(user: User) {
    this.router.navigate(['update', user.id]);
    this.auth.newUserList = this.userList;
    this.auth.edit(user);
    console.log(this.userList);
  }

  addUser() {
    this.router.navigate(['create']);
  }

  async user() {
    this.auth.isLoading = true;
    this.userList = await this.auth.getUsers();
    this.auth.newUserList = this.userList;
    this.auth.isLoading = false;
  }

  async delete(user: User) {
    const confirmDelete = confirm('Are you sure you want to delete this movie?');
  
    if (!confirmDelete) {
      return; 
    }
  
    this.auth.isLoading = true;
    await this.auth.deleteUser(user);
    this.auth.presentAlert('SUCCESS', 'DELETED SUCCESSFULLY');
    this.user();
    this.users = new User();
    this.auth.isLoading = false;
  }
  
}
