import React, { useState } from 'react';
import { NextPage } from 'next';

import useGetTools from '../hooks/useRequest';
import Tool from '../components/Tools';

const Home: NextPage = () => {
  const { tools, error } = useGetTools('tools');
  const [search, setSearch] = useState('');

  if (error) return <div>failed to load</div>;
  if (!tools) return <div>loading...</div>;

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
          placeholder="node, notion ..."
          onChange={handleSearchChange}
          value={search}
          name="search"
        />
      </label>
      <ul>
        {tools.map(tool => (
          <Tool tool={tool} key={tool.id} />
        ))}
      </ul>
    </>
  );
};

export default Home;
