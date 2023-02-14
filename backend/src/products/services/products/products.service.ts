import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from 'src/products/dtos/createProduct.dto';
import { Product } from 'src/typeorm/entities/Product';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}

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
