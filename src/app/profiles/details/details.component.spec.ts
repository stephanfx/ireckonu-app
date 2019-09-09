import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';
import { ActivatedRouteStub } from 'src/testing/activated-route-stub';
import { ActivatedRoute } from '@angular/router';
import { QuickFactsComponent } from './quick-facts/quick-facts.component';
import { ProfileRowComponent } from './profile-row/profile-row.component';
import { MatTabsModule, MatIconModule } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let activateRouteStub;
  let apiMock;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async(() => {
    activateRouteStub = new ActivatedRouteStub();
    apiMock = jasmine.createSpyObj('ApiService', ['getProfileById']);
    apiMock.getProfileById.and.returnValue(of({}));

    TestBed.configureTestingModule({
      declarations: [ DetailsComponent, QuickFactsComponent, ProfileRowComponent ],
      imports: [
        BrowserAnimationsModule,
        MatTabsModule,
        MatIconModule
      ],
      providers: [
        {provide: ActivatedRoute, useValue: activateRouteStub},
        {provide: ApiService, useValue: apiMock}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an id with 1', () => {
    activateRouteStub.setParamMap({id: 1});
    expect(apiMock.getProfileById).toHaveBeenCalled();
  });
});
