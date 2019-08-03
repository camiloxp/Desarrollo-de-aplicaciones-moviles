import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarJuegosPage } from './agregar-juegos.page';

describe('AgregarJuegosPage', () => {
  let component: AgregarJuegosPage;
  let fixture: ComponentFixture<AgregarJuegosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarJuegosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarJuegosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
