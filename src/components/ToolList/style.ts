import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.2rem 0;

  .loading {
    margin-top: 5rem;
    min-width: 5rem;
    min-height: 5rem;
    border-radius: 100%;
    border: 0.25rem solid ${props => props.theme.colors.linkTitle};
    border-bottom-color: rgba(255, 255, 255, 0);
  }

  .loading.is-animating {
    animation: loading 1s cubic-bezier(0.2, 0.4, 0.8, 0.4) infinite;
  }

  @keyframes loading {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Layout;
