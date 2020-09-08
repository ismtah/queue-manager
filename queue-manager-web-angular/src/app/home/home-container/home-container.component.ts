import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToLogin() {
    this.router.navigate([{ outlets: { primary: 'auth/login', footer: 'footera' } }])
  }
}
