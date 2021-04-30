import styled from 'styled-components';

const Layout = styled.li`
  padding: 1rem 1rem;
  list-style: none;

  background: ${props => props.theme.colors.white};
  margin: 1rem 0;
  border-radius: 1rem;

  .card--header {
    display: flex;
    justify-content: space-between;
  }

  .card--title {
    font: 700 2.4rem sans-serif;
    color: ${props => props.theme.colors.linkTitle};
    cursor: pointer;
  }

  a {
    text-decoration-thickness: 0.2rem;
    text-decoration-color: ${props => props.theme.colors.linkTitle};
    text-underline-offset: 0.2rem;
  }

  .card--description {
    font: 400 1.4rem sans-serif;
    padding: 0.5rem 0;
  }

  .card--tags {
    list-style: none;
  }

  .card--tags li {
    display: inline;
    padding-right: 0.5rem;
  }

  .card--tags li span {
    font: 400 1.2rem sans-serif;
    padding: 0.2rem 0.5rem;
    border-radius: 0.5rem;
    background: ${props => props.theme.colors.blue};
    color: ${props => props.theme.colors.white};
  }

  .card--remove {
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card--remove button {
    background: ${props => props.theme.colors.red};
    color: ${props => props.theme.colors.white};
    border: none;
    padding: 0.5rem 1rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1.4rem;
    border-radius: 0.5rem;
    cursor: pointer;
  }

  .card--remove button:hover {
    background: ${props => props.theme.colors.redDark};
  }
`;

export default Layout;
