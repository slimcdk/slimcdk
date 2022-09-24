import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartCurtainControllerComponent } from './smart-curtain-controller.component';

describe('SmartCurtainControllerComponent', () => {
  let component: SmartCurtainControllerComponent;
  let fixture: ComponentFixture<SmartCurtainControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartCurtainControllerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartCurtainControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
