import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPricingCardComponent } from './product-pricing-card.component';

describe('ProductPricingCardComponent', () => {
  let component: ProductPricingCardComponent;
  let fixture: ComponentFixture<ProductPricingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductPricingCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductPricingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
