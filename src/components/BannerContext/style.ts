import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  z-index: 999;

  .context {
    margin-top: 1rem;
    padding: 1rem 2rem;

    border-radius: 0.5rem;

    position: relative;
    text-align: center;

    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.red};
  }
  .context.check {
    background: ${props => props.theme.colors.green};
  }

  .context--icon {
    font-size: 1.2rem;
    margin-right: 2rem;
    padding: 0rem 0.1rem;
  }

  .context--close {
    color: ${props => props.theme.colors.white};
    background: none;
    border: none;
    padding: 0.25rem 0.5rem;
    margin-left: 2rem;
    text-decoration: none;
    display: inline-block;
    font-size: 1.2rem;
    cursor: pointer;
  }

  .context--timeout {
    position: fixed;
    height: 0.4rem;
    background: ${props => props.theme.colors.greenDark};

    top: 0;
    left: 0;

    animation: timeout 1s linear normal;
  }

  @keyframes timeout {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }
`;

export default Layout;
