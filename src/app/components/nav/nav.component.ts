import { Component, OnInit, OnDestroy } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { Product } from 'src/app/models/product.model';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {
  public activeMenu: boolean = false;
  public counter: number = 0;
  public subscription!: Subscription;
  constructor (private storeService: StoreService) {}

  ngOnInit(): void {
    // this.storeService.myCart$.subscribe((product: Product[]) => {
    //   this.counter = product.length;
    // });
    this.subscription = this.getMyCartLength();
  }
  ngOnDestroy(): void {
    this.subscription ? this.subscription.unsubscribe() : null;
  }
  getMyCartLength(): Subscription {
    return this.storeService.myCart$.subscribe((products: Product[]) => {
      this.counter = products.length;
    })
  }
  toggleMenu(): void {
    this.activeMenu = !this.activeMenu;
  }
}
