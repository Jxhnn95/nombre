import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdivinarComponent } from './adivinar.component';

describe('AdivinarComponent', () => {
  let component: AdivinarComponent;
  let fixture: ComponentFixture<AdivinarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdivinarComponent]
    });
    fixture = TestBed.createComponent(AdivinarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
