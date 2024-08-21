import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { query } from 'express';
import { CreateProductDto } from 'src/products/dtos/CreateProduct.dto';
import { ProductsService } from 'src/products/services/products/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) { }

  @Get()
  getProducts() {
    return { message: 'testing' }
    // return this.productsService.fetchProducts();
  }

  // example route with the correct query format:
  // http://localhost:3001/products/sort?startDate=2015-03-08&endDate=2030-03-08&category=1&sortBy=price
  @Get('/sort')
  async getProductsByDateRangeByCategorySortedBy(@Query() query) {
    const products =
      await this.productsService.fetchProductsByDateRangeByCategorySortedBy(
        query.category,
        new Date(query.startDate),
        new Date(query.endDate),
        query.sortBy,
      );
    return products;
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createProduct(@Body() productData: CreateProductDto) {
    return this.productsService.createProduct(productData);
  }
}
