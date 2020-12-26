import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() loginDispatcher = new EventEmitter();
  user: any = {
    username: "",
    password: ""
  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.loginDispatcher.emit({ type: "log in", data: this.user })
  }

  redirectToSignupPage() {
    this.loginDispatcher.emit({ type: "switch to signup", data: {} })
  }

}
