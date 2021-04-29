import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(0.05rem);

  .modal {
    width: 100%;
    max-width: 40rem;
    padding: 2rem 3rem;

    border-radius: 1rem;
    box-shadow: 0 0 6rem rgba(0, 0, 0, 0.1);

    position: relative;
    text-align: center;

    background: ${props => props.theme.colors.white};
  }
`;

export default Layout;
