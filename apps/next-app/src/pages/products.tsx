import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import { ProductType } from 'apps/next-app/interface';
import ProductCard from '../components/product/ProductCard';
import ProductModal from '../components/product/ProductModal';

type Props = {
  products: ProductType[];
};

const productsPage = ({ products }: Props) => {
  const [openedProduct, setOpenedProduct] = useState<ProductType>(undefined);

  const openModal = (product: ProductType) => {
    setOpenedProduct(product);
  };
  const closeModal = () => {
    setOpenedProduct(undefined);
  };

  return (
    <>
      <main className="w-full flex justify-center bg-gray-100 p-10">
        <div className="flex flex-wrap justify-center">
          {products.map((product) => (
            <ProductCard
              product={product}
              key={product.id}
              openModal={openModal}
            />
          ))}
        </div>
      </main>
      {openedProduct && (
        <ProductModal product={openedProduct} closeModal={closeModal} />
      )}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
};

export default productsPage;
