import { Component, OnInit } from '@angular/core';
import {DiseasesService} from '../services/diseases.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-disease',
  templateUrl: './add-disease.component.html',
  styleUrls: ['./add-disease.component.scss']
})
export class AddDiseaseComponent implements OnInit {
  documentClassesChapterFormGroup: FormGroup;
  selectedDisease: string;
  allDiseases: Object[];
  pat_desc: string;
  doc_desc: string;
  doc_prescr: string;

  constructor(public diseaseService: DiseasesService) { }

  ngOnInit() {
    this.diseaseService.getAllDiseases()
      .subscribe(response => {
        this.allDiseases = response;
        console.log(this.allDiseases);
      });

    this.documentClassesChapterFormGroup = new FormGroup({
      chapterClassesControl: new FormControl()
    });
  }

  addDisease() {

  }

  onChange($event){
    this.selectedDisease = $event.target.options[$event.target.options.selectedIndex].value;
  }

}
