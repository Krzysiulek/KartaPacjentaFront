import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {serviceUrl} from '../../global';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  public register(user) {
    console.log(JSON.stringify(user));

    return this.httpClient.post<MyServiceUser>(serviceUrl + '/register', user);
  }

  public logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('password');
  }
}

export class MyServiceUser {
  constructor(public userId: number,
              public userName: string,
              public email: string,
              public password: string) {
  }
}
