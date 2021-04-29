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
    text-align: right;

    background: ${props => props.theme.colors.white};
  }

  .modal--title {
    font: 700 1.8rem sans-serif;
    text-align: left;
  }

  .modal--description {
    font: 400 1.4rem sans-serif;
    text-align: left;
    padding: 1rem 0;
  }

  .modal--response button {
    color: ${props => props.theme.colors.white};
    border: none;
    padding: 0.5rem 1rem;
    margin-left: 0.5rem;
    text-decoration: none;
    display: inline-block;
    font-size: 1.4rem;
    border-radius: 0.5rem;
  }

  .modal--response-no {
    background: ${props => props.theme.colors.red};
  }

  .modal--response-no:hover {
    background: ${props => props.theme.colors.redDark};
  }

  .modal--response-yes {
    background: ${props => props.theme.colors.blue};
  }

  .modal--response-yes:hover {
    background: ${props => props.theme.colors.blueDark};
  }
`;

export default Layout;
