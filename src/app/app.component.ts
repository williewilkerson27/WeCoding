import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import feather from 'feather-icons';


@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-landing-page></app-landing-page>
  `,
  styleUrls: ['./app.component.scss'],
  imports: [LandingPageComponent]
})


  export class AppComponent implements AfterViewInit {
    ngAfterViewInit(): void {
      feather.replace(); // Initialize feather icons after view is loaded
    }
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
