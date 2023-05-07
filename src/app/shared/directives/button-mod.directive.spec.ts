import { ButtonModDirective } from './button-mod.directive';
import { ElementRef, Renderer2 } from '@angular/core';
import { TestBed } from '@angular/core/testing';

describe('ButtonModDirective', () => {
  let elementRef: ElementRef;
  let renderer: Renderer2;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonModDirective],
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
    const directive = new ButtonModDirective(elementRef, renderer);
    expect(directive).toBeTruthy();
  });
});
