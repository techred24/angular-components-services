import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  // The exclamation point serves to tell angular: trust me, this variable won't be empty: product!: Product;
  // The string inside Input is used to rename the variable. For instance, variable product could be rename to 'myProduct' like this: @Input('myProduct') public product!: Product;
  @Input('product') public product!: Product;
  @Output() addedProduct = new EventEmitter<Product>();

  public onAddToCart() {
    this.addedProduct.emit(this.product);
  }
}
