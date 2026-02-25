import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { ProductService } from './services/product.service';
import { ProductListComponent } from './pages/product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  categories: Category[] = [];
  selectedCategoryId: number | null = null;

  // IMPORTANT: храним именно "текущий список", который будем отдавать в ProductList
  selectedProducts: Product[] = [];

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
  }

  selectCategory(categoryId: number) {
    this.selectedCategoryId = categoryId;

    // делаем копию массива, чтобы удаление работало только внутри выбранной категории
    this.selectedProducts = this.productService.getProductsByCategory(categoryId).map(p => ({ ...p }));
  }
}