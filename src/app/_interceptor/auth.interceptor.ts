import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../_service/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = localStorage.getItem("token")
    if (this.authService.isLoggedIn()) {
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }



        });
    }
    console.log(" setHeaders" + request);
    return next.handle(request);

}
}
