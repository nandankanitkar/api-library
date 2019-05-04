import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindApiComponent } from './find-api.component';

describe('FindApiComponent', () => {
  let component: FindApiComponent;
  let fixture: ComponentFixture<FindApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
