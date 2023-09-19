import React, { useState } from 'react'
import '../styles/signIn.css'
import { Link } from 'react-router-dom'

export default function SignIn() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submit = () =>{
    
  }

  return (
    <section>
        <div className='container'>
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
                        onChange={(e) => setPassword(e.target.value)}/>
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
        <n3>Do not have an account? <Link to='/signup'>Sign Up</Link></n3>
    </div>
    </section>
  )
}
