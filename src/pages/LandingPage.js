import React from 'react'
import '../styles/landingPage.css'
import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <section className='landPg'>
        <p>Welcome to Image Gallery</p>
        <div className='main'>
            <Link to='/signin'><button>Sign In</button></Link>
        </div>
    </section>
  );
}
