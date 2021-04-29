import React from 'react';
import { useRouter } from 'next/router';
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
    <Layout>
      <div className="modal">
        <header>Delete</header>
        <p>Sure?</p>
        <button type="button" onClick={handleDeleteModal}>
          No
        </button>
        <button type="button" onClick={DeleteTool}>
          Yes
        </button>
      </div>
    </Layout>
  );
};

export default DeleteModal;
