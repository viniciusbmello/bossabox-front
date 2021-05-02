import React from 'react';
import { useRouter } from 'next/router';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Layout from './style';

import { useDeleteTools } from '../../hooks/useRequest';
import Button from '../Button';

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
    <Layout>
      <div className="modal">
        <div className="modal--header">
          <header className="modal--title">
            <FontAwesomeIcon icon={faTimes} /> Remove tool
          </header>
          <button
            type="button"
            className="modal--close"
            onClick={handleDeleteModal}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <p className="modal--description">
          Are you sure you want to remove this tool?
        </p>
        <div>
          <Button
            buttonText="Cancel"
            buttonColor="white"
            buttonClick={handleDeleteModal}
          />
          <Button
            buttonText="Yes, remove"
            buttonColor="red"
            buttonClick={DeleteTool}
          />
        </div>
      </div>
    </Layout>
  );
};

export default DeleteModal;
