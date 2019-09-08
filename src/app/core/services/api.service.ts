import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getData() {
    return this.httpClient.get('https://profiles-list.firebaseio.com/Data.json');
  }

  getProfileById(id: number) {
    id = id - 1;
    return this.httpClient.get('https://profiles-list.firebaseio.com/Data.json?orderBy="$key"&equalTo="'
    + id.toString() + '"').pipe(map(response => response[id]));
  }
}
