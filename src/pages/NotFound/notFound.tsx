import { Link } from 'react-router-dom';
import { StyledNotFoundPage } from './styles';

export function NotFound() {
  return (
    <StyledNotFoundPage>
      <h1>404 Not Found</h1>
      <p>
        Você provavelmente está digitando o endereço da página de maneira
        incorreta <br />
        Tente fazer o cadastro no nosso site:
      </p>
      <Link className='link' to='/register'>
        {' '}
        Cadastro{' '}
      </Link>
    </StyledNotFoundPage>
  );
}
