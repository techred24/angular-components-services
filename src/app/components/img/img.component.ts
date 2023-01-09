import { Component, Input, Output, EventEmitter, OnChanges, OnInit, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnChanges, OnInit, AfterViewInit, OnDestroy {
  public img: string = '';
  // Every time the input changes this method will be executed
  @Input('img') set changeImg(newImg: string) {
    this.img = newImg;
    console.log(`change just img => ${this.img}`);
    // code
  }
  @Input() public alt: string = '';
  @Output() loaded = new EventEmitter<string>();

  public imageDefault: string = './assets/images/default.png';
  // public counter: number = 0;
  // public counterFn: number | undefined;

  constructor() {
    // we shouldn't run async executions in here - it runs once
    // it runs before render
    console.log('constructor', `imgValue => ${this.img}`);
  }
  ngOnChanges(changes: SimpleChanges) {
    // it runs before and during render
    // This function is executed every time it detects changes in inputs (properties)
    console.log('ngOnChanges', `imgValue => ${this.img}`);
    console.log('changes' ,changes);
  }
  ngOnInit(): void {
    // It runs before render
    // we can run async executions like fetch - it runs once
    console.log('ngOnInit', `imgValue => ${this.img}`);
    // this.counterFn = window.setInterval(() => {
    //   this.counter += 1;
    //   console.log('Run counter')
    // }, 1000);
  }
  ngAfterViewInit(): void {
    // It runs when all components are redering
    // If we wanted to manipulate children components programatically this function should be used
    console.log('ngAfterViewInit');
  }
  ngOnDestroy(): void {
    // It runs when the component is removed
    console.log('ngOnDestroy');
    // window.clearInterval(this.counterFn);
  }

  public imgError(): void {
    this.img = ''
  }
  public imgLoaded(): void {
    this.loaded.emit(this.img);
  }
}
