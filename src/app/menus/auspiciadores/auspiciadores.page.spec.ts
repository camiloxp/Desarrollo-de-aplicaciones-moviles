import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuspiciadoresPage } from './auspiciadores.page';

describe('AuspiciadoresPage', () => {
  let component: AuspiciadoresPage;
  let fixture: ComponentFixture<AuspiciadoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuspiciadoresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuspiciadoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
