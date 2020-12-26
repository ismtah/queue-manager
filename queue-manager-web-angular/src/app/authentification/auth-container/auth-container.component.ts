import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth-container',
  templateUrl: './auth-container.component.html',
  styles: [`
  .even{color:red}
  .odd{color:green}
  `]
})
export class AuthContainerComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private location: Location, private activatedRoute: ActivatedRoute) { }
  @Input('') inputData: Array<string>
  currentpage: string = 'login';
  cost = '200.13'
  ngOnInit() {

    this.handleActivatedRoute()
  }
  handleActivatedRoute() {
    this.activatedRoute.params.subscribe((data) => {
      console.log(data)
    })
    this.activatedRoute.url.subscribe((data) => {
      console.log(data)
    })
  }

  handleLoginDispatcher(event) {
    let { type, data } = event;
    switch (type) {
      case 'log in':
        this.authService.login(data).subscribe((data: any) => {
          console.log(data)
          if (data.status) {
            this.changeUrl("signup");
          } else {
            this.router.navigate(['home'])
          }
        })
        break;
      case 'switch to signup':
        this.changeUrl("signup");
        break;
      //this.router.navigate([{ outlets: { primary: 'home', footer: 'footerb' } }])
    }
  }

  handleSignupDispatcher(event) {
    switch (event.type) {
      case 'switch to login':
        this.changeUrl('login')
    }
  }

  changeUrl(endPath) {
    this.location.replaceState(`/auth/${endPath}`);
    this.currentpage = endPath
  }

}
