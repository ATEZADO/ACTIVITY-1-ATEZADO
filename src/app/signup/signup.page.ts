import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  email: string = '';
  password: string ='';
  confirmPass: string = '';
  constructor(private authentication: AuthenticationService) { }

  ngOnInit() {
  }

  signUp(){
    this.authentication.signUp(this.email, this.password, this.confirmPass);
    this.email='';
    this.password='';
    this.confirmPass='';
  }
}

