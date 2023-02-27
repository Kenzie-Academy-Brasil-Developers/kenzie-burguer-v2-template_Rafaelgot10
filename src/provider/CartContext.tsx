import { createContext, useState } from 'react';

import {
  ICartContext,
  IDefaultProviderProps,
  IProductsListCart,
} from './@Types';

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: IDefaultProviderProps) => {
  const [modal, setModal] = useState(false);

  const [productsListCart, setProductsListCart] = useState<
    IProductsListCart[] | null
  >([]);

  const [productList, setProductList] = useState<IProductsListCart[] | null>(
    []
  );

  const closeModal = () => {
    setModal(false);
    console.log(modal);
  };

  const showModal = () => {
    setModal(true);
    console.log(modal);
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
