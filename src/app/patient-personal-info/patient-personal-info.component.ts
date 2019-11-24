import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-personal-info',
  templateUrl: './patient-personal-info.component.html',
  styleUrls: ['./patient-personal-info.component.scss']
})
export class PatientPersonalInfoComponent implements OnInit {
  patientId: number;
  firstName: string;
  lastName: string;
  address: string;
  personalIdentityNumber: number;

  constructor() { }

  ngOnInit() {
  //  todo download all abouve values
  }

  genereateDocumentation() {
    // todo generate documentation based on user history (rest endpoint)
  }

}
