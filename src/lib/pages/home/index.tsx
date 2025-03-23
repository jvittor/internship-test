'use client';

import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import CategoryList from '@/lib/pages/home/components/category-list';

const categoriesData = [
  "women's clothing",
  'electronics',
  'jewelery',
  "men's clothing",
];

const Home = () => {
  const [categories, setCategories] = useState(categoriesData.slice(0, 1));
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const loadMoreCategories = () => {
    if (window.innerWidth >= 768) return;

    setTimeout(() => {
      const nextCategories = categoriesData.slice(0, categories.length + 1);
      setCategories(nextCategories);
      if (nextCategories.length >= categoriesData.length) {
        setHasMore(false);
      }
    }, 2000);
  };

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-8 text-center">
      {window.innerWidth < 768 ? (
        <InfiniteScroll
          dataLength={categories.length}
          next={loadMoreCategories}
          hasMore={hasMore}
          loader={<p>loading...</p>}
        >
          <CategoryList categories={categories} />
        </InfiniteScroll>
      ) : (
        <CategoryList categories={categories} />
      )}
    </div>
  );
};

export default Home;
