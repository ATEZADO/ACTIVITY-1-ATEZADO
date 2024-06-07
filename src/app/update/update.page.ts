import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User, iUser } from '../home/home.model';
import { AuthenticationService } from '../authentication.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  users: User = new User();
  id: any;

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

  constructor(
    private route: ActivatedRoute, 
    private auth: AuthenticationService, 
    private loadController: LoadingController,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.synchUpdate(this.auth.newUserList);
  }

  async updateUser() {
    if (this.validation()) {
      let loader = await this.loadController.create({
        message: "Updating..."
      });
      await loader.present();
      if (this.users.id) {
        this.auth.updateUser(this.users);
        this.auth.presentAlert('SUCCESS', 'SUCCESSFULLY UPDATED.')
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

  synchUpdate(users: iUser[]) {
    users.forEach(user => {
      if (this.id == user.id) {
        this.users.id = user.id;
        this.users.title = user.title;
        this.users.author = user.author;
        this.users.ratings = user.ratings;
        this.users.released = user.released;
        this.users.genres = user.genres;
        this.users.isCompleted = user.isCompleted;
      }
    });
  }
}
