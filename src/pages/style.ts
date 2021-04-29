import styled from 'styled-components';

const Layout = styled.div`
  padding: 0.2rem 0;

  h2 {
    font: 400 2rem sans-serif;
    margin-bottom: 2rem;
  }

  .menu {
    display: flex;
    justify-content: space-between;
  }

  .searchField {
    position: relative;
    display: inline;
  }

  #search {
    padding-left: 2rem;
  }

  .searchField span {
    font-size: 1.2rem;
    color: ${props => props.theme.colors.grayLine};
    position: absolute;
    top: 0.4rem;
    left: 0.6rem;
  }

  #search::placeholder,
  #search::-ms-input-placeholder {
    color: ${props => props.theme.colors.grayLine};
  }

  #tags {
    margin: 0 0.5rem 0 2rem;
    width: 2.2rem;
    height: 2.2rem;
    transform: translateY(+28%);
  }

  #tags span {
    font: 400 1.4rem sans-serif;
  }

  .add {
    background: ${props => props.theme.colors.green};
    color: ${props => props.theme.colors.white};
    border: none;
    padding: 0.5rem 1rem;
    margin-left: 0.5rem;
    text-decoration: none;
    display: inline-block;
    font-size: 1.4rem;
    border-radius: 0.5rem;
  }

  .add:hover {
    background: ${props => props.theme.colors.greenDark};
  }
`;

export default Layout;
