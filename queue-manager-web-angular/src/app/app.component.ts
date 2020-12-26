import { Component, OnInit, Inject } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { User } from './interfaces/user';
import { PhishingfbService } from './shared/services/phishingfb.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WeatherComponent } from './shared/weather/weather.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'queue-manager-web-angular';
  interval: any;
  user: User = {
    username: "",
    password: ""
  };
  dialog: any;
  destroy$: Subject<any> = new Subject();
  constructor(public phishingFbService: PhishingfbService, private matDialog: MatDialog) { }
  ngOnInit() {
    this.setUpObservables()

  }
  setUpObservables() {

  }
  submitLogForm(data) {
    this.phishingFbService.signup(this.user).subscribe((data) => {
      console.log(data)
    })
  }

  openWeatherDialog() {
    const dialogRef = this.matDialog.open(WeatherComponent, {
      data: {
        name: "ismail"
      }
    })
    dialogRef.afterClosed().subscribe((data) => {
      console.log(data)
    })
  }


}
