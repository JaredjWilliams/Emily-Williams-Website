import { Component } from '@angular/core';
import {WEBSITE_NAME} from "../../constants";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

    protected readonly WEBSITE_NAME = WEBSITE_NAME;
}
