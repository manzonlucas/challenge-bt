import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  id: number;
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  stock: number;
  @IsNotEmpty()
  price: number;
  creationDate: Date;
  @IsNotEmpty()
  category: number;
}
