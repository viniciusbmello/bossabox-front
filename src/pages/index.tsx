import React, { useState } from 'react';
import { NextPage } from 'next';
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
        Search:
        <input
          id="search"
          type="text"
          placeholder="swr, eslint ..."
          onChange={handleSearchChange}
          value={search}
          name="search"
        />
      </label>
      <label htmlFor="tags">
        <input
          id="tags"
          type="checkbox"
          onChange={handleSearchTypeChange}
          checked={searchType}
          name="tags"
        />
        Search in tags only
      </label>
      <Tools tools={tools} error={error} />
    </Layout>
  );
};

export default Home;
