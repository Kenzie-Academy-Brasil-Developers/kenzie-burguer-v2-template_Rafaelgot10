import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../provider/UserContext';
import { api } from '../../services/api';
import ProductCard, { IproductProps } from './ProductCard';
import { StyledProductList } from './style';

const ProductList = () => {
  const { loading, setLoading } = useContext(UserContext);
  const [productList, setProductList] = useState([]);
  let token = localStorage.getItem('@token');

  useEffect(() => {
    async function loadProductList() {
      try {
        setLoading(true);
        const response = await api.get('/products', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProductList(response.data);
        // setProductListSearch(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    loadProductList();
  }, []);

  return (
    <StyledProductList>
      {productList.map((product: IproductProps) => (
        <ProductCard
          key={product.id}
          name={product.name}
          category={product.category}
          price={product.price}
          img={product.img}
        />
      ))}
    </StyledProductList>
  );
};

export default ProductList;
