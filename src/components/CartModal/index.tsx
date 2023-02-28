import { MdClose } from 'react-icons/md';
import CartProductList from './CartProductList';
import { CartContext } from '../../provider/CartContext';
import { useContext } from 'react';
import { StyledCartModalBox } from './style';
import { StyledParagraph, StyledTitle } from '../../styles/typography';

const CartModal = () => {
  const { closeModal, productsListCart } = useContext(CartContext);

  return (
    <StyledCartModalBox>
      <dialog>
        <header>
          <StyledTitle tag='h2' $fontSize='three'>
            Carrinho de compras
          </StyledTitle>
          <button
            type='button'
            aria-label='Fechar'
            onClick={() => {
              closeModal();
            }}
          >
            <MdClose size={21} />
          </button>
        </header>

        <div className='cartBox'>
          <>
            {productsListCart?.length === 0 ? (
              <div className='emptyBox'>
                <StyledTitle tag='h3' $fontSize='three' textAlign='center'>
                  Sua sacola está vazia
                </StyledTitle>
                <StyledParagraph textAlign='center'>
                  Adicione itens
                </StyledParagraph>
              </div>
            ) : (
              <CartProductList />
            )}
          </>
        </div>
      </dialog>
    </StyledCartModalBox>
  );
};

export default CartModal;
