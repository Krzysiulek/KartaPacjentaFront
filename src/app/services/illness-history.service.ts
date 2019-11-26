import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {serviceUrl} from '../../global';

@Injectable({
  providedIn: 'root'
})
export class IllnessHistoryService {
  username: string;
  password: string;

  public getHeader(): HttpHeaders {
    this.username = sessionStorage.getItem('username');
    this.password = sessionStorage.getItem('password');
    return new HttpHeaders({Authorization: 'Basic ' + btoa(this.username + ':' + this.password)});
  }

  constructor(private httpClient: HttpClient) { }

  public addNewPatientDisease(illness: CourseOfIllness) {
    const headers = this.getHeader();
    return this.httpClient.post<Object[]>(serviceUrl + '/api/illnessCource', illness, {headers});
  }
}

export class CourseOfIllness {
  constructor(public visitCategory: string,
              public diseaseId: number,
              public patientId: number,
              public doctorId: number,
              public patientDescription: string,
              public doctorDescription: string,
              public prescription: string) {}
}
