import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurvivorPickComponent } from './survivor-pick.component';

describe('SurvivorPickComponent', () => {
  let component: SurvivorPickComponent;
  let fixture: ComponentFixture<SurvivorPickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurvivorPickComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurvivorPickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
