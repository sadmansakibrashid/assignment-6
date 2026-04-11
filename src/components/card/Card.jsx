import React from "react";

const Card = () => {
  return (
    <div className="py-16 bg-[#FFFFFF]">

      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 mt-2">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto px-6">

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold">Starter</h3>
          <p className="text-[#627382] text-sm">Perfect for getting started</p>

          <h2 >
            <span className="text-4xl font-bold mt-4">$0</span>
            <span className="text-lg text-gray-500">/Month</span>
          </h2>

          <ul className="mt-6 text-[#627382] text-sm">
            <li>Access to 10 free tools</li>
            <li>Basic templates</li>
            <li>Community support</li>
            <li>1 project per month</li>
          </ul>

          <button className="mt-6 w-full bg-purple-600 text-white py-2 rounded-full">
            Get Started Free
          </button>
        </div>

       
        <div className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA]  text-white p-6 rounded-xl shadow-lg relative">

          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-300 text-black  px-3 py-1 rounded-full">
            Most Popular
          </span>

          <h3 className="text-xl font-semibold">Pro</h3>
          <p className="text-sm">Best for professionals</p>

          <h2 className="text-4xl font-bold mt-4">
            $29<span className="text-lg font-normal">/Month</span>
          </h2>

          <ul className="mt-6 text-sm">
            <li>Access to all premium tools</li>
            <li>Unlimited templates</li>
            <li>Priority support</li>
            <li>Unlimited projects</li>
            <li>Cloud sync</li>
            <li>Advanced analytics</li>
          </ul>

          <button className="mt-6 w-full bg-white text-purple-700 py-2 rounded-full font-semibold">
            Start Pro Trial
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold">Enterprise</h3>
          <p className="text-gray-500 text-sm">For teams and businesses</p>

          <h2>
            <span className="text-4xl font-bold mt-4">$99</span>
            <span className="text-lg text-[#627382]">/Month</span>
          </h2>

          <ul className="mt-6 text-[#627382] text-sm">
            <li>Everything in Pro</li>
            <li>Team collaboration</li>
            <li>Custom integrations</li>
            <li>Dedicated support</li>
            <li>SLA guarantee</li>
            <li>Custom branding</li>
          </ul>

          <button className="mt-6 w-full bg-purple-600 text-white py-2 rounded-full">
            Contact Sales
          </button>
        </div>

      </div>
    </div>
  );
};

export default Card;