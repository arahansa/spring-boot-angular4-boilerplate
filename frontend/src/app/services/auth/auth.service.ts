import { Injectable } from '@angular/core';

import {
  Http,
  Headers,
  RequestOptions,
  Response
} from '@angular/http';

import { Observable, ReplaySubject} from 'rxjs/Rx';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService extends ReplaySubject<string> {

  private token: string;
  private username: string;
  private userId: number;
  private static localhost = "http://localhost:8080";
  private static SIGNUP_URL = AuthService.localhost + "/api/auth/signup";
  private static SIGNIN_URL = AuthService.localhost + "/api/auth/signin";
  private static REFRESH_TOKEN_URL = AuthService.localhost + "/api/auth/token/refresh";

  constructor(private http: Http) {
    super();
    if(sessionStorage.getItem('user')) {
      this.saveUserDetails(JSON.parse(sessionStorage.getItem('user')));
    }
  }


  public signUp(username: string, email: string, password: string) {

    let requestParam = JSON.stringify({
      email: email,
      username: username,
      password: password
    });

    console.log("param :", requestParam);

    return this.http.post(AuthService.SIGNUP_URL,
      requestParam, this.generateOptions())
        .map((res: Response) => {
          console.log("res :", res);
          this.saveToken(res);
          this.saveUserDetails(JSON.parse(sessionStorage.getItem('user')));
        }).catch(error => {
          throw Error(error.json() && error.json().message);
        });
  }

  public signIn(username: string, password: string) {

    let requestParam = JSON.stringify({
      username: username,
      password: password
    });

    return this.http.post(AuthService.SIGNIN_URL,
      requestParam, this.generateOptions())
        .map((res: Response) => {
          this.saveToken(res);
          this.saveUserDetails(JSON.parse(sessionStorage.getItem('user')));
        }).catch(error => {
          throw Error(error.json() && error.json().message);
        });
  }

  public logout() {
    this.token = null;
    this.username = null;
    this.userId = null;
    sessionStorage.removeItem('user');
  }

  public refreshToken(token: string) {
    let requestParam = JSON.stringify({
      token: this.token
    });

    return this.http.post(AuthService.REFRESH_TOKEN_URL,
      requestParam, this.generateOptions())
        .map((res: Response) => {
           this.saveToken(res);
        })
        .catch(error => {
          throw Error(error.json() && error.json().message);
        });
  }

  public isAuthorized(): boolean {
    return !!this.userId || !!this.username || !!this.token;
  }

  public getUsername(): string {
    return this.username;
  }

  public getUserId(): number {
    return this.userId;
  }

  public getToken(): string {
    return this.token;
  }

  private saveToken(res: Response) {
    let response = res.json() && res.json().token;
    if (response) {
      let token = response;
      let claims = this.getTokenClaims(token);
      claims.token = token;
      sessionStorage.setItem('user', JSON.stringify(claims));
    } else {
      throw Error(res.json());
    }
  }

  private saveUserDetails(user) {
    this.token = user.token || '';
    this.username = user.sub || '';
    this.userId = user.id || 0;
  }

  private getTokenClaims(token: string) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  }

  private generateOptions(): RequestOptions {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return new RequestOptions({ headers: headers });
  }

}
