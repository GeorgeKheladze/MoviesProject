import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class HttpInterceptInterceptor implements HttpInterceptor {
  baseUrl = environment.baseUrl;
  apiKey = environment.apyKey;

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      url: this.baseUrl+ req.url + '&api_key='+this.apiKey
    });
    console.log(authReq.url)
    return next.handle(authReq);
  }
}
