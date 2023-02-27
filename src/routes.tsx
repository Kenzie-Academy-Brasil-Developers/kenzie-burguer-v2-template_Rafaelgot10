import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ShopPage from './pages/ShopPage';
import { CartProvider } from './provider/CartContext';
import { UserProvider } from './provider/UserContext';

const Router = () => {
  return (
    <CartProvider>
      <UserProvider>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/shop' element={<ShopPage />} />
        </Routes>
      </UserProvider>
    </CartProvider>
  );
};

export default Router;
