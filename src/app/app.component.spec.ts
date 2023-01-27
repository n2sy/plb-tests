import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

// describe('AppComponent', () => {
//   it('Should be 0 when negative', () => {
//     const instance = new AppComponent();
//     const res = instance.compute(-1);
//     expect(res).toBe(0);
//   });
// });

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    });
  });
  it('Should be 10 when negative', () => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.componentInstance;
    const res = app.compute(-1);
    expect(res).toBe(10);
  });
});
