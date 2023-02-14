import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ProductsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'boxtracker123',
      database: 'boxtracker_challenge',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
