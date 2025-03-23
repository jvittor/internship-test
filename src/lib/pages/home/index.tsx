'use client';

import { useState } from 'react';
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

  const loadMoreCategories = () => {
    setTimeout(() => {
      const nextCategories = categoriesData.slice(0, categories.length + 1);
      setCategories(nextCategories);
      if (nextCategories.length >= categoriesData.length) {
        setHasMore(false);
      }
    }, 1000);
  };

  return (
    <div className="flex min-h-[60vh] w-full flex-col items-center justify-center gap-8 bg-white text-center">
      <InfiniteScroll
        className="w-full md:w-[900px]"
        dataLength={categories.length}
        next={loadMoreCategories}
        hasMore={hasMore}
        loader={<p className="mt-10 w-full text-center">loading...</p>}
      >
        <div className="category-list-container">
          <CategoryList categories={categories} />
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Home;
