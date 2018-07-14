import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexboxtestComponent } from './flexboxtest.component';

describe('FlexboxtestComponent', () => {
  let component: FlexboxtestComponent;
  let fixture: ComponentFixture<FlexboxtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexboxtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexboxtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
