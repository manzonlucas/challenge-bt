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

  fetchProducts() {
    return this.productRepository.find();
  }

  createProduct(productDetails: CreateProductDto) {
    // this.fakeProducts.push(productDetails);
    const newProduct = this.productRepository.create({
      ...productDetails,
      creationDate: new Date(),
    });
    return this.productRepository.save(newProduct);
  }
}
