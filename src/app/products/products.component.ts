import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products:any = [];
  @Output() addToCart = new EventEmitter();
  constructor(public product$: ProductService) {}

  ngOnInit(): void {
    this.listOfProduct();
  }

  listOfProduct() {
    this.product$.getProductApi().subscribe((product: [] | any) => {
      this.products = product.products;
    });
  }
  addCart(id:string){
    console.log(id)
    let product = this.products.find((p:any) =>p.id == 
      id)
    this.addToCart.emit(product)
  }
  removeCart(id:string){
    console.log(id)
    console.log(this.products.find((p:any) =>p.id == 
      id))
  }
}
