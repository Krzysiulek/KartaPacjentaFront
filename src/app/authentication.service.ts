import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {serviceUrl} from '../global';
import {PatientsService} from './services/patients.service';
import {Router} from '@angular/router';

export class User {
  constructor(public status: string) {}

}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient,
              private service: PatientsService,
              private router: Router) { }

  authenticate(username: string, password: string) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<Object>(serviceUrl + '/login', {headers}).pipe(
      map(
        userData => {
          sessionStorage.setItem('username', username);
          sessionStorage.setItem('password', password);

          return userData;
        }
      )
    );
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('username');
    return !(user === null);
  }

  public getCurrentlyLoggedUser() {
    const username = sessionStorage.getItem('username');
    const password = sessionStorage.getItem('password');

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<User[]>(serviceUrl + '/api/users/currentlyLogged', {headers});
  }

  public isUserLoggedAsAdmin() {
    this.getCurrentlyLoggedUser().subscribe(data => {
      console.log(data);
      console.log('logowanie22');
      sessionStorage.setItem('isadmin', this.contains(data['authorities'], 'authority', 'ROLE_ADMIN'));
      sessionStorage.setItem('isdoctor', this.contains(data['authorities'], 'authority', 'ROLE_DOCTOR'));
      sessionStorage.setItem('ispatient', this.contains(data['authorities'], 'authority', 'ROLE_PATIENT'));


      if (this.issUserPatient())
      {
        this.service.getActuallyLoggedInPatient().subscribe(
          response => {
            console.log('logowanie');
            let patientId = response['patientId'];
            sessionStorage.setItem('patientId', patientId);
            this.router.navigate(['medicalHistory']);

          }, error1 => {
            console.log('Fail');
          }
        );
      }
      
      if (this.isUserAdmin()) {
        this.router.navigate(['patients']);
      }

      return data['authorities'][0]['authority'] == "ROLE_ADMIN";
    }), error => {
      return 'false';
    };
  }

  public isUserAdmin() {
    return sessionStorage.getItem('isadmin') == 'true';
  }

  public isUserDoctor() {
    return sessionStorage.getItem('isdoctor') == 'true';
  }

  public issUserPatient() {
    return sessionStorage.getItem('ispatient') == 'true';
  }

  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('password');
    sessionStorage.removeItem('isadmin');
  }

  contains(arr, key, val) {
    for (var i = 0; i < arr.length; i++) {
      if(arr[i][key] === val) return 'true';
    }
    return 'false';
  }
}
