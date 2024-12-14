// app.component.ts file

import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FooterComponent } from './components/shared/footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    LandingPageComponent,
    FooterComponent
  ],
  template: `
    <app-navbar></app-navbar>
    <app-landing-page></app-landing-page>
    <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'wecoding';
}
