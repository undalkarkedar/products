import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  BehaviorSubject } from 'rxjs';
import { Cart } from './models/cart.model';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 readonly baseUrl = 'https://dummyjson.com/products'

private  productSync = new BehaviorSubject<any>({items:[]});
cart = this.productSync.asObservable()

constructor(private http: HttpClient) { }

 getProductApi(){
    return this.http.get(this.baseUrl)
  }

 
 addToCart(item:Cart){
  const items = [...this.productSync.value.items]
  console.log(items)
  const itemInCart = items.find(_item => _item['id'] === item.id)
  if(itemInCart){
    ++itemInCart.quantity
  }else{
   items.push(item)
  }
  this.productSync.next({items})
 }

removeCart(item:Cart){
const items = [...this.productSync.value.items]
if(items.length > 0){
  const itemsOutCart = items.find(_item =>  _item.id == item.id) 
  if(itemsOutCart.quantity > 1){
    --itemsOutCart.quantity
    this.productSync.next({items})
  }
}
}
removeItemCart(item:Cart){
  let filterItem = [...this.productSync.value.items].filter(_item => _item.id !== item.id)
  this.productSync.next({items: filterItem})
}
 clearCart(){
this.productSync.next({items:[]})
 }
}
