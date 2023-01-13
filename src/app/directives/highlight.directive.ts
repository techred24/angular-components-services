import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.element.nativeElement, 'color', 'red');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.element.nativeElement, 'color', '');
  }
  constructor(private element: ElementRef, private renderer: Renderer2) {
    // this.renderer.setStyle(this.element.nativeElement, 'color', 'red');
  }
}



// Directiva para detectar el evento error en una etiqueta img y cuando se dispare el error establezca una imagen por defecto

// @Directive( { selector: '[imageError]' } )
// export class ImageErrorDirective {

// //escucha el evento error
//   @HostListener( 'error' )
//   handleError (): void {
//     this.elment.nativeElement.src = "https://www.sam-manipulados.com/wp-content/uploads/2014/01/default_image_01.png";
//   }

//   constructor(
//     private elment: ElementRef<HTMLImageElement>
//   ) {
//     console.log( elment );
//   }
// }

// //template
// <img imageError width="100px" [src]="image" alt="">
