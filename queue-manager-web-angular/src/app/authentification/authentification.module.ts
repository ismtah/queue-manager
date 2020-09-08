import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AuthentificationRoutingModule } from './authentification-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthContainerComponent } from './auth-container/auth-container.component';
import { RouterModule, Router } from '@angular/router';


@NgModule({
  declarations: [LoginComponent, SignupComponent, AuthContainerComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AuthentificationRoutingModule
  ],
  providers: [
    { provide: Router, useValue: {} }
  ]
})
export class AuthentificationModule { }
