import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHr]'
})
export class HrDirective {

  constructor(private element: ElementRef, renderer2: Renderer2) {
    renderer2.setStyle(element.nativeElement, 'margin-bottom', '20px');
  }

}
