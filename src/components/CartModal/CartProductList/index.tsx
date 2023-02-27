import CartProductCard from './CartProductCard';

import { StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';
import { useContext, useState } from 'react';
import { CartContext } from '../../../provider/CartContext';

const CartProductList = () => {
  const { productsListCart, setProductsListCart } = useContext(CartContext);
  // const [totalValue, setTotalValue] = useState(0);
  const removeAllToCart = () => {
    setProductsListCart([]);
  };

  let totalValue = 0;
  return (
    <StyledCartProductList>
      <ul>
        {productsListCart?.map((product) => (
          <CartProductCard
            key={product.id}
            img={product.img}
            name={product.name}
            id={product.id}
          />
        ))}
      </ul>

      <div className='totalBox'>
        <>
          <StyledParagraph>
            <strong>Total</strong>
          </StyledParagraph>
          {productsListCart?.map((product) => {
            totalValue = totalValue + product.price;
          })}
          <StyledParagraph className='total'>{totalValue} </StyledParagraph>
        </>
      </div>
      <StyledButton
        onClick={() => removeAllToCart()}
        $buttonSize='default'
        $buttonStyle='gray'
      >
        Remover todos
      </StyledButton>
    </StyledCartProductList>
  );
};

export default CartProductList;
