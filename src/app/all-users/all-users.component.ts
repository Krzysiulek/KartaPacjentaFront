import { Component, OnInit } from '@angular/core';
import {UsersService} from '../services/users.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {
  users: object[];
  filterValue: string;
  filtredUsers: object[];

  constructor(private clientService: UsersService) { }

  ngOnInit() {
    this.clientService.getAllUsers()
      .subscribe(response => {
        this.users = response;
        this.filtredUsers = this.users;
      });
  }


  onChange($event){
    this.filterFunction();
  }

  filterFunction() {
    if (this.filterValue == ""){
      this.filtredUsers = this.users;
    }
    else {
      this.filtredUsers = this.users.filter(doc =>
        doc['userName'].toString().toLowerCase().includes(this.filterValue.toLowerCase()) ||
        doc['email'].toString().toLowerCase().includes(this.filterValue.toLowerCase()) ||
        doc['roles'].toString().toLowerCase().includes(this.filterValue.toLowerCase()));
    }
  }

  grantAdminRole(user) {
    this.clientService.grantAdminRole(user)
      .subscribe(data => {
        this.handleSuccessfulResponse();
      })
  }

  grantDoctorRole(user) {

  }

  grantPatientRole(user) {

  }

  delete(user) {

  }

  private handleSuccessfulResponse() {
    this.ngOnInit();
  }
}
