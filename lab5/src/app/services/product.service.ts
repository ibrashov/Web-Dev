import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' },
  ];

  private readonly products: Product[] = [
    // Smartphones (categoryId: 1)
    {
      id: 101,
      categoryId: 1,
      name: 'Apple iPhone 15 Pro Max 256GB (серый)',
      description: 'NanoSIM + eSIM, топ камера и экран.',
      price: 1139000,
      rating: 4.9,
      likes: 0,
      image: 'https://picsum.photos/seed/iphone15pm/600/400',
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/',
    },
    {
      id: 102,
      categoryId: 1,
      name: 'Apple iPhone 15 256GB (голубой)',
      description: 'Dynamic Island, отличная автономность.',
      price: 789000,
      rating: 4.9,
      likes: 0,
      image: 'https://picsum.photos/seed/iphone15/600/400',
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-256gb-goluboi-113137931/',
    },
    {
      id: 103,
      categoryId: 1,
      name: 'Samsung Galaxy S24 5G 8/256 (черный)',
      description: 'AMOLED 120Hz, мощный процессор.',
      price: 649000,
      rating: 4.8,
      likes: 0,
      image: 'https://picsum.photos/seed/s24/600/400',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-5g-8-gb-256-gb-chernyi-podarok-116004286/',
    },
    {
      id: 104,
      categoryId: 1,
      name: 'Samsung Galaxy S24 FE 5G 8/256 (голубой)',
      description: 'Сбалансированный флагман FE.',
      price: 529000,
      rating: 4.8,
      likes: 0,
      image: 'https://picsum.photos/seed/s24fe/600/400',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-fe-5g-8-gb-256-gb-goluboi-128142966/',
    },
    {
      id: 105,
      categoryId: 1,
      name: 'Xiaomi 13T 8/256 (черный)',
      description: 'AMOLED 144Hz, мощная батарея.',
      price: 279000,
      rating: 4.8,
      likes: 0,
      image: 'https://picsum.photos/seed/xiaomi13t/600/400',
      link: 'https://kaspi.kz/shop/p/xiaomi-13t-8-gb-256-gb-chernyi-114166902/',
    },

    // Laptops (categoryId: 2)
    {
      id: 201,
      categoryId: 2,
      name: 'Apple MacBook Air 13 2022 8/256 (MLXW3)',
      description: 'Легкий, автономный, macOS.',
      price: 599000,
      rating: 4.9,
      likes: 0,
      image: 'https://picsum.photos/seed/mba2022/600/400',
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/',
    },
    {
      id: 202,
      categoryId: 2,
      name: 'Apple MacBook Air 13 2024 8/256 (MRXN3RU/A)',
      description: 'Новая версия Air 2024.',
      price: 699000,
      rating: 4.9,
      likes: 0,
      image: 'https://picsum.photos/seed/mba2024/600/400',
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2024-13-6-8-gb-ssd-256-gb-macos-mrxn3ru-a-118170954/',
    },
    {
      id: 203,
      categoryId: 2,
      name: 'Lenovo IdeaPad 3 15" 8/512 (82RK016VRK)',
      description: 'Для учебы/работы, SSD 512GB.',
      price: 229000,
      rating: 4.7,
      likes: 0,
      image: 'https://picsum.photos/seed/ideapad3/600/400',
      link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-8-gb-ssd-512-gb-bez-os-15iau7-s300-82rk016vrk-120588020/',
    },
    {
      id: 204,
      categoryId: 2,
      name: 'ASUS Vivobook 15 15.6" 8/512 (X1504ZA)',
      description: 'Универсальный Vivobook 15.',
      price: 269000,
      rating: 4.8,
      likes: 0,
      image: 'https://picsum.photos/seed/vivobook15/600/400',
      link: 'https://kaspi.kz/shop/p/asus-vivobook-15-15-6-8-gb-ssd-512-gb-win-11-home-x1504za-bq044w-90nb1022-m00m10-113290032/',
    },
    {
      id: 205,
      categoryId: 2,
      name: 'HP Pavilion 15.6" 8/512 (15-eh1014ur)',
      description: 'Pavilion для работы и учебы.',
      price: 299000,
      rating: 4.7,
      likes: 0,
      image: 'https://picsum.photos/seed/hppavilion/600/400',
      link: 'https://kaspi.kz/shop/p/hp-pavilion-15-6-8-gb-ssd-512-gb-win-10-15-eh1014ur-502s7ea-102685818/',
    },

    // Headphones (categoryId: 3)
    {
      id: 301,
      categoryId: 3,
      name: 'Apple AirPods Pro 2 (MagSafe)',
      description: 'Активное шумоподавление, отличный звук.',
      price: 129000,
      rating: 4.9,
      likes: 0,
      image: 'https://picsum.photos/seed/airpodspro2/600/400',
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/',
    },
    {
      id: 302,
      categoryId: 3,
      name: 'Sony WH-1000XM5 (черный)',
      description: 'Лучшее ANC, комфорт, звук.',
      price: 179000,
      rating: 4.9,
      likes: 0,
      image: 'https://picsum.photos/seed/xm5/600/400',
      link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-chernyi-105259822/',
    },
    {
      id: 303,
      categoryId: 3,
      name: 'JBL Tune 710BT (синий)',
      description: 'Беспроводные полноразмерные JBL.',
      price: 39990,
      rating: 4.8,
      likes: 0,
      image: 'https://picsum.photos/seed/jbl710/600/400',
      link: 'https://kaspi.kz/shop/p/naushniki-jbl-tune-710bt-sinii-106764116/',
    },
    {
      id: 304,
      categoryId: 3,
      name: 'Samsung Galaxy Buds2 Pro (белый)',
      description: 'Компактные TWS с шумодавом.',
      price: 69990,
      rating: 4.8,
      likes: 0,
      image: 'https://picsum.photos/seed/buds2pro/600/400',
      link: 'https://kaspi.kz/shop/p/naushniki-samsung-galaxy-buds2-pro-belyi-106128764/',
    },
    {
      id: 305,
      categoryId: 3,
      name: 'Sony WF-1000XM5 (черный)',
      description: 'TWS премиум с сильным ANC.',
      price: 149000,
      rating: 4.9,
      likes: 0,
      image: 'https://picsum.photos/seed/wf1000xm5/600/400',
      link: 'https://kaspi.kz/shop/p/naushniki-sony-wf-1000xm5-chernyi-112854077/',
    },

    // Tablets (categoryId: 4)
    {
      id: 401,
      categoryId: 4,
      name: 'Apple iPad 10.9 2022 Wi-Fi 4/64 (серебристый)',
      description: '10.9", iPadOS, удобен для учебы.',
      price: 229000,
      rating: 4.9,
      likes: 0,
      image: 'https://picsum.photos/seed/ipad2022/600/400',
      link: 'https://kaspi.kz/shop/p/apple-ipad-10-9-2022-wi-fi-10-9-djuim-4-gb-64-gb-serebristyi-107264764/',
    },
    {
      id: 402,
      categoryId: 4,
      name: 'Samsung Galaxy Tab S9 11" 8/128 (графит)',
      description: 'AMOLED, стилус в комплекте.',
      price: 459000,
      rating: 4.8,
      likes: 0,
      image: 'https://picsum.photos/seed/tabs9/600/400',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-sm-x716bzaas-11-djuim-8-gb-128-gb-grafit-112488621/',
    },
    {
      id: 403,
      categoryId: 4,
      name: 'Samsung Galaxy Tab S9 FE 5G 10.9" 6/128 (серебристый)',
      description: 'Планшет FE с 5G.',
      price: 279000,
      rating: 4.7,
      likes: 0,
      image: 'https://picsum.photos/seed/tabs9fe/600/400',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-fe-5g-10-9-djuim-6-gb-128-gb-serebristyi-114962698/',
    },
    {
      id: 404,
      categoryId: 4,
      name: 'Xiaomi Pad 6 11" 8/128 (золотистый)',
      description: '11", мощный и быстрый.',
      price: 189000,
      rating: 4.8,
      likes: 0,
      image: 'https://picsum.photos/seed/xiaomipad6/600/400',
      link: 'https://kaspi.kz/shop/p/xiaomi-pad-6-11-djuim-8-gb-128-gb-zolotistyi-110928013/',
    },
    {
      id: 405,
      categoryId: 4,
      name: 'Xiaomi Redmi Pad SE 11" 6/128 (серый)',
      description: 'Хороший бюджетный планшет.',
      price: 119000,
      rating: 4.7,
      likes: 0,
      image: 'https://picsum.photos/seed/redmipadse/600/400',
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-pad-se-6-11-djuim-6-gb-128-gb-seryi-112675063/',
    },
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(p => p.categoryId === categoryId);
  }
}