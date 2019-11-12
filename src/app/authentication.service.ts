import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {serviceUrl} from '../global';

export class User {
  constructor(public status: string) {}

}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  authenticate(username: string, password: string) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<Object>(serviceUrl + '/validate', {headers}).pipe(
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
    return this.httpClient.get<User[]>(serviceUrl + '/api/readers/currentlyLogged', {headers});
  }

  public isUserLoggedAsAdmin() {
    this.getCurrentlyLoggedUser().subscribe(data => {
      sessionStorage.setItem('isadmin', this.contains(data['authorities'], 'authority', 'ROLE_ADMIN'));
      sessionStorage.setItem('isuser', this.contains(data['authorities'], 'authority', 'ROLE_USER'));
      sessionStorage.setItem('iseditor', this.contains(data['authorities'], 'authority', 'ROLE_WRITER'));

      return data['authorities'][0]['authority'] == "ROLE_ADMIN";
    }), error => {
      return 'false';
    };
  }

  public isUserAdmin() {
    return sessionStorage.getItem('isadmin') == 'true';
  }

  public isUserEditor() {
    return sessionStorage.getItem('iseditor') == 'true';
  }

  public isUserUser() {
    return sessionStorage.getItem('isuser') == 'true';
  }

  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('password');
    sessionStorage.removeItem('isadmin');
    sessionStorage.removeItem('isuser');
    sessionStorage.removeItem('iseditor');

  }

  contains(arr, key, val) {
    for (var i = 0; i < arr.length; i++) {
      if(arr[i][key] === val) return 'true';
    }
    return 'false';
  }
}
