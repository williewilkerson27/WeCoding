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
            <img src="assets/wecoding_logo.svg" alt="logo" aria-hidden="true">
          </div>
        </div>
          <div class="col-md-9 col-sm-9 col-9 text-end">
            <div class="menu-icon">
              <i class="bi bi-list"></i>
            </div>
            <div class="desktop-menu">
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

}
