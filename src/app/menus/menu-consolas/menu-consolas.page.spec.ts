import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuConsolasPage } from './menu-consolas.page';

describe('MenuConsolasPage', () => {
  let component: MenuConsolasPage;
  let fixture: ComponentFixture<MenuConsolasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuConsolasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuConsolasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
