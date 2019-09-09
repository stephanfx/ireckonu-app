import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesComponent } from './profiles.component';
import { ApiService } from '../core/services/api.service';
import { Router } from '@angular/router';
import { MatInputModule, MatTableModule, MatIconModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { of } from 'rxjs';
import { IProfile } from '../shared/interfaces';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ProfilesComponent', () => {
  let component: ProfilesComponent;
  let apiMock;
  let routerMock;
  let fixture: ComponentFixture<ProfilesComponent>;

  beforeEach(async(() => {
    apiMock = jasmine.createSpyObj('ApiService', ['getData']);
    apiMock.getData.and.returnValue(of([]));

    routerMock = jasmine.createSpyObj('Router', ['navigate']);
    TestBed.configureTestingModule({
      declarations: [ProfilesComponent],
      imports: [
        MatInputModule,
        MatTableModule,
        MatIconModule,
        MatPaginatorModule,
        MatSortModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: ApiService, useValue: apiMock },
        { provide: Router, useValue: routerMock }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to detail view', () => {
    const profile = {localid: 1} as IProfile;
    component.redirectToView(profile);
    expect(routerMock.navigate).toHaveBeenCalledWith(['/profiles/1']);
  });

  it('should filter values of the datasource', () => {
    component.doFilter(' TeSt   ');
    expect(component.dataSource.filter).toBe('test');
  });

});
