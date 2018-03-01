import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';
// ElementRef, gives access to underlying DOM element
// Hostlistener, listens to mouse movements and then apprpriately responds

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef,
              private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.addClass(this.el.nativeElement, 'highlight');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.el.nativeElement, 'highlight');
  }

}
