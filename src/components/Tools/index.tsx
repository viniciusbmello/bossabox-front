import React from 'react';
import Link from 'next/link';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Tool = ({ tool }) => {
  const { title, link, description, tags } = tool;
  return (
    <div className="Card">
      <Link href={`${link}`}>
        <h1 className="Card--title">{title}</h1>
      </Link>
      <p className="Card--description">{description}</p>
      <span className="Card--tags">{tags.map(tag => `#${tag}`).join(' ')}</span>
    </div>
  );
};

export default Tool;
