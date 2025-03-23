'use client';

import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import ProductList from '@/lib/pages/product/components/product';
import Breadcrumbs from '@/lib/components/breadcrumbs';
import { CategoriesUseCases } from '@/lib/usecases/categories.usecases';
import { Categories } from '@/lib/entities/home/categories';

type Params = Promise<{ category: string }>;

export default function CategoryPage({ params }: { params: Params }) {
  const [decodedCategory, setDecodedCategory] = useState<string>('');
  const [allProducts, setAllProducts] = useState<Categories[]>([]);
  const [products, setProducts] = useState<Categories[]>([]);
  const [hasMore, setHasMore] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const fetchCategory = async () => {
      const { category } = await params;
      const decoded = decodeURIComponent(category);
      setDecodedCategory(decoded);

      try {
        console.log('Buscando produtos para categoria:', decoded);
        const fetchedProducts = await CategoriesUseCases.getCategories(decoded);
        setAllProducts(fetchedProducts);
        setProducts(fetchedProducts.slice(0, 2));
        setHasMore(fetchedProducts.length > 2);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchCategory();
  }, [params]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const loadMoreProducts = () => {
    setTimeout(() => {
      const nextProducts = allProducts.slice(0, products.length + 2);
      setProducts(nextProducts);
      setHasMore(nextProducts.length < allProducts.length);
    }, 1000);
  };

  return (
    <>
      <Breadcrumbs items={[{ label: decodedCategory }]} />
      <div className="flex w-full items-center justify-center">
        <div>
          <h1 className="mb-5 text-center text-2xl font-bold text-black md:text-left">
            Category: {decodedCategory}
          </h1>
          {isMobile ? (
            <InfiniteScroll
              dataLength={products.length}
              next={loadMoreProducts}
              hasMore={hasMore}
              loader={<p className="mt-10 w-full text-center">loading...</p>}
            >
              <ProductList products={products} />
            </InfiniteScroll>
          ) : (
            <ProductList products={allProducts} />
          )}
        </div>
      </div>
    </>
  );
}
