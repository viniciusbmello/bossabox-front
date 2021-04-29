import React, { useState } from 'react';
import Link from 'next/link';
import DeleteModal from '../DeleteModal';
import Layout from './style';

interface ITool {
  tool;
}

const Tool: React.FC<ITool> = ({ tool }) => {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const { id, title, link, description, tags } = tool;

  function handleDeleteModal() {
    setConfirmDelete(!confirmDelete);
  }

  return (
    <Layout>
      <div className="card">
        <Link href={`${link}`}>
          <h1 className="card--title">{title}</h1>
        </Link>
        <p className="card--description">{description}</p>
        <span className="card--tags">
          {tags.map(tag => `#${tag}`).join(' ')}
        </span>
      </div>
      <div className="card--remove">
        <button type="button" onClick={handleDeleteModal}>
          delete
        </button>
      </div>
      {confirmDelete && (
        <DeleteModal handleDeleteModal={handleDeleteModal} toolId={id} />
      )}
    </Layout>
  );
};

export default Tool;
