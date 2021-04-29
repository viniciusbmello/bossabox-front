import React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Tool = ({ tool }) => {
  const { id, title, link, description, tags } = tool;
  return (
    <div className="Card">
      <h1 className="Card-title">
        {id}. {title}
      </h1>
      <p className="Card-description">{description}</p>
      <p className="Card-link">{link}</p>
      <p className="Card-tags">{tags}</p>
    </div>
  );
};

export default Tool;
