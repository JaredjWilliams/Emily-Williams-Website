import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-product-pricing-card',
  templateUrl: './product-pricing-card.component.html',
  styleUrl: './product-pricing-card.component.css'
})
export class ProductPricingCardComponent {
  @Input() image!: string;
  @Input() price!: number;
  @Input() description!: string;
  @Input() title!: string;


}
