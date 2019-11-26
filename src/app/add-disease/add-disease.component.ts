import { Component, OnInit } from '@angular/core';
import {DiseasesService} from '../services/diseases.service';
import {FormControl, FormGroup} from '@angular/forms';
import {CourseOfIllness, IllnessHistoryService} from '../services/illness-history.service';
import {ActuallyLoggedInUserService} from '../services/actually-logged-in-user.service';

@Component({
  selector: 'app-add-disease',
  templateUrl: './add-disease.component.html',
  styleUrls: ['./add-disease.component.scss']
})
export class AddDiseaseComponent implements OnInit {
  diseasesController: FormGroup;
  selectedDiseaseId: string;
  allDiseases: Object[];
  currentlyLoggedInUser: Object;

  visit_category: string;
  pat_desc: string;
  doc_desc: string;
  doc_prescr: string;

  constructor(public diseaseService: DiseasesService,
              public illnessHistoryService: IllnessHistoryService,
              public currentlyLoggedInService: ActuallyLoggedInUserService) { }

  ngOnInit() {
    this.diseaseService.getAllDiseases()
      .subscribe(response => {
        this.allDiseases = response;
        console.log(this.allDiseases);
      });

    this.diseasesController = new FormGroup({
      diseasesController: new FormControl()
    });
  }

  addDisease() {
    this.currentlyLoggedInService.getCurrentlyLoggedInUserInfo()
      .subscribe(response => {
        this.currentlyLoggedInUser = response;
      });

    let diseaseId = this.selectedDiseaseId;
    let patientId = this.currentlyLoggedInUser['patientId'];
    let doctorId = this.currentlyLoggedInUser['doctorId'];
    let courseOfIllness = new CourseOfIllness(this.visit_category, Number(diseaseId), Number(patientId), Number(doctorId), this.pat_desc, this.doc_desc, this.doc_prescr);
    console.log(courseOfIllness);

    this.illnessHistoryService.addNewPatientDisease(courseOfIllness)
      .subscribe(response => {
        alert('added');
        // todo replace alert with pop-up or sth else
      });
  }

  onChange($event){
    this.selectedDiseaseId = $event.target.options[$event.target.options.selectedIndex].value;
  }

}
