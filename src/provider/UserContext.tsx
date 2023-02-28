import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  IDefaultProviderProps,
  ILoginFormValues,
  IRegisterFormValues,
  IresponseDefault,
  IUserContext,
} from './@Types';
import { api } from '../services/api';
import { toast } from 'react-toastify';
import axios from 'axios';

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const registerUser = async (formData: IRegisterFormValues) => {
    try {
      setLoading(true);
      const response = await api.post<IresponseDefault>('/users', formData);
      toast.success('Usuario cadastrado com sucesso ');
      navigate('/');
    } catch (error) {
      if (axios.isAxiosError<string>(error)) {
        if (error.response?.data == 'Email already exists') {
          toast.error('Email já cadastrado, insira outro email');
          console.log(error);
        } else {
          console.log(error);
        }
      }
    } finally {
      setLoading(false);
    }
  };
  const loginUser = async (formData: ILoginFormValues) => {
    try {
      setLoading(true);
      const response = await api.post<IresponseDefault>('/login', formData);
      localStorage.setItem('@token', response.data.accessToken);
      navigate('/shop');
    } catch (error) {
      if (axios.isAxiosError<string>(error)) {
        if (error.response?.data == 'Incorrect password') {
          toast.error('Senha incorreta');
          console.log(error);
        } else if (error.response?.data == 'Cannot find user') {
          toast.error('Email incorreto');
        } else {
          console.log(error);
        }
      }
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
