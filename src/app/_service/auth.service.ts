import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  public readonly LOGIN_PATH = '/login';
  public readonly CONFIRM_PATH = '/confirm';
  public readonly INITIAL_PATH = '/app';

  private loggedUserSubject: BehaviorSubject<any>;
  public loggedInUser: Observable<any>;
  getLoggedUser: any;

  constructor( private router: Router,private http: HttpClient) {
    const token = localStorage.getItem('token')
    this.getLoggedUser = token
    this.loggedUserSubject = new BehaviorSubject(this.getLoggedUser);
    this.loggedInUser = this.loggedUserSubject.asObservable();
    console.log("+++++++++++++++" + JSON.stringify(this.loggedInUser) )

  }

  authUrl=""

    logoutUser() {
        localStorage.removeItem('token');
        this.loggedUserSubject.next(null);
        this.router.navigate(['login']);

    }

public get loggedInUserValue(){
        return this.loggedUserSubject.value;
    }

  signup(user:any): Observable<void> {
    return this.http.post<any>('authUrl/signup', user);
  }


  login(loginRequest:any) {
     console.log("loginRequest" + loginRequest.email)
     if(loginRequest.email =='gugi@gmail.com' &&  loginRequest.password == '12345'){

      localStorage.setItem("token", "Smith");

       return true
     }
     else{
       return false
     }
  }


  // login(loginRequest: LoginRequest): Observable<User> {
  //   return this.http.post<any>(`${config.authUrl}/login`, loginRequest)
  //     .pipe(tap(data => this.auth.doLoginUser(data)));
  // }

  // logout() {
  //   return this.http.get<any>(`${config.authUrl}/logout`)
  //     .pipe(tap(() => this.doLogoutUser()));
  // }



  isLoggedIn():boolean{
       if(localStorage.getItem("token")){
         return true;
       }
       else{
         return false;
       }
  }



  // private doLogoutUser() {
  //   this.auth.doLogoutUser();
  // }

}
