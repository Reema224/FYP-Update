import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../actions/userActions';
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';
import GoogleLogin from 'react-google-login';
import { gapi } from "gapi-script";
import axios from 'axios';
import GoogleButton from 'react-google-button'

function Signup() {
 
  useEffect(() => {
    function start() {
    gapi.client.init({
    clientId:"733192424933-fghi5qrv0cbn8gigjmc1cv2ngcp4ovra.apps.googleusercontent.com",
    scope: 'email',
      });
       }
      gapi.load('client:auth2', start);
       }, []);
    
       const onSuccess = response => {
        console.log('SUCCESS', response);
        const result = response?.profileObj;
        

          dispatch(register(result.givenName, result.email, result.googleId));
        }

      
      

        
        
        const onFailure = response => {
          console.log('FAILED', response);
          };
         const onLogoutSuccess = () => {
          console.log('SUCESS LOG OUT');
           };

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [signupname, setNamesignup] = useState('');
  const [signupemail, setEmailsignup] = useState('');
  const [signuppass, setPasssignup] = useState('');
  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;
  const [signupconfrim, setConfirmpasssignup] = useState('');
  const signupsubmitHandler = (e) => {
    e.preventDefault();
    if (signuppass !== signupconfrim) {
      alert('Password and confirm password are not match');
    } else dispatch(register(signupname, signupemail, signuppass));
  };

  return (
    <div className="sign-up">
      <form onSubmit={signupsubmitHandler}>
        <h1>Create Account</h1>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
 
         <div className="social-container">
                <Link to="#" className="social">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link to="#" className="social">
                  <i className="fab fa-google-plus-g"></i>
                </Link>
                <Link to="#" className="social">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </div>
        <p>  use your email for registiration</p>
        <input
          type="nmae"
          name="signupname"
          onChange={(e) => setNamesignup(e.target.value)}
          placeholder="Name"
          required
        />
        <br />
        <input
          type="email"
          name="signupemail"
          onChange={(e) => setEmailsignup(e.target.value)}
          placeholder="Email"
          required
        />
        <br />
        <input
          type="password"
          onChange={(e) => setPasssignup(e.target.value)}
          name="signuppass"
          placeholder="Password"
          required
        />
        <br />
        <input
          type="password"
          onChange={(e) => setConfirmpasssignup(e.target.value)}
          name="confrimpass"
          placeholder=" Confirm Password"
          required
        />
        <br />
        <div className="inline">

        <button className='space'>Sign-Up</button>
      

        <GoogleLogin 
   clientId={"733192424933-fghi5qrv0cbn8gigjmc1cv2ngcp4ovra.apps.googleusercontent.com"}
   render={renderProps => (
    <GoogleButton onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign in with Google</GoogleButton>
  )}
   onSuccess={onSuccess}
  onFailure={onFailure}
    />
           </div>
      </form>
    </div>
  );
}

export default Signup;
