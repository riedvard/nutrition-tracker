import { HighlightDirective } from './highlight.directive';
import { ElementRef, Renderer2 } from '@angular/core';
import { TestBed } from '@angular/core/testing';

describe('HighlightDirective', () => {
  let elementRef: ElementRef;
  let renderer: Renderer2;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighlightDirective],
      providers: [
        {
          provide: ElementRef,
          useValue: {
            nativeElement: document.createElement('div'),
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
    const directive = new HighlightDirective(elementRef, renderer);
    expect(directive).toBeTruthy();
  });
});
