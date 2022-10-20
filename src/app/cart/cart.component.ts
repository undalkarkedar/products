import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/cart.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartDetails: Cart[] = [];
  constructor(public product$: ProductService) {}

  ngOnInit(): void {
    this.listOfCart();
  }

  listOfCart() {
    this.product$.cart.subscribe((val) => {
      this.cartDetails = val['items'];
      console.log('val', val);
    });
  }

  addToCartItem(item: Cart) {
    this.product$.addToCart(item);
  }
  removeFromCartItem(item: Cart) {
    this.product$.removeCart(item);
  }
  clearCart() {
    this.product$.clearCart();
  }

  removeCartItem(items: Cart) {
    this.product$.removeItemCart(items);
  }

  getTotal(items: Cart[]) {
    return items
      .map((item) => Number(item.price) * Number(item.quantity))
      .reduce((prev, curr) => prev + curr, 0);
  }

  priceItem(item: Cart) {
    return Number(item.price) * Number(item.quantity);
  }
}
