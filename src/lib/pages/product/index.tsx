import ProductComponent from '@/lib/pages/product/components/product';
import Breadcrumbs from '@/lib/components/breadcrumbs';

const Product = () => {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Categories', href: '/category' }]} />
      <div className="flex min-h-[60vh] w-full flex-col items-center justify-center gap-8 text-center">
        <ProductComponent />
      </div>
    </>
  );
};

export default Product;
