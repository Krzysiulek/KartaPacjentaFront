import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {serviceUrl} from '../../global';

@Injectable({
  providedIn: 'root'
})
export class DiseasesService {
  username: string;
  password: string;

  public getHeader(): HttpHeaders {
    this.username = sessionStorage.getItem('username');
    this.password = sessionStorage.getItem('password');
    return new HttpHeaders({Authorization: 'Basic ' + btoa(this.username + ':' + this.password)});
  }

  constructor(private httpClient: HttpClient) { }

  public getAllDiseases() {
    const headers = this.getHeader();
    return this.httpClient.get<Object[]>(serviceUrl + '/api/diseases', {headers});
  }

  public createDisease(disease) {
    const headers = this.getHeader();
    return this.httpClient.post<Object[]>(serviceUrl + '/api/diseases', disease, {headers});
  }
}

export class Disease {
  constructor(public diseaseId: number,
              public name: string,
              public category: string,
              public description: string) {}
}
