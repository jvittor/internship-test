/* eslint-disable @next/next/no-async-client-component */
'use client';

import { CategoriesUseCases } from '@/lib/usecases/categories.usecases';
import { Categories } from '@/lib/entities/home/categories';
import ProductList from '@/lib/pages/product/components/product';

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category = decodeURIComponent(params.category); // 🔥 Corrige espaços/apóstrofos

  let products: Categories[] = [];
  try {
    console.log('Buscando produtos para categoria:', category);
    products = await CategoriesUseCases.getCategories(category);
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
  }

  return (
    <div className="flex w-full items-center justify-center">
      <div>
        <h1 className="mb-4 text-2xl font-bold">Category: {category}</h1>
        <ProductList products={products} />
      </div>
    </div>
  );
}
