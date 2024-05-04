import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {AppModule} from "./app.module";
import {HeaderComponent} from "./views/header/header.component";
import {BodyComponent} from "./views/body/body.component";
import {FooterComponent} from "./views/footer/footer.component";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,

      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        BodyComponent,
        FooterComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
