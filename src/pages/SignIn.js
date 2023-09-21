import React, { useContext, useEffect, useState } from 'react'
import '../styles/signIn.css'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Context } from '../App';
import Loading from './LoadingState';

export default function SignIn() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userInfo, setUserInfo] = useState('')
  const navigate = useNavigate()
  const {setAuth, setIsLoading, isLoading} = useContext(Context)

   const signIn = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            setUserInfo(userCredential.user.uid);
            setAuth({token: true})
            setIsLoading(true)
            navigate(`/gallery`)
        } catch (err) {
            alert(err);
        }
    };
    const submit = async () => {
        try{
            await signIn(email, password);
        }
        catch(err){
            alert(err)
        }
    }
    console.log(userInfo)


  return (
    <section className='signin'>
        <div className='container'>
            <h2>So glad to have you back, dear User!</h2>
            <div class="form-group col-1-2">
                <label for="your-email">Email Address <span>*</span></label>
                <div class="form-field">
                    <span class="form-field-container">
                        <input type="email" name="your-email" id="your-email"
                            placeholder="e.g. youremail@gmail.com"
                            accesskey="e" onChange={(e) => setEmail(e.target.value)}/>
                    </span>
                </div>
            </div>
            <div class="form-group col-1-2">
                <label for="your-Password">Password <span>*</span></label>
                <div class="form-field">
                    <span class="form-field-container">
                        <input type="password" name="your-Password" accesskey="p" 
                            onChange={(e) => setPassword(e.target.value)}placeholder='Enter password'/>
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
        </div>
    </section>
  )
}
