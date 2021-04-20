import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSizingComponent } from './input-sizing.component';

describe('InputSizingComponent', () => {
  let component: InputSizingComponent;
  let fixture: ComponentFixture<InputSizingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputSizingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSizingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
