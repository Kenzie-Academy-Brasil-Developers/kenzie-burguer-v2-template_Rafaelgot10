import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  IDefaultProviderProps,
  ILoginFormValues,
  IRegisterFormValues,
  IUserContext,
} from './@Types';
import { api } from '../services/api';
import { toast } from 'react-toastify';

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const registerUser = async (formData: IRegisterFormValues) => {
    try {
      setLoading(true);
      //tipar
      const response = await api.post('/users', formData);

      toast.success('Usuario cadastrado com sucesso ');
      navigate('/');
    } catch (error) {
      //tipar
      if (error.response.data == 'Email already exists') {
        toast.error('Email já cadastrado, insira outro email');
      } else console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const loginUser = async (formData: ILoginFormValues) => {
    try {
      setLoading(true);
      //tipar
      const response = await api.post('/login', formData);

      localStorage.setItem('@token', response.data.accessToken);
      navigate('/shop');
    } catch (error) {
      //tipar
      if (error.response.data == 'Incorrect password') {
        toast.error('Senha incorreta');
        //tipar
      } else if (error.response.data == 'Cannot find user') {
        toast.error('Email incorreto');
      } else console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = () => {
    localStorage.removeItem('@token');
    navigate('/');
  };

  return (
    <UserContext.Provider
      value={{ loading, setLoading, registerUser, loginUser, logoutUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
