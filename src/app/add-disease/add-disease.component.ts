import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-disease',
  templateUrl: './add-disease.component.html',
  styleUrls: ['./add-disease.component.scss']
})
export class AddDiseaseComponent implements OnInit {
  dis_name: string;
  dis_category: string;
  dis_description: string;

  add_dis_success: boolean;
  add_dis_failure: boolean;

  constructor() { }

  ngOnInit() {
  }

  addDisease() {

  }

}
