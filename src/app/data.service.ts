import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  canProceed = false;
  myArray = [1,2,3];

  fetchData(): Promise<any> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Data Fetch Successfully');
      }, 2000);
    })
  }

  fetchData1(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (this.canProceed) {
        setTimeout(() => {
          resolve(this.myArray)
        }, 2000);
      } else {
        reject(new Error('Access Denied!'));
      }
    })
  }

  addToMyArray(array: any) {
    const copiedArray = [...this.myArray, array];
    this.myArray = copiedArray;
  }
}
