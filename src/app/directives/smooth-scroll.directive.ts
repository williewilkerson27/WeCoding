import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSmoothScroll]'
})
export class SmoothScrollDirective {
  // This defines an input property named appSmoothScroll
  // The ! indicates that this property is required
  @Input() appSmoothScroll!: string;

  // The $event parameter captures the native DOM event object
  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    // This ensures that only smooth scrolling occurs
    event.preventDefault();
                  // Finds the target element specified by the appSmoothScroll input value
    const target = document.querySelector(this.appSmoothScroll);
    if (target) {
      // behavior: 'smooth': Enables smooth scrolling
      // block: 'start': Aligns the top of the target element with the top of the viewport
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

}
