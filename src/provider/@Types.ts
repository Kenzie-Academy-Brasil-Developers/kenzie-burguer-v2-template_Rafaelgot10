import { FieldValues, UseFormRegister } from 'react-hook-form';

export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IRegisterFormValues {
  name: string;
  email: string;
  password: string;
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
