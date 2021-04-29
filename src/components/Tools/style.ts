import styled from 'styled-components';

const Layout = styled.div`
  padding: 0.2rem 0;

  .card {
    padding: 0.5rem;
    background: #fff;
    border-radius: 10px;
  }

  h1 {
    text-decoration: underline;
    cursor: pointer;
    color: ${props => props.theme.colors.blue};
    font: 700 1.8rem sans-serif;
    padding-bottom: 0.5rem;
  }

  p {
    font: 400 1.4rem sans-serif;
  }

  span {
    font: 700 1.2rem sans-serif;
  }
`;

export default Layout;
