import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {serviceUrl} from '../../global';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  username: string;
  password: string;

  constructor(private httpClient: HttpClient) { }

  public getHeader(): HttpHeaders {
    this.username = sessionStorage.getItem('username');
    this.password = sessionStorage.getItem('password');
    return new HttpHeaders({Authorization: 'Basic ' + btoa(this.username + ':' + this.password)});
  }

  public getAllPatients() {
    const headers = this.getHeader();
    return this.httpClient.get<Object[]>(serviceUrl + '/api/patients', {headers});
  }

  public getPatient(patientId) {
    const headers = this.getHeader();
    return this.httpClient.get<Object[]>(serviceUrl + '/api/patients/' + patientId, {headers});
  }
}
