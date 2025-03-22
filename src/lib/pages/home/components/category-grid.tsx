'use client';
import * as React from 'react';
import CategoryCard from '@/lib/pages/home/components/category-card';
import { Categories } from '@/lib/entities/home/Categories';

const CategoryGrid = ({
  category,
  items,
}: {
  category: string;
  items: Categories[];
}) => {
  return (
    <div>
      <h2 className="mb-4 text-left text-2xl font-bold text-black">
        {category.toLowerCase()}
      </h2>
      <div className="grid max-w-[900px] grid-cols-12 grid-rows-2 gap-10">
        {items.slice(0, 3).map((cat) => (
          <CategoryCard
            key={cat.id}
            category={cat}
            layout="col-span-12 sm:col-span-4"
          />
        ))}
        {items.slice(3, 4).map((cat) => (
          <CategoryCard
            key={cat.id}
            category={cat}
            layout="col-span-12 sm:col-span-5"
          />
        ))}
        {items.slice(4, 5).map((cat) => (
          <CategoryCard
            key={cat.id}
            category={cat}
            layout="col-span-12 sm:col-span-7"
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
