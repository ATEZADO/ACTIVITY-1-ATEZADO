import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';
  constructor(private authentication: AuthenticationService) { }

  ngOnInit() {
  }

  logIn(){
    this.authentication.logIn(this.email, this.password);
    
  }

  


}
