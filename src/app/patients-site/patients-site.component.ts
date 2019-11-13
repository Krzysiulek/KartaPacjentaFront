import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PatientsService} from '../services/patients.service';

@Component({
  selector: 'app-patients-site',
  templateUrl: './patients-site.component.html',
  styleUrls: ['./patients-site.component.scss']
})
export class PatientsSiteComponent implements OnInit {
  patients: Object[];
  filtredPatients: Object[];
  filterValue: string;

  constructor(private service: PatientsService,
              private router: Router) {
    this.filterValue = "";
  }

  ngOnInit() {
    this.service.getAllPatients()
      .subscribe(response => {
        this.patients = response;
        this.filtredPatients = this.patients;
      });
  }

  openPatient(patienId) {
    sessionStorage.setItem('patientId', patienId);
    this.router.navigate(['medicalHistory']);
  }

  onChange($event){
    this.filterFunction();
  }

  filterFunction() {
    if (this.filterValue == ""){
      this.filtredPatients = this.patients;
    }
    else {
      this.filtredPatients = this.patients.filter(patient =>
        patient['firstName'].toString().toLowerCase().includes(this.filterValue.toLowerCase()) ||
        patient['lastName'].toString().toLowerCase().includes(this.filterValue.toLowerCase()) ||
        patient['address'].toString().toLowerCase().includes(this.filterValue.toLowerCase()));
    }
  }

}
