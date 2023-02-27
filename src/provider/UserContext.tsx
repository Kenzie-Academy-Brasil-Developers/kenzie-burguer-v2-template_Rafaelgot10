import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  IDefaultProviderProps,
  ILoginFormValues,
  IRegisterFormValues,
  IUserContext,
} from './@Types';
import { api } from '../services/api';

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const registerUser = async (formData: IRegisterFormValues) => {
    try {
      setLoading(true);
      const response = await api.post('/users', formData);
      console.log(response);
      localStorage.setItem('@token', response.data.accessToken);
      navigate('/shop');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const loginUser = async (formData: ILoginFormValues) => {
    try {
      setLoading(true);
      const response = await api.post('/login', formData);
      console.log(response);
      localStorage.setItem('@token', response.data.token);
      console.log('Login realizado com sucesso!');
      navigate('/shop');
    } catch (error) {
      console.log(error);
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
