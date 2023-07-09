import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonAjaxMasterComponent } from './pokemon-ajax-master.component';

describe('PokemonAjaxMasterComponent', () => {
  let component: PokemonAjaxMasterComponent;
  let fixture: ComponentFixture<PokemonAjaxMasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonAjaxMasterComponent]
    });
    fixture = TestBed.createComponent(PokemonAjaxMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
