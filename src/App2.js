import React from "react";
import DeleteAccount from "./components/DeleteAccount";
import Dashboard from './components/Dashboard';
import Update from "./components/Update";


function App() {
  
  const components = [Update, DeleteAccount];

  return (
    
    <Dashboard components={components} />
  )
}

export default App;
