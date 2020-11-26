import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter, catchError } from 'rxjs/operators';
import { Info } from '../models/info.model';
const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json'
    }),
  responseType: 'json' as const,
  withCredentials: false as const,  
  observe: 'response' as const
};

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(public http: HttpClient) { }

  getInfo(query: string, limit: number): Observable<HttpResponse<Info[]>> {
    const uri = `http://localhost:3001/search?query=${query}&limit=${limit}`;
    return this.http.get<Info[]>(uri, httpOptions).pipe(
      map(response => {
        //console.log(response);
        return response;
       })
    )
  }
}
