import React, { useState } from 'react';
import { NextPage } from 'next';
import Tools from '../components/ToolList';

import useGetTools from '../hooks/useRequest';

const Home: NextPage = () => {
  const [search, setSearch] = useState('');
  const [searchType] = useState('q');
  const { tools, error } = useGetTools('tools', `${searchType}=${search}`);

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.target.value = e.target.value.toLowerCase();
    setSearch(e.target.value);
  }

  return (
    <>
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
      <Tools tools={tools} error={error} />
    </>
  );
};

export default Home;
