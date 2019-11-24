import {Component, OnInit} from '@angular/core';
import {DiseasesService} from '../services/diseases.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-all-diseases',
  templateUrl: './all-diseases.component.html',
  styleUrls: ['./all-diseases.component.scss']
})
export class AllDiseasesComponent implements OnInit {
  diseases: Object[];
  filtredDiseases: Object[];
  filterValue: string;

  constructor(private service: DiseasesService,
              private router: Router) {
    this.filterValue = "";
  }

  ngOnInit() {
    this.service.getAllDiseases()
      .subscribe(response => {
        this.diseases = response;
        this.filtredDiseases = this.diseases;
        console.log(this.filtredDiseases);
      });
  }

  onChange($event){
    this.filterFunction();
  }

  filterFunction() {
    if (this.filterValue == ""){
      this.filtredDiseases = this.diseases;
    }
    else {
      this.filtredDiseases = this.diseases.filter(dis =>
        dis['name'].toString().toLowerCase().includes(this.filterValue.toLowerCase()) ||
        dis['category'].toString().toLowerCase().includes(this.filterValue.toLowerCase()));
    }
  }
}
