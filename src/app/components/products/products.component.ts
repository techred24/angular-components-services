import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  public myShoppingCart: Product[] = [];
  public total: number = 0;
  public products: Product[] = [
    {
      id: '1',
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg'
    },
    {
      id: '2',
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      id: '3',
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      id: '4',
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
  ];
  public onAddToShoppingCart(product: Product) {
    this.myShoppingCart.push(product);
    console.log(this.myShoppingCart);
    this.total = this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
    // this.total += product.price;
  }
}
