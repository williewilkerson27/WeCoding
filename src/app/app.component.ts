import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <app-navbar></app-navbar>
    <app-landing-page></app-landing-page>
    <app-footer></app-footer>
  `
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'wecoding';
}
