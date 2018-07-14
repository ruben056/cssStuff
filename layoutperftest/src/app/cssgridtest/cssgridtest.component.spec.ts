import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssgridtestComponent } from './cssgridtest.component';

describe('CssgridtestComponent', () => {
  let component: CssgridtestComponent;
  let fixture: ComponentFixture<CssgridtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssgridtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssgridtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
