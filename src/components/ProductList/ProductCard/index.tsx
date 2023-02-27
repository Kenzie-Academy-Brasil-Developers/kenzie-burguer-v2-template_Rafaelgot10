import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { useContext } from 'react';
import { CartContext } from '../../../provider/CartContext';

export interface IproductProps {
  name: string;
  category: 'Sanduíches' | 'Bebidas';
  price: number;
  img: string;
  id?: number;
}

const ProductCard = ({ name, category, price, img, id }: IproductProps) => {
  const { productsListCart, setProductsListCart, productList, setProductList } =
    useContext(CartContext);

  const addToCart = () => {
    productList?.map((product) => {
      if (product.id == id) {
        const newProduct = [...productsListCart, product];
        setProductsListCart(newProduct);
      }
    });
  };

  return (
    <StyledProductCard>
      <div className='imageBox'>
        <img src={img} alt={name} />
      </div>
      <div className='content'>
        <StyledTitle tag='h3' $fontSize='three'>
          {name}
        </StyledTitle>
        <StyledParagraph className='category'>{category}</StyledParagraph>
        <StyledParagraph className='price'>{price}</StyledParagraph>
        <StyledButton
          onClick={() => addToCart()}
          $buttonSize='medium'
          $buttonStyle='green'
        >
          Adicionar
        </StyledButton>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
