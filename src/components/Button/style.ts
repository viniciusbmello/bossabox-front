import styled from 'styled-components';

const Layout = styled.button.attrs({ type: 'button' })`
  border: none;
  padding: 0.5rem 1rem;
  text-decoration: none;
  display: inline-block;
  font-size: 1.4rem;
  border-radius: 0.5rem;
  cursor: pointer;

  background-color: ${props =>
    (props.color === 'green' && props.theme.colors.green) ||
    (props.color === 'red' && props.theme.colors.red) ||
    (props.color === 'white' && props.theme.colors.white)};
  color: ${props =>
    props.color === 'white'
      ? props.theme.colors.red
      : props.theme.colors.white};

  &:hover {
    background-color: ${props =>
      (props.color === 'green' && props.theme.colors.greenDark) ||
      (props.color === 'red' && props.theme.colors.redDark) ||
      (props.color === 'white' && 'none')};
    color: ${props =>
      props.color === 'white'
        ? props.theme.colors.redDark
        : props.theme.colors.white};
  }

  &:first-child {
    margin-right: 0.5rem;
  }
`;

export default Layout;
