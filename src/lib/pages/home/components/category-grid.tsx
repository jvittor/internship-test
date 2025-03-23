'use client';
import * as React from 'react';
import CategoryCard from '@/lib/pages/home/components/category-card';
import { Categories } from '@/lib/entities/home/categories';
import { categoryDetails } from '@/lib/config/category-details';

const CategoryGrid = ({
  category,
  items,
}: {
  category: string;
  items: Categories[];
}) => {
  const currentCategory = categoryDetails[category];
  return (
    <div className="w-72 p-2 md:w-full md:p-5 lg:p-0">
      <h2 className="mt-10 mb-4 text-center text-2xl font-bold text-black md:text-left">
        {category.toLowerCase()}
        <br />
        <p className="font-tiny flex w-full items-center justify-center text-sm text-gray-500 md:justify-between">
          {currentCategory && (
            <div className="flex grid w-full grid-cols-1 items-center justify-center text-center md:grid-cols-2 md:text-left">
              <div>{currentCategory.message}</div>
              <div className="flex w-auto justify-end">
                <a
                  href={`/category/${category}`}
                  className="hover:bg-currentCategory-hoverColor flex hidden items-center justify-center rounded-2xl p-2 text-white md:block"
                  style={{ backgroundColor: currentCategory.buttonColor }}
                >
                  {currentCategory.buttonText}
                </a>
              </div>
            </div>
          )}
        </p>
      </h2>
      <div className="grid-cols-0 grid-rows-0 flex grid max-w-[900px] justify-center gap-5 md:grid-cols-12 md:grid-rows-2 md:gap-10">
        {items.slice(0, 3).map((cat) => (
          <CategoryCard
            key={cat.id}
            category={cat}
            layout="col-span-12 sm:col-span-4 transform transition-transform duration-600 hover:scale-110"
          />
        ))}
        {items.slice(3, 4).map((cat) => (
          <CategoryCard
            key={cat.id}
            category={cat}
            layout="col-span-12 sm:col-span-5 transform transition-transform duration-600 hover:scale-110"
          />
        ))}
        {items.slice(4, 5).map((cat) => (
          <CategoryCard
            key={cat.id}
            category={cat}
            layout="col-span-12 sm:col-span-7 transform transition-transform duration-600 hover:scale-110"
          />
        ))}
      </div>
      <p className="font-tiny flex w-full items-center justify-center text-sm text-gray-500 md:justify-between">
        {currentCategory && (
          <div className="mt-5 flex grid w-full grid-cols-1 items-center justify-center text-center md:grid-cols-2 md:text-left">
            <a
              href={`/category/${category}`}
              className="hover:bg-currentCategory-hoverColor block rounded-2xl p-2 text-white md:hidden"
              style={{ backgroundColor: currentCategory.buttonColor }}
            >
              {currentCategory.buttonText}
            </a>
          </div>
        )}
      </p>
    </div>
  );
};

export default CategoryGrid;
