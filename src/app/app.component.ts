import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FooterComponent } from './components/shared/footer/footer.component';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponent,
    LandingPageComponent,
    FooterComponent
  ],
  template: `
    <app-navbar></app-navbar>
    <app-landing-page></app-landing-page>
    <app-footer></app-footer>
  `,
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'wecoding';
}
