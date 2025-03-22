/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Categories } from '@/lib/entities/home/Categories';
import { CategoriesUseCases } from '@/lib/usecases/categories.usecases';
import CategoryGrid from '@/lib/pages/home/components/category-grid';

const CategoryList = ({ categories }: { categories: string[] }) => {
  const [allCategories, setAllCategories] = useState<{
    [key: string]: Categories[];
  }>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoryData: { [key: string]: Categories[] } = {};
        for (const category of categories) {
          categoryData[category] =
            await CategoriesUseCases.getCategories(category);
        }
        setAllCategories(categoryData);
      } catch (err) {
        setError('Erro ao carregar categorias.');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [categories]);

  if (loading) {
    return <div>Carregando categorias...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="space-y-12">
      {categories.map((category) => (
        <CategoryGrid
          key={category}
          category={category}
          items={allCategories[category] || []}
        />
      ))}
    </div>
  );
};

export default CategoryList;
