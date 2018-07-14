import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloattestComponent } from './floattest.component';

describe('FloattestComponent', () => {
  let component: FloattestComponent;
  let fixture: ComponentFixture<FloattestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloattestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloattestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
