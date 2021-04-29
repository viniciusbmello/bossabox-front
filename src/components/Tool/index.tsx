import React, { useState } from 'react';
import Link from 'next/link';
import { faTimesCircle, faHashtag } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        <div className="card--header">
          <Link href={`${link}`}>
            <h1 className="card--title">{title}</h1>
          </Link>
          <div className="card--remove">
            <button type="button" onClick={handleDeleteModal}>
              <FontAwesomeIcon icon={faTimesCircle} />
              {` `}Delete
            </button>
          </div>
          {confirmDelete && (
            <DeleteModal handleDeleteModal={handleDeleteModal} toolId={id} />
          )}
        </div>
        <p className="card--description">{description}</p>
        <ul className="card--tags">
          {tags.map(tag => (
            <li>
              <span>
                <FontAwesomeIcon icon={faHashtag} />
                {` `}
                {tag}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Tool;
