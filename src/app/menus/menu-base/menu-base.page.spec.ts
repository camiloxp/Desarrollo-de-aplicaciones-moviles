import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBasePage } from './menu-base.page';

describe('MenuBasePage', () => {
  let component: MenuBasePage;
  let fixture: ComponentFixture<MenuBasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuBasePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
