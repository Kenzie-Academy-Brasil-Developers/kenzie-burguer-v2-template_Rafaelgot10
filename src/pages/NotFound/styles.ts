import styled from 'styled-components';

export const StyledNotFoundPage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 2rem;
    text-align: center;
    font-family: Arial, sans-serif;
  }

  .link {
    text-decoration: none;
    text-align: center;
    padding: 16px 0;
    border-radius: 5px;
    width: 80%;
    color: white;
    font-family: Arial, sans-serif;
    background-color: #868e96;
    cursor: pointer;
  }

  .link:hover {
    background-color: #121214;
  }
`;
