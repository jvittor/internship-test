/* eslint-disable @next/next/no-img-element */
import { Card, CardBody, CardFooter } from '@heroui/react';
import { Categories } from '@/lib/entities/home/categories';

export default function ProductList({ products }: { products: Categories[] }) {
  const safeProducts = products || [];

  return (
    <div className="flex grid w-full grid-cols-1 gap-2 md:w-4xl md:grid-cols-4">
      {safeProducts.length > 0 ? (
        safeProducts.map((item) => (
          <Card
            key={item.id}
            isPressable
            shadow="sm"
            onPress={() => console.log('item pressed')}
          >
            <CardBody className="flex items-center justify-center overflow-visible rounded-lg p-0">
              <img
                alt={item.title}
                className="h-full w-[200px] object-cover md:h-[200px] md:w-full"
                src={item.image}
              />
            </CardBody>
            <CardFooter className="text-small grid grid-cols-1 justify-center font-bold">
              <p className="text-default-500">${item.price.toFixed(2)}</p>
              <b className="text-sm font-normal">
                {item.title.split(' ').length > 2
                  ? item.title.split(' ').slice(0, 2).join(' ') + '...'
                  : item.title}
              </b>
            </CardFooter>
          </Card>
        ))
      ) : (
        <div className="bg-opacity-50 fixed top-0 right-0 bottom-0 left-0 z-10 flex items-center justify-center bg-white">
          <div className="loading text-xl text-white"></div>
        </div>
      )}
    </div>
  );
}
