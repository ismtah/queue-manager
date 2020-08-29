import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { AuthentificationModule } from '../app/authentification/authentification.module'
import { HomeModule } from '../app/home/home.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentification/components/login/login.component';
import { SignupComponent } from './authentification/components/signup/signup.component';
import { HomeContainerComponent } from './home/home-container/home-container.component';
const routes = [
  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeContainerComponent },
  { path: "**", redirectTo: "login" }

]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthentificationModule, HomeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
