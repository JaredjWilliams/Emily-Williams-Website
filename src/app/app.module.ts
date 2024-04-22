import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/header/header.component';
import { BodyComponent } from './views/body/body.component';
import { FooterComponent } from './views/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { HeroComponent } from './utility-views/hero/hero.component';
import {BlockTextPicComponent} from "./utility-views/block-text-pic/block-text-pic.component";
import {ThreeCircleCenterComponent} from "./utility-views/three-circle-center/three-circle-center.component";
import { PricingComponent } from './utility-views/pricing/pricing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    HomeComponent,
    HeroComponent,
    BlockTextPicComponent,
    ThreeCircleCenterComponent,
    PricingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
