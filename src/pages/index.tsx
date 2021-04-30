import React, { useState } from 'react';
import { NextPage } from 'next';
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tools from '../components/ToolList';
import Layout from './style';

import useGetTools from '../hooks/useRequest';
import AddModal from '../components/AddModal';

const Home: NextPage = () => {
  const [search, setSearch] = useState('');
  const [searchType, setSearchType] = useState(false);
  const [confirmAdd, setConfirmAdd] = useState(false);
  const { tools, error } = useGetTools(
    'tools',
    `${searchType ? 'tags_like' : 'q'}=${search}`,
  );

  function handleAddModal() {
    setConfirmAdd(!confirmAdd);
  }

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.target.value = e.target.value.toLowerCase();
    setSearch(e.target.value);
  }

  function handleSearchTypeChange() {
    setSearchType(!searchType);
  }

  return (
    <Layout>
      <h1>VUTtR</h1>
      <h2>Very Useful Tools to Remember</h2>
      <div className="menu">
        <div className="searchMenu">
          <label htmlFor="search">
            <div className="searchField">
              <span>
                <FontAwesomeIcon icon={faSearch} />
              </span>
              <input
                id="search"
                type="text"
                placeholder="Search"
                onChange={handleSearchChange}
                value={search}
                name="search"
              />
            </div>
          </label>
          <label htmlFor="tags">
            <input
              id="tags"
              type="checkbox"
              onChange={handleSearchTypeChange}
              checked={searchType}
              name="tags"
            />
            <span>Search in tags only</span>
          </label>
        </div>
        <button className="add" type="button" onClick={handleAddModal}>
          <FontAwesomeIcon icon={faPlus} />
          {` `}Add
        </button>
        {confirmAdd && <AddModal handleAddModal={handleAddModal} />}
      </div>
      <Tools tools={tools} error={error} />
    </Layout>
  );
};

export default Home;
