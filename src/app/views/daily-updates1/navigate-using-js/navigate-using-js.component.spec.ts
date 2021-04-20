import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigateUsingJsComponent } from './navigate-using-js.component';

describe('NavigateUsingJsComponent', () => {
  let component: NavigateUsingJsComponent;
  let fixture: ComponentFixture<NavigateUsingJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigateUsingJsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigateUsingJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
