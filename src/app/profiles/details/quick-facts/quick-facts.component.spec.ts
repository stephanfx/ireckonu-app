import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickFactsComponent } from './quick-facts.component';
import { MatIconModule } from '@angular/material';

describe('QuickFactsComponent', () => {
  let component: QuickFactsComponent;
  let fixture: ComponentFixture<QuickFactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickFactsComponent ],
      imports: [ MatIconModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
