import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LegoSet } from '../model/legoSet';

@Injectable({
  providedIn: 'root',
})
export class AjaxService {
  headers = new HttpHeaders()
    .set('Accept', 'application/json')
    .set('Authorization', 'key 12e18d8e7af435397122373eed699382');
  dbURL: string;
  imgURL: string;

  constructor(private ajax: HttpClient) {
    this.dbURL = 'http://localhost:8080/brick-collector-webapp/lego-db';
    this.imgURL = 'https://rebrickable.com/api/v3/lego/sets/';
  }

  searchAPI(set: LegoSet): Observable<LegoSet[]> {
    return this.ajax.get<LegoSet[]>(`${this.dbURL}/${set.name}`);
  }

  getImg(code: string): Observable<any> {
    return this.ajax.get<any>(`${this.imgURL}/${code}`, {
      headers: this.headers,
    });
  }
}
