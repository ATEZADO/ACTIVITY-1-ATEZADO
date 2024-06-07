import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { User } from '../home/home.model';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  users: User = new User();
  genres: string[] = [
    'Action', 
    'Adventure', 
    'Animation', 
    'Biography', 
    'Comedy', 
    'Crime', 
    'Documentary', 
    'Drama', 
    'Family', 
    'Fantasy', 
    'History', 
    'Horror', 
    'Music', 
    'Musical', 
    'Mystery', 
    'Romance', 
    'Sci-Fi', 
    'Sport', 
    'Thriller'
  ];
  constructor(private auth: AuthenticationService, private loadController: LoadingController, private router: Router) { }

  ngOnInit() {
  }

  async createUser() {
    if (this.validation()) {
      let loader = await this.loadController.create({
        message: "Please wait..."
      });
      await loader.present();
      if (!this.users.id) {
        this.auth.addUser(this.users);
        this.auth.presentAlert('SUCCESS', 'SUCCESSFULLY ADDED.')
      }
      this.users = new User();
      await loader.dismiss();
      this.router.navigate(['home']);
    }
  }
  

  validation() {
    if (!this.users.title) {
      this.auth.presentToast('ENTER TITLE', 3000);
      return false;
    }
    if (!this.users.author) {
      this.auth.presentToast('ENTER AUTHOR', 3000);
      return false;
    }
    if (!this.users.ratings) {
      this.auth.presentToast('ENTER RATINGS', 3000);
      return false;
    }
    if (!this.users.released) {
      this.auth.presentToast('ENTER RELEASED', 3000);
      return false;
    }
    if (!this.users.isCompleted) {
      this.auth.presentToast('ENTER COMPLETED', 3000);
      return false;
    }
    if (!this.users.genres) {
      this.auth.presentToast('ENTER GENRES', 3000);
      return false;
    }
    return true;
  }
}
