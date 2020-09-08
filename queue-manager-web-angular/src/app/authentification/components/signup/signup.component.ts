import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @Output('') signupDispatcher = new EventEmitter();
  user: any = {
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    phoneNumber: 0
  }
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  login() {
    this.authService.signup(this.user).subscribe((data: any) => {
      if (data.status) {
        this.router.navigate(['login'])
      }
    })

  }

  redirectToLogin() {
    this.signupDispatcher.emit({ type: 'switch to login', data: {} })
  }

}
