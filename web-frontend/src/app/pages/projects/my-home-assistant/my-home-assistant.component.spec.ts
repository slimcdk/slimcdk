import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHomeAssistantComponent } from './my-home-assistant.component';

describe('MyHomeAssistantComponent', () => {
  let component: MyHomeAssistantComponent;
  let fixture: ComponentFixture<MyHomeAssistantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyHomeAssistantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyHomeAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
