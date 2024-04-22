import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent  {

  @Input() title: string = "";
  @Input() image: string = "";
  @Input() motto: string = "";




}
