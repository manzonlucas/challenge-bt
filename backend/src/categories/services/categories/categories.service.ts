import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryDto } from 'src/categories/dtos/CreateCategory.dto';
import { Category } from 'src/typeorm/entities/Category';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  fetchCategories() {
    return this.categoryRepository.find();
  }

  createCategory(categoryDetails: CreateCategoryDto) {
    const newCategory = this.categoryRepository.create({
      ...categoryDetails,
    });
    return this.categoryRepository.save(newCategory);
  }
}
