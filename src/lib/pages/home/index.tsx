import CategoryList from '@/lib/pages/home/components/category-list';

const Home = () => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-8 text-center">
      <CategoryList
        categories={[
          "women's clothing",
          'electronics',
          'jewelery',
          "men's clothing",
        ]}
      />
    </div>
  );
};

export default Home;
