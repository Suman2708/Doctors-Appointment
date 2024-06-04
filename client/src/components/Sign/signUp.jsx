

// import React, { useRef, useEffect, useState } from 'react';
// import { useNavigate,useLocation, Navigate,Link } from 'react-router-dom';
// import HomePage from '../HomePage/homePage';
// import ParentComponent from '../Extra/parent';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const SignUpForm = ({ closeSignupFormAndRedirect}) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');

//   const [inputValue, setInputValue] = useState('');


//   const handleChange = (e) => {
//     setInputValue(e.target.value);
//   };




//      const [isCut, setIsCut] = useState(false);
//     const signupRef = useRef(null);
  
//     useEffect(() => {
//       const handleClickOutside = (event) => {
//         if (signupRef.current && !signupRef.current.contains(event.target)) {
//           setIsCut(true);
//         }
//       };
  
//       document.addEventListener('mousedown', handleClickOutside);
      
//       return () => {
//         document.removeEventListener('mousedown', handleClickOutside);
//       };
//     }, []);
  
//     useEffect(() => {
//       if (isCut) {
//         // Redirect to previous page
//         window.history.back();
//       }
//     }, [isCut]);
  
  
//     const handleCut = () => {
//       setIsCut(true);
//     };
  
//     if (isCut) {
//       return null; // Render nothing when the form is cut
//     }
  
  

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here
//     // You can perform validation and submit data to backend
//     // After successful submission, you can close the form
//     handleCut();
//   };

//   const addData=(e)=>{

//     const {name,value}=e.target;

//     setInputValue(()=>{
//         return{
//           ...inputValue,
//           [name]:value
//         }
//     })
//   };
//   console.log(inputValue);


//   const sendData=async(e)=>{
//     e.preventDefault();
//     const{name,email,mobile_no}=inputValue;
//     const res= await fetch("/register",{
//          method:"POST",
//          headers:{
//           "Content-Type":"application/json"
//          },
//          body:JSON.stringify({
//           name,email,mobile_no
//          })
//     });
//     const userdata=res.json();
//     console.log(userdata);
//     if(res.status===422 ||!userdata){
//       // alert("error");
//       toast.warning("invalid detail",{
//         position:"top-center"
//       })
//     }else{
//       // alert("data successfully submited");

//       toast.success("data successfully added",{
//         position:"top-center"
//       })
//       setInputValue({...inputValue,name:"",email:"",mobile_no:""});
//     }
// }





//   return (
//     <div ref={signupRef}  className='fixed  top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50'>
//       <div className='w-full max-w-md bg-white rounded-lg shadow-lg'>
//         <div className='flex justify-end p-4' ref={signupRef}>
//           <button onClick={handleCut} className='text-gray-500 hover:text-gray-700'>
//             <svg className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
//               <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
//             </svg>
//           </button>
//         </div>
//         <div className='px-8 py-6'>
//           <h2 className='text-xl font-bold mb-4'>Sign Up</h2>
//           <form onSubmit={sendData}>
//             <div className='mb-4'>
//               <label htmlFor='name' className='block text-gray-700 font-bold mb-2'>Name</label>
//               <input
//                 type='text'
//                 id='name'
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className='w-full border rounded-md px-3 py-2'
//                 placeholder='Enter your name'
//                 required
//               />
//             </div>
//             <div className='mb-4'>
//               <label htmlFor='email' className='block text-gray-700 font-bold mb-2'>Email</label>
//               <input
//                 type='email'
//                 id='email'
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className='w-full border rounded-md px-3 py-2'
//                 placeholder='Enter your email'
//                 required
//               />
//             </div>
//             <div className='mb-4'>
//               <label htmlFor='phone' className='block text-gray-700 font-bold mb-2'>Phone Number</label>
//               <input
//                 type='tel'
//                 id='phone'
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 className='w-full border rounded-md px-3 py-2'
//                 placeholder='Enter your phone number'
//                 required
//               />
//             </div>
//             <button type='submit' className='bg-[#41A4FF] text-white rounded-md font-bold py-2 px-4 w-full'>
//               Submit
//             </button>
//           </form>
//         </div>
//         <div className='signin_info'>
//             <p>Already have a account?<Link to='/login'>sign in</Link></p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUpForm;







import React, { useState } from 'react'
import './signup.css'
import { Link ,NavLink,redirect} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SignupForm = () => {

  const [data,setdata]=useState({
    name:"",
    email:"",
    mobile_no:"",
    password:"",
    confirm_password:""
  });
  
  const addData=(e)=>{

    const {name,value}=e.target;

    setdata(()=>{
        return{
          ...data,
          [name]:value
        }
    })
  };
  console.log(data);
 
  const sendData=async(e)=>{
      e.preventDefault();
      const{name,email,mobile_no,password,confirm_password}=data;
      const res= await fetch("/signup",{
           method:"POST",
           headers:{
            "Content-Type":"application/json"
           },
           body:JSON.stringify({
            name,email,mobile_no,password,confirm_password 
           })
      });
      const userdata=res.json();
      console.log(userdata);
      if(res.status===422 ||!userdata){
        // alert("error");
        toast.warning("invalid detail",{
          position:"top-center"
        })
      }else{
        // alert("data successfully submited");
          console.log("Added");
        toast.success("data successfully added",{
          position:"top-center"
        })
        setdata({...data,name:"",email:"",mobile_no:"",password:"",confirm_password:""});
        <redirect to="/login"/>;
      }
  }


  return (
    <section>
     <div className='sign_container'>
        <div className='sign_header pt-10'>
        <img  src='/nk.png'  alt='neighbourKartLogo'  />
         </div>
        <div className='sign_form'>
          <form  method='POST'>
          <h1>Create account</h1>
          <div className='form_data'>
            <label htmlFor='name'>Your name</label>
            <input type='text' name='name' id='name'  onChange={addData} value={data.name} />
          </div>
          <div className='form_data'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' id='email'  placeholder='At least 8 character' onChange={addData} value={data.email}/>
          </div>
          
          <div className='form_data'>
            <label htmlFor='mobile_no'>Mobile no</label>
            <input type='number' name='mobile_no' id='mobile_no'  onChange={addData} value={data.mobile_no}/>
          </div>
          <div className='form_data'>
            <label htmlFor='password'>password</label>
            <input type='password' name='password' id='password'  placeholder='At least 8 character' onChange={addData} value={data.password}/>
          </div>
          <div className='form_data'>
            <label htmlFor='password'>confirm password</label>
            <input type='password' name='confirm_password' id='confirm_password'  placeholder='At least 8 character' onChange={addData} value={data.confirm_password}/>
          </div>
          <button className='signin_btn' onClick={sendData}>
            continue
          </button>

          </form>
        </div>
        <ToastContainer />
        <div className='signin_info'>
            <p>Already have a account?<NavLink to='/login'>sign in</NavLink></p>
        </div>
        
     </div>  

   </section>
  )
}

export default SignupForm








