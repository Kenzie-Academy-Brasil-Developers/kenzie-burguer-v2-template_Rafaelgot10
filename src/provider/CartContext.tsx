import { createContext, useState } from 'react';

import {
  ICartContext,
  IDefaultProviderProps,
  IProductsListCart,
} from './@Types';

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: IDefaultProviderProps) => {
  const [modal, setModal] = useState(false);

  const [productsListCart, setProductsListCart] = useState<IProductsListCart[]>(
    []
  );

  const [productList, setProductList] = useState<IProductsListCart[]>([]);

  const closeModal = () => {
    setModal(false);
  };

  const showModal = () => {
    setModal(true);
  };

  return (
    <CartContext.Provider
      value={{
        closeModal,
        modal,
        showModal,
        productsListCart,
        setProductsListCart,
        productList,
        setProductList,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
