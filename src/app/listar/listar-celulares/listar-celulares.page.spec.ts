import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCelularesPage } from './listar-celulares.page';

describe('ListarCelularesPage', () => {
  let component: ListarCelularesPage;
  let fixture: ComponentFixture<ListarCelularesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarCelularesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCelularesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
