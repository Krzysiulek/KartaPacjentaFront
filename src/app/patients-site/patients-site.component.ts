import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PatientsService} from '../services/patients.service';
import {LoginService} from '../services/login.service';
import {AuthenticationService} from '../authentication.service';

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
              private router: Router,
              private authenticationService: AuthenticationService) {
    this.filterValue = "";

    console.log('dupa');
    if (this.authenticationService.issUserPatient() && !this.authenticationService.isUserAdmin())
    {
      this.service.getActuallyLoggedInPatient().subscribe(
        response => {
          console.log('logowanie');
          let patientId = response['patientId'];
          this.openPatient(patientId);
        }, error1 => {
          console.log('logowanie failed');
          console.log(error1);
        }
      );
      this.router.navigate(['patients']);
    }
  }

  ngOnInit() {
    if (this.authenticationService.isUserAdmin()) {
      this.service.getAllPatients()
        .subscribe(response => {
          console.log(response);
          this.patients = response;
          this.filtredPatients = this.patients;
        });
    }
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
