import { StyledShopPage } from './style';
import CartModal from '../../components/CartModal';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';

import { StyledContainer } from '../../styles/grid';
import { CartContext } from '../../provider/CartContext';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ShopPage = () => {
  const { modal } = useContext(CartContext);

  const navigate = useNavigate();

  let token = localStorage.getItem('@token');

  useEffect(() => {
    if (token == null) {
      navigate('/');
      // toast.error('Você deve estar logado para acessar essa página');
    }
  }, []);

  return (
    <StyledShopPage>
      {modal ? <CartModal /> : <></>}

      <Header />
      <main>
        <StyledContainer containerWidth={1300}>
          <ProductList />
        </StyledContainer>
      </main>
    </StyledShopPage>
  );
};

export default ShopPage;
