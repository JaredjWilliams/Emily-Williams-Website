import { Component } from '@angular/core';
import {PRODUCTS} from "../../constants";

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {
  imageOne: string | undefined;
  subTitleOne: string | undefined;
  subDescriptionOne: string | undefined;

  products = PRODUCTS

}
