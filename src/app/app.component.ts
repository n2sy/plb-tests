import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'test-plb-23';
  compute(x: number) {
    if (x < 0) return 10;
    return x + 1;
  }
}
