// import React from 'react';
// import { BrowserRouter , Routes, Route, Link } from 'react-router-dom';
// import Header from './header';
// import DoctorList from './doctorList';
// import BookingForm from './bookingForm';
// // import SignUpWithGoogle from './pages/signUp';
// // import Navbar from './components/navbar';
// import HomePage from '../pages/homePage';
// import { Nav } from 'react-bootstrap';
// import SignUp from './signUp';
// import HoverButton from './button';
// // import './css/Navbar.css'; // Import your CSS file for styling

// const Navbar = (props) => {
//   return (
//     <nav className=" to-blue-100  mx-auto ">
//       <div className="navbar-links mx-auto  ">
//      <BrowserRouter>
//       <div className=" leading-7    h-3/4">
//       {/* <Navbar /> */}
//       {/* <Nav /> */}
//         <Routes>
//           {/* <Route path="/" element={<HomePage />} /> */}
//           <Route path="/bookingForm" element={<BookingForm />} />
//           <Route path="/signUp" element={<SignUp />} />
//         </Routes>
//         {/* <nav className="navigation">
//           <Link to="/" className="nav-link">Home</Link>
//           <Link to="/bookingForm" className="nav-link">Booking Form</Link>
//           <Link to="/signUp" className="nav-link">SignUp</Link>
//         </nav> */}
//         <ul className="flex  bg-blue-800  font-sans text-xl py-3  " >
//           <li className="text-white    mx-auto  ">
//           {/* <Link to="/" className="nav-link">Home</Link> */}
//             <a className="text-white hover:text-green-800... focus:outline-none focus:ring focus:ring-violet-300 ...  no-underline " href="/">Home</a>
//           </li>
//           <li className="text-white mx-auto">
//           {/* <Link to="/bookingForm" className="nav-link">Booking Form</Link> */}
//             <a className="text-white  no-underline" href="/bookingForm">BookingForm</a>
//           </li>
//           <li className="text-white mx-auto">
//           {/* <Link to="/signUp" className="nav-link">SignUp</Link> */}
//             <a className="text-white  no-underline" href="/signup">Sign Up</a>
//           </li>
//           <div >
//           <input className="mx-auto absolute top-0 right-0  ml-2 w-auto px-4 py-2 mr-32 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 justify-end" type="text" placeholder="Search..." />
//           {/* <Button /> */}
//           {/* <Button  type="Submit"> Search</Button> */}
//           {/* <button className="" type="submit">Search</button> */}
//           {/* <button class=" absolute top-0 right-0 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
//   Search
// </button> */}
//         <div className='absolute top-0 right-0 mx-auto'> <HoverButton name= "Search"/> </div>  
       
//         </div>
//         </ul>
        
//       </div>
//     </BrowserRouter>
    
//     </div>
//     </nav>


//   );
// };

// export default Navbar;








// import React from 'react';
// import { BrowserRouter , Routes, Route, Link } from 'react-router-dom';
// import HoverButton from './button';

// const Navbar = (props) => {
//   return (
//     <nav className="bg-blue-800 py-4">
//       <div className="container mx-auto">
//         <div className="flex justify-between items-center">
//           <div className="text-white font-bold text-lg">
//             <Link to="/">Home</Link>
//           </div>
//           <ul className="hidden md:flex space-x-4">
//             <li className="text-white">
//               <Link to="/bookingForm">Booking Form</Link>
//             </li>
//             <li className="text-white">
//               <Link to="/signUp">Sign Up</Link>
//             </li>
//           </ul>
//           <div className="flex md:hidden">
//             <input className="w-24 px-2 py-1 border border-gray-300 rounded-lg focus:outline-none" type="text" placeholder="Search..." />
//             <HoverButton name="Search" />
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;







import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // <nav className='text-black h-14 w-full mx-auto px-4 bg-blue-900 shadow-md fixed '>
    //   <div className="max-w-7xl mx-auto px-4">
    //     <div className="flex justify-between">
    //       <div className="flex items-center">
    //         <span className="text-white font-semibold text-lg">Navbar</span>
    //       </div>
    //       <div className="flex items-center">
    //         <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md   font-sans text-xl">
    //           Home
    //         </Link>
    //         <Link to="/booking" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-sans text-xl">
    //           Booking
    //         </Link>
    //         <Link to="/signup" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-sans text-xl">
    //           Sign Up
    //         </Link>
    //       </div>
          
    //     </div>
    //   </div>
    // </nav>

    <nav className='text-black h-14 w-full mx-auto px-4 bg-blue-900 shadow-md fixed '>
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between">
        <div className="flex items-center">
          <span className="text-white font-semibold text-lg">Navbar</span>
        </div>
        <div className="hidden md:flex items-center">
          <Link to="/" className="text-gray-300 hover:bg-green-500 hover:text-white px-3 py-2 rounded-md font-sans text-xl">
            Home
          </Link>
          <Link to="/booking" className="text-gray-300 hover:bg-green-500 hover:text-white px-3 py-2 rounded-md font-sans text-xl">
            Booking
          </Link>
          <Link to="/signup" className="text-gray-300 hover:bg-green-500 hover:text-white px-3 py-2 rounded-md font-sans text-xl">
            Sign Up
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-300 hover:bg-green-500 hover:text-white px-3 py-2 rounded-md font-sans text-xl">
            <img src="d6.png" alt="" />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col absolute top-12 left-0 right-0 bg-white p-4 rounded-lg shadow-lg">
          <Link to="/" className="text-gray-700 hover:bg-green-500 hover:text-white px-3 py-2 rounded-md font-sans text-xl">
            Home
          </Link>
          <Link to="/booking" className="text-gray-700 hover:bg-green-500 hover:text-white px-3 py-2 rounded-md font-sans text-xl">
            Booking
          </Link>
          <Link to="/signup" className="text-gray-700 hover:bg-green-500 hover:text-white px-3 py-2 rounded-md font-sans text-xl">
            Sign Up
          </Link>
        </div>
      )}
    </div>
  </nav>
  );
};

export default Navbar;

