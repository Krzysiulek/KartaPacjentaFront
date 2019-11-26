import { Component, OnInit } from '@angular/core';
import {PatientsService} from '../services/patients.service';

@Component({
  selector: 'app-patient-personal-info',
  templateUrl: './patient-personal-info.component.html',
  styleUrls: ['./patient-personal-info.component.scss']
})
export class PatientPersonalInfoComponent implements OnInit {
  patient: object;
  patientId: string;

  constructor(public service: PatientsService) {
    this.patientId = sessionStorage.getItem('patientId');
  }

  ngOnInit() {
    this.service.getPatient(this.patientId)
      .subscribe(response => {
        console.log(response);
        this.patient = response;
      });
  }
}
