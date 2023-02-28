// import { FieldValues, UseFormRegister } from 'react-hook-form';

export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IresponseDefault {
  accessToken: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

export interface IRegisterFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  //register: UseFormRegister<FieldValues>;
}

export interface ILoginFormValues {
  email: string;
  password: string;
}

export interface IUserContext {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  registerUser: (formData: IRegisterFormValues) => Promise<void>;
  loginUser: (formData: ILoginFormValues) => Promise<void>;
  logoutUser: () => void;
}
export interface IProductsListCart {
  name: string;
  category: 'Sanduíches' | 'Bebidas';
  price: number;
  img: string;
  id?: number;
}
export interface ICartContext {
  closeModal: () => void;
  modal: boolean;
  showModal: () => void;
  setProductsListCart: React.Dispatch<
    React.SetStateAction<IProductsListCart[]>
  >;
  productsListCart: IProductsListCart[];
  productList: IProductsListCart[];
  setProductList: React.Dispatch<React.SetStateAction<IProductsListCart[]>>;
}
