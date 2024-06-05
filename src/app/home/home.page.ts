import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  myArray = [];
  nextnumber: number = 0;
  loadingText = "Loading...";
  isLoading = false;
  isHide = true;

  constructor(private router: Router, private dataService: DataService) {
    console.log(this.dataService.canProceed);
  }

  async showObject(){
    try {
      this.isLoading = true;
      if (this.isLoading == true) {
        this.isHide = false;
        this.myArray = await this.dataService.fetchData1();
        console.log(this.myArray);
      }
      this.isHide = true;
    } catch (error) {
      console.error(error);
    } finally {
      this.isLoading = false;
    }
  }

  clickUnauthenticate(){
    this.dataService.canProceed = false;
    console.log('Successfully Unauthenticate!');
    this.isHide = false;
  }

  clickAuthenticate() {
    this.dataService.canProceed = true;
    console.log('Successfully Authenticate!');
    this.isHide = false;
  }

  async addObject(){
    this.myArray = await this.dataService.fetchData1();
    this.nextnumber = this.myArray.length + 1;
    this.dataService.addToMyArray(this.nextnumber);
  }

}


