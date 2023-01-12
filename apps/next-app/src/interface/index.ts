export type ProductType = {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
};

export type OrderType = {
  id: string;
  userId: number;
  date: string;
  products: { productId: number; quantity: number }[];
};

export type UserType = {
  idToken: string;
  email: string;
  userId: string;
  username?: string;
  name?: { firstname: string; lastname: string };
  address?: any;
  phone?: string;
};

export type CartItemType = {
  product: ProductType;
  quantity: number;
};
export type CartType = CartItemType[];
