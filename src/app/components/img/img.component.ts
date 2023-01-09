import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {
  @Input() public img: string = ''
  @Output() loaded = new EventEmitter<string>();
  
  public imageDefault: string = './assets/images/default.png'
  public imgError(): void {
    this.img = ''
  }
  public imgLoaded(): void {
    this.loaded.emit(this.img);
  }
}
