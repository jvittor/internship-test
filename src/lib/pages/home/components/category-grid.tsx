'use client';
import * as React from 'react';
import CategoryCard from '@/lib/pages/home/components/category-card';
import { Categories } from '@/lib/entities/home/categories';

const CategoryGrid = ({
  category,
  items,
}: {
  category: string;
  items: Categories[];
}) => {
  return (
    <div>
      <h2 className="mt-10 mb-4 text-left text-2xl font-bold text-black">
        {category.toLowerCase()}
        <br />
        <p className="font-tiny text-gray-500w-full flex items-center justify-between text-sm">
          {category === "men's clothing" && (
            <>
              <div>drip on point, no effort!</div>
              <a
                href="#"
                className="rounded-2xl bg-[#5e035a] p-2 text-white hover:bg-[#71046c]"
              >
                style it out
              </a>
            </>
          )}
          {category === "women's clothing" && (
            <>
              <div>flawless fit, zero stress!</div>
              <a
                href="#"
                className="rounded-2xl bg-[#d5008f] p-2 text-white hover:bg-[#e700a8]"
              >
                slay the look
              </a>
            </>
          )}
          {category === 'electronics' && (
            <>
              <div>tech that fits your life!</div>
              <a
                href="#"
                className="rounded-2xl bg-[#00bfa5] p-2 text-white hover:bg-[#00e5c2]"
              >
                shop now
              </a>
            </>
          )}
          {category === 'jewelery' && (
            <>
              <div>shine bright like a diamond!</div>
              <a
                href="#"
                className="rounded-2xl bg-[#ff6d00] p-2 text-white hover:bg-[#ff9100]"
              >
                get the bling
              </a>
            </>
          )}
        </p>
      </h2>
      <div className="grid max-w-[900px] grid-cols-12 grid-rows-2 gap-10">
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
    </div>
  );
};

export default CategoryGrid;
