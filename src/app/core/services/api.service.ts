import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'https://profiles-list.firebaseio.com/Data.json';

  constructor(private httpClient: HttpClient) {}

  getData() {
    return this.httpClient.get(this.url);
  }

  getProfileById(id: number) {
    id = id - 1;
    return this.httpClient
      .get(this.url + '?orderBy="$key"&equalTo="' + id.toString() + '"')
      .pipe(map(response => response[id]));
  }
}
