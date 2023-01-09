import React, { useContext } from 'react';
import { ProductType } from '../../interface';
import Image from 'next/image';
import Stars from '../UI/Stars';
import { CartContext } from '../../context/cart-context';
type Props = {
  product: ProductType;
  closeModal: () => void;
};

const ProductModal = ({ product, closeModal }: Props) => {
  const addToCart = useContext(CartContext).addToCart;
  return (
    <>
      <div
        className="fixed w-full h-full bg-gray-500 opacity-70"
        onClick={closeModal}
      />
      <div className="fixed bg-white flex flex-col p-5 w-[80vw] h-[80vh] left-[10vw] top-[10vh] lg:w-[60vw] lg:h-[80vh] lg:left-[20vw] lg:top-[10vh] lg:flex-row ">
        <div className="relative w-full h-[40vh] lg:w-1/2 lg:h-full">
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
        <div className="lg:p-5 w-full h-1/2 lg:h-full lg:w-1/2 flex flex-col justify-between gap-y-3">
          <header>
            <h5>{product.title}</h5>
            <p>{product.category}</p>
            <div className="flex items-center gap-x-3">
              <Stars rate={product.rating.rate} />
              <span>{product.rating.count} 人評價</span>
            </div>
          </header>
          <div className="overflow-auto">
            <p>{product.description}</p>
          </div>
          <footer className="flex justify-between items-center">
            <h5 className="text-rose-600">$ {product.price}</h5>
            <button className="p-3 border border-rose-600 rounded-lg ">
              詳細資訊
            </button>
            <button
              onClick={() => addToCart(product, 1)}
              className="p-3 border border-rose-600 bg-rose-600 rounded-lg text-white"
            >
              加入購物車
            </button>
          </footer>
        </div>
      </div>
    </>
  );
};

export default ProductModal;
