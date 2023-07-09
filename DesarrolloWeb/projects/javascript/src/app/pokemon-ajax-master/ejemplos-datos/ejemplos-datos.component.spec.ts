import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemplosDatosComponent } from './ejemplos-datos.component';

describe('EjemplosDatosComponent', () => {
  let component: EjemplosDatosComponent;
  let fixture: ComponentFixture<EjemplosDatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EjemplosDatosComponent]
    });
    fixture = TestBed.createComponent(EjemplosDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
