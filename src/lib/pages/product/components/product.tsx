import { Card, CardBody, CardFooter, Image } from '@heroui/react';
import { Categories } from '@/lib/entities/home/categories';

export default function ProductList({ products }: { products: Categories[] }) {
  const safeProducts = products || [];

  return (
    <div className="flex grid w-4xl grid-cols-2 gap-2 sm:grid-cols-4">
      {safeProducts.length > 0 ? (
        safeProducts.map((item) => (
          <Card
            key={item.id}
            isPressable
            shadow="sm"
            onPress={() => console.log('item pressed')}
          >
            <CardBody className="overflow-visible rounded-lg p-0">
              <Image
                alt={item.title}
                className="h-[140px] w-full object-cover"
                radius="lg"
                shadow="sm"
                src={item.image}
                width="100%"
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
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
        <p className="text-default-500 col-span-4 text-center">
          No products found for this category.
        </p>
      )}
    </div>
  );
}
