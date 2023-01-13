import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private myShoppingCart: Product[] = [];
  // El estado inicial es un array en vacio ([])
  private myCart = new BehaviorSubject<Product[]>([]);
  public myCart$: Observable<Product[]> = this.myCart.asObservable();

  constructor() { }

  addProduct(product: Product) {
    this.myShoppingCart.push(product);
    this.myCart.next(this.myShoppingCart);
  }
  getShoppingCart() {
    return this.myShoppingCart;
  }
  getTotal() {
    return this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  }
}
