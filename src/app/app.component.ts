import { Component } from '@angular/core';
import { Product } from './models/product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'products';
  constructor(private product$: ProductService) {}
  addToCart(item: Product) {
    this.product$.addToCart({
      id: item.id,
      title: item.title,
      description: item.description,
      price: item.price,
      discountPercentage: item.discountPercentage,
      rating: item.rating,
      stock: item.stock,
      brand: item.brand,
      category: item.category,
      thumbnail: item.thumbnail,
      images: item.images,
      quantity: 1,
    });
  }
}
