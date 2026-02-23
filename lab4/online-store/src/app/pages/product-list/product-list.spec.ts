import { Component } from '@angular/core';
import { PRODUCTS } from '../../data/products';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products: Product[] = PRODUCTS;

  stars(rating: number): number[] {
    const full = Math.round(rating); // просто и понятно
    return Array.from({ length: 5 }, (_, i) => (i < full ? 1 : 0));
  }

  shareWhatsApp(p: Product): void {
    const text = `Check out this product: ${p.link}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }

  shareTelegram(p: Product): void {
    const url = `https://t.me/share/url?url=${encodeURIComponent(p.link)}&text=${encodeURIComponent(p.name)}`;
    window.open(url, '_blank');
  }
}