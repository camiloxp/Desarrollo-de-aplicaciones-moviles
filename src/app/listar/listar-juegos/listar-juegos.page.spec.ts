import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarJuegosPage } from './listar-juegos.page';

describe('ListarJuegosPage', () => {
  let component: ListarJuegosPage;
  let fixture: ComponentFixture<ListarJuegosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarJuegosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarJuegosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
