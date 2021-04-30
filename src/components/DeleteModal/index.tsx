/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useRouter } from 'next/router';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Layout from './style';

import { useDeleteTools } from '../../hooks/useRequest';

interface IDeleteModal {
  handleDeleteModal;
  toolId;
}

const DeleteModal: React.FC<IDeleteModal> = ({ handleDeleteModal, toolId }) => {
  const router = useRouter();

  function DeleteTool() {
    useDeleteTools('tools', `${toolId}`);
    router.reload();
  }

  return (
    <Layout onClick={handleDeleteModal}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <header className="modal--title">
          <FontAwesomeIcon icon={faTimes} /> Remove tool
        </header>
        <p className="modal--description">
          Are you sure you want to remove this tool?
        </p>
        <div className="modal--response">
          <button
            className="modal--response-no"
            type="button"
            onClick={handleDeleteModal}
          >
            Cancel
          </button>
          <button
            className="modal--response-yes"
            type="button"
            onClick={DeleteTool}
          >
            Yes, remove
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default DeleteModal;
