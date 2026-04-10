import React from 'react';
import ToolFeature from './ToolFeature';

const Tool = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {data.map((tool) => (
        <div key={tool.id} className="card bg-base-100 w-96 shadow-sm">

     <span className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-orange-100 text-orange-600 font-medium">
              {tool.tag}
            </span>

         <div className="w-12 h-12 mb-4">
            <img
              src={tool.icon}
              alt={tool.name}
              className="w-full h-full object-contain"
            />
          </div>
           

          <div className="card-body">
            <h2 className="card-title">{tool.name}</h2>
            <p>{tool.description}</p>
           
          <div className="mt-4">
            <span className="text-2xl font-bold text-gray-900">
              ${tool.price}
            </span>
            <span className="text-gray-500 text-sm">/{tool.period}</span>
          </div>
           {
            tool.features.map((feature,index)=><ToolFeature
            key={index}
            feature={feature}></ToolFeature>)
           }
            <div className="card-actions justify-end">
              <button className="btn btn-primary w-full">Buy Now</button>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
};


export default Tool;