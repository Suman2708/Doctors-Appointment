// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Route,Routes ,Link} from 'react-router-dom';
// import Header from './header';
// import DoctorList from './doctorList';
// import BookingForm from './bookingForm';
// // import NotFound from './NotFound';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <Routes>
//         <li>
//           <Link > <Route path="/" element={<DoctorList />} />Doctor List</Link>
//         </li>
          
//           <Route path="/bookingForm" element={<BookingForm />} /> Booking Form
//           {/* <BookingForm /> */}
//           {/* <Route component={NotFound} /> */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;



// App.js
import React from 'react';
import { useState } from 'react';
import { BrowserRouter , Routes, Route, Link,Switch, Router } from 'react-router-dom';
import Header from './components/Header/header';
import DoctorList from './components/Doctors/doctorList';
import BookingForm from './components/Booking/bookingForm';
import SignUpWithGoogle from './components/Sign/signUp';
// import Navbar from './components/navbar';
import HomePage from './components/HomePage/homePage';
import { Nav } from 'react-bootstrap';
import SignUpForm from './components/Sign/signUp';
import SignIn from './components/Sign/signIn';
import Navbar from './components/Header/navbar';
import ParentComponent from './components/Extra/parent';
import SignInForm from './components/Sign/signIn';
// import NotFound from './NotFound';

function App() {

  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const handleCloseSignUpForm = () => {
    setIsSignUpOpen(false);
  }

  return (
   

  //   <BrowserRouter>
  //   <div>
  //     <Navbar />
  //     <Routes>
  //       <Route exact path="/"  component={<HomePage />} />
  //       <Route path="/bookingForm" component={<BookingForm />} />
  //       <Route path="/components/signUp" component={<SignUpForm />} />
  //     </Routes>
  //   </div>
  // </BrowserRouter>


  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/login" element={<SignIn />} />
    <Route path="/booking" element={<BookingForm/>} />
    <Route path="/signup" element={<SignUpForm />} />
    
  </Routes>
</BrowserRouter>

   
    
  );
}

export default App;





