import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public imgParent: string = ''
  public showImg: boolean = true;


  public onLoaded(img: string): void {
    console.log('image loaded:', img);
  }
  public toggleImg(): void {
    this.showImg = !this.showImg;
  }
}
