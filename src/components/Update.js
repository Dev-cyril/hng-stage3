import React from 'react';
import './update.css'

const Update = () => {
  

  return (
    <section className="details">
        <div>
            <img></img>
            <img></img>
        </div>
        <div className="form-group">
            <div className="form-field1">
                <label htmlFor="email">First Name</label> <br />
                <input type='text'/>
            </div>
            <div className="form-field2">
                <label htmlFor="email">Gender</label> <br />
                <input type='text'/>
            </div>
          </div>
        <div className="form-group">
            <div className="form-field1">
                <label htmlFor="email">Last Name</label> <br />
                <input type='text'/>
            </div>
            <div className="form-field2">
                <label htmlFor="email">Country</label> <br />
                <input type='text'/>
            </div>
        </div>
        <div className="form-field">
            <label htmlFor="number">BVN</label> <br />
            <input type='text'/>
        </div>
        <div className="form-field">
            <label htmlFor="email">Phone Number</label> <br />
            <input type='text'/>
        </div>
        <div className="form-field">
            <label htmlFor="email">Residential Address</label> <br />
            <input type='text'/>
        </div>
        <button className='del'>Save changes</button>
        <button className='cancel'>Cancel</button>
    </section>
  );
};

export default Update;
