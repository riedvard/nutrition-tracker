import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appButtonMod]'
})
export class ButtonModDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'color', '#50514f');
    renderer.setStyle(el.nativeElement, 'backgroundColor', '#b9d9c3');
  }
}
