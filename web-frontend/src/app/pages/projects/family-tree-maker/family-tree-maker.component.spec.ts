import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyTreeMakerComponent } from './family-tree-maker.component';

describe('FamilyTreeMakerComponent', () => {
  let component: FamilyTreeMakerComponent;
  let fixture: ComponentFixture<FamilyTreeMakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyTreeMakerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamilyTreeMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
