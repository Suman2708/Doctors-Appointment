// ParentComponent.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SignupForm from '../Sign/signUp';

function ParentComponent() {
  const navigate = useNavigate();

  const closeSignupFormAndRedirect = () => {
    // Redirect to the previous page
    navigate(-1);
  };

  return (
    <div>
      <h1>Welcome to ParentComponent!</h1>
      <SignupForm closeSignupFormAndRedirect={closeSignupFormAndRedirect} />
    </div>
  );
}

export default ParentComponent;
