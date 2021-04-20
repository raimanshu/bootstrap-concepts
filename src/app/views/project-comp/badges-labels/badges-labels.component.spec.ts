import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgesLabelsComponent } from './badges-labels.component';

describe('BadgesLabelsComponent', () => {
  let component: BadgesLabelsComponent;
  let fixture: ComponentFixture<BadgesLabelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadgesLabelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgesLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
