import { Component, effect, signal, input } from '@angular/core';
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
  // ✅ AppComponent-тен келеді
  products = input.required<Product[]>();

  // ✅ delete жасасақ, тек осы категория ішінде өшеді
  visible = signal<Product[]>([]);

  constructor() {
    effect(() => {
      this.visible.set(this.products());
    });
  }

  onDelete(productId: number) {
    this.visible.update(list => list.filter(p => p.id !== productId));
  }
}