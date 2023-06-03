import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class HttpGateInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
     // add auth header with jwt if account is logged in and request is to the api url
     const isApiUrl = request.url.startsWith(environment.apiUrl);
     if (isApiUrl) {            
         request = request.clone({
             headers:request.headers.set('Content-Type', 'application/json')
             .set('apikey', 'LqIIfoZqRyNvgODWORDnzDp3jGJChGPK')
         });
     }
     return next.handle(request);
  }
}
