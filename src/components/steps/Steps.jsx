import React from "react";
import userIcon from "../../assets/user.png";
import pakageIcon from "../../assets/package.png";
import rocketIcon from "../../assets/rocket.png";
const Steps = () => {
  return (
    <div className="py-16 bg-gray-50">
      
      <div className="text-center mb-10">
        <h3 className="text-3xl font-bold">
          Get Started in 3 Steps
        </h3>
        <p className="text-gray-500 mt-2">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
        
      
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-4">
            <img src={userIcon} alt="" />
          </div>

          <h3 className="text-xl font-semibold mb-2">Create Account</h3>

          <p className="text-gray-500 text-sm">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>

        
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-4">
            <img src={pakageIcon} alt="" />
          </div>

          <h3 className="text-xl font-semibold mb-2">Choose Products</h3>

          <p className="text-gray-500 text-sm">
            Browse our catalog and select tools that fit your needs.
          </p>
        </div>

       
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-4">
            <img src={rocketIcon} alt="" />
          </div>

          <h3 className="text-xl font-semibold mb-2">Start Creating</h3>

          <p className="text-gray-500 text-sm">
            Download and start using your premium tools immediately.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Steps;