import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Gallery from './pages/Gallery';
import PrivateRoutes from './pages/PrivateRoute';

export const Context = createContext();

export default function App() {
  const [auth, setAuth] = useState({ token: false });
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Context.Provider value={{ auth, isLoading, setAuth, setIsLoading }}>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          {
            auth.token ?
            <Route path='/gallery' element={<Gallery />} /> :
            <Route path="/" element={<SignIn />} />
          }
        </Routes>
      </Router>
    </Context.Provider>
  );
}
