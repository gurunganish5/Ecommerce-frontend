// order-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material.module';
import { OrderService } from '../../services/order.service';


@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders: any[] = [];

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getOrders().subscribe({
      next:(orders) => {
        this.orders = orders;
      },
      error:(error) => {
        console.error('Error fetching orders', error);
      }
  });
  }
}