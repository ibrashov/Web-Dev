import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItemComponent {
  product = input.required<Product>();
  delete = output<number>();

  like() {
    this.product().likes++;
  }

  remove() {
    this.delete.emit(this.product().id);
    console.log('DELETE', this.product().id);
  }

  shareWhatsApp() {
    const text = encodeURIComponent(`${this.product().name} — ${this.product().link}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  }

  shareTelegram() {
    const text = encodeURIComponent(this.product().name);
    const url = encodeURIComponent(this.product().link);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }
}