import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeCircleCenterComponent } from './three-circle-center.component';

describe('ThreeCircleCenterComponent', () => {
  let component: ThreeCircleCenterComponent;
  let fixture: ComponentFixture<ThreeCircleCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThreeCircleCenterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThreeCircleCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
