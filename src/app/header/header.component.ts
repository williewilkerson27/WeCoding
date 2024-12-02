import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
  <header class="header-container">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-sm-3 col-3">
          <div class="logo-container">
            <img src="assets/wecoding_logo_transparent.svg" class="logo" alt="logo" aria-hidden="true">
          </div>
        </div>
          <div class="col-md-9 col-sm-9 col-9 text-end">
            <div class="menu-icon" (click)="openMenu()">
              <i class="bi bi-list"></i>
            </div>
            <div class="desktop-menu" [class.mobile-menu]="menuValue">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Events</li>
                <li>Login</li>
              </ul>
            </div>
            </div>
          </div>
        </div>


  </header>
  `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuValue:boolean= true;

  openMenu() {
    this.menuValue = !this.menuValue;
  }
}
