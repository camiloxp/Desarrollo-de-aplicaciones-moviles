import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarConsolasPage } from './listar-consolas.page';

describe('ListarConsolasPage', () => {
  let component: ListarConsolasPage;
  let fixture: ComponentFixture<ListarConsolasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarConsolasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarConsolasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
