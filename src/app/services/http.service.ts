import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoaderService } from "./loader.service";
import { ApiResponse } from '../models/common-models';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: "root",
})
export class HttpService {
  private apiUrl: string;

  constructor(private http: HttpClient, private _loaderService: LoaderService) {
    this.apiUrl = environment.url;
  }

  post<T>(url, data, loader = true): Observable<ApiResponse<T>> {
    if (loader) {
      this._loaderService.loader.next(loader);
    }
    return this.http.post<ApiResponse<T>>(this.apiUrl + url, data);
  }

  put<T>(url, data?, loader = true): Observable<ApiResponse<T>> {
    if (loader) {
      this._loaderService.loader.next(loader);
    }
    return this.http.put<ApiResponse<T>>(this.apiUrl + url, data);
  }

  delete<T>(url, loader = true): Observable<ApiResponse<T>> {
    if (loader) {
      this._loaderService.loader.next(loader);
    }
    return this.http.delete<ApiResponse<T>>(this.apiUrl + url);
  }

  patch<T>(url, data, loader = true): Observable<ApiResponse<T>> {
    if (loader) {
      this._loaderService.loader.next(loader);
    }
    return this.http.patch<ApiResponse<T>>(this.apiUrl + url, data);
  }

  get<T>(url, httpParams?: any, loader = true): Observable<ApiResponse<T>> {
    if (loader) {
      this._loaderService.loader.next(loader);
    }
    for (let item in httpParams) {
      if (
        httpParams[item] === "" ||
        httpParams[item] === undefined ||
        httpParams[item] === null
      ) {
        delete httpParams[item];
      }
    }
    const header = {};
    if (httpParams) {
      header["params"] = httpParams;
    }
    return this.http.get<ApiResponse<T>>(this.apiUrl + url, header);
  }
}
