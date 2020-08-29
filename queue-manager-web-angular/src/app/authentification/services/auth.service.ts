import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpclient: HttpClient) { }

  signup(payload) {
    return this.httpclient.post(environment.baseUrl + environment.api.signup, payload);
  }

  login(payload) {
    return this.httpclient.post(environment.baseUrl + environment.api.login, payload);
  }
}
