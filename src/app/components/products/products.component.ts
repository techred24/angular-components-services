import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  constructor (private storeService: StoreService, private productsService: ProductsService) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }
  ngOnInit(): void {
    this.productsService.getAllProducts()
       .subscribe(data => {
        this.products = data;
       })
  }
  public myShoppingCart: Product[] = [];
  public total: number = 0;
  public products: Product[] = [];

  public onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.total =  this.storeService.getTotal();
    // console.log(this.myShoppingCart);
    // this.total = this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
    // this.total += product.price;
  }
}
