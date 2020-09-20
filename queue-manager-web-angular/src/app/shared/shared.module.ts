import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { FooterComponent } from './components/footer/footer.component';
import { FooterAComponent } from './components/footer-a/footer-a.component';
import { FooterBComponent } from './components/footer-b/footer-b.component';
import { RouterModule } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';



@NgModule({
  declarations: [FooterComponent, FooterAComponent, FooterBComponent, WeatherComponent],
  imports: [
    CommonModule, RouterModule, NzModalModule
  ],
  exports: [
    FooterComponent, WeatherComponent
  ]
})
export class SharedModule { }
