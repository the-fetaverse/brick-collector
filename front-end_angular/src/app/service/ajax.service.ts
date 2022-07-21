import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LegoSet } from '../model/legoSet';

@Injectable({
  providedIn: 'root',
})
export class AjaxService {
  baseURL: string;
  searchString: string = '';
  results: LegoSet[] = [];
  headers = new HttpHeaders()
    .set('accept', 'application/json')
    .set('Authorization', 'key 12e18d8e7af435397122373eed699382');

  constructor(private ajax: HttpClient) {
    this.baseURL =
      'https://rebrickable.com/api/v3/lego/colors/?key=12e18d8e7af435397122373eed699382/api/v3/lego/sets/?search=';
  }

  constructURL(string: string): string {
    return 'ok';
  }

  searchAPI(set: LegoSet): Observable<LegoSet[]> {
    let words: string[] = set.name.split(' ', 3);
    let apiURL: string = '';
    if (words.length === 1) {
      apiURL = `${this.baseURL}${words[0]}`;
    } else if (words.length === 2) {
      apiURL = `${this.baseURL}${words[0]}%20${words[1]}}`;
    } else {
      apiURL = `${this.baseURL}${words[0]}%20${words[1]}%20${words[2]}}`;
    }
    return this.ajax.get<LegoSet[]>(apiURL, { headers: this.headers });
  }
}
