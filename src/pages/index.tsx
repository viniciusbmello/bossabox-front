import React, { useState } from 'react';
import { NextPage } from 'next';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tools from '../components/ToolList';
import Layout from './style';

import useGetTools from '../hooks/useRequest';

const Home: NextPage = () => {
  const [search, setSearch] = useState('');
  const [searchType, setSearchType] = useState(false);
  const { tools, error } = useGetTools(
    'tools',
    `${searchType ? 'tags_like' : 'q'}=${search}`,
  );

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.target.value = e.target.value.toLowerCase();
    setSearch(e.target.value);
  }

  function handleSearchTypeChange() {
    setSearchType(!searchType);
  }

  return (
    <Layout>
      <h1>VUTTR</h1>
      <h2>Very Useful Tools to Remember</h2>
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
      <Tools tools={tools} error={error} />
    </Layout>
  );
};

export default Home;
