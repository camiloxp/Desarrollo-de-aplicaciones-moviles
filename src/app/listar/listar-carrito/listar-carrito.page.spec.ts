import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCarritoPage } from './listar-carrito.page';

describe('ListarCarritoPage', () => {
  let component: ListarCarritoPage;
  let fixture: ComponentFixture<ListarCarritoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarCarritoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCarritoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
