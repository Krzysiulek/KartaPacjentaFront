import {Component, OnInit} from '@angular/core';
import {MedialHistoryService} from '../services/medial-history.service';

@Component({
  selector: 'app-patient-disease-more-info',
  templateUrl: './patient-disease-more-info.component.html',
  styleUrls: ['./patient-disease-more-info.component.scss']
})
export class PatientDiseaseMoreInfoComponent implements OnInit {
  patientId: number;
  courseOfIllnessId: number;
  history: any;

  constructor(public service: MedialHistoryService) {
    this.patientId = Number(sessionStorage.getItem('patientId'));
    this.courseOfIllnessId = Number(sessionStorage.getItem('courseOfIllnessId'));
  }

  ngOnInit() {
    this.service.getPatientDisease(this.patientId, this.courseOfIllnessId)
      .subscribe(response => {
        console.log(response);
        this.history = response;
      });
  }

}
