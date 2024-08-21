import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from 'src/products/dtos/CreateProduct.dto';
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

  fetchProductsByDateRangeByCategorySortedBy(
    category: number,
    startDate: Date,
    endDate: Date,
    sortBy: string,
  ) {
    return this.productRepository
      .createQueryBuilder('product')
      .where(`product.category = ${category}`)
      .andWhere(
        `product.creationDate BETWEEN 
        '${startDate.toISOString()}' 
        AND
        '${endDate.toISOString()}'`,
      )
      .orderBy(sortBy, 'DESC')
      .setParameters({
        category,
        startDate,
        endDate,
      })
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
