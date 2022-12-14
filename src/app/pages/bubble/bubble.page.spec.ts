import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BubblePage } from './bubble.page';

describe('BubblePage', () => {
  let component: BubblePage;
  let fixture: ComponentFixture<BubblePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BubblePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BubblePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
