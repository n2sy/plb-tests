import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  user = { login: 'nidhal' };

  constructor() {}
}
