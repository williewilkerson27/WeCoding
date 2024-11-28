import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from './header/header.component';


@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
  `,
  styleUrl: './app.component.css',
  imports: [HomeComponent, HeaderComponent]
})
export class AppComponent {
  title = 'WeCoding';
}





// <!-- <main>
//       <header class="brand-name">
//         <img class="brand-logo" src="assets/wecoding_logo.svg" alt="logo"  />
//         <section class="content">
//           <app-home></app-home>
//         </section>
//       </header>
//     </main> -->
