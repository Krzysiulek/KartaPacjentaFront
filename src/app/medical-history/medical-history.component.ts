import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MedialHistoryService} from '../services/medial-history.service';

@Component({
  selector: 'app-medical-history',
  templateUrl: './medical-history.component.html',
  styleUrls: ['./medical-history.component.scss']
})
export class MedicalHistoryComponent implements OnInit {
  history: Object[];
  filtredHistory: Object[];
  filterValue: string;

  constructor(public historyService: MedialHistoryService,
              public router: Router) {
    this.filterValue = "";
  }

  ngOnInit() {
    let patientId = sessionStorage.getItem('patientId');

    this.historyService.getPatientHistory(patientId)
      .subscribe(response => {
        console.log(response);
        this.history = response;
        this.filtredHistory= this.history;
      });
  }

  generateDocumentation() {
    let patientId = sessionStorage.getItem('patientId');
    sessionStorage.setItem('patientId', patientId);
    sessionStorage.setItem('extendedDocs', 'true');

    this.router.navigate(["generateMedicalDoc"]);
  }

  generateDocumentationAnonymous() {
    let patientId = sessionStorage.getItem('patientId');
    sessionStorage.setItem('patientId', patientId);
    sessionStorage.setItem('extendedDocs', 'false');

    this.router.navigate(["generateMedicalDoc"]);
  }

  onChange($event){
    this.filterFunction();
  }

  filterFunction() {
    if (this.filterValue == ""){
      this.filtredHistory = this.history;
    }
    else {
      this.filtredHistory = this.history.filter(patient =>
        patient['diseaseName'].toString().toLowerCase().includes(this.filterValue.toLowerCase()) ||
        patient['visitCategory'].toString().toLowerCase().includes(this.filterValue.toLowerCase()) ||
        patient['doctorLastName'].toString().toLowerCase().includes(this.filterValue.toLowerCase()));
    }
  }

  moreInfo(patientId, courseOfIllnessId) {
    sessionStorage.setItem('courseOfIllnessId', courseOfIllnessId);
    sessionStorage.setItem('patientId', patientId);

    this.router.navigate(["medicalHistoryMore"]);
  }
}
