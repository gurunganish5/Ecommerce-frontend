import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material.module';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProduct(+id).subscribe({
        next: (product) => {
          this.product = product;
        },
        error: (error) => {
          console.error('Error fetching product', error);
        }
      });
    }
}

addToCart(product: any){
  this.cartService.addToCart(product);
}

}