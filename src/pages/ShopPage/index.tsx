import { StyledShopPage } from './style';
import CartModal from '../../components/CartModal';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';

import { StyledContainer } from '../../styles/grid';
import { CartContext } from '../../provider/CartContext';
import { useContext } from 'react';

const ShopPage = () => {
  const { modal } = useContext(CartContext);

  console.log(modal);

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
