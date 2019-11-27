import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-patient-edit-header',
  templateUrl: './patient-edit-header.component.html',
  styleUrls: ['./patient-edit-header.component.scss']
})
export class PatientEditHeaderComponent implements OnInit {

  constructor(public service: AuthenticationService) { }

  ngOnInit() {
  }

}
