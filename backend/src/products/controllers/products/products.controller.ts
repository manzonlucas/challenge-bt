import { Body, Controller, Get, Post, Query, Param } from '@nestjs/common';
import { CreateProductDto } from 'src/products/dtos/createProduct.dto';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts() {
    return [{ name: 'Product1 test', price: 5 }];
  }

  @Get('/sorted')
  getProductsByRange(@Query() query) {
    console.log(query.startDate);
    console.log(query.endDate);
    console.log(query.category);
    console.log(query.sortBy);

    // example route for this endpoint
    // http://localhost:3001/products/sorted?startDate=08-03-1993&endDate=13-02-2023&category=food&sortBy=price
    return `products from ${query.startDate} to ${query.endDate} in the category ${query.category}, ordered by highest ${query.sortBy} to lower`;
  }

  @Post()
  createProduct(@Body() productData: CreateProductDto) {
    console.log(productData);
    return 'DTO added, post successful';
  }
}
