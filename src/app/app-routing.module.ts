import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {PatientsSiteComponent} from './patients-site/patients-site.component';
import {RegisterComponent} from './register/register.component';
import {LogoutComponent} from './logout/logout.component';
import {MedicalHistoryComponent} from './medical-history/medical-history.component';
import {AddDiseaseComponent} from './add-disease/add-disease.component';
import {AllUsersComponent} from './all-users/all-users.component';
import {PatientPersonalInfoComponent} from './patient-personal-info/patient-personal-info.component';
import {AllDiseasesComponent} from './all-diseases/all-diseases.component';
import {CreateDiseaseComponent} from './create-disease/create-disease.component';
import {PatientDiseaseMoreInfoComponent} from './patient-disease-more-info/patient-disease-more-info.component';
import {FullMedicalDocumentationComponent} from './full-medical-documentation/full-medical-documentation.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'patients', component: PatientsSiteComponent },
  { path: 'medicalHistory', component: MedicalHistoryComponent },
  { path: 'addDisease', component: AddDiseaseComponent },
  { path: 'patientInfo', component: PatientPersonalInfoComponent },
  { path: 'diseases', component: AllDiseasesComponent },
  { path: 'createDisease', component: CreateDiseaseComponent },
  { path: 'medicalHistoryMore', component: PatientDiseaseMoreInfoComponent },
  { path: 'generateMedicalDoc', component: FullMedicalDocumentationComponent },
  { path: 'all-users', component: AllUsersComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
