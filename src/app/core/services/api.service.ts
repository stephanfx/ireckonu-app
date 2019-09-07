import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getData() {
    return this.httpClient.get('https://profiles-list.firebaseio.com/Data.json');
  }
}
