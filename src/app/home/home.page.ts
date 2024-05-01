import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private authentication:AuthenticationService, private router:Router) {}
  signOut() {
    this.router.navigate(['login']);
    this.authentication.setAuthentication(false);
  }
}
