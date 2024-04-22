import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/header/header.component';
import { BodyComponent } from './views/body/body.component';
import { FooterComponent } from './views/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { HeroComponent } from './utility-views/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    HomeComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
