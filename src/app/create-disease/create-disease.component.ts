import { Component, OnInit } from '@angular/core';
import {Disease, DiseasesService} from '../services/diseases.service';

@Component({
  selector: 'app-create-disease',
  templateUrl: './create-disease.component.html',
  styleUrls: ['./create-disease.component.scss']
})
export class CreateDiseaseComponent implements OnInit {
  dis_name: string;
  dis_category: string;
  dis_description: string;

  add_dis_success: boolean;
  add_dis_failure: boolean;

  constructor(private diseaseService: DiseasesService) { }

  ngOnInit() {
  }

  addDisease() {
    this.diseaseService.createDisease(new Disease(0, this.dis_name, this.dis_category, this.dis_description))
      .subscribe(response => {
        this.add_dis_success = true;
        setTimeout(() => this.add_dis_success = false, 3000);
      },
        error1 => {
        this.add_dis_failure = true;
        setTimeout(() => this.add_dis_failure = false, 3000);
        });
  }

}
