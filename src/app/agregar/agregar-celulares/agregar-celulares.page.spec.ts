import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCelularesPage } from './agregar-celulares.page';

describe('AgregarCelularesPage', () => {
  let component: AgregarCelularesPage;
  let fixture: ComponentFixture<AgregarCelularesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarCelularesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarCelularesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
