import React, { useState } from 'react';
import './dashboard.css';

const Dashboard = ({ components }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const ActiveComponent = components[activeIndex];

  const changeComponent = (index) => {
    setActiveIndex(index);
  };

  return (
    <React.Fragment>
      <div className='sect'>
        <aside>
          <div onClick={() => changeComponent(0)} className={`div ${activeIndex === 0 ? 'active' : ''}`}>
            <img src='' alt='dashboard' />
            <div>
              <h3>Dashboard</h3>
            </div>
          </div>
          <div onClick={() => changeComponent(1)} className={`div ${activeIndex === 1 ? 'active' : ''}`}>
            <img src='' alt='Transactions' />
            <div>
              <h3>Transactions</h3>
            </div>
          </div>
          <div onClick={() => changeComponent(2)} className={`div ${activeIndex === 2 ? 'active' : ''}`}>
            <img src='' alt='Receive' />
            <div>
              <h3>Send and Receive</h3>
            </div>
          </div>
          <div onClick={() => changeComponent(3)} className={`div ${activeIndex >= 3 ? 'active' : ''}`}>
            <img src='' alt='Settings' />
            <div>
              <h3>Settings</h3>
            </div>
          </div>
        </aside>
        <div className="container">
          <div className='header'>
            <p>Account Update</p>
            {/* replace with user name after api call */}
            <div className='profile'>
              <div className='img'>
                <img src='' alt='Profile' />
              </div>
              <h4>Smith Daniel</h4> 
            </div>
          </div>
          {ActiveComponent && <ActiveComponent />}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
