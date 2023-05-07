import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appButtonClr]'
})
export class ButtonClrDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'color', '#50514f');
    renderer.setStyle(el.nativeElement, 'backgroundColor', '#9ca3db');
  }

}
