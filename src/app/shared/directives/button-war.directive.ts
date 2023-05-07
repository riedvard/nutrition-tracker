import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appButtonWar]'
})
export class ButtonWarDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'color', '#50514f');
    renderer.setStyle(el.nativeElement, 'backgroundColor', '#ef9ca3');
  }

}
