import axios from 'axios';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { CartContext } from '../../provider/CartContext';
import { UserContext } from '../../provider/UserContext';
import { api } from '../../services/api';
import ProductCard, { IproductProps } from './ProductCard';
import { StyledProductList } from './style';

interface IResponseProduct {
  name: string;
  category: 'Sanduíches' | 'Bebidas';
  price: number;
  img: string;
  id?: number;
}

const ProductList = () => {
  const { loading, setLoading } = useContext(UserContext);
  const { productList, setProductList } = useContext(CartContext);
  const navigate = useNavigate();

  let token = localStorage.getItem('@token');

  useEffect(() => {
    async function loadProductList() {
      try {
        setLoading(true);

        const response = await api.get<IResponseProduct[]>('/products', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setProductList(response.data);
      } catch (error) {
        if (axios.isAxiosError<string>(error)) {
          if (error.response?.data == 'jwt expired') {
            toast.error('Seu token de acesso espirou, faça login novamente');
            localStorage.removeItem('@token');
            navigate('/');
          } else {
            console.log(error);
          }
        }
      } finally {
        setLoading(false);
      }
    }
    loadProductList();
  }, []);

  return (
    <StyledProductList>
      {loading ? (
        <h1>Carregando...</h1>
      ) : (
        productList?.map((product: IproductProps) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            category={product.category}
            price={product.price}
            img={product.img}
          />
        ))
      )}
    </StyledProductList>
  );
};

export default ProductList;
