import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {serviceUrl} from '../../global';

@Injectable({
  providedIn: 'root'
})
export class ActuallyLoggedInUserService {
  username: string;
  password: string;

  public getHeader(): HttpHeaders {
    this.username = sessionStorage.getItem('username');
    this.password = sessionStorage.getItem('password');
    return new HttpHeaders({Authorization: 'Basic ' + btoa(this.username + ':' + this.password)});
  }

  constructor(private httpClient: HttpClient) { }

  public getCurrentlyLoggedInUserInfo() {
    const headers = this.getHeader();
    return this.httpClient.get<Object[]>(serviceUrl + '/api/currentUser', {headers});
  }
}
