import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'custom.component',
  templateUrl: 'custom.component.html'
})
export class SharedPage {

  constructor(private authenticationService: AuthenticationService, private router: Router) {}
  goWithAuthentication (){
    this.authenticationService.canProceed = true;
}
}