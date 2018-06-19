import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ICustomer } from 'src/app/model/customer';
import { Observable } from 'rxjs';

@Injectable()
export class HttpClientCustom {

  constructor(private http: HttpClient) { }

  createAuthorizationHeader(headers: Headers): Headers {
    headers.append('Authorization ', 'forlogic-d2a24');
    return headers;
  }

  get(url) {
    let headers = new Headers();
    headers = this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers: {
        'Authorization': 'forlogic-d2a24'
      }
    });
  }

  post(url, data) {
    let headers = new Headers();
    headers = this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {
      headers: {
        'Authorization': 'forlogic-d2a24',
        "Access-Control-Allow-Credentials": "true",
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': 'true',
        'Access-Control-Allow-Methods': ' GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
      }
    });
  }

  delete(url){
    let headers = new Headers();
    headers = this.createAuthorizationHeader(headers);
    return this.http.delete(url, {
      headers: {
        'Authorization': 'forlogic-d2a24',
        "Access-Control-Allow-Credentials": "true",
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': 'true',
        'Access-Control-Allow-Methods': ' GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
      }
    });
  }
}