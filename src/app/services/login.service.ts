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

    return this.httpClient.post<MyServiceUser>(serviceUrl + '/api/users/register', user);
  }

  public logOut() {
    sessionStorage.clear();
  }
}

export class MyServiceUser {
  constructor(public userId: number,
              public userName: string,
              public email: string,
              public password: string,
              public firstName: string,
              public lastName: string,
              public address: string,
              public phoneNumber: number,
              public personalIdentityNumber: number) {
  }
}
