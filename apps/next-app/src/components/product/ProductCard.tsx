import React from 'react';
import Image from 'next/image';
import { ProductType } from 'apps/next-app/interface';
import Stars from '../UI/Stars';

type Props = {
  product: ProductType;
  openModal: (product: ProductType) => void;
};

const ProductCard = ({ product, openModal }: Props) => {
  return (
    <div
      className="w-60 h-80 m-5 bg-white shadow-2xl rounded-2xl cursor-pointer"
      onClick={() => openModal(product)}
    >
      <div className="w-full h-1/2 relative">
        <Image
          src={product.image}
          alt={product.title}
          fill
          style={{ objectFit: 'contain' }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </div>
      <div className="h-1/2 flex flex-col p-5">
        <p className="flex-grow overflow-hidden">{product.title}</p>
        <div className="flex justify-between items-center">
          <Stars rate={product.rating.rate} />
          <p className="text-red-500">$ {product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
