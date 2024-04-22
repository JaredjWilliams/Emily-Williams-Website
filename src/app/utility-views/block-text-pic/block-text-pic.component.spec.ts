import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockTextPicComponent } from './block-text-pic.component';

describe('BlockTextPicComponent', () => {
  let component: BlockTextPicComponent;
  let fixture: ComponentFixture<BlockTextPicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlockTextPicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlockTextPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
