import { Component } from '@angular/core';
import {SECONDARY_ACCENT} from "../../constants";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public readonly SECONDARY_ACCENT = SECONDARY_ACCENT;
}
