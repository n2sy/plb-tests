import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getDetails() {
    const res = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('data');
      }, 2000);
    });
    return res;
  }

  constructor() {}
}
