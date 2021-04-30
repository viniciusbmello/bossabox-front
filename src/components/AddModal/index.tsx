/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Layout from './style';

import { useAddTools } from '../../hooks/useRequest';

interface IAddModal {
  handleAddModal;
}

const AddModal: React.FC<IAddModal> = ({ handleAddModal }) => {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState([]);
  const router = useRouter();

  function AddTool() {
    useAddTools('tools', title, link, description, tags);
    router.reload();
  }

  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
  }

  function handleLinkChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLink(e.target.value);
  }

  function handleDescriptionChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setDescription(e.target.value);
  }

  function handleTagsChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTags(e.target.value.split(' '));
  }

  return (
    <Layout onClick={handleAddModal}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <header className="modal--title">
          <FontAwesomeIcon icon={faPlus} />
          {` `}Add new tool
        </header>
        <label htmlFor="title">
          <span>Title:</span>
          <br />
          <input
            id="title"
            type="text"
            placeholder="Title"
            onChange={handleTitleChange}
            value={title}
            name="title"
          />
        </label>
        <br />
        <label htmlFor="link">
          <span>Link:</span>
          <br />
          <input
            id="link"
            type="text"
            placeholder="https://link.org/"
            onChange={handleLinkChange}
            value={link}
            name="link"
          />
        </label>
        <br />
        <label htmlFor="description">
          <span>Description:</span>
          <br />
          <textarea
            id="description"
            placeholder="Some description here"
            onChange={handleDescriptionChange}
            name="description"
          />
        </label>
        <br />
        <label htmlFor="tag">
          <span>Tags:</span>
          <br />
          <input
            id="tag"
            type="text"
            placeholder="tags"
            onChange={handleTagsChange}
            name="tag"
          />
        </label>
        <div className="modal--confirm">
          <button
            className="modal--confirm-add"
            type="button"
            onClick={AddTool}
          >
            Add tool
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default AddModal;
