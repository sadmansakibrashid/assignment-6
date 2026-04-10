import React from 'react';
import banner from '../../assets/banner.png';
const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen px-20">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={banner}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">Supercharge Your Digital Workflow</h1>
      <p className="py-6">
        Access premium AI tools, design assets, templates, and productivity
        software—all in one place. Start creating faster today.Explore Products

      </p>
      <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full">Explore Products</button>
      <button className="btn btn-outline btn-primary rounded-full ">Primary</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;