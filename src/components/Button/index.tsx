/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Layout from './style';

interface IButton {
  buttonText;
  buttonColor;
  buttonClick;
  buttonIcon?;
  buttonBeforeText?;
}

const Button: React.FC<IButton> = ({
  buttonText,
  buttonColor,
  buttonClick,
  buttonIcon,
  buttonBeforeText,
}) => (
  <Layout onClick={buttonClick} color={buttonColor}>
    {buttonBeforeText ? (
      <>
        {buttonText} {buttonIcon && <FontAwesomeIcon icon={buttonIcon} />}
      </>
    ) : (
      <>
        {buttonIcon && <FontAwesomeIcon icon={buttonIcon} />} {buttonText}
      </>
    )}
  </Layout>
);

export default Button;
