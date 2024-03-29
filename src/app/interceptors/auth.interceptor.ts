import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem("token");
    let newRequest : HttpRequest<any>;
    newRequest = request.clone({
      headers: request.headers.set("Authorization","Bearer "+ token)
    })
    return next.handle(newRequest);
  }
}

// import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';

// export const authInterceptor: HttpInterceptorFn = (req, next) => {
  
//   let token = localStorage.getItem("token");
//   let newRequest:HttpRequest<any>
//   newRequest = req.clone({
//     headers: req.headers.set("Authorization", "Bearer " + token)
//   })
//   return next(newRequest);
// };
