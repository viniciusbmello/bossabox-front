import styled from 'styled-components';

const Layout = styled.div`
  padding: 0.2rem 0;

  h2 {
    font: 400 2rem sans-serif;
    margin-bottom: 2rem;
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
`;

export default Layout;
