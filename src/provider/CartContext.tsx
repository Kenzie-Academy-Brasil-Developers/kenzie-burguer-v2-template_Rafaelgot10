import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ICartContext, IDefaultProviderProps } from './@Types';
import { api } from '../services/api';

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: IDefaultProviderProps) => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
    console.log(modal);
  };

  const showModal = () => {
    setModal(true);
    console.log(modal);
  };

  return (
    <CartContext.Provider value={{ closeModal, modal, showModal }}>
      {children}
    </CartContext.Provider>
  );
};
