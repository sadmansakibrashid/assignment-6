import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm px-20">
  <div className="navbar-start flex-1">
    <a className=" text-[#9514FA] font-bold text-xl">DigiTools</a>
  </div>
  {/* <div className='flex navbar-center'> */}
  <div className="navbar-center">
    <ul className="menu menu-horizontal px-1 space-x-4">
    <p><a href="">product</a></p>
    <p><a href="">Features</a></p>
    <p><a href="">Pricing</a></p>
    <p><a href="">Testimonials</a></p>
    <p><a href="">FAQ</a></p>
    </ul>
  </div>
  <div className="navbar-end flex gap-4 items-center">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
          
      </div>
      
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
        {/* <div className="card-body">
          <span className="text-lg font-bold">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div> */}
      </div>
    </div>
    <p>Login</p>
   <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full">View cart</button>
  </div>
</div>
        </div>
    );
};

export default Navbar;