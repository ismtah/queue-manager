import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { AuthentificationModule } from '../app/authentification/authentification.module'
import { HomeModule } from '../app/home/home.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentification/components/login/login.component';
import { SignupComponent } from './authentification/components/signup/signup.component';
import { HomeContainerComponent } from './home/home-container/home-container.component';
import { AuthContainerComponent } from './authentification/auth-container/auth-container.component';
import { SharedModule } from './shared/shared.module';
import { FooterAComponent } from './shared/components/footer-a/footer-a.component';
import { FooterBComponent } from './shared/components/footer-b/footer-b.component';
const routes = [
  { path: "auth/login", component: AuthContainerComponent },
  { path: "home", component: HomeContainerComponent },
  { path: "**", redirectTo: "auth/login" },
  { path: "", component: FooterBComponent, outlet: "footer" },
  { path: "footera", component: FooterAComponent, outlet: "footer" },
  { path: "footerb", component: FooterBComponent, outlet: "footer" },
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthentificationModule, HomeModule, SharedModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
