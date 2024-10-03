// src/app/services/cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];
  private cartItemCount = new BehaviorSubject<number>(0);

  constructor() { }

  addToCart(product: any) {
    const existingItem = this.cartItems.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
    this.updateCartItemCount();
  }

  removeFromCart(productId: number) {
    const index = this.cartItems.findIndex(item => item.id === productId);
    if (index > -1) {
      this.cartItems.splice(index, 1);
      this.updateCartItemCount();
    }
  }

  getCartItems() {
    return this.cartItems;
  }

  getItemCount() {
    return this.cartItems.reduce((count, item) => count + item.quantity, 0);
  }

  clearCart() {
    this.cartItems = [];
    this.updateCartItemCount();
  }

  private updateCartItemCount() {
    this.cartItemCount.next(this.getItemCount());
  }

  getCartItemCount() {
    return this.cartItemCount.asObservable();
  }
}