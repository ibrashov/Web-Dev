import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../../components/product-item/product-item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductListComponent {
  products = input.required<Product[]>();

  deleteFromList(productId: number) {
    const arr = this.products();
    const idx = arr.findIndex(p => p.id === productId);
    if (idx !== -1) arr.splice(idx, 1);
  }
}