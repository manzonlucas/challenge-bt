import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { Product } from './typeorm/entities/Product';
import { CategoriesModule } from './categories/categories.module';
import { Category } from './typeorm/entities/Category';
import { WelcomeController } from './welcome/welcome.controller';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    ProductsModule,
    CategoriesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Product, Category],
      synchronize: true,
    }),
  ],
  controllers: [WelcomeController],
  providers: [],
})
export class AppModule { }
