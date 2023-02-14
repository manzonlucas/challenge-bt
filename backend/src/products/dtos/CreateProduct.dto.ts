import { IsNotEmpty, IsNumber, IsDecimal } from 'class-validator';

export class CreateProductDto {
  id: number;
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  @IsNumber()
  stock: number;
  @IsNotEmpty()
  @IsNumber()
  price: number;
  creationDate: Date;
  @IsNotEmpty()
  @IsNumber()
  category: number;
}
