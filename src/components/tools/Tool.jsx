import React from 'react';
import ToolCard from './ToolCard';

const Tool = ({ data, setCoin }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {data.map((tool) => (
        <ToolCard key={tool.id} tool={tool} setCoin={setCoin} />
      ))}
    </div>
  );
};

export default Tool;