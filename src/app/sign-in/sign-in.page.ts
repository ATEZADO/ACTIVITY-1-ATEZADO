import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  email: string = '';
  password: string = '';
  constructor(private authentication: AuthenticationService) { }

  ngOnInit() {
  }

  signIn(){
    this.authentication.signIn(this.email, this.password);
  }

}
