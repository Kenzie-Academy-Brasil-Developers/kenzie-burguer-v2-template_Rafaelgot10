import { MdDelete } from 'react-icons/md';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';
import { CartContext } from '../../../../provider/CartContext';

export interface IproductCartProps {
  name: string;
  // eslint-disable-next-line react/no-unused-prop-types
  price?: number;
  img: string;
  id?: number;
}

export interface INewCart {
  category: string;
  id: number;
  img: string;
  price: number;
}

const CartProductCard = ({ img, name, id }: IproductCartProps) => {
  const { productsListCart, setProductsListCart } = useContext(CartContext);

  const removeToCart = (id: number | undefined) => {
    const newCart = productsListCart?.filter((product) => product.id != id);
    console.log(newCart);

    toast.success('Item removido do carrinho com sucesso');

    setProductsListCart(newCart);
  };

  return (
    <StyledCartProductCard>
      <div className='imageBox'>
        <img src={img} alt={name} />
      </div>
      <div className='contentBox'>
        <StyledTitle tag='h3' $fontSize='three'>
          {name}
        </StyledTitle>
        <button type='button' aria-label='Remover'>
          <MdDelete size={24} onClick={() => removeToCart(id)} />
        </button>
      </div>
    </StyledCartProductCard>
  );
};

export default CartProductCard;
