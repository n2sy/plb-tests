import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  user: { login: string };
  isLogged = false;
  data: string;

  constructor(private logSer: LoginService, private dataSer: DataService) {}

  ngOnInit() {
    this.user = this.logSer.user;
    this.dataSer.getDetails().then((d: string) => (this.data = d));
  }
}
