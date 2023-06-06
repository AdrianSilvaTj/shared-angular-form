import { Component, OnInit } from '@angular/core';
import { Product } from './../../../../core/models/product.model';

import { ProductsService } from './../../../../core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products : Product[] = [];
  displayedColumns: string[] = ['id', 'name', 'price', 'actions'];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getAllProducts()
    .subscribe(products => {
      this.products = products;
    });
  }

  deleteProduct(id: string) {
    this.productsService.deleteProduct(id)
    .subscribe(rta => {
      this.fetchProducts();
    });
  }

}
