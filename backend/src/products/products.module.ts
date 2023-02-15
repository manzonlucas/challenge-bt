import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from 'src/typeorm/entities/Category';
import { Product } from 'src/typeorm/entities/Product';
import { ProductsController } from './controllers/products/products.controller';
import { ProductsService } from './services/products/products.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
    TypeOrmModule.forFeature([Category]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
