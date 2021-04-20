import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColOrderComponent } from './col-order.component';

describe('ColOrderComponent', () => {
  let component: ColOrderComponent;
  let fixture: ComponentFixture<ColOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
