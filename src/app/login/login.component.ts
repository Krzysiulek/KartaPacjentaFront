import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';
import {PatientsService} from '../services/patients.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';

  loginSuccess: boolean;
  loginFailure: boolean;

  constructor(private router: Router,
              private loginService: AuthenticationService,
              private patientsService: PatientsService) { }

  ngOnInit() {}

  checkLogin() {
    (this.loginService.authenticate(this.username, this.password).subscribe(
        data => {
          this.loginService.isUserLoggedAsAdmin();
          this.loginSuccess = true;
          this.router.navigate(['patients']);
        },
        error => {
          this.loginFailure = true;
          setTimeout(() => this.loginFailure = false, 3000);
        }
      )
    );
  }

}
