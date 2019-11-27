import { Component, OnInit } from '@angular/core';
import {LoginService, MyServiceUser} from '../services/login.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  serviceUser: MyServiceUser = new MyServiceUser(null, '', '', '', '', '', '', null, null);
  confirmPassword: string;
  passwordsAreNotEqual: boolean;
  registrationError: boolean;
  registrationSuccess: boolean;

  constructor(private httpService: LoginService, private router: Router) { }

  ngOnInit() {

  }

  createUser() {
    if (this.serviceUser.password === this.confirmPassword) {
      this.httpService.register(this.serviceUser)
        .subscribe( data => {
            this.registrationSuccess = true;
            setTimeout(() => this.registrationSuccess = false, 10000);
            this.router.navigate(['login']);

          },
          error1 => {
            this.registrationError = true;
            setTimeout(() => this.registrationError = false, 3000);
          });
    } else {
      this.passwordsAreNotEqual = true;
      setTimeout(() => this.passwordsAreNotEqual = false, 3000);
    }
  }
}
