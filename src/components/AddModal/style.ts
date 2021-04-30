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
    text-align: left;

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
    margin-bottom: 1rem;
  }

  .modal--confirm button {
    color: ${props => props.theme.colors.white};
    border: none;
    padding: 0.5rem 2.5rem;
    margin-top: 2rem;
    margin-left: 0.5rem;
    text-decoration: none;
    display: inline-block;
    font-size: 1.4rem;
    border-radius: 0.5rem;
    cursor: pointer;
  }

  .modal--confirm-add {
    background: ${props => props.theme.colors.green};
  }

  .modal--confirm-add:hover {
    background: ${props => props.theme.colors.greenDark};
  }

  input::placeholder,
  input::-ms-input-placeholder,
  textarea::placeholder,
  textarea::-ms-input-placeholder {
    color: ${props => props.theme.colors.grayLine};
  }

  .modal--confirm:last-child {
    text-align: right;
  }

  input {
    width: 100%;
    margin-bottom: 1rem;
  }

  textarea {
    width: 100%;
    margin-bottom: 1rem;
    resize: vertical;
    max-height: 30rem;
    min-height: 10rem;
  }
`;

export default Layout;
