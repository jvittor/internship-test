'use client';

import { useEffect, useState } from 'react';
import { CategoriesUseCases } from '@/lib/usecases/categories.usecases';
import { Categories } from '@/lib/entities/home/categories';
import ProductList from '@/lib/pages/product/components/product';
import Breadcrumbs from '@/lib/components/breadcrumbs';

type CategoryPageProps = {
  params: {
    category: string;
  };
};

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = decodeURIComponent(params.category);
  const [products, setProducts] = useState<Categories[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log('Buscando produtos para categoria:', category);
        const data = await CategoriesUseCases.getCategories(category);
        setProducts(data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <>
      <Breadcrumbs items={[{ label: category }]} />
      <div className="flex w-full items-center justify-center">
        <div>
          <h1 className="mb-4 text-2xl font-bold">Category: {category}</h1>
          <ProductList products={products} />
        </div>
      </div>
    </>
  );
}
