import { MdDelete } from 'react-icons/md';
import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';
import { CartContext } from '../../../../provider/CartContext';
import { useContext } from 'react';
import { toast } from 'react-toastify';

export interface IproductCartProps {
  name: string;
  price?: number;
  img: string;
  id?: number;
}

const CartProductCard = ({ img, name, id }: IproductCartProps) => {
  const { productsListCart, setProductsListCart } = useContext(CartContext);

  const removeToCart = (id: number | undefined) => {
    const newCart = productsListCart?.filter((product) => product.id != id);

    toast.success('Item removido do carrinho com sucesso');
    //tipar
    setProductsListCart(newCart);
  };

  return (
    // {img, name}
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
