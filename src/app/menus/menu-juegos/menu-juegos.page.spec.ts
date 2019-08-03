import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuJuegosPage } from './menu-juegos.page';

describe('MenuJuegosPage', () => {
  let component: MenuJuegosPage;
  let fixture: ComponentFixture<MenuJuegosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuJuegosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuJuegosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
