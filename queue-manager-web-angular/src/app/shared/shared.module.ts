import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { TableModule } from 'primeng/table';

import { NgxEchartsModule } from 'ngx-echarts';

import { FooterComponent } from './components/footer/footer.component';
import { FooterAComponent } from './components/footer-a/footer-a.component';
import { FooterBComponent } from './components/footer-b/footer-b.component';
import { RouterModule } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { TemperaturePipe } from './pipes/temperature.pipe';
import { ThumbTemperatureDirective } from './directives/thumb-temperature.directive';



@NgModule({
  declarations: [FooterComponent, FooterAComponent, FooterBComponent, WeatherComponent, TemperaturePipe, ThumbTemperatureDirective],
  imports: [
    CommonModule, RouterModule, NzModalModule, NzInputModule, NzButtonModule,
    MatButtonModule, MatInputModule, MatIconModule,
    TableModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  exports: [
    FooterComponent, WeatherComponent
  ]
})
export class SharedModule { }
