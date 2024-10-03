// shopping-cart.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { CartService } from '../../services/cart.service';
import { OrderService } from '../../services/order.service';


@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  cartItems: any[] = [];

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) {
    this.cartItems = this.cartService.getCartItems();
  }

  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId);
    this.cartItems = this.cartService.getCartItems();
  }

  checkout() {
    const order = {
      items: this.cartItems.map(item => ({
        product: { id: item.id },
        quantity: item.quantity
      }))
    };

    this.orderService.createOrder(order).subscribe(
      response => {
        console.log('Order created', response);
        this.cartService.clearCart();
        this.router.navigate(['/orders']);
      },
      error => {
        console.error('Error creating order', error);
      }
    );
  }
}