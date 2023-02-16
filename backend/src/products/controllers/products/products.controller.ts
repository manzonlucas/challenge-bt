import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateProductDto } from 'src/products/dtos/createProduct.dto';
import { ProductsService } from 'src/products/services/products/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  getProducts() {
    return this.productService.fetchProducts();
  }

  @Get('/sorted')
  getProductsByRange(@Query() query) {
    // example route for this endpoint
    // http://localhost:3001/products/sorted?startDate=08-03-1993&endDate=13-02-2023&category=food&sortBy=price
    return `products from ${query.startDate} to ${query.endDate} in the category ${query.category}, ordered by highest ${query.sortBy} to lower`;
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createProduct(@Body() productData: CreateProductDto) {
    return this.productService.createProduct(productData);
  }
}
