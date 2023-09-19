import React from 'react';
import './DeleteAccount.css'

const DeleteAccount = () => {
  

  return (
    <section className="details">
        <div>
            <p>Do you want to delete your account?</p>
            <h5>Are you sure you want to delete your Saver bank account?you can not undo this action</h5>
        </div>
        <div className='warning'>
            <p>Warning</p>
            <h5>By Deleting your account , you will loose all saved data and your account will be permanently deleted </h5>
        </div>
        <button className='del'>Delete Account</button>
        <button className='cancel'>Cancel</button>
    </section>
  );
};

export default DeleteAccount;
