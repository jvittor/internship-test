import { Card, CardBody, CardFooter, Image } from '@heroui/react';
import { Categories } from '@/lib/entities/home/categories';

export default function ProductList({ products }: { products: Categories[] }) {
  return (
    <div className="flex grid w-4xl grid-cols-2 gap-2 sm:grid-cols-4">
      {products.length > 0 ? (
        products.map((item) => (
          <Card
            key={item.id}
            isPressable
            shadow="sm"
            onPress={() => console.log('item pressed')}
          >
            <CardBody className="overflow-visible p-0">
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
              <b>{item.title}</b>
              <p className="text-default-500">${item.price.toFixed(2)}</p>
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
