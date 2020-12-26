import { Component, OnInit, Inject } from '@angular/core';
import { EChartOption } from 'echarts';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  isVisible: boolean = true;
  periods: string[] = ["Week", "Month", "3 Months", "6 Months"]
  weatherData: Object[] = [
    { day: "Monday", precepetationPercent: 54, soleil: "../../assets/images/svg/nuage.svg", temperature: { min: 20, max: 80, percent: 10 } },
    { day: "Monday", precepetationPercent: 54, soleil: "../../assets/images/svg/pluie.svg", temperature: { min: 20, max: 80, percent: 20 } },
    { day: "Monday", precepetationPercent: 54, soleil: "../../assets/images/jpg/degage.jpg", temperature: { min: 20, max: 80, percent: 30 } },
    { day: "Monday", precepetationPercent: 54, soleil: "../../assets/images/svg/nuage.svg", temperature: { min: 20, max: 80, percent: 40 } },
    { day: "Monday", precepetationPercent: 54, soleil: "../../assets/images/svg/pluie.svg", temperature: { min: 20, max: 80, percent: 50 } },
    { day: "Monday", precepetationPercent: 54, soleil: "../../assets/images/jpg/degage.jpg", temperature: { min: 20, max: 80, percent: 60 } },
    { day: "Monday", precepetationPercent: 54, soleil: "../../assets/images/svg/nuage.svg", temperature: { min: 20, max: 80, percent: 70 } }
  ];

  chartOption: EChartOption = {
    xAxis: {
      type: 'category',
      data: ['10AM', '11AM', '12AM', '1PM', '2PM', '3PM', '4PM'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [15, -10, 9, 7, 20, 31, 29],
        type: 'line',
      },
    ],
  };
  constructor(private matDialog: MatDialogRef<WeatherComponent>, @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit() {
    console.log(this.data)
  }

  handleCancelModal() {
    this.matDialog.close({ data: "dialog closed" });
  }

  handleOkModal() {
    this.isVisible = false;
  }

}
