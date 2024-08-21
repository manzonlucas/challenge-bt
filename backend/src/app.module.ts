import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { Product } from './typeorm/entities/Product';
import { CategoriesModule } from './categories/categories.module';
import { Category } from './typeorm/entities/Category';

@Module({
  imports: [
    ProductsModule,
    CategoriesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql-42c7a53-challenge-bt.l.aivencloud.com',
      port: 19869,
      username: 'avnadmin',
      password: '',
      database: 'defaultdb',
      entities: [Product, Category],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
