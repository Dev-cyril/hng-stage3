import React, { createContext, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import LandingPage from './pages/LandingPage';
import Gallery from './pages/Gallery';
import PrivateRoutes from './pages/PrivateRoute';

export const Context = createContext()

export default function App() {
  const [auth, setAuth] = useState({token: false})
  const [isLoading, setIsLoading] = useState(false)
  console.log(auth.token)
  return (
    <Context.Provider value={{auth, isLoading, setAuth, setIsLoading}}>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/signin' element={<SignIn/>} />
          <Route element={<PrivateRoutes />}>
            <Route path='/gallery' element={<Gallery/>} />
          </Route>
        </Routes>
      </Router>
    </Context.Provider>
    
  )
}
