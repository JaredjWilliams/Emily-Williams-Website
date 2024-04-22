import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-three-circle-center',
  templateUrl: './three-circle-center.component.html',
  styleUrl: './three-circle-center.component.css'
})
export class ThreeCircleCenterComponent {
  @Input() title: string = "";
  @Input() description: string  = "";
  @Input() imageOne: string  = "";
  @Input() subTitleOne: string  = "";
  @Input() subDescriptionOne: string  = "";
  @Input() imageTwo: string  = "";
  @Input() subTitleTwo: string  = "";
  @Input() subDescriptionTwo: string  = "";
  @Input() imageThree: string  = "";
  @Input() subTitleThree: string  = "";
  @Input() subDescriptionThree: string  = "";
  @Input() backgroundColor: string  = "secondary_accent";

}
