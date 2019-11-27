import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {serviceUrl} from '../../global';

@Injectable({
  providedIn: 'root'
})
export class MedialHistoryService {
  username: string;
  password: string;

  constructor(private httpClient: HttpClient) { }

  public getHeader(): HttpHeaders {
    this.username = sessionStorage.getItem('username');
    this.password = sessionStorage.getItem('password');
    return new HttpHeaders({Authorization: 'Basic ' + btoa(this.username + ':' + this.password)});
  }

  getPatientHistory(patientId) {
    const headers = this.getHeader();
    return this.httpClient.get<Object[]>(serviceUrl + '/api/illnessCource/' + patientId, {headers});
  }

  getPatientHistoryFull(patientId) {
    const headers = this.getHeader();
    return this.httpClient.get<Object[]>(serviceUrl + '/api/illnessCource/' + patientId + "/full", {headers});
  }

  getPatientHistoryAnonymous(patientId) {
    const headers = this.getHeader();
    return this.httpClient.get<Object[]>(serviceUrl + '/api/illnessCource/' + patientId + "/anonymous", {headers});
  }

  getPatientDisease(patientId, courseOfIllnessId) {
    const headers = this.getHeader();
    return this.httpClient.get<Object[]>(serviceUrl + '/api/illnessCource/' + patientId + "/" + courseOfIllnessId, {headers});
  }

  getPatientFullDocumentationJson(patientId) {
    let extended = sessionStorage.getItem('extendedDocs') == 'true';

    if (extended) {
      return serviceUrl + '/api/illnessCource/' + patientId + "/full"
    } else {
      return serviceUrl + '/api/illnessCource/' + patientId + "/anonymous"
    }
  }
}
