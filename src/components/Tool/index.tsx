import React from 'react';
import Link from 'next/link';
import Layout from './style';

interface ITool {
  tool;
}

const Tool: React.FC<ITool> = ({ tool }) => {
  const { title, link, description, tags } = tool;
  return (
    <Layout className="card">
      <Link href={`${link}`}>
        <h1 className="card--title">{title}</h1>
      </Link>
      <p className="card--description">{description}</p>
      <span className="card--tags">{tags.map(tag => `#${tag}`).join(' ')}</span>
    </Layout>
  );
};

export default Tool;
