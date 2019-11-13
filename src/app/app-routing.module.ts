import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {PatientsSiteComponent} from './patients-site/patients-site.component';
import {RegisterComponent} from './register/register.component';
import {LogoutComponent} from './logout/logout.component';
import {MedicalHistoryComponent} from './medical-history/medical-history.component';
import {AddDiseaseComponent} from './add-disease/add-disease.component';
import {AllUsersComponent} from './all-users/all-users.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'patients', component: PatientsSiteComponent },
  { path: 'medicalHistory', component: MedicalHistoryComponent },
  { path: 'addDisease', component: AddDiseaseComponent },
  { path: 'all-users', component: AllUsersComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
