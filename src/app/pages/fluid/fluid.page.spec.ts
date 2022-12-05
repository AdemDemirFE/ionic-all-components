import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FluidPage } from './fluid.page';

describe('Fluid', () => {
  let component: FluidPage;
  let fixture: ComponentFixture<FluidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FluidPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FluidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
