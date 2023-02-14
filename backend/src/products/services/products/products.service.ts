import { Injectable } from '@nestjs/common';
import { CreateProductDto } from 'src/products/dtos/createProduct.dto';

@Injectable()
export class ProductsService {
  private fakeProducts = [
    { name: 'Product1 test', price: 5 },
    { name: 'Product2 test', price: 10 },
    { name: 'Product3 test', price: 15 },
  ];

  fetchProducts() {
    return this.fakeProducts;
  }

  createProduct(productDetails: CreateProductDto) {
    this.fakeProducts.push(productDetails);
    return 'success';
  }
}
