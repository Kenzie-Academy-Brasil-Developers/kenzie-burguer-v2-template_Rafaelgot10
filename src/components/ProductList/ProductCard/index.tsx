import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { useContext } from 'react';
import { CartContext } from '../../../provider/CartContext';
import { toast } from 'react-toastify';

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
    console.log(productsListCart);
    let aux = true;

    productsListCart?.map((sameProduct) => {
      if (sameProduct.id == id) {
        toast.warn('Este item já está no carrinho');
        aux = false;
      }
    });

    productList?.map((product) => {
      if (product.id == id && aux == true) {
        // tipar
        const newProduct = [...productsListCart, product];
        setProductsListCart(newProduct);
        toast.success('Item adicionado ao carrinho com sucesso');
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
        <StyledParagraph className='price'>
          {price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </StyledParagraph>
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
