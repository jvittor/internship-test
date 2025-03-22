// src/lib/useCases/CategoriesUseCases.ts
import { Categories } from '../entities/home/Categories';

export class CategoriesUseCases {
  static async getCategories(category: string): Promise<Categories[]> {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    if (!response.ok) {
      throw new Error('Falha ao buscar as categorias');
    }
    const categories: Categories[] = await response.json();
    return categories;
  }
}
