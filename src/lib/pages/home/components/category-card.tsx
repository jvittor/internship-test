'use client';
import * as React from 'react';
import { Card, CardHeader, Image } from '@heroui/react';
import { Categories } from '@/lib/entities/home/categories';

const CategoryCard = ({
  category,
  layout,
}: {
  category: Categories;
  layout: string;
}) => {
  return (
    <Card
      className={`${layout} relative h-[300px] w-full overflow-hidden rounded-lg`}
    >
      <CardHeader className="absolute bottom-5 left-5 z-10 flex-col !items-start">
        <div className="rounded-2xl bg-white p-2">
          <p className="text-tiny rounded-2xl bg-white font-bold text-[#5e035a] lowercase">
            $ {category.price}
          </p>
        </div>
      </CardHeader>
      <Image
        removeWrapper
        alt={category.title}
        className="z-0 h-[600px] w-[600px] object-cover md:h-full md:w-full"
        src={category.image}
      />
    </Card>
  );
};

export default CategoryCard;
