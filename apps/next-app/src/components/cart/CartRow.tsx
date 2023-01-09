import React from 'react';
import { CartItemType } from '../../interface';
import Image from 'next/image';
import { useContext } from 'react';
import { CartContext } from '../../context/cart-context';

const QtyBlock = (props) => {
  return (
    <span className="flex justify-center items-center h-8 w-8  border border-gray-400">
      {props.children}
    </span>
  );
};

const CartRow = ({ item }: { item: CartItemType }) => {
  const { product, quantity } = item;
  const totalProductPrice = (product.price * quantity).toFixed(2);
  const { addToCart, removeFromCart } = useContext(CartContext);

  const addItem = () => {
    addToCart(product, 1);
  };
  const removeItem = () => {
    removeFromCart(product);
  };
  return (
    <tr className="h-[20vh]">
      <td className="relative h-[20vh] w-[20vw]">
        <Image
          src={product.image}
          alt={product.title}
          fill
          style={{ objectFit: 'contain' }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </td>
      <td>
        <div className="max-w-[30vw]">{product.title}</div>
      </td>
      <td>
        <div className="flex items-center">
          <QtyBlock>
            <button onClick={removeItem} className="w-full h-full">
              -
            </button>
          </QtyBlock>
          <QtyBlock>{quantity}</QtyBlock>
          <QtyBlock>
            <button onClick={addItem} className="w-full h-full">
              +
            </button>
          </QtyBlock>
        </div>
      </td>
      <td className="text-rose-600">$ {totalProductPrice}</td>
    </tr>
  );
};

export default CartRow;
