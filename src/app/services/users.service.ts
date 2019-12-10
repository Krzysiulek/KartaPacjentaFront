import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {serviceUrl} from '../../global';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  username: string;
  password: string;

  constructor(private httpClient: HttpClient) { }

  public getHeader(): HttpHeaders {
    this.username = sessionStorage.getItem('username');
    this.password = sessionStorage.getItem('password');
    return new HttpHeaders({Authorization: 'Basic ' + btoa(this.username + ':' + this.password)});
  }

  public getAllUsers() {
    const headers = this.getHeader();
    return this.httpClient.get<Object[]>(serviceUrl + '/api/users', {headers});
  }

  public grantAdminRole(user) {
    if (this.contains(user['roles'], 'ROLE_ADMIN')) {
      var readerRoles = user['roles'];

      user['roles'] = [];

      readerRoles = readerRoles.filter(item => item != 'ROLE_ADMIN');
      user['roles'] = readerRoles;
    } else {
      user['roles'].push('ROLE_ADMIN');
    }

    const headers = this.getHeader();
    return this.httpClient.put<Object>(serviceUrl + '/api/users', user, {headers});
  }

  public grantDoctorRole(user) {

  }

  public grantPatientRole(user) {

  }

  public delete(user) {

  }

  contains(arr, val) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === val) {
        return true;
      }
    }
    return false;
  }
}
