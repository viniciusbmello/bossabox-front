import React from 'react';
import Tool from '../Tool';
import Layout from './style';

interface IToolList {
  tools;
  error;
}

const ToolList: React.FC<IToolList> = ({ tools, error }) => {
  if (!tools) return <div>loading...</div>;
  if (error) return <div>failed...</div>;

  return (
    <Layout>
      <ul>
        {tools.map(tool => (
          <Tool tool={tool} key={tool.id} />
        ))}
      </ul>
    </Layout>
  );
};

export default ToolList;
