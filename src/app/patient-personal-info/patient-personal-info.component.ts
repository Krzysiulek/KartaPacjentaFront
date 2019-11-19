import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-personal-info',
  templateUrl: './patient-personal-info.component.html',
  styleUrls: ['./patient-personal-info.component.scss']
})
export class PatientPersonalInfoComponent implements OnInit {
  firstName: string = "Krzysio";

  constructor() { }

  ngOnInit() {
  }

}
