import CartProductCard from './CartProductCard';

import { StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';
import { useContext } from 'react';
import { CartContext } from '../../../provider/CartContext';

const CartProductList = () => {
  const { productsListCart } = useContext(CartContext);

  return (
    <StyledCartProductList>
      <ul>
        {productsListCart?.map((product) => (
          <CartProductCard
            key={product.id}
            img={product.img}
            name={product.name}
          />
        ))}
      </ul>

      <div className='totalBox'>
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className='total'>ainda n sei </StyledParagraph>
      </div>
      <StyledButton $buttonSize='default' $buttonStyle='gray'>
        Remover todos
      </StyledButton>
    </StyledCartProductList>
  );
};

export default CartProductList;
