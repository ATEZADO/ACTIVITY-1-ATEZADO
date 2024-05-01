import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  
  email: string = '';
  password: string ='';
  confirmPass: string = '';

  constructor(private authentication: AuthenticationService) { }

  ngOnInit() {
  }

  signUp(){
    this.authentication.signUp(this.email, this.password, this.confirmPass);
  }
}
