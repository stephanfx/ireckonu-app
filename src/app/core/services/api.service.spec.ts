import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('ApiService', () => {
  let httpClientSpy;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    httpClientSpy.get.and.returnValue(of({}));

    TestBed.configureTestingModule({
      providers: [
        ApiService,
        {provide: HttpClient, useValue: httpClientSpy}
      ]
    });
  });

  it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });

  it('should make a getAll call', () => {
    const service: ApiService = TestBed.get(ApiService);
    service.getData();
    expect(httpClientSpy.get).toHaveBeenCalledWith('https://profiles-list.firebaseio.com/Data.json');
  });

  it('should make a specific call with an Id', () => {
    const service: ApiService = TestBed.get(ApiService);
    service.getProfileById(2);
    expect(httpClientSpy.get).toHaveBeenCalledWith('https://profiles-list.firebaseio.com/Data.json?orderBy="$key"&equalTo="1"');
  });
});
