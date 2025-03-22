/* eslint-disable @next/next/no-async-client-component */
'use client';

import { CategoriesUseCases } from '@/lib/usecases/categories.usecases';
import { Categories } from '@/lib/entities/home/categories';
import ProductList from '@/lib/pages/product/components/product';
import Breadcrumbs from '@/lib/components/breadcrumbs';

type Params = Promise<{ category: string }>;

export default async function CategoryPage({ params }: { params: Params }) {
  const { category } = await params;
  const decodedCategory = decodeURIComponent(category);

  let products: Categories[] = [];
  try {
    console.log('Buscando produtos para categoria:', decodedCategory);
    products = await CategoriesUseCases.getCategories(decodedCategory);
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
  }

  return (
    <>
      <Breadcrumbs items={[{ label: decodedCategory }]} />
      <div className="flex w-full items-center justify-center">
        <div>
          <h1 className="mb-4 text-2xl font-bold">
            Category: {decodedCategory}
          </h1>
          <ProductList products={products} />
        </div>
      </div>
    </>
  );
}
