import { ButtonClrDirective } from './button-clr.directive';
import { ElementRef, Renderer2 } from '@angular/core';
import { TestBed } from '@angular/core/testing';

describe('ButtonClrDirective', () => {
  let elementRef: ElementRef;
  let renderer: Renderer2;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonClrDirective],
      providers: [
        {
          provide: ElementRef,
          useValue: {
            nativeElement: document.createElement('button'),
          },
        },
        {
          provide: Renderer2,
          useValue: {
            setStyle: () => {},
          },
        },
      ],
    });
    elementRef = TestBed.inject(ElementRef);
    renderer = TestBed.inject(Renderer2);
  });

  it('should create an instance', () => {
    const directive = new ButtonClrDirective(elementRef, renderer);
    expect(directive).toBeTruthy();
  });
});
