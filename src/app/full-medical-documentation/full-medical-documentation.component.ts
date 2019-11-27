import { Component, OnInit } from '@angular/core';
import {MedialHistoryService} from '../services/medial-history.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-full-medical-documentation',
  templateUrl: './full-medical-documentation.component.html',
  styleUrls: ['./full-medical-documentation.component.scss']
})
export class FullMedicalDocumentationComponent implements OnInit {
  patientId: number;
  medicalHistoryTOS: Object[];
  patientInfo: Object;

  constructor(private service: MedialHistoryService,
              private router: Router) {
    this.patientId = Number(sessionStorage.getItem('patientId'));
  }

  ngOnInit() {
    let extended = sessionStorage.getItem('extendedDocs') == 'true';

    if (extended) {
      this.getFullDocumentation();
    } else {
      this.getAnonymousDocumentation();
    }
  }

  generateJsonDocumentation() {
    window.open(this.service.getPatientFullDocumentationJson(this.patientId), "_blank");
  }

  getFullDocumentation() {
    this.service.getPatientHistoryFull(this.patientId)
      .subscribe(response => {
        this.patientInfo = response;
        this.medicalHistoryTOS = this.patientInfo['medicalHistoryTOS'];

        console.log(this.medicalHistoryTOS);
      });
  }

  getAnonymousDocumentation() {
    this.service.getPatientHistoryAnonymous(this.patientId)
      .subscribe(response => {
        this.patientInfo = response;
        this.medicalHistoryTOS = this.patientInfo['medicalHistoryTOS'];

        console.log(this.medicalHistoryTOS);
      });
  }
}
