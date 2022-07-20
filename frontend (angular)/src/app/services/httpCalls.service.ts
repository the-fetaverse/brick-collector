import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LegoSet } from '../models/legoSet';

@Injectable({
  providedIn: 'root',
})
export class HttpCalls {
  getURL: string;
  postURL: string;
  http: HttpClient;

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
    this.getURL = 'http://localhost:8080/brick-collector-webapp/get-set';
    this.postURL = 'http://localhost:8080/brick-collector-webapp/save-set';
  }

  findAllSets(): Observable<LegoSet[]> {
    // const headers = new HttpHeaders({
    // 'Content-Type': 'application/json',
    // 'Access-Control-Allow-Origin': this.getURL,
    // });
    return this.http.get<LegoSet[]>(this.getURL);
  }

  // updateColor(brick: Brick): Observable<void> {
  //   return this.http.put<void>(`${this.putColor}${brick.id}`, brick, {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //     }),
  //   });
  // }

  saveNewSet(legoSet: LegoSet): Observable<LegoSet> {
    return this.http.post<LegoSet>(this.postURL, legoSet);
  }
}
