import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileRowComponent } from './profile-row.component';
import { MatIconModule } from '@angular/material';

describe('ProfileRowComponent', () => {
  let component: ProfileRowComponent;
  let fixture: ComponentFixture<ProfileRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileRowComponent ],
      imports: [ MatIconModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
