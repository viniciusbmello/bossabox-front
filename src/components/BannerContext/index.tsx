import React from 'react';
import {
  faExclamationCircle,
  faTimes,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Layout from './style';

interface IToolList {
  type;
  message;
}

const BannerContext: React.FC<IToolList> = ({ type, message }) => (
  <Layout>
    <div className={`context ${type}`}>
      <div className="context--timeout is-animating" />
      <FontAwesomeIcon
        className="context--icon"
        icon={type === 'check' ? faCheckCircle : faExclamationCircle}
      />
      {message}
      <button type="button" className="context--close">
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </div>
  </Layout>
);

export default BannerContext;
