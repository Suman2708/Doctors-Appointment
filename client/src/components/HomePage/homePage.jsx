

import React from 'react';
import Footer from '../Footer/Footer';
// import d1 from './d1.jpeg';
// import d2 from './public/d2.jpeg';
// import d3 from './public/d3.jpeg';
// import logo192 from './public/logo192.png';

const HomePage = () => {
  return (
    <div className="container  mx-auto p-4  pt-9">
      <h1 className="text-3xl font-bold mb-0 pt-5 text-center">Welcome to our website!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border border-gray-300 rounded-lg overflow-hidden">
        <p>sjdhfjsdghs jsjrhtuhjfghsljhdj</p>
          <img src="d5.jpg" alt="Image 1" className="w-auto h-auto" />
        </div>
        {/* <div className="border border-gray-300 rounded-lg overflow-hidden">
          <img src="d2.jpeg" alt="Image 2" className="w-full h-auto" />
        </div>
        <div className="border border-gray-300 rounded-lg overflow-hidden">
          <img src="d3.jpeg" alt="Image 3" className="w-full h-auto" />
        </div> */}
       
      </div>
      <Footer />
    </div>
    
  );
};

export default HomePage;
