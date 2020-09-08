import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { FooterAComponent } from './components/footer-a/footer-a.component';
import { FooterBComponent } from './components/footer-b/footer-b.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [FooterComponent, FooterAComponent, FooterBComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [
    FooterComponent
  ]
})
export class SharedModule { }
