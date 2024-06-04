// import React, { useState } from 'react';
// import { Link, Routes, Route } from 'react-router-dom'; // Import Link and Route
// import BookingForm from './bookingForm';
// import SignUpForm from './signUp';

// const Navbar = (props) => {
//   const [showMenu, setShowMenu] = useState(false);
//   const [showSignUpForm, setShowSignUpForm] = useState(true);
//   const handleOpenSignUpForm = () => {
//     setShowSignUpForm(true);
//   };

//   const handleCloseSignUpForm = () => {
//     setShowSignUpForm(false);
//   };

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   const handleDoubleClick = () => {
//     setShowMenu(false);
//   };

//   return (
//     <nav>
//       <div className='text-black h-auto w-full mx-auto px-4 bg-white shadow-md fixed '>
//         <h1 className='w-full text-2xl font-bold text-[#41A4FF]'>Appointment</h1>
//         <button 
//           className='block md:hidden p-2 focus:outline-none'
//           onClick={toggleMenu}
//           onDoubleClick={handleDoubleClick}
//         >
//           <img src="d6.png" alt="" />
//         </button>
//         {showMenu && (
//           <div className="absolute top-12 left-0 right-0 bg-white p-4 rounded-lg shadow-lg">
//             <ul>
//               <li className='p-4'>Home</li>
//               <li className='p-4'>Vehicle Reservations</li>
//               <li className='p-4'>Hotel Reservations</li>
//               <li className='p-4'>Events</li>
//               <li className='p-4'>Restaurants</li>
//               <li className='p-4'>Travel Packages</li>
//               <li className='p-4'><Link to="/booking">Booking</Link> </li>
//               <li className='p-4'><Link to="/signUp" onClick={handleOpenSignUpForm}>SignUp</Link></li>
//             </ul>
//           </div>
//         )}
//         <ul className='hidden md:flex'>
//           <li className='p-4'><Link to="/">Home</Link></li>
//           <div className='p-4 flex items-center'>
//             <select>
//               <option>Vehicle Reservations</option>
//               <option>Hotel Reservations</option>
//               <option>Events</option>
//               <option>Restaurants</option>
//               <option>Travel Packages</option>
//             </select>
//           </div>
//           <li className='p-4'><Link to="/booking">Booking</Link> </li>
//           <li className='p-4'><Link to="/signUp" onClick={handleOpenSignUpForm}>SignUp</Link></li>
//         </ul>
//       </div>
//       <Routes>
//         <Route path="/booking" element={<BookingForm />} />
//         <Route path="/signUp" element={showSignUpForm && <SignUpForm onClose={handleCloseSignUpForm} />}/>
//       </Routes>
//     </nav>
//   );
// };

// export default Navbar;









import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex items-center">
            <span className="text-white font-semibold text-lg">Navbar</span>
          </div>
          <div className="flex items-center">
            <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link to="/booking" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Booking
            </Link>
            <Link to="/signup" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

