import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { FooterComponent } from './footer/footer.component';
import { PatientsSiteComponent } from './patients-site/patients-site.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { PatientEditHeaderComponent } from './patient-edit-header/patient-edit-header.component';
import { MedicalHistoryComponent } from './medical-history/medical-history.component';
import { AddDiseaseComponent } from './add-disease/add-disease.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { PatientPersonalInfoComponent } from './patient-personal-info/patient-personal-info.component';
import { DiseasesHeaderComponent } from './diseases-header/diseases-header.component';
import { AllDiseasesComponent } from './all-diseases/all-diseases.component';
import { CreateDiseaseComponent } from './create-disease/create-disease.component';
import { PatientDiseaseMoreInfoComponent } from './patient-disease-more-info/patient-disease-more-info.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    FooterComponent,
    PatientsSiteComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    PatientEditHeaderComponent,
    MedicalHistoryComponent,
    AddDiseaseComponent,
    AdminHeaderComponent,
    AllUsersComponent,
    PatientPersonalInfoComponent,
    DiseasesHeaderComponent,
    AllDiseasesComponent,
    CreateDiseaseComponent,
    PatientDiseaseMoreInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
