import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from 'src/products/dtos/createProduct.dto';
import { Category } from 'src/typeorm/entities/Category';
import { Product } from 'src/typeorm/entities/Product';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  fetchProducts() {
    return this.productRepository
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.category', 'category')
      .getMany();
  }

  async createProduct(productDetails: CreateProductDto) {
    const category = await this.categoryRepository.findOneBy({
      id: productDetails.category,
    });
    const newProduct = this.productRepository.create({
      ...productDetails,
      creationDate: new Date(),
      category: category,
    });
    return this.productRepository.save(newProduct);
  }
}
