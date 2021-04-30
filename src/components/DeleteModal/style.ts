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

  header {
    color: ${props => props.theme.colors.title};
  }

  .modal {
    width: 100%;
    max-width: 40rem;
    padding: 2rem 3rem;

    border-radius: 1rem;
    box-shadow: 0 0 6rem rgba(0, 0, 0, 0.2);

    position: relative;
    text-align: right;

    background: ${props => props.theme.colors.white};
  }

  .modal--header {
    display: flex;
    justify-content: space-between;
  }

  .modal--header button {
    color: ${props => props.theme.colors.text};
    background: none;
    border: none;
    padding: 0.25rem 0.5rem;
    margin-left: 2rem;
    text-decoration: none;
    display: inline-block;
    font-size: 1.2rem;
    cursor: pointer;
  }

  .modal--header button:hover {
    color: ${props => props.theme.colors.title};
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
    border: none;
    padding: 0.5rem 1rem;
    margin-left: 0.5rem;
    text-decoration: none;
    display: inline-block;
    font-size: 1.4rem;
    border-radius: 0.5rem;
    cursor: pointer;
  }

  .modal--response-no {
    color: ${props => props.theme.colors.red};
    background: none;
  }

  .modal--response-no:hover {
    text-decoration: underline;
    text-underline-offset: 0.2rem;
  }

  .modal--response-yes {
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.red};
  }

  .modal--response-yes:hover {
    background: ${props => props.theme.colors.redDark};
  }
`;

export default Layout;
