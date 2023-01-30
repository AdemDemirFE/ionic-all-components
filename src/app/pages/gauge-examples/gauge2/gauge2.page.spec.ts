import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Gauge2Page } from './gauge2.page';

describe('Gauge2Page', () => {
  let component: Gauge2Page;
  let fixture: ComponentFixture<Gauge2Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Gauge2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Gauge2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
