import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Context } from '../App';

export default function PrivateRoutes ({component: comp}) {
    const {auth} = useContext(Context)
  return (
    auth.token ? Outlet :<Navigate to='/signin'/>
  );
};
