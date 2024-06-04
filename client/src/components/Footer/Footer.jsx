import React from 'react';
// import logo from './d5.jpg';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto flex justify-around items-start">
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">Get to Know US</h3>
          <p>About us</p>
          <p>Careers</p>
          <p>Press Releases</p>
          <p>Amazon Cares</p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">Connect with Us</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        <div className="flex flex-col hidden md:flex">
          <h3 className="text-lg font-semibold">Make Money with Us</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        <div className="flex flex-col hidden md:flex">
          <h3 className="text-lg font-semibold">Make Money with Us</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
      </div>
      <div className="bg-gray-800 py-5 text-center">
        <img src="d6.png" alt="logo" className="mx-auto w-20" />
        <p className="text-sm mt-5">
          Conditions of Use & Sale &nbsp; &nbsp;&nbsp; Privacy Notice &nbsp; &nbsp;&nbsp; Interest-Based Ads &nbsp; &nbsp;&nbsp; © 1996-{year}, Neighbourkart.com, Inc. or its affiliates
        </p>
      </div>
    </footer>
  );
};

export default Footer;
