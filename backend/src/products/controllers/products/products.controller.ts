import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateProductDto } from 'src/products/dtos/createProduct.dto';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts() {
    return [{ name: 'Product1 test', price: 5 }];
  }

  @Get('orderByStock')
  getProductsByStock() {
    return 'products in a certain date range AND a category, ordered by highest STOCK to lower';
  }

  @Get('orderByPrice')
  getProductsByPrice() {
    return 'products in a certain date range AND a category, ordered by highest PRICE to lower';
  }

  @Post()
  createProduct(@Body() productData: CreateProductDto) {
    console.log(productData);
    return 'DTO added, post successful';
  }
}
