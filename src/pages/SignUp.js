import React, { useState } from 'react'
import '../styles/signUp.css'
import { Link } from 'react-router-dom'
import { auth } from '../config/firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth';

export default function SignUp() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const validateEmail = (email) => {
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password, confirmPassword) => {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,15}$/;
    if (password === confirmPassword) return passwordPattern.test(password);
    return false;
  };

  // Function to validate all fields and return true if all are valid
  const isFormValid = () => {
    return (
      validateEmail(email) &&
      validatePassword(password, confirmPassword)
    );
  };

  const signUp = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      userCredential.user.auth.displayName = `${firstName.trim()} ${lastName.trim()}`
      userCredential.user.metadata.phoneNumber = phoneNumber.trim()
      console.log(userCredential.user);
      navigate('/signin');
    } catch (err) {
      alert(err);
    }
  };

  const submit = async () => {
    setInputState([
      validateEmail(email),
      validatePassword(password, confirmPass),
      true,
    ]);

    if (isFormValid()) {
      try {
        await signUp(email.trim(), password.trim());
      } catch (err) {
        alert(err);
      }
    } else {
      alert('Check your details again');
    }
  };

  return (
    <section>
      <div className='container'>
        <div class="form-group col-1-2">
            <label for="your-email">Email Address <span>*</span></label>
            <div class="form-field">
                <span class="form-field-container">
                    <input type="email" name="your-email" id="your-email"
                        placeholder="e.g. youremail@gmail.com"
                        accesskey="e" onChange={(e) => setEmail(e.target.value)} required/>
                </span>
            </div>
        </div>
        <div class="form-group col-1-2">
            <label for="your-Password">Password <span>*</span></label>
            <div class="form-field">
                <span class="form-field-container">
                    <input type="password" name="your-Password" accesskey="p" 
                        onChange={(e) => setPassword(e.target.value)} required/>
                </span>
            </div>
        </div>
        <div class="form-group col-1-2">
            <label for="your-Password">Confirm Password <span>*</span></label>
            <div class="form-field">
                <span class="form-field-container">
                    <input type="password" name="your-Password" accesskey="p" 
                        onChange={(e) => setConfirmPassword(e.target.value)} required/>
                </span>
            </div>
        </div>
        <div class="form-group col-1-2">
            <div class="form-field">
                <span class="form-field-container">
                    <button className='next-button' type='submit' onClick={submit}>Sign in</button>
                </span>
            </div>
        </div>
        <n3>Already have an account? <Link to='/signin'>Sign In</Link></n3>
      </div>
    </section>
  )
}
