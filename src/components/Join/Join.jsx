import React from 'react'
import './Join.css'

const Join = () => {
  return (
    <div className='Join' id="join-us">
        <div className="left-j">
            <hr/>
            <div>
            <span className='stoke-text'>READY TO</span>
            <span> LEVEL UP</span>
            </div>
            <div>
            <span>YOUR BODY</span>
            <span className='stoke-text'> WITH US?</span>
            </div>
        </div>
        <div className="left-j">
            <form action="" className='email-container'>
                <input type="email" name="user_email" placeholder='Enter your email address' />
                <button className='btn btn-j '>Join Now</button>
            </form>
        </div>
    </div>
  );
};

export default Join;
