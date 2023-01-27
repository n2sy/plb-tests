import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
  waitForAsync,
} from '@angular/core/testing';
import { DataService } from '../data.service';
import { LoginService } from '../login.service';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should use the user login from the service', () => {
    let logService = TestBed.inject(LoginService);
    fixture.detectChanges();
    expect(logService.user.login).toEqual(component.user.login);
  });

  it('should display the user login if user is logged in', () => {
    component.isLogged = true;
    fixture.detectChanges();
    let elt = fixture.nativeElement;
    expect(elt.querySelector('p').textContent).toContain(component.user.login);
  });

  it('should not display the user login if user is not logged in', () => {
    let elt = fixture.nativeElement;
    expect(elt.querySelector('p').textContent).not.toContain(
      component.user.login
    );
  });

  it('should fetch data successfully if called asynchronously V2', waitForAsync(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.data).toBe('data');
    });
  }));

  // it('should fetch data successfully if called asynchronously', fakeAsync(() => {
  //   let dataSer = TestBed.inject(DataService);
  //   spyOn(dataSer, 'getDetails').and.returnValue(Promise.resolve('data'));
  //   fixture.detectChanges();
  //   tick(); // attendre la fin du traitement asynchrone
  //   expect(component.data).toBe('data');
  // }));
});
