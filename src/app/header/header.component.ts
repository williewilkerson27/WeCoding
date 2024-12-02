import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  styleUrl: './header.component.css',
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
              <i class="{{menu_icon}}"></i>
            </div>
            <div class="desktop-menu" [class.mobile-menu]="menuValue">
              <ul>
                <li (click)="closeMenu()">Home</li>
                <li (click)="closeMenu()">About</li>
                <li (click)="closeMenu()">Events</li>
                <li (click)="closeMenu()">Login</li>
              </ul>
            </div>
            </div>
          </div>
        </div>
  </header>
  `
})
export class HeaderComponent {
  menuValue:boolean= false;
  menu_icon:string='bi bi-list'

  openMenu() {
    this.menuValue = !this.menuValue;
    this.menu_icon = this.menuValue ? 'bi bi-x': 'bi bi-list';
  }
  closeMenu() {
    this.menuValue = false;
    this.menu_icon = "bi bi-list"

  }
}
